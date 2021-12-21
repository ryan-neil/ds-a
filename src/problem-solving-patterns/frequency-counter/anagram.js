/** Anagrams:
 * Given two strings, write a function to determine if the second string is an anagram of the first string.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', ''); // -> true
validAnagram('aaz', 'zza'); // -> false
validAnagram('anagram', 'nagaram'); // -> true
*/

const isAnagram = (str1, str2) => {
	// check string lengths
	if (str1.length !== str2.length) {
		return false;
	}

	// create storage objects
	const store1 = {};
	const store2 = {};
	// loop through str1
	for (let char of str1) {
		// set keys for store1
		store1[char] = (store1[char] || 0) + 1;
	}
	// loop through str2
	for (let char of str2) {
		// set keys for store2
		store2[char] = (store2[char] || 0) + 1;
	}

	console.log(store1); // -> { a: 3, n: 1, g: 1, r: 1, m: 1 }
	console.log(store2); // -> { n: 1, a: 3, g: 1, r: 1, m: 1 }

	// loop through store1 object
	for (let key in store1) {
		// check if store1 keys are not in store2
		if (!(key in store2)) {
			return false;
		}
		// check if the store objects values are not equal
		if (store2[key] !== store1[key]) {
			return false;
		}
	}
	return true;
};
console.log(isAnagram('anagram', 'nagaram'));
// -> true
