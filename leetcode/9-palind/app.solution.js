// Leetcode Question #9 Response:
// Method 1: Go in from the outside and compare the characters
// Method 2: Start in the middle and work your way out and compare the characters
// Method 3: Reverse the string and compare them

var isPalindrome = function(x) {
	// transform number to string
	const numToString = x.toString();
	// reverse the string
	const reverseString = numToString.split('').reverse().join('');
	// compare converted string to the reversed string
	const isEqual = numToString === reverseString ? true : false;
	console.log(isEqual);
};
isPalindrome(121);

// reversedString breakdown:
const num = 345;
num.split('');
// -> [ "3", "4", "5" ]
num.split('').reverse();
// -> [ "5", "4", "3" ]
num.split('').reverse().join('');
// -> 543
