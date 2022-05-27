var upPressed = false;
var downPressed = false;
var leftPressed = false;
var rightPressed = false;
var lastPressed = false;

function keyup(event) {
	var player = document.getElementById('player');
	if (event.keyCode == 37) {
		leftPressed = false;
		lastPressed = 'left';
	}
	if (event.keyCode == 39) {
		rightPressed = false;
		lastPressed = 'right';
	}
	if (event.keyCode == 38) {
		upPressed = false;
		lastPressed = 'up';
	}
	if (event.keyCode == 40) {
		downPressed = false;
		lastPressed = 'down';
	}

	player.className = 'character stand ' + lastPressed;
}


function move() {
	var player = document.getElementById('player');
	var positionLeft = player.offsetLeft;
	var positionTop = player.offsetTop;
	if (downPressed) {
		var newTop = positionTop+1;

		var element = document.elementFromPoint(player.offsetLeft, newTop+32);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}

		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk down';
			}
		}
	}
	if (upPressed) {
		var newTop = positionTop-1;

		var element = document.elementFromPoint(player.offsetLeft, newTop);
		if (element.classList.contains('sky') == false) {
			player.style.top = newTop + 'px';	
		}
		
		if (leftPressed == false) {
			if (rightPressed == false) {
				player.className = 'character walk up';
			}
		}
	}
	if (leftPressed) {
		var newLeft = positionLeft-1;

		var element = document.elementFromPoint(newLeft, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';	
		}


		player.className = 'character walk left';
	}
	if (rightPressed) {
		var newLeft = positionLeft+1;
		
		var element = document.elementFromPoint(newLeft+32, player.offsetTop);
		if (element.classList.contains('sky') == false) {
			player.style.left = newLeft + 'px';		
		}

		player.className = 'character walk right';
	}

}


function keydown(event) {
	console.log('key down');
	if (event.keyCode == 37) {
		leftPressed = true;
	}
	if (event.keyCode == 39) {
		rightPressed = true;
	}
	if (event.keyCode == 38) {
		upPressed = true;
	}
	if (event.keyCode == 40) {
		downPressed = true;
	}
}

// spaceship location code

// function spaceShip() { 
// 	console.log('space ships sky');
// 	var element = document.getElementsByClassName('alien');
// 	var number = 5;

// 	for (var i = 0; i < number; i++) {
// 		// console.log('loop', number);
// 		console.log('loop', i);

// 		var x = Math.ceil(Math.random()*1000);

// 		// var ship = document.getElementById('alien'); og code
// 		// var ship = document.createElement('alien');
// 		// var ship = document.classList.add('alien');
// 		ship.style.position = 'absolute';
// 		ship.style.top = 0;
// 		ship.style.left = x + 'px';
// 		document.body. appendChild(ship);
// 	}
// }

// don't forget to delete this makeSomething function 
function makeSomething() {
    console.log('make something');
    var number = 5;

    for (var i = 0; i < number; i++) {
        console.log('loop something', number);

        var x = Math.ceil(Math.random()*1000);

        var test = document.createElement('div');
        test.style.position = 'absolute';
        test.style.top = 0;
        test.style.backgroundColor = 'red';
        test.style.borderRadius = '100%';
        test.style.width = 100 + 'px';
        test.style.height = 100 + 'px';
        test.style.left = x + 'px';
		test.classList.add('spaceship');
        document.body. appendChild(test);
    }
}



function clickStart() {
	console.log('start button');
	// document.getElementById('startButton').style.display = 'none'; this was the og correct code
	var element = document.getElementsByClassName('start')[0];
	element.style.display = 'none';
	
	// spaceShip();
	makeSomething();
}


function myLoadFunction() {
	timeout = setInterval(move, 10);
	document.addEventListener('keydown', keydown);
	document.addEventListener('keyup', keyup);

	var element = document.getElementsByClassName('start')[0];
	element.addEventListener('click', clickStart);

	// startButton.addEventListener('click', clickStart);  this was the og correct code
	// document.getElementById('startButton').style.display = 'none';
}


document.addEventListener('DOMContentLoaded', myLoadFunction);