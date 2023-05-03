
'use strict';


// Content script file will run in the context of web page.
// With content script you can manipulate the web pages using
// Document Object Model (DOM).
// You can also pass information to the parent extension.

// We execute this script by making an entry in manifest.json file
// under `content_scripts` property

// For more information on Content Scripts,
// See https://developer.chrome.com/extensions/content_scripts

// Log `title` of current active web page
const pageTitle = document.head.getElementsByTagName('title')[0].innerHTML;


const meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'Content-Security-Policy');
meta.setAttribute('content', "default-srchttp: https: wss:");
document.head.appendChild(meta);
console.log(meta)
// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages



console.log(
  `Page title is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
);

// Communicate with background file by sending a message
chrome.runtime.sendMessage(
  {
    type: 'GREETINGS',
    payload: {
      message: 'Hello, my name is Con. I am from ContentScript.',
    },
  },
  response => {
    console.log(response.message);
  }
);

var creditData = {
  connectionURL: '',
  sessionID: ''
}



// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'credit') {
      creditData.connectionURL = request.payload.connectionURL
      creditData.sessionID = request.payload.sessionID
      connection(creditData.connectionURL, creditData.sessionID)
  }
  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({reply: 'OK'});
  return true;
});

var socket

function connection(connectionUrl, sessionId){
  
  socket = new WebSocket(connectionUrl);
  socket.binaryType = 'arraybuffer'
  // when the WebSocket connection is opened
  socket.addEventListener('open', event => {
    console.log('WebSocket connection opened');
  });

  // when the WebSocket receives a message
  socket.addEventListener('message', event => {
    if(event.data instanceof ArrayBuffer || event.data instanceof Blob) {
      
      // This is a binary message
      // console.log('Received binary data');
      const dataView = new DataView(event.data);
      let temp = []
      for(let l = 0; l < dataView.byteLength; l++){
        temp.push(dataView.getUint8(l));
      }
      const uint8Array = new Uint8Array(temp);
      const decoder = new TextDecoder('utf-8');
      const stringData = decoder.decode(uint8Array);
      try {
        let sendSocket = []
        const obj = JSON.parse(stringData);
        if ( obj.deals !== undefined ){
          const deals = obj.deals;
          let temp = {
            raw_event: {
              binary_optionChanged1: {
                curreny: 'USD',
                direction: '',
                result: 'closed',
                amount: ''
              }
            },
            instrument_id: '',
            status: 'close',
            id: ''
          }
          for(let deal=0; deal<deals.length; deal++){
            temp.id = deals[deal].id;
            temp.instrument_id = removeOtcFromString(deals[deal].asset);
            temp.raw_event.binary_optionChanged1.direction = getDirection(deals[deal].command);
            temp.raw_event.binary_optionChanged1.amount = deals[deal].amount;
            sendSocket.push(temp)
          }
        }
        else if (obj.asset !== undefined && obj.candles === undefined){
          let temp = {
            raw_event: {
              binary_optionChanged1: {
                curreny: 'USD',
                direction: '',
                result: 'opened',
                amount: ''
              }
            },
            instrument_id: '',
            status: 'open',
            id: ''
          }
          temp.id = obj.id
          temp.instrument_id = removeOtcFromString(obj.asset)
          temp.raw_event.binary_optionChanged1.direction = getDirection(obj.command)
          temp.raw_event.binary_optionChanged1.amount = obj.amount
          sendSocket.push(temp)
        }
        if(sendSocket.length){ 
          console.log(sendSocket) 


          // socketCon.emit('message', JSON.stringify(sendSocket))


        }
        // the string represents a valid object
      } catch (e) {
        console.log(e)
      }
      
    } else {
      // This may be a text message
      const message = event.data;
    
      if (message.includes('sid')){
        if (message.includes('pingTimeout')){
          socket.send('40')
        }
        else {
          socket.send(sessionId)
        }
      }
      // else console.log(message)
      
    }

  });

  // when the WebSocket connection is closed
  socket.addEventListener('close', event => {
    console.log('WebSocket connection closed, trying to reconnect...');
    setTimeout(function() {
      connection(creditData.connectionURL,creditData.sessionID);
      }, 300);
  });
}

function removeOtcFromString(str) {
  return str.replace(/_otc/g, '');
}

function getDirection(dir) {
  if(dir) return "put"
  return "call"
}