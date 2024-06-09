	var osc = new OSC();
	osc.open({host : '192.168.1.200'}); // connect by default to ws://localhost:8080

	function sendOSChost(value) {
		var message = new OSC.Message('/tech/',value);
		osc.send(message);
	}

	osc.on('/Tech/state', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("state").innerHTML = message.args;
	});

	osc.on('/Tech/order', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("Order").innerHTML = message.args;
	});

	osc.on('/Tech', message => {
		console.log(message.args); // prints the message arguments
		if(message.args == 7)
		{
			document.getElementById("PlayLoop").bgColor = "#00FF00";
		}
		if(message.args == 8)
		{
			document.getElementById("PlayLoop").bgColor = "#FF0000";
		}
		if(message.args == 9)
		{
			document.getElementById("Cards").bgColor = "#FF0000";
		}
		if(message.args == 10)
		{
			document.getElementById("Cards").bgColor = "#FFFF00";
		}
		if(message.args == 11)
		{
			document.getElementById("Cards").bgColor = "#00FF00";
		}

	});
	
	osc.on('/Tech/alert', message => {
		console.log(message.args); // prints the message arguments
		alert(message.args);
	});



	osc.on('/Tech/player', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("player").innerHTML = message.args;
	});

	osc.on('/Tech/ManQue', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("manQue").innerHTML = message.args;
	});


	osc.on('open', () => {
	  sendOSChost(1);
	  sendOSChost(2);	var osc = new OSC();
	osc.open({host : '192.168.1.200'}); // connect by default to ws://localhost:8080

	function sendOSChost(value) {
		var message = new OSC.Message('/tech/',value);
		osc.send(message);
	}

	osc.on('/Tech/state', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("state").innerHTML = message.args;
	});

	osc.on('/Tech/order', message => {
		console.log(message.args); // prints the message arguments
		//document.getElementById("state").innerHTML = message.args;
	});

	osc.on('/Tech', message => {
		console.log(message.args); // prints the message arguments
		if(message.args == 7)
		{
			document.getElementById("PlayLoop").bgColor = "#00FF00";
		}
		if(message.args == 8)
		{
			document.getElementById("PlayLoop").bgColor = "#FF0000";
		}
	});
	
	osc.on('/Tech/alert', message => {
		console.log(message.args); // prints the message arguments
		alert(message.args);
	});



	osc.on('/Tech/player', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("player").innerHTML = message.args;
	});

	osc.on('/Tech/ManQue', message => {
		console.log(message.args); // prints the message arguments
		document.getElementById("manQue").innerHTML = message.args;
	});


	osc.on('open', () => {
	  sendOSChost(1);
	  sendOSChost(2);
	})

	function Next()
	{
		var message = new OSC.Message('/tech/Next/',1);
		osc.send(message);
	}

	function Prev()
	{
		var message = new OSC.Message('/tech/Prev/',1);
		osc.send(message);
	}

	function submitDiceRoll()
	{
		console.log("value "+document.getElementById("roll").value);
		var message = new OSC.Message('/tech/Dice/',document.getElementById("roll").value);
		osc.send(message);
	}




	})

	function Next()
	{
		var message = new OSC.Message('/tech/Next/',1);
		osc.send(message);
	}

	function Prev()
	{
		var message = new OSC.Message('/tech/Prev/',1);
		osc.send(message);
	}

	function submitDiceRoll()
	{
		console.log("value "+document.getElementById("roll").value);
		var message = new OSC.Message('/tech/Dice/',document.getElementById("roll").value);
		osc.send(message);
	}



