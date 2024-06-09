//wether an object has been selected
var SelectedPerson = null;
var SelectedWeapon = null;
var SelectedRoom = null;
var defautCardHeight = null;
var mapHeight = "450px";
//player Number
var playerNum = document.getElementById("playerNo").innerText;

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
		document.getElementById("pi1").src="Assets/Misc/CardBack.png";
		document.getElementById("pi2").src="Assets/Misc/CardBack.png";
		document.getElementById("pi3").src="Assets/Misc/CardBack.png";
		document.getElementById("pi4").src="Assets/Misc/CardBack.png";
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
		document.getElementById("wi1").src="Assets/Misc/CardBack.png";
		document.getElementById("wi2").src="Assets/Misc/CardBack.png";
		document.getElementById("wi3").src="Assets/Misc/CardBack.png";
		document.getElementById("wi4").src="Assets/Misc/CardBack.png";
		document.getElementById("wi5").src="Assets/Misc/CardBack.png";
		document.getElementById("wi6").src="Assets/Misc/CardBack.png";
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
		
		document.getElementById("ri1").src="Assets/Misc/CardBack.png";
		document.getElementById("ri2").src="Assets/Misc/CardBack.png";
		document.getElementById("ri3").src="Assets/Misc/CardBack.png";
		document.getElementById("ri4").src="Assets/Misc/CardBack.png";
		document.getElementById("ri5").src="Assets/Misc/CardBack.png";
}
function enableRooms(){//un-grey out all person images
		
		document.getElementById("ri1").src="Assets/Rooms/1.png";
		document.getElementById("ri2").src="Assets/Rooms/2.png";
		document.getElementById("ri3").src="Assets/Rooms/3.png";
		document.getElementById("ri4").src="Assets/Rooms/4.png";
		document.getElementById("ri5").src="Assets/Rooms/5.png";
}








var osc = new OSC();
osc.open({host : '192.168.1.200'});



function sendOSCPlayer(user,value) {
	var message = new OSC.Message('/player/'+user,value);
    osc.send(message);
}


