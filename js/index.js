var kids = 0;
var soldier = 0;
var soldierCost = 10;
var guns = 0;
var gunCost = 200;
var SoldierKidsPerSecond = 0;

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

function killKid() {
  kids = kids + 1;
  document.getElementById("kidCount").innerHTML = prettify(kids);
}

function buySoldier() {
  if (kids >= soldierCost) {
    soldier = soldier + 1;
    SoldierKidsPerSecond = SoldierKidsPerSecond + 1;
    kids = kids - soldierCost;
    soldierCost = ((soldier + 1) * 23)
  document.getElementById("soldierCount").innerHTML = soldier;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("soldierCost").innerHTML = prettify(soldierCost);
  }
}

function Tick() {
  kids = kids + SoldierKidsPerSecond;
  document.getElementById("kidCount").innerHTML = prettify(kids);
  document.getElementById("soldierSpeed").innerHTML = SoldierKidsPerSecond;
}

function buyGun() {
  if (kids >= gunCost) {
    guns = guns + 1;
    kids = kids - gunCost;
    SoldierKidsPerSecond = SoldierKidsPerSecond * 2;
    gunCost = ((gunCost + 1) * 2);
    document.getElementById("gunCost").innerHTML = gunCost;
    
    
    
  }
}






window.setInterval(function(){
	
	Tick();
	
}, 1000);