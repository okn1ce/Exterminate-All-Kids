//Variables
var kids = 0;
var soldier = 0;
var soldierCost = 10;
var SoldierKidsPerSecond = 0;
var guns = 0;
var gunCost = 130;
var terrorist = 0;
var TerroristCost = 600;
var TerroristsKidsPerSecond = 0;
var bomb = 0;
var bombCost = 900;






function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function killKid() {
  kids = kids + 1;
  document.getElementById("kidCount").innerHTML = prettify(kids);
}



//Soldier & Gun upgrades
function buySoldier() {
  if (kids >= soldierCost) {
    soldier = soldier + 1;
    SoldierKidsPerSecond = SoldierKidsPerSecond + 1;
    kids = kids - soldierCost;
    soldierCost = ((soldier + 1) * 23)
  document.getElementById("soldierCount").innerHTML = soldier;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("soldierCost").innerHTML = prettify(soldierCost);
  document.getElementById("soldierSpeed").innerHTML = SoldierKidsPerSecond;
  }
}

function buyGun() {
  if (kids >= gunCost) {
    guns = guns + 1;
    kids = kids - gunCost;
    SoldierKidsPerSecond = SoldierKidsPerSecond * 2;
    gunCost = ((gunCost + 1) * 2);
    document.getElementById("gunCost").innerHTML = gunCost;
    document.getElementById("soldierSpeed").innerHTML = SoldierKidsPerSecond;  
  }
}


//Terrorist & Bomb upgrades
function buyTerrorist() {
  if (kids >= TerroristCost) {
    terrorist = terrorist + 1;
    TerroristsKidsPerSecond = TerroristsKidsPerSecond + 5;
    kids = kids - TerroristCost;
    TerroristCost = TerroristCost + ((terrorist + 1) * 150)
  document.getElementById("terroristCount").innerHTML = terrorist;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("terroristCost").innerHTML = prettify(TerroristCost);
  document.getElementById("terroristSpeed").innerHTML = (TerroristsKidsPerSecond);
  }
}

function buyBomb() {
  if (kids >= bombCost) {
    bomb = bomb + 1;
    kids = kids - bombCost;
    TerroristsKidsPerSecond = TerroristsKidsPerSecond * 2;
    bombCost = ((bombCost + 1) * 2);
    document.getElementById("bombCost").innerHTML = bombCost; 
    document.getElementById("terroristSpeed").innerHTML = TerroristsKidsPerSecond;   
  }
}










//Ticks & kids per second

function Tick() {
  kids = kids + SoldierKidsPerSecond + TerroristsKidsPerSecond;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  ;
}

window.setInterval(function(){
	
	Tick();
	
}, 1000);