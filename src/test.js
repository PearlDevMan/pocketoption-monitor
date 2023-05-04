const { io } = require('socket.io-client')
<<<<<<< HEAD
// With background scripts you can communicate with popup
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages
const socketCon = io('http://164.92.198.80:3000');
socketCon.on('connect', () => {
  console.log('connected to server');
=======
const socketCon = io('https://forexa-be-lh7l6.ondigitalocean.app/');
socketCon.on('connect', () => {
  console.log('connected to server');
  socketCon.emit('send-trade',temp )
>>>>>>> 090b02883afed20137a7d5d3c0dbb1337dd12328
});
socketCon.on('disconnect', (reason) => {
    console.log(`Disconnected from server: ${reason}`);
});
<<<<<<< HEAD
=======
socketCon.on('error', ( error )=>{
  console.log(error)
})

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
>>>>>>> 090b02883afed20137a7d5d3c0dbb1337dd12328