osc.on('/Players/'+playerNum, message => {
  if(message.args == 1) //into standby
  {
	  document.getElementById("playerTable").style.visibility = "collapse";
	  document.getElementById("statusText").style.visibility = "visible";
  }
  if(message.args == 2) //out of standby
  {
	  document.getElementById("playerTable").style.visibility = "visible";
	  document.getElementById("statusText").style.visibility = "collapse";
  }
  if(message.args == 3) //Into Pick
  {
	  document.getElementById("playerTable").style.visibility  = "visible";
	  document.getElementById("weaponTable").style.visibility  = "visible";
	  document.getElementById("roomTable").style.visibility  = "visible";
	  document.getElementById("MapBackground").style.height  = "0";
	  document.getElementById("playerTable").style.opacity  = "1";
	  document.getElementById("weaponTable").style.opacity  = "1";
	  document.getElementById("roomTable").style.opacity  = "1";
	  SelectedPerson = null;
	  SelectedRoom = null;
	  SelectedWeapon = null;
	  document.getElementById("titleText").style.animationPlayState = "run";
	  document.getElementById("titleText").style.visibility = "visible";
	  document.getElementById("SelectionText").style.visibility = "collapse";
	  document.getElementById("selectionTable").style.visibility = "collapse";
	  enablePeople();
	  enableRooms();
	  enableWeapons();
	  document.getElementById("confirmButts").style.visibility = "visible";	  
	  document.getElementById("selectionTableA").style.width = defaultWidth;	
	  document.getElementById("selectionTableB").style.width = defaultWidth;	
	  document.getElementById("selectionTableC").style.width = defaultWidth;	

  }
  if(message.args == 4) //Into Pick
  {
	  document.getElementById("playerTable").style.visibility = "visible";
	  document.getElementById("statusText").style.visibility = "collapse";
  }
  if(message.args == 20) //all 3 recieved
  {
	document.getElementById("playerTable").style.opacity  = "0";
	document.getElementById("weaponTable").style.opacity  = "0";
	document.getElementById("roomTable").style.opacity  = "0";
	document.getElementById("titleText").style.animationPlayState = "paused";
	document.getElementById("titleText").style.visibility = "collapse";
	populateSelectionTable();
  }
  if(message.args == 23) //hide confirm
  {
	document.getElementById("confirmButts").style.visibility = "collapse";
  }
  if(message.args == 27) //recive responce
  {
	document.getElementById("SelectionText").innerHTML="Responce:";
	document.getElementById("selectionTableB").style.width = "0";
	document.getElementById("selectionTableC").style.width = "0";
	document.getElementById("okayButt").style.opacity  = "1";	
	document.getElementById("C"+SelectedPerson).src = ("Assets/Players/"+SelectedPerson+"X.png");
	document.getElementById("C"+SelectedPerson).setAttribute("onclick","nothing()");
  }
  if(message.args == 28) //recive responce
  {
	document.getElementById("SelectionText").innerHTML="Responce:";
	document.getElementById("selectionTableA").style.width = "0";
	document.getElementById("selectionTableC").style.width = "0";
	document.getElementById("okayButt").style.opacity  = "1";
	document.getElementById("C"+(SelectedWeapon+4)).src = "Assets/Weapons/"+SelectedWeapon+"X.png";
	document.getElementById("C"+(SelectedWeapon+4)).setAttribute("onclick","nothing()");
  }
  if(message.args == 29) //recive responce
  {
	document.getElementById("SelectionText").innerHTML="Responce:";
	document.getElementById("selectionTableA").style.width = "0";
	document.getElementById("selectionTableB").style.width = "0";
	document.getElementById("okayButt").style.opacity  = "1";
	document.getElementById("C"+(SelectedRoom+10)).src = "Assets/Rooms/"+SelectedRoom+"X.png";
	document.getElementById("C"+(SelectedRoom+10)).setAttribute("onclick","nothing()");
  }
  if(message.args.toString().slice(0,2) == "AP") //person
  {
	var suggURL = "http://192.168.1.2/Assets/Players/"+message.args.toString().slice(2,3)+".png"
	console.log(suggURL);
	if(document.getElementById("card1").src == suggURL || document.getElementById("card2").src == suggURL ||document.getElementById("card3").src == suggURL)
	{
		//Normal card
		document.getElementById("RCI1").src = "Assets/Players/"+message.args.toString().slice(2,3)+".png";
	}
	else
	{
		//X card
		document.getElementById("RCI1").src = "Assets/Players/"+message.args.toString().slice(2,3)+"X.png";
	}
	
  }
  if(message.args.toString().slice(0,2) == "AW") //weapon
  {
	var suggURL = "http://192.168.1.2/Assets/Weapons/"+message.args.toString().slice(2,3)+".png"
	console.log(suggURL);
	if(document.getElementById("card1").src == suggURL || document.getElementById("card2").src == suggURL ||document.getElementById("card3").src == suggURL)
	{
		//Normal card
		document.getElementById("RCI2").src = "Assets/Weapons/"+message.args.toString().slice(2,3)+".png";
	}
	else
	{
		//X card
		document.getElementById("RCI2").src = "Assets/Weapons/"+message.args.toString().slice(2,3)+"X.png";
	}
  }
  if(message.args.toString().slice(0,2) == "AR") //room
  {
	var suggURL = "http://192.168.1.2/Assets/Rooms/"+message.args.toString().slice(2,3)+".png"
	console.log(suggURL);
	if(document.getElementById("card1").src == suggURL || document.getElementById("card2").src == suggURL ||document.getElementById("card3").src == suggURL)
	{
		//Normal card
		document.getElementById("RCI3").src = "Assets/Rooms/"+message.args.toString().slice(2,3)+".png";
	}
	else
	{
		//X card
		document.getElementById("RCI3").src = "Assets/Rooms/"+message.args.toString().slice(2,3)+"X.png";
	}
	ShowResponceCards();
  }
  if (message.args >= 61 && message.args<=75)
  {

	var img = "C"+(parseInt(message.args.toString())-60)
	var currentimg = document.getElementById(img.toString()).src
	let chars = [...currentimg];
	chars.splice(chars.length-4, 0, "X"); // Splice to insert without deleting any elements
	const newString = chars.join('');
	document.getElementById(img.toString()).src = newString;
	document.getElementById(img.toString()).setAttribute("onclick","nothing()")
	
  }
  if (message.args >= 76 && message.args<=81)
  {
	disableRooms()
	SelectedRoom = (parseInt(message.args)-75);
	document.getElementById("ri"+(parseInt(message.args)-75)).disabled = false;
	document.getElementById("ri"+(parseInt(message.args)-75)).src = "Assets/Rooms/"+(parseInt(message.args)-75)+".png";
	
  }
  if (message.args == 85)
  {
	alert("Please walk on now");
	console.log("walk on now");	
  }
  if (message.args == 87)
  {
	if(confirm("No one is able to tell you anything about those cards")){okay();}
  }
  if (message.args == 88)
  {
	document.getElementById("MapBackground").style.height = "0px";
	document.getElementById("Guide").height = "600px";
	document.getElementById("Guide").width = "100%";
  }
  if (message.args == 89)
  {
	document.getElementById("MapBackground").style.height = "450px";
	document.getElementById("Guide").height = "0px";
	document.getElementById("Guide").width = "0px";
  }
});

