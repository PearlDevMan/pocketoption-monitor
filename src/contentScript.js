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

console.log(
  `Page title is: '${pageTitle}' - evaluated by Chrome extension's 'contentScript.js' file`
);
//console.log(divdata);

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



function readContent(){
  console.log('++++')
  const castDiv = document.querySelector('div.deals-list__item');
  console.log(castDiv);
}

// chrome.tabs.executeScript({
  const castDiv = document.querySelector('div.scrollbar-container.deals-list.ps');
  console.log(castDiv);
// })

// Listen for message
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'COUNT') {
    console.log(`Current count is ${request.payload.count}`);
  }

  // Send an empty response
  // See https://github.com/mozilla/webextension-polyfill/issues/130#issuecomment-531531890
  sendResponse({});
  return true;
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.message === 'page_loaded') {
      // do something after the page has loaded
      setTimeout(function() {
        setInterval(function() {
          
          const castDiv = document.querySelector('div.scrollbar-container.deals-list.ps');
          const tradeDiv = castDiv.querySelectorAll('div.deals-list__item');
          if(tradeDiv.length){
            let sendData = [];
            for(let item=0; item<tradeDiv.length; item++){
              if(tradeDiv[item].querySelectorAll('div.item-row')[0].querySelectorAll('div')[1].innerHTML === '00:01'){
                function getDirection() {
                  if(tradeDiv[item].querySelectorAll('div.item-row')[1].querySelectorAll('i.fa.fa-arrow-up').length) return true;
                  if(tradeDiv[item].querySelectorAll('div.item-row')[1].querySelectorAll('i.fa.fa-arrow-down').length) return false;
                }
                const tradeData = {
                  contactType: tradeDiv[item].querySelectorAll('div.item-row')[0].querySelector('div').querySelectorAll('a')[1].innerHTML,
                  // priceupPercent: tradeDiv[item].querySelectorAll('div.item-row')[0].querySelector('div').querySelector('span.price-up').innerHTML,
                  expiredTime: tradeDiv[item].querySelectorAll('div.item-row')[0].querySelectorAll('div')[1].innerHTML,
                  // tradeAmount: tradeDiv[item].querySelectorAll('div.item-row')[1].querySelector('div').textContent,
                  // afterIncome: tradeDiv[item].querySelectorAll('div.item-row')[1].querySelectorAll('div')[1].innerHTML,
                  // net: tradeDiv[item].querySelectorAll('div.item-row')[1].querySelectorAll('div')[2].innerHTML,
                  direction: getDirection(),
                  error: '',
                }
                sendData.push(tradeData);
                console.log(sendData);
              }
            }
            
          }
        }, 0.5 * 1000);
      }, 1000); // wait 1 second after DOM is ready before starting the interval
  }
});

