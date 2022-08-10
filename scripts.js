function randomDice() {
	const dice1 = Math.floor(Math.random() * 6) + 1;

	document.querySelector('.img1').src = 'images/dice' + dice1 + '.png';

	const dice2 = Math.floor(Math.random() * 6) + 1;

	document.querySelector('.img2').src = 'images/dice' + dice2 + '.png';

	playGame(dice1, dice2);
}

function playGame(p1, p2) {
	if (p1 > p2) {
		document.querySelector('h1').innerHTML = 'Player 1 Wins!';
	} else if (p1 < p2) {
		document.querySelector('h1').innerHTML = 'Player 2 Wins!';
	} else {
		document.querySelector('h1').innerHTML =
			'DRAW! Refresh again to find the winner!';
	}
}

randomDice();
