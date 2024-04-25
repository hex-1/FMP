var osc = new OSC();
osc.open({host : '10.18.22.247'}); // connect by default to ws://localhost:8080

function sendOSChost(value) {
	var message = new OSC.Message('/tech/',value);
    osc.send(message);
}

osc.on('/Tech/state', message => {
	console.log(message.args); // prints the message arguments
	document.getElementById("state").innerHTML = message.args;
});


osc.on('/Tech/player', message => {
	console.log(message.args); // prints the message arguments
	document.getElementById("player").innerHTML = message.args;
});


osc.on('open', () => {
  sendOSChost(1);
  sendOSChost(2);
})



