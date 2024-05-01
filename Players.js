//wether an object has been selected
var SelectedPerson = null;
var SelectedWeapon = null;
var SelectedRoom = null;
//player Number
var playerNum = document.getElementById("playerNo").innerText;
console.log(playerNum);

onload();

//player buttons
function DisableP1() {
	if(SelectedPerson == null)
	{
		disablePeople();//grey out people
		document.getElementById("pi1").src="Assets/Players/1.png";//un-grey out selected person
		sendOSCPlayer(playerNum,5);
		SelectedPerson = 1;
	}
}
function DisableP2() {
	if(SelectedPerson == null)
	{
		disablePeople();//disable and grey out people
		document.getElementById("pi2").src="Assets/Players/2.png";//un-grey out selected person
		sendOSCPlayer(playerNum,6);
		SelectedPerson = 2;
	}
}
function DisableP3() {
	if(SelectedPerson == null)
	{
		disablePeople();//disable and grey out people
		document.getElementById("pi3").src="Assets/Players/3.png";//un-grey out selected person
		sendOSCPlayer(playerNum,7);
		SelectedPerson = 3;
	}
}
function DisableP4() {
	if(SelectedPerson == null)
	{
		disablePeople();//disable and grey out people
		document.getElementById("pi4").src="Assets/Players/4.png";//un-grey out selected person
		sendOSCPlayer(playerNum,8);
		SelectedPerson = 4;
	}
}
function disablePeople(){
		//grey out all person images
		document.getElementById("pi1").src="Assets/Players/1D.png";
		document.getElementById("pi2").src="Assets/Players/2D.png";
		document.getElementById("pi3").src="Assets/Players/3D.png";
		document.getElementById("pi4").src="Assets/Players/4D.png";
}

function enablePeople(){
		//grey out all person images
		document.getElementById("pi1").src="Assets/Players/1.png";
		document.getElementById("pi2").src="Assets/Players/2.png";
		document.getElementById("pi3").src="Assets/Players/3.png";
		document.getElementById("pi4").src="Assets/Players/4.png";
}
//Weapon buttons

function DisableW1() {
	if(SelectedWeapon == null)
	{
		disableWeapons();//grey out people
		document.getElementById("wi1").src="Assets/Weapons/1.png";//un-grey out selected person
		sendOSCPlayer(playerNum,9);
		SelectedWeapon = 1;
	}
}
function DisableW2() {
	if(SelectedWeapon == null)
	{
		disableWeapons();//disable and grey out people
		document.getElementById("wi2").src="Assets/Weapons/2.png";//un-grey out selected person
		sendOSCPlayer(playerNum,10);
		SelectedWeapon = 2;
	}
}
function DisableW3() {
	if(SelectedWeapon == null)
	{
		disableWeapons();//disable and grey out people
		document.getElementById("wi3").src="Assets/Weapons/3.png";//un-grey out selected person
		sendOSCPlayer(playerNum,11);
		SelectedWeapon = 3;
	}
}
function DisableW4() {
	if(SelectedWeapon == null)
	{
		disableWeapons();//disable and grey out people
		document.getElementById("wi4").src="Assets/Weapons/4.png";//un-grey out selected person
		sendOSCPlayer(playerNum,12);
		SelectedWeapon = 4;
	}
}
function DisableW5() {
	if(SelectedWeapon == null)
	{
		disableWeapons();//disable and grey out people
		document.getElementById("wi5").src="Assets/Weapons/5.png";//un-grey out selected person
		sendOSCPlayer(playerNum,13);
		SelectedWeapon = 5;
	}
}
function DisableW6() {
	if(SelectedWeapon == null)
	{
		disableWeapons();//disable and grey out people
		document.getElementById("wi6").src="Assets/Weapons/6.png";//un-grey out selected person
		sendOSCPlayer(playerNum,14);
		SelectedWeapon = 6;
	}
}
function disableWeapons(){
		//grey out all person images
		document.getElementById("wi1").src="Assets/Weapons/1D.png";
		document.getElementById("wi2").src="Assets/Weapons/2D.png";
		document.getElementById("wi3").src="Assets/Weapons/3D.png";
		document.getElementById("wi4").src="Assets/Weapons/4D.png";
		document.getElementById("wi5").src="Assets/Weapons/5D.png";
		document.getElementById("wi6").src="Assets/Weapons/6D.png";
}
function enableWeapons(){
		//grey out all person images
		document.getElementById("wi1").src="Assets/Weapons/1.png";
		document.getElementById("wi2").src="Assets/Weapons/2.png";
		document.getElementById("wi3").src="Assets/Weapons/3.png";
		document.getElementById("wi4").src="Assets/Weapons/4.png";
		document.getElementById("wi5").src="Assets/Weapons/5.png";
		document.getElementById("wi6").src="Assets/Weapons/6.png";
}


