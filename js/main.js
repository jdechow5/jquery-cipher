const userSentence = prompt("What's the password?");

function firstAndLast(u) {
	let last = u.length - 1;
	return(u.charAt(0).toUpperCase()
			 + u.charAt(last).toUpperCase());
}

firstLastUpper = firstAndLast(userSentence);

function naiveReverse(snip) {
	return(snip[1] + snip[0]);
}

function reverse(snip) {
	return([...snip].reverse().join(''));
}

function naiveCipherOne(u) {
	let fl = reverse(firstAndLast(u));
	return(userSentence + fl)
}

function naiveCipherTwo(u, coSent) {
	let i = Math.floor(u.length / 2);
	let divTwo = u[i];

	return(divTwo + coSent);
}

let nTwo = naiveCipherTwo(userSentence, naiveCipherOne(userSentence));

$(document).ready(function() {
  $("#one").click(function() {
		$('#user-input').text(userSentence);
	});

	$("#two").click(function() {
		$('#user-input').text(reverse(nTwo));
	});
});