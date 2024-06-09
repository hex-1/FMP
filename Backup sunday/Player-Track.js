var osc = new OSC();
osc.open({host : '192.168.1.200'});

function sendOSC(value) {
	var message = new OSC.Message('/Move/',value);
    osc.send(message);
}

var movingPlayer = 0;
var movingText = document.getElementById("currMoving");

function selectp1()
{
	movingPlayer = 1;
	movingText.innerHTML="currently moving player: 1";
	
}
function selectp2()
{
	movingPlayer = 2;
	movingText.innerHTML="currently moving player: 2";
}
function selectp3()
{
	movingPlayer = 3;
	movingText.innerHTML="currently moving player: 3";
}
function selectp4()
{
	movingPlayer = 4;
	movingText.innerHTML="currently moving player: 4";
}
document.addEventListener('keydown', function(event) {
    if(event.keyCode == 37) {
        console.log(movingPlayer);
    }
	else if(event.keyCode == 27) {
        movingPlayer = 0;
		movingText.innerHTML="currently moving player: Null";
    }
});

function mr(RoomNo)
{
	if(movingPlayer>0)
	{
		var locEl = document.getElementById("R"+RoomNo).getBoundingClientRect()
		var playElem = document.getElementById("p"+movingPlayer)
		console.log("p"+movingPlayer);
		playElem.style.position = "absolute";
		playElem.style.left = locEl.left+((movingPlayer-1)*50)+'px';
		playElem.style.top = locEl.top+'px';
		document.getElementById("MoveSummery").innerHTML = ("Player " + movingPlayer + " Moved to Room " + RoomNo);
		document.getElementById("dat").innerHTML = movingPlayer + ",r" + RoomNo;
		
	}
	else
	{
		alert("please select a player to move");
	}
}
function mh(HallNo)
{
	if(movingPlayer>0)
	{
		var locEl = document.getElementById("H"+HallNo).getBoundingClientRect()
		var playElem = document.getElementById("p"+movingPlayer)
		console.log("p"+movingPlayer);
		playElem.style.position = "absolute";
		playElem.style.left = locEl.left+((movingPlayer-1)*30)+'px';
		playElem.style.top = locEl.top+'px';
		document.getElementById("MoveSummery").innerHTML = ("Player " + movingPlayer + " Moved to Hall " + HallNo);
		document.getElementById("dat").innerHTML = movingPlayer + ",h" + HallNo;
	}
	else
	{
		alert("please select a player to move");
	}
}
function Submit()
{
	sendOSC(document.getElementById("dat").innerHTML);
}