var loc1 = false;
var loc2 = false;
var loc3 = false;
osc.on('/Players/'+playerNum+'/Cards/', message => { //populate players hand
	console.log(message.args);
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
	document.getElementById("selectionTable").style.visibility  = "visible";
	document.getElementById("SelectionText").style.visibility = "visible";
	document.getElementById("selectionTable").style.opacity  = "1";
	document.getElementById("SelectionText").style.opacity = "1";
	document.getElementById("confirmButts").visibility = "visible";
	document.getElementById("selectionTableA").style.width = "100%";
	document.getElementById("selectionTableB").style.width = "100%";
	document.getElementById("selectionTableC").style.width = "100%";
	document.getElementById("selectionTableA").src="Assets/Players/"+SelectedPerson+".png";
	document.getElementById("selectionTableB").src="Assets/Weapons/"+SelectedWeapon+".png";
	document.getElementById("selectionTableC").src="Assets/Rooms/"+SelectedRoom+".png";
	document.getElementById("SelectionText").innerHTML = "Your Selection:";
	
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
	document.getElementById("playerTable").style.visibility  = "collapse";
	document.getElementById("weaponTable").style.visibility  = "collapse";
	document.getElementById("roomTable").style.visibility  =  "collapse";
	document.getElementById("titleText").style.animationPlayState = "paused";
	document.getElementById("titleText").style.visibility = "collapse";
	document.getElementById("titleText").style.visibility = "collapse";
	document.getElementById("Suggestion-Response").style.visibility = "collapse";
	defautCardHeight = document.getElementById("Suggestion-Response").style.height;
	var playernames = ["Steve","Claire","Alexa","Frazer"];
	document.getElementById("Header1").innerHTML = "Player: "+playernames[playerNum-1];
	
}

function Cancel()
{
	sendOSCPlayer(playerNum,22);
}

function Confirm()
{
	sendOSCPlayer(playerNum,21);
}

function okay()
{
	sendOSCPlayer(playerNum,86);
	document.getElementById("okayButt").style.opacity = 0;
	document.getElementById("MapBackground").style.height = "450px";
	document.getElementById("selectionTable").style.visibility  = "collapse";
	document.getElementById("SelectionText").style.visibility = "collapse";
	document.getElementById("selectionTable").style.opacity  = "0";
	document.getElementById("SelectionText").style.opacity = "0";
}

function RespondC1()
{
	sendOSCPlayer(playerNum,24);
	HideresponceCards();
}

function RespondC2()
{
	sendOSCPlayer(playerNum,25);
	HideresponceCards();
}

function RespondC3()
{
	sendOSCPlayer(playerNum,26);
	HideresponceCards();
}
function RespondC4()
{
	sendOSCPlayer(playerNum,30);
	HideresponceCards();
}

function HideresponceCards()
{
	//document.getElementById("Suggestion-Response").style.height = 0;
	document.getElementById("Suggestion-Response").style.visibility = "collapse";
}
function ShowResponceCards()
{
	//document.getElementById("Suggestion-Response").style.height = defautCardHeight;
	document.getElementById("Suggestion-Response").style.visibility = "visible";
}
function ManTick(clicked_id)
{
	var currentimg = document.getElementById(clicked_id).src
	let chars = [...currentimg];
	chars.splice(chars.length-4, 0, "Q"); // Splice to insert without deleting any elements
	const newString = chars.join('');
	document.getElementById(clicked_id).src = newString;
	document.getElementById(clicked_id).setAttribute("onclick", "ManUnTick(this.id);" )
	console.log(clicked_id.toString().slice(1,3));
	sendOSCPlayer(playerNum,parseInt(clicked_id.toString().slice(1,3))+30);
}
function ManUnTick(clicked_id)
{
	var currentimg = document.getElementById(clicked_id).src
	let chars = [...currentimg];
	chars.splice(chars.length-5, 1,); // Splice to insert without deleting any elements
	const newString = chars.join('');
	document.getElementById(clicked_id).src = newString;
	document.getElementById(clicked_id).setAttribute("onclick", "ManTick(this.id);" )
	sendOSCPlayer(playerNum,parseInt(clicked_id.toString().slice(1,3))+45);
}
function nothing(){}


/* View in fullscreen */
function openFullscreen() {
	var elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

osc.on('/Host/', message => {
  if(message.args == 3) //player 1 turn
  {
	  document.getElementById("Header2").innerHTML = "Current Player: Steve"
  }
    if(message.args == 4) //player 2 turn
  {
	  document.getElementById("Header2").innerHTML = "Current Player: Claire";
  }
    if(message.args == 5) //player 3 turn
  {
	  document.getElementById("Header2").innerHTML = "Current Player: Alexa";
  }
    if(message.args == 6) //player 4 turn
  {
	  document.getElementById("Header2").innerHTML = "Current Player: Frazer";
  }
});