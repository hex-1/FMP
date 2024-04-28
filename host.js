
var osc = new OSC();
osc.open({host : '10.18.22.247'}); // connect by default to ws://localhost:8080



function sendOSChost(value) {
	var message = new OSC.Message('/Host/',value);
    osc.send(message);
	console.log("sent");
}


osc.on('open', () => {
  sendOSChost(7);
})


osc.on('/Host/', message => {
  console.log(message.args); // prints the message arguments
  if(message.args == 3) //player 1 turn
  {
	  document.getElementById("currentPlayer").innerHTML = "Current Player: 1"
  }
    if(message.args == 4) //player 2 turn
  {
	  document.getElementById("currentPlayer").innerHTML = "Current Player: 2";
  }
    if(message.args == 5) //player 3 turn
  {
	  document.getElementById("currentPlayer").innerHTML = "Current Player: 3";
  }
    if(message.args == 6) //player 4 turn
  {
	  document.getElementById("currentPlayer").innerHTML = "Current Player: 4";
  }
  //correct awnser data
    if(message.args.toString().slice(0,1) == "P") //person
  {
	  document.getElementById("AwnsersTableA").src = "Assets/Players/"+message.args.toString().slice(1,2)+".png";
  }
    if(message.args.toString().slice(0,1) == "W") //weapon
  {
	  document.getElementById("AwnsersTableB").src = "Assets/Weapons/"+message.args.toString().slice(1,2)+".png";
  }
    if(message.args.toString().slice(0,1) == "R") //room
  {
	  document.getElementById("AwnsersTableC").src = "Assets/Rooms/"+message.args.toString().slice(1,2)+".png";
  }
  //accusation data
     if(message.args.toString().slice(0,2) == "SP") //person
  {
	  document.getElementById("SuggestionTableA").src = "Assets/Players/"+message.args.toString().slice(2,3)+".png";
  }
    if(message.args.toString().slice(0,2) == "SW") //weapon
  {
	  document.getElementById("SuggestionTableB").src = "Assets/Weapons/"+message.args.toString().slice(2,3)+".png";
  }
    if(message.args.toString().slice(0,2) == "SR") //room
  {
	  document.getElementById("SuggestionTableC").src = "Assets/Rooms/"+message.args.toString().slice(2,3)+".png";
  }
  

});
  

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