//Room buttons

function DisableR1() {
	if(SelectedRoom == null)
	{
		disableRooms();//grey out people
		document.getElementById("ri1").src="Assets/Rooms/1.png";//un-grey out selected person
		sendOSCPlayer(playerNum,15);
		SelectedRoom = 1;
	}
}
function DisableR2() {
	if(SelectedRoom == null)
	{
		disableRooms();//disable and grey out people
		document.getElementById("ri2").src="Assets/Rooms/2.png";//un-grey out selected person
		sendOSCPlayer(playerNum,16);
		SelectedRoom = 2;
	}
}
function DisableR3() {
	if(SelectedRoom == null)
	{
		disableRooms();//disable and grey out people
		document.getElementById("ri3").src="Assets/Rooms/3.png";//un-grey out selected person
		sendOSCPlayer(playerNum,17);
		SelectedRoom = 3;
	}
}
function DisableR4() {
	if(SelectedRoom == null)
	{
		disableRooms();//disable and grey out people
		document.getElementById("ri4").src="Assets/Rooms/4.png";//un-grey out selected person
		sendOSCPlayer(playerNum,18);
		SelectedRoom = 4;
	}
}
function DisableR5() {
	if(SelectedRoom == null)
	{
		disableRooms();//disable and grey out people
		document.getElementById("ri5").src="Assets/Rooms/5.png";//un-grey out selected person
		sendOSCPlayer(playerNum,19);
		SelectedRoom = 5;
	}
}
function disableRooms(){//grey out all person images
		
		document.getElementById("ri1").src="Assets/Rooms/1D.png";
		document.getElementById("ri2").src="Assets/Rooms/2D.png";
		document.getElementById("ri3").src="Assets/Rooms/3D.png";
		document.getElementById("ri4").src="Assets/Rooms/4D.png";
		document.getElementById("ri5").src="Assets/Rooms/5D.png";
}

function enableRooms(){//un-grey out all person images
		
		document.getElementById("ri1").src="Assets/Rooms/1.png";
		document.getElementById("ri2").src="Assets/Rooms/2.png";
		document.getElementById("ri3").src="Assets/Rooms/3.png";
		document.getElementById("ri4").src="Assets/Rooms/4.png";
		document.getElementById("ri5").src="Assets/Rooms/5.png";
}








var osc = new OSC();
osc.open({host : '192.168.1.3'});



function sendOSCPlayer(user,value) {
	var message = new OSC.Message('/player/'+user,value);
    osc.send(message);
}


