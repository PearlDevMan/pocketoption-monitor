'use strict';

<<<<<<< HEAD
=======



>>>>>>> 090b02883afed20137a7d5d3c0dbb1337dd12328

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

