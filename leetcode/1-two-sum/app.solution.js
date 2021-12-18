// Input: nums = [2,7,11,15], target = 9
// -> [0, 1]
// Input: nums = [3,2,4], target = 6
// -> [1, 2]

/** 
- create store object
- loop through nums array
- get current number being iterated
- get needed number that when added to current number sums to target number
- check if store has needed number
- true, return the indices
- false, set needed number to current index (i) in store
*/

// Solution 1:
// Time Complexity : O(n)
var twoSum = function(nums, target) {
	// create storage for stored numbers
	const store = {};
	// loop through nums array
	for (let i = 0; i < nums.length; i++) {
		// get current number being iterated
		const currNum = nums[i];
		// get needed number
		const neededNum = target - currNum;
		// check if store has needed number
		if (store[neededNum] != undefined) {
			// if true, return the indices
			return [ store[neededNum], i ];
		} else {
			// if false, set needed number to current index (i) in store
			store[currNum] = i;
		}
	}
};
twoSum([ 2, 7, 11, 15 ], 9);

// Solution 2:
// Time complexity: O(n²)
function twoSum(nums, target) {
	let result = [];
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (nums[i] + nums[j] === target) {
				result.push(nums[i], nums[j]);
			}
		}
	}
	return result;
}
