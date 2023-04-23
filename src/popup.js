'use strict';

import './popup.css';

// (function() {
//   // We will make use of Storage API to get and store `count` value
//   // More information on Storage API can we found at
//   // https://developer.chrome.com/extensions/storage

//   // To get storage access, we have to mention it in `permissions` property of manifest.json file
//   // More information on Permissions can we found at
//   // https://developer.chrome.com/extensions/declare_permissions
//   const counterStorage = {
//     get: cb => {
//       chrome.storage.sync.get(['count'], result => {
//         cb(result.count);
//       });
//     },
//     set: (value, cb) => {
//       chrome.storage.sync.set(
//         {
//           count: value,
//         },
//         () => {
//           cb();
//         }
//       );
//     },
//   };

//   function setupCounter(initialValue = false) {
//     if(initialValue === true) {
//       document.getElementById('controlBtn').innerHTML = "Stop";
//     }
//     else {
//       document.getElementById('controlBtn').innerHTML = "Run";
//     }
//     document.getElementById('controlBtn').addEventListener('click', () => {
//       changeMode({
//         type: 'MODECHANGE',
//       });
//     })
//   }

//   function changeMode({type}) {
//     counterStorage.get(count => {
//       let newCount;

//       if(type === "MODECHANGE"){
//         newCount != count;
//       }
//       else{
//         newCount = count;
//       }
      
//       counterStorage.set(newCount, () => {
//         if(newCount === true) {
//           document.getElementById('controlBtn').innerHTML = "Stop";
//         }
//         else {
//           document.getElementById('controlBtn').innerHTML = "Run";
//         }
//         chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
//           const tab = tabs[0];
//           chrome.tabs.sendMessage(
//             tab.id,
//             {
//               type: 'MODECHANGE',
//               payload: {
//                 count: newCount
//               },
//             },
//             response => {
//               console.log('The running mode is changed');
//             }
//           );
//         });
//       });
//     });
//   }

//   function restoreCounter() {
//     // Restore count value
//     counterStorage.get(count => {
//       if (typeof count === 'undefined') {
//         // Set counter value as 0
//         counterStorage.set(false, () => {
//           setupCounter(false);
//         });
//       } else {
//         setupCounter(count);
//       }
//     });
//   }

//   document.addEventListener('DOMContentLoaded', restoreCounter);

//   // Communicate with background file by sending a message
//   chrome.runtime.sendMessage(
//     {
//       type: 'GREETINGS',
//       payload: {
//         message: 'Hello, my name is Pop. I am from Popup.',
//       },
//     },
//     response => {
//       console.log(response.message);
//     }
//   );
// })();
