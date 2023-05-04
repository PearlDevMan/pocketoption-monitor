'use strict';

import './popup.css';


(function() {


    
  // We will make use of Storage API to get and store `count` value
  // More information on Storage API can we found at
  // https://developer.chrome.com/extensions/storage

  // To get storage access, we have to mention it in `permissions` property of manifest.json file
  // More information on Permissions can we found at
  // https://developer.chrome.com/extensions/declare_permissions
  

  // With background scripts you can communicate with popup
  // and contentScript files.
  // For more information on background script,
  // See https://developer.chrome.com/extensions/background_pages



  function sendCredential() {
		document.getElementById('controlBtn').addEventListener('click', () => {
			const connectionURL = document.getElementById('connectionURL').value	
			const sessionID = document.getElementById('sessionID').value
			console.log(connectionURL, sessionID)
			chrome.runtime.sendMessage({
				type: 'credit',
				payload: {
					connectionURL: connectionURL,
					sessionID: sessionID
				}
			}, response => {
				console.log(response.message)
			})



		})
	}
  document.addEventListener('DOMContentLoaded', sendCredential);

  // Communicate with background file by sending a message
  chrome.runtime.sendMessage(
    {
      type: 'GREETINGS',
      payload: {
        message: 'Hello, my name is Pop. I am from Popup.',
      },
    },
    response => {
      console.log(response.message);
    }
  );
})();
