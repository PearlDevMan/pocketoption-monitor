
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

<<<<<<< HEAD

const meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'Content-Security-Policy');
meta.setAttribute('content', "default-srchttp: https: wss:");
document.head.appendChild(meta);
console.log(meta)
// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages



=======
const meta = document.createElement('meta');
meta.setAttribute('http-equiv', 'Content-Security-Policy');
meta.setAttribute('content', 'upgrade-insecure-requests');
document.head.appendChild(meta);
console.log(meta)
const { io } = require('socket.io-client')
const socketCon = io('https://forexa-be-lh7l6.ondigitalocean.app/');
socketCon.on('connect', () => {
  console.log('connected to server');
});
socketCon.on('disconnect', (reason) => {
    console.log(`Disconnected from server: ${reason}`);
});
socketCon.on('error', ( error )=>{
  console.log(error)
})

const symbols = [
  { symbol: 'EURUSD', id: 1 },
  { symbol: 'EURGBP', id: 2 },
  { symbol: 'GBPJPY', id: 3 },
  { symbol: 'EURJPY', id: 4 },
  { symbol: 'GBPUSD', id: 5 },
  { symbol: 'USDJPY', id: 6 },
  { symbol: 'AUDCAD', id: 7 },
  { symbol: 'NZDUSD', id: 8 },
  { symbol: 'USDRUB', id: 10 },
  { symbol: 'AMAZON', id: 31 },
  { symbol: 'APPLE', id: 32 },
  { symbol: 'BAIDU', id: 33 },
  { symbol: 'CISCO', id: 34 },
  { symbol: 'FACEBOOK', id: 35 },
  { symbol: 'GOOGLE', id: 36 },
  { symbol: 'INTEL', id: 37 },
  { symbol: 'MSFT', id: 38 },
  { symbol: 'YAHOO', id: 40 },
  { symbol: 'AIG', id: 41 },
  { symbol: 'CITI', id: 45 },
  { symbol: 'COKE', id: 46 },
  { symbol: 'GE', id: 48 },
  { symbol: 'GM', id: 49 },
  { symbol: 'GS', id: 50 },
  { symbol: 'JPM', id: 51 },
  { symbol: 'MCDON', id: 52 },
  { symbol: 'MORSTAN', id: 53 },
  { symbol: 'NIKE', id: 54 },
  { symbol: 'USDCHF', id: 72 },
  { symbol: 'XAUUSD', id: 74 },
  { symbol: 'EURUSD-OTC', id: 76 },
  { symbol: 'EURGBP-OTC', id: 77 },
  { symbol: 'USDCHF-OTC', id: 78 },
  { symbol: 'NZDUSD-OTC', id: 80 },
  { symbol: 'GBPUSD-OTC', id: 81 },
  { symbol: 'AUDCAD-OTC', id: 86 },
  { symbol: 'ALIBABA', id: 87 },
  { symbol: 'YANDEX', id: 95 },
  { symbol: 'AUDUSD', id: 99 },
  { symbol: 'USDCAD', id: 100 },
  { symbol: 'AUDJPY', id: 101 },
  { symbol: 'GBPCAD', id: 102 },
  { symbol: 'GBPCHF', id: 103 },
  { symbol: 'GBPAUD', id: 104 },
  { symbol: 'EURCAD', id: 105 },
  { symbol: 'CHFJPY', id: 106 },
  { symbol: 'CADCHF', id: 107 },
  { symbol: 'EURAUD', id: 108 },
  { symbol: 'TWITTER', id: 113 },
  { symbol: 'FERRARI', id: 133 },
  { symbol: 'TESLA', id: 167 },
  { symbol: 'USDNOK', id: 168 },
  { symbol: 'EURNZD', id: 212 },
  { symbol: 'USDSEK', id: 219 },
  { symbol: 'USDTRY', id: 220 },
  { symbol: 'MMM:US', id: 252 },
  { symbol: 'ABT:US', id: 253 },
  { symbol: 'ABBV:US', id: 254 },
  { symbol: 'ACN:US', id: 255 },
  { symbol: 'ATVI:US', id: 256 },
  { symbol: 'ADBE:US', id: 258 },
  { symbol: 'AAP:US', id: 259 },
  { symbol: 'AA:US', id: 269 },
  { symbol: 'MO:US', id: 278 },
  { symbol: 'AMGN:US', id: 290 },
  { symbol: 'T:US', id: 303 },
  { symbol: 'BAC:US', id: 313 },
  { symbol: 'BBY:US', id: 320 },
  { symbol: 'BA:US', id: 324 },
  { symbol: 'BMY:US', id: 328 },
  { symbol: 'CAT:US', id: 338 },
  { symbol: 'CVX:US', id: 349 },
  { symbol: 'CL:US', id: 365 },
  { symbol: 'CMCSA:US', id: 366 },
  { symbol: 'COP:US', id: 370 },
  { symbol: 'COST:US', id: 374 },
  { symbol: 'CVS:US', id: 379 },
  { symbol: 'DHR:US', id: 381 },
  { symbol: 'DAL:US', id: 386 },
  { symbol: 'EBAY:US', id: 407 },
  { symbol: 'XOM:US', id: 429 },
  { symbol: 'FDX:US', id: 434 },
  { symbol: 'GILD:US', id: 460 },
  { symbol: 'HAS:US', id: 471 },
  { symbol: 'HON:US', id: 480 },
  { symbol: 'IBM:US', id: 491 },
  { symbol: 'KHC:US', id: 513 },
  { symbol: 'LMT:US', id: 528 },
  { symbol: 'MA:US', id: 542 },
  { symbol: 'MDT:US', id: 548 },
  { symbol: 'MU:US', id: 553 },
  { symbol: 'NFLX:US', id: 569 },
  { symbol: 'NEE:US', id: 575 },
  { symbol: 'NVDA:US', id: 586 },
  { symbol: 'PYPL:US', id: 597 },
  { symbol: 'PFE:US', id: 603 },
  { symbol: 'PM:US', id: 605 },
  { symbol: 'PG:US', id: 617 },
  { symbol: 'QCOM:US', id: 626 },
  { symbol: 'RTN:US', id: 630 },
  { symbol: 'CRM:US', id: 645 },
  { symbol: 'SLB:US', id: 647 },
  { symbol: 'SBUX:US', id: 666 },
  { symbol: 'SYK:US', id: 670 },
  { symbol: 'TWX:US', id: 692 },
  { symbol: 'VZ:US', id: 723 },
  { symbol: 'V:US', id: 726 },
  { symbol: 'WMT:US', id: 729 },
  { symbol: 'WBA:US', id: 730 },
  { symbol: 'WFC:US', id: 733 },
  { symbol: 'SNAP', id: 756 },
  { symbol: 'DUBAI', id: 757 },
  { symbol: 'TA25', id: 758 },
  { symbol: 'AMD', id: 760 },
  { symbol: 'ALGN', id: 761 },
  { symbol: 'ANSS', id: 762 },
  { symbol: 'DRE', id: 772 },
  { symbol: 'IDXX', id: 775 },
  { symbol: 'RMD', id: 781 },
  { symbol: 'SU', id: 783 },
  { symbol: 'TFX', id: 784 },
  { symbol: 'TMUS', id: 785 },
  { symbol: 'QQQ', id: 796 },
  { symbol: 'SPY', id: 808 },
  { symbol: 'BTCUSD', id: 816 },
  { symbol: 'XRPUSD', id: 817 },
  { symbol: 'ETHUSD', id: 818 },
  { symbol: 'LTCUSD', id: 819 },
  { symbol: 'DSHUSD', id: 821 },
  { symbol: 'BCHUSD', id: 824 },
  { symbol: 'OMGUSD', id: 825 },
  { symbol: 'ETCUSD', id: 829 },
  { symbol: 'BTGUSD', id: 837 },
  { symbol: 'QTMUSD', id: 845 },
  { symbol: 'TRXUSD', id: 858 },
  { symbol: 'EOSUSD', id: 864 },
  { symbol: 'USDINR', id: 865 },
  { symbol: 'USDPLN', id: 866 },
  { symbol: 'USDBRL', id: 867 },
  { symbol: 'USDZAR', id: 868 },
  { symbol: 'DBX', id: 889 },
  { symbol: 'SPOT', id: 891 },
  { symbol: 'USDSGD', id: 892 },
  { symbol: 'USDHKD', id: 893 }
];
>>>>>>> 090b02883afed20137a7d5d3c0dbb1337dd12328
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
  console.log('received')
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
              binary_options_option_changed1: {
                currency: 'USD',
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
            temp.raw_event.binary_options_option_changed1.direction = getDirection(deals[deal].command);
            temp.raw_event.binary_options_option_changed1.amount = deals[deal].amount;
            console.log(temp)

            socketCon.emit('close-trade', temp)
          }
          
          
        }
        else if (obj.asset !== undefined && obj.candles === undefined){
          let temp = {
            raw_event: {
              binary_options_option_changed1: {
                currency: 'USD',
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
<<<<<<< HEAD
          temp.raw_event.binary_optionChanged1.direction = getDirection(obj.command)
          temp.raw_event.binary_optionChanged1.amount = obj.amount
          sendSocket.push(temp)
        }
        if(sendSocket.length){ 
          console.log(sendSocket) 


          // socketCon.emit('message', JSON.stringify(sendSocket))


=======
          temp.raw_event.binary_options_option_changed1.direction = getDirection(obj.command)
          temp.raw_event.binary_options_option_changed1.amount = obj.amount
          console.log(temp)
          
          socketCon.emit('send-trade', temp)
>>>>>>> 090b02883afed20137a7d5d3c0dbb1337dd12328
        }
        // if(sendSocket.length){ 
        //   console.log(sendSocket) 
        // }
        
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
      }, 10);
  });
}

function removeOtcFromString(str) {  
  for (let i = 0; i < symbols.length; i++) {
    if (symbols[i].symbol === str.replace(/_otc/g, '')) {
      return symbols[i].id;
      }
    }
    return "-1";
}

function getDirection(dir) {
  if(dir) return "put"
  return "call"
}