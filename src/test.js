const { io } = require('socket.io-client')
// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages
const socketCon = io('http://164.92.198.80:3000');
socketCon.on('connect', () => {
  console.log('connected to server');
});
socketCon.on('disconnect', (reason) => {
    console.log(`Disconnected from server: ${reason}`);
});
