const { io } = require('socket.io-client')
const socketCon = io('https://forexa-be-lh7l6.ondigitalocean.app/');
socketCon.on('connect', () => {
  console.log('connected to server');
  socketCon.emit('send-trade',temp )
});
socketCon.on('disconnect', (reason) => {
    console.log(`Disconnected from server: ${reason}`);
});
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
