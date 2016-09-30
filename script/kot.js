function dice(diceName){
	this.dicePosition = [[37, 30], [167, 30], [297, 32], [37, 160], [167, 169], [300, 169]];
	this.isHold = 0;
	this.value = 0;
	this.diceName = diceName;
	this.rollDice = function (){
		this.value = Math.floor(Math.random() * 6);
	}
	this.drawDice = function (){
		this.canvas = document.getElementById(this.diceName);
		this.canvasDice = this.canvas.getContext('2d');
		if(this.isHold == 1){
			this.canvasDice.fillStyle = 'green';
			this.canvasDice.fillRect(20, 20, 60, 60);
		} else {
			this.canvasDice.fillStyle = 'white';
			this.canvasDice.fillRect(19, 19, 62, 62);
		}
		this.canvasDice.drawImage(document.getElementById('templateDice'), this.dicePosition[this.value][0], this.dicePosition[this.value][1], 130, 130, 25, 25, 50, 50);
	}
	this.holdDice = function (){
		if(this.isHold == 0){
			this.isHold = 1;
		} else {
			this.isHold = 0;
		}
		this.drawDice();
	}
	this.rollDice();
	this.drawDice();
}

function monster(name){
	this.name = name;
	this.health = 10;
	this.vicPoints = 0;
	this.enCubes = 0;
	this.getValue = function(valueName){
		return console.log(this[valueName]);
	}
	this.adjValue = function(valueName, adjustment){
		this[valueName] += adjustment;
		return console.log(this[valueName]);
	}
}

function start(){
	diceOne = new dice('dice1');
	diceTwo = new dice('dice2');
	diceThree = new dice('dice3');
	diceFour = new dice('dice4');
	diceFive = new dice('dice5');
	document.getElementById('dice1').addEventListener('click', function(){return diceOne.holdDice();});
	document.getElementById('dice2').addEventListener('click', function(){return diceTwo.holdDice();});
	document.getElementById('dice3').addEventListener('click', function(){return diceThree.holdDice();});
	document.getElementById('dice4').addEventListener('click', function(){return diceFour.holdDice();});
	document.getElementById('dice5').addEventListener('click', function(){return diceFive.holdDice();});
	monsterOne = new monster('dave');
	var canvasZero = document.getElementById('gameScreen');
	if (canvasZero.getContext){
		var canvas = canvasZero.getContext('2d');
		canvas.drawImage(document.getElementById('templateBoard'), 0, 0, 450, 450);
		canvas.drawImage(document.getElementById('templateMonster'), 500, 0, 100, 100);
		canvas.drawImage(document.getElementById('templateMonster'), 500, 150, 100, 100);
		canvas.drawImage(document.getElementById('templateMonster'), 500, 300, 100, 100);
		canvas.drawImage(document.getElementById('templateMonster'), 600, 0, 100, 100);
		canvas.drawImage(document.getElementById('templateMonster'), 600, 150, 100, 100);
		canvas.drawImage(document.getElementById('templateMonster'), 600, 300, 100, 100);
		canvas.drawImage(document.getElementById('templateMonster'), 75, 75, 100, 100);

	}
}

window.addEventListener('load', start, false);

