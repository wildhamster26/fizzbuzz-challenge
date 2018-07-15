"use strict";
// seperate the if statement from the loop for better functionality and maintenance (granularity).

// Assert the right outcome for each input
function assert(i){
		// if statement: the order matters and the AND condition should be first otherwise 
		// I'll get only 3 OR 5 from the other 2 conditions as it'll never get to the AND condition. 
		// Also, dots and spaces are added to make it easier to read.
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

// Use the "assert" function and loop through any given number of items
function fizzbuzz(maxNumber){
	// Create a variable for the result that'll be shown to the user
	var show = "";		
	// loop through the items
	for (var i = 1; i <= maxNumber; i++) {
		//Add the values to the result variable
		show += assert(i);
	};
	// Return the end result to be shown to the user
	return show;
};

// Start the page with the first answer - a 100 items - shown on the "outcome" paragraph
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


// Allow the users to enter a single number and get it's specific outcome
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

