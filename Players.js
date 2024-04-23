//wether an object has been selected
var SelectedPerson = null;
var SelectedWeapon = null;
var SelectedRoom = null;
//player Number
var playerNum = document.getElementById("playerNo").innerText;
console.log(playerNum);

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
function disableRooms(){
		//grey out all person images
		document.getElementById("ri1").src="Assets/Rooms/1D.png";
		document.getElementById("ri2").src="Assets/Rooms/2D.png";
		document.getElementById("ri3").src="Assets/Rooms/3D.png";
		document.getElementById("ri4").src="Assets/Rooms/4D.png";
		document.getElementById("ri5").src="Assets/Rooms/5D.png";
}








var osc = new OSC();
osc.open({host : '192.168.220.219'}); // connect by default to ws://localhost:8080



function sendOSCPlayer(user,value) {
	var message = new OSC.Message('/players/1/',value);
    osc.send(message);
}


osc.on('/Players/1', message => {
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
  if(message.args == 3) //out of standby
  {
	  document.getElementById("selections").style.visibility = "visible";
  }
  if(message.args == 4) //out of standby
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
	document.getElementById("roomTable").addEventListener('transitionend', () => populateSelectionTable());
  }
});
function populateSelectionTable()
{
	const collection = document.getElementsByClassName("tableImg");
	for (let i = 0; i < collection.length; i++) 
	{
		collection[i].style.height = "30px";
	}
	document.getElementById("selectionTable").style.opacity  = "1";
	document.getElementById("selectionTableA").src="Assets/players/"+SelectedPerson+".png";
	document.getElementById("selectionTableB").src="Assets/rooms/"+SelectedRoom+".png";
	document.getElementById("selectionTableC").src="Assets/weapons/"+SelectedWeapon+".png";
	document.getElementById("SelectionText").style.opacity = "1";
}
	



