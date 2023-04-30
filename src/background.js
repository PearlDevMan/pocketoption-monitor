'use strict';

// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message = `Hi ${
      sender.tab ? 'Con' : 'Pop'
    }, my name is Bac. I am from Background. It's great to hear from you.`;

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message
    });
  }
  if (request.type === 'credit') {
    console.log(request.payload.connectionURL, request.payload.sessionID)
    sendResponse({message: "Successful received"});
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(currentTab, request, function(response) {
        console.log(response);
      });
    });
  }
});
let currentTab = ''
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab){
  if(changeInfo.status === 'complete') {
    currentTab = tabId
    chrome.tabs.sendMessage(tabId, { message : 'page_loaded'});
  }  
});

