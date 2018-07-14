"use strict";
// seperate the if statement from the loop for better functionality and maintenance (granularity).
function assert(i){
		// if statement: the order matters and the AND condition should be first otherwise 
		// I'll get only 3 OR 5 from the other 2 conditions as it'll never got to the AND condition. 
		// Also, commas and spaces are added to make it easier to read.
		if ((i % 3 === 0) && (i % 5 === 0)) {
			// if divisible by 3 AND 5, return "fizzbuzz".
			return "fizzbuzz. ";
		} else if (i % 3 === 0) {
			// if divisible by 3, return "fizz".
			return "fizz. ";
		} else if (i % 5 === 0) {
			// if divisible by 5, return "buzz".
			return "buzz. ";
		} else {
			// else return i.
			return String(i) + ". ";
		}
};

function fizzbuzz(maxNumber){
	var show = "";		
	for (var i = 1; i <= maxNumber; i++) {
		show += assert(i);
	};
	return show;
};

let outcome = document.querySelector("#outcome");
outcome.textContent = fizzbuzz(100);


// Allow the users to enter a number of their own and get the fizzbuzz result for it (not only for a 100 numbers)
const num = document.querySelector("#num");
const input = document.querySelector("#input");
input.addEventListener("keypress", (event) => {
	if (event.keyCode === 13) {
		outcome.textContent = fizzbuzz(input.value);
		// Change the text of the H1 to match the user's chosen number.
		num.textContent = input.value;
		// Don't refresh the page. Leave the results on the screen.
		event.preventDefault();
	}
});

const singleAnswer = document.querySelector("#singleAnswer");
const singleResult = document.querySelector("#singleResult");
singleResult.addEventListener("keypress", (event) => {
	if (event.keyCode === 13) {
		// Show the answer to the user
		singleAnswer.textContent = assert(singleResult.value);
		// Don't refresh the page. Leave the results on the screen.
		event.preventDefault();
	}
});

