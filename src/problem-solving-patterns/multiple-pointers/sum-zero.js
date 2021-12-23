// Solution 1: O(n^2)
const sumZero = (arr) => {
	// loop through array
	for (let i = 0; i < arr.length; i++) {
		// loop through array, again
		for (let j = 0; j < arr.length; j++) {
			// check if the i iterator + the j iterator = 0
			if (arr[i] + arr[j] === 0) {
				// return indices
				return [ arr[i], arr[j] ];
			}
		}
	}
};
sumZero([ -4, -3, -2, -1, 0, 1, 2, 6, 10 ]); // -> [ -2, 2 ]

// Solution 2: O(n)
const sumZero = (arr) => {
	let left = 0; // left is the 0 index
	let right = arr.length - 1; // right is the last item in the array index

	while (left < right) {
		// get sum of the two pointers
		let sum = arr[left] + arr[right];
		// check if the sum of left and right is equal to 0
		if (sum === 0) {
			// if true, return indices
			return [ arr[left], arr[right] ];
			// check if sum is greater than 0
		} else if (sum > 0) {
			// subtract 1 from right index (move to next left index)
			right--;
		} else {
			// add 1 to left index (move to next right index)
			left++;
		}
	}
};
sumZero([ -4, -3, -2, -1, 0, 1, 2, 3, 6 ]); // -> [ -3, 3 ]
