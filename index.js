function charCount(str) {
	let obj = {};
	for (let char of str) {
		// call our alphaNumeric function
		if (isAlphaNumeric(char)) {
			char = char.toLowerCase();
			// here we can refactor with a `ternary operator` (condition ? expIfTrue : expIfFalse)
			obj[char] ? obj[char]++ : (obj[char] = 1);
		}
	}
	return obj;
}
console.log(charCount('Hello World hi!!!')); // { h: 2, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, i: 1 }

// create function to use above
function isAlphaNumeric(char) {
	// get the character code at index 0 (it's only one a character string so it's only index 0)
	let code = char.charCodeAt(0);

	if (
		!(code > 47 && code < 58) && // numeric (0-9)
		!(code > 64 && code < 91) && // upper alpha (A-Z)
		!(code > 96 && code < 123) // lower alpha (a-z)
	) {
		return false;
	}
	return true;
}
