// input: [ 1, 1, 1, 1, 1, 2 ]
// input: [ 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13 ]

// lazy solution
// const countUniqueValues = (arr) => {
// 	let filteredArr = [ ...new Set(arr) ];
// 	return filteredArr.length;
// };
// console.log(countUniqueValues([]));

// two pointer solution
const countUniqueValues = (arr) => {
	if (arr.length === 0) return arr.length;
	let pOne = 0;
	for (let pTwo = 1; pTwo < arr.length; pTwo++) {
		// check if pOne and pTwo are not equal
		// if pOne and pTwo ARE equal, pTwo increments automatically
		if (arr[pOne] !== arr[pTwo]) {
			// increment pOne by 1
			pOne = pOne + 1;
			// set pOne array index to equal what pTwo equals
			arr[pOne] = arr[pTwo];
		}
	}
	return pOne + 1;
};
// console.log(countUniqueValues([ 1, 1, 2, 3, 3, 4, 5, 6, 6, 7 ]));
console.log(countUniqueValues([]));
