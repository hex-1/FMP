const OSC = require('osc-js')

const config = { wsServer: {host: '0.0.0.0'}, udpServer: {port: 1234}};
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) });

osc.open(); // start a WebSocket server on port 8080
console.log("ready");
osc.on('/Host', message => {
  console.log(message.args); // prints the message arguments
});