osc.on('/Players/'+playerNum, message => {
  console.log(message.args); // prints the message arguments
  if(message.args == 1) //into standby
  {
	  document.getElementById("playerTable").style.visibility = "hidden";
	  document.getElementById("statusText").style.visibility = "visible";
  }
  if(message.args == 2) //out of standby
  {
	  document.getElementById("playerTable").style.visibility = "visible";
	  document.getElementById("statusText").style.visibility = "hidden";
  }
  if(message.args == 3) //Into Pick
  {
	  document.getElementById("playerTable").style.opacity  = "1";
	  document.getElementById("weaponTable").style.opacity  = "1";
	  document.getElementById("roomTable").style.opacity  = "1";
	  SelectedPerson = null;
	  SelectedRoom = null;
	  SelectedWeapon = null;
	  document.getElementById("titleText").style.animationPlayState = "run";
	  document.getElementById("titleText").style.visibility = "visible";
	  document.getElementById("SelectionText").style.visibility = "hidden";
	  document.getElementById("selectionTable").style.visibility = "hidden";
	  enablePeople();
	  enableRooms();
	  enableWeapons();
	  

  }
  if(message.args == 4) //Into Pick
  {
	  document.getElementById("playerTable").style.visibility = "visible";
	  document.getElementById("statusText").style.visibility = "hidden";
  }
  if(message.args == 20) //all 3 recieved
  {
	document.getElementById("playerTable").style.opacity  = "0";
	document.getElementById("weaponTable").style.opacity  = "0";
	document.getElementById("roomTable").style.opacity  = "0";
	document.getElementById("titleText").style.animationPlayState = "paused";
	document.getElementById("titleText").style.visibility = "hidden";
	populateSelectionTable();
  }
  if(message.args == 23) //hide confirm
  {
	document.getElementById("confirmButts").style.visibility = "hidden";
  }
  if(message.args == 27) //recive responce
  {
	document.getElementById("SelectionText").innerHTML="responce:";
	document.getElementById("selectionTableB").style.width = "0";
	document.getElementById("selectionTableC").style.width = "0";
  }
  if(message.args == 28) //recive responce
  {
	document.getElementById("SelectionText").innerHTML="responce:";
	document.getElementById("selectionTableA").style.width = "0";
	document.getElementById("selectionTableC").style.width = "0";
  }
  if(message.args == 29) //recive responce
  {
	document.getElementById("SelectionText").innerHTML="responce:";
	document.getElementById("selectionTableA").style.width = "0";
	document.getElementById("selectionTableB").style.width = "0";
  }
  
  if(message.args.toString().slice(0,2) == "AP") //person
  {
	document.getElementById("RCI1").src = "Assets/Players/"+message.args.toString().slice(2,3)+".png";
  }
  if(message.args.toString().slice(0,2) == "AW") //weapon
  {
	document.getElementById("RCI2").src = "Assets/Weapons/"+message.args.toString().slice(2,3)+".png";
  }
  if(message.args.toString().slice(0,2) == "AR") //room
  {
	document.getElementById("RCI3").src = "Assets/Rooms/"+message.args.toString().slice(2,3)+".png";
  }
  
});

var loc1 = false;
var loc2 = false;
var loc3 = false;
osc.on('/Players/'+playerNum+'/Cards/', message => { //populate players hand

	 if(loc1 == false)
  {
	  document.getElementById("card1").src = message.args;
	  loc1 = true;
  }
    else if(loc2 == false)
  {
	  document.getElementById("card2").src = message.args;
	  loc2 = true;
  }
    else if(loc3 == false) //room
  {
	  document.getElementById("card3").src = message.args;
	  loc1 = false;
	  loc2 = false;
	  loc3 = false;
  }
});


function populateSelectionTable()
{
	const collection = document.getElementsByClassName("tableImg");
	for (let i = 0; i < collection.length; i++) 
	{
		collection[i].style.height = "30px";
	}
	document.getElementById("selectionTable").style.visibility  = "visible";
	document.getElementById("SelectionText").style.visibility = "visible";
	document.getElementById("selectionTable").style.opacity  = "1";
	document.getElementById("SelectionText").style.opacity = "1";
	document.getElementById("selectionTableA").src="Assets/Players/"+SelectedPerson+".png";
	document.getElementById("selectionTableB").src="Assets/Rooms/"+SelectedRoom+".png";
	document.getElementById("selectionTableC").src="Assets/Weapons/"+SelectedWeapon+".png";
	document.getElementById("confirmButts").visibility = "visible";
	
}

var playerCards = 1;	
var defaultWidth = document.getElementById("card1").style.width;
function playerCardsToggle() //show/hide cards
{
	if (playerCards == 1)
	{
		document.getElementById("card1").style.width = "0";
		document.getElementById("card2").style.width = "0";
		document.getElementById("card3").style.width = "0";
		playerCards = 0;
	}
	else if (playerCards == 0)
	{
		document.getElementById("card1").style.width = defaultWidth;
		document.getElementById("card2").style.width = defaultWidth;
		document.getElementById("card3").style.width = defaultWidth;
		playerCards = 1;
	}
}

function onload()
{
	document.getElementById("playerTable").style.opacity  = "0";
	document.getElementById("weaponTable").style.opacity  = "0";
	document.getElementById("roomTable").style.opacity  = "0";
	document.getElementById("titleText").style.animationPlayState = "paused";
	document.getElementById("titleText").style.visibility = "hidden";
}

function Cancel()
{
	sendOSCPlayer(playerNum,22);
}

function Confirm()
{
	sendOSCPlayer(playerNum,21);
}

function RespondC1()
{
	sendOSCPlayer(playerNum,24);
	console.log("card1");
}

function RespondC2()
{
	sendOSCPlayer(playerNum,25);
	console.log("card2");

}

function RespondC3()
{
	sendOSCPlayer(playerNum,26);
	console.log("card3");

}