<h1 align="left">Data Structures and Algorithms</h1>

### Introduction
The goal of this document is to provide a quick reference guide for the main concepts of Data Structures and Algorithms. There will also be some examples that are, hopefully, simple to understand.

For this reference guide all example code will be written in __JavaScript__.

### References:
  * [Javascript Algorithms and Data Structures Masterclass:](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)  Colt Steele
  * [Algorithms and Data Structures Masterclass:](https://github.com/NKaty/Algorithms-and-Data-Structures) Github Notes

## 📓 Table of Contents

1. [Big O Notation](#1-Big-O-Notation)
2. [Analyzing Performance of Arrays and Objects](#2-Analyzing-Performance-of-Arrays-and-Objects)
3. [Problem Solving](#3-Problem-Solving-Approach)

# 1. Big O Notation

### Topics:
  * 1.1 [Time Complexity](#11-Time-Complexity)
  * 1.2 [Big O Logic](#12-Big-O-Logic)
  * 1.3 [Space Complexity](#13-Space-Complexity)
  * 1.4 [Logarithms](#14-Logarithms)

__Big O Notation__ allows us to have a _numeric representation_ of the performance of code. It allows us to talk formally about how the runtime of an algorithm grows as the input grows.

Well, why does this matter?
  * It's important to have a precise vocabulary to talk about how performant our code is
  * Useful for discussing trade-offs between different approaches
  * When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
  * It's important for interviews!

Big O is focused on the _BIG_ picture.

**[⬆ Top](#📓-Table-of-Contents)**

## 1.1 Time Complexity

Suppose you want to write a function that calculates the sum of all numbers from 1 up to (and including) some number _n_. Let's look at two examples:

### Method 1:
Big O = __O(n)__ (_linear_)
```js
function addUpTo(num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total = total + i;
  }
  return total;
}

// test our algorithm
let t1 = performance.now();
addUpTo(1_000_000_000);
let t2 = performance.now();

console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// -> Time Elapsed: 1.16610 seconds.
```

### Method 2: 
Big O = __O(1)__ (_constant_)
```js
function addUpTo(num) {
  return num * (num + 1) / 2;
}

// test our algorithm
let time1 = performance.now();
addUpTo(1_000_000_000);
let time2 = performance.now();

console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
// -> Time Elapsed: 0.00001 seconds.
```

_Note: In the above code we're using a built in JavaScript timing function `performance.now()`. This will tell us the number of milliseconds since the document was created (loaded in)._

You'll notice our second method is much faster (relative) than method 1. But this is not the most efficient way of tracking whether one code block is faster or better than another code block.

**[⬆ Top](#📓-Table-of-Contents)**

## 1.2 Big O Logic

Warning! Technically definition:

We say that an algorithm is `O(f(n))` if the number of simple operations the computer has to do is eventually less than a constant times `f(n)`, as `n` increases. Huh...

Basically, what this is doing is describing the relationship between the _input_ (`f(n)`) and the _output_ or _runtime_ (`n`, `n²`, `1`).

```
f(n):     a function with an _input_ of 'n'.
f(n) = n: a function with an _input_ of 'n' and an _output_ of 'n'
```

Let's look as some options below:
  * `f(n)` could be __Linear__: `f(n) = n`
  * `f(n)` could be __Quadratic__: `f(n) = n²`
  * `f(n)` could be __Constant__: `f(n) = 1`
  * `f(n)` could be something entirely different

### Linear:

`O(n)`

As `n` scales, the input `f(n)` and the runtime `n` scales as well.

### Quadratic:

`O(n²)`

As `n` scales, the runtime `n²` squares (square event).

It's important to note that an `O(n)` operation inside of an `O(n)` operation gives us `O(n * n)` or `O(n²)`.

### Constant:

`O(1)`

As `n` scales, it doesn't really have an impact because runtime is always constant, which you can simplify down to `1`.

### Simplifying Big O:

Constants don't matter.
```
O(2O) -> O(n)
O(500) -> O(1)
O(13n²) -> O(n²)
```

Smaller terms don't matter.
```
O(n + 10) -> O(n)
O(1000n + 50) -> O(n)
O(n² + 5n + 8) -> O(n²)
```

### Shorthands:

_Note: these rules won't always work, but are a helpful starting point._

1. Arithmetic operations (`+`, `-`, `*`, `/`) are constant
2. Variable assignment is constant, `x = 1` and `x = 1000` are roughly the same
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop (`n`) times the complexity of whatever happens inside of the loop

**[⬆ Top](#📓-Table-of-Contents)**

## 1.3 Space Complexity

So far, we've been focusing only on __time complexity__. So, how can we analyze the __runtime__ of an algorithm as the size of the inputs increase?

We can also use Big O Notation to analyze __space complexity__: 
  * How much additional memory do you need to allocate in order to run the code in our algorithm?

_Note: when you talk about space complexity, technically you will be talking about __auxiliary space complexity___

#### Auxiliary Space vs. Space Complexity

__Auxiliary Space__: is the temporary space allocated by your algorithm to solve the problem, with respect to input size.

__Space Complexity__: is the total space used by your algorithm to solve the problem, with respect to input size. Note that the _Space Complexity_ includes input size.

An example between the two would be:

If you compare Quicksort and Mergesort, they both have a linear _space complexity_ of `O(n)` and run at `O(n log n)` time, but Mergesort requires linear _auxiliary space_ of `O(n)` while Quicksort requires constant _auxiliary space_ of `O(1)`.

#### Rules of thumb:
  * Most primitives (booleans, numbers, undefined, null) are _constant_ space
  * Strings require _linear_ `O(n)` space (where `n` is the string length)
  * Reference types are generally _linear_ `O(n)`, where `n` is the length (for arrays) or the number of keys (for objects)

Let's look at an example:
```js
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = total + arr[i];
  }
  return total;
};
sum([ 2, 6, 4, 9 ]); // -> 21
```

In the example above, no matter what the array length is, we have one variable called `total` (one number). We then loop through, but remember we're not concerned about the _time_. We also have a second declaration inside of the for loop (`let i = 0`) which is another number. And that's all for the _space complexity_.

So again no matter what the size of the array is (`n`), or from the example above `arr`, as it grows it won't have an impact on the _space_ that's taken up because we only have two variables (`total` and `i`). We aren't adding new variables based on the length, we're only adding to the `total` variable.

So this means we have _constant_ space (`O(1)`).

Let's have a look at another example:
```js
const double = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
};
double([ 2, 6, 4, 9 ]); // -> [ 4, 12, 8, 18 ]
```

So how does this effect _space complexity_ of this algorithm? So as the array (`arr`) length grows, our `newArr` variable is directly proportionate to the length of the input. So if the `arr` is 10 items, we're storing 10 items in `newArr`.

So the space taken up is directly proportionate to `n` and to the input array. So for space complexity we would have __O(n)__.

**[⬆ Top](#📓-Table-of-Contents)**

## 1.4 Logarithms

So far, we've encountered some of the most common complexities: `O(1)`, `O(n)`, `O(n²)`. Sometimes Big O expressions involve more complex mathematical expressions. One that appears more often than you might like is the __logarithm__.

### What's a logarithm?

To put simply, a __logarithm__ is the inverse of exponentiation. So, just like _division_ and _multiplication_ are a pair, _logarithms_ and _exponents_ are a pair.

log<sub>2</sub>(8) --> 2<sup>3</sup> = 8
<br>
log<sub>2</sub>(_value_) = _exponent_ --> 2<sup>_exponent_</sup> = _value_

What we're concerned about is the _Big_ picture so we're just going to omit the 2. We'll just say:

log == log<sub>2</sub>

If we're comparing the graph of a _constant time_,  _quadratic time_ or _linear_ time, it doesn't really matter if it's log base 2 or log base 10. All we care about is the general _trend_.

#### General Rule of thumb:

The logarithm of a number roughly measures the number of times you can divide that number by 2, _before you get a value that's less than or equal to one_.

#### Example 1: Find the log of `8`
```
8 / 2 = 4   --> still > 1. 
4 / 2 = 2   --> still > 1. 
2 / 2 = 1   --> Finally we get <= 1.

log(8) = 3  --> Since we had to divide 3 times.
```

#### Example 2: Find the log of `25`
```
25     / 2 = 12.5     --> still > 1.
12.5   / 2 = 6.25     --> still > 1.
6.25   / 2 = 3.125    --> still > 1.
3.125  / 2 = 1.5625   --> still > 1.
1.5625 / 2 = 0.78125  --> Finally we get <= 1.

log(25) = ~ 4.64 --> Since we had to divide somewhere between 4 and 5 times.
```

### Logarithm Complexity

In example 2 from above, there's no way of dividing `2` evenly into `25` but this isn't that important. We don't really care whether or not the number is divisible by `2`.

What we do care about is the _Logarithm Complexity_. Logarithm time complexity is a really good thing. If we have an algorithm with `O(log n)` this is fantastic!

#### Why is this important?
  * Certain searching algorithms have logarithmic time complexity.
  * Efficient sorting algorithms involve logarithms.
  * Recursion sometimes involves logarithmic space complexity.

**[⬆ Top](#📓-Table-of-Contents)**

# 2. Analyzing Performance of Arrays and Objects

### Topics:
  * 2.1 [Big O of Objects](#21-Big-O-of-Objects)
  * 2.2 [Big O of Arrays](#22-Big-O-of-Arrays)

### Resources:
  * [Big O Performance of Arrays and Objects in JavaScript](https://javascript.plainenglish.io/performance-of-arrays-and-objects-in-javascript-through-the-lens-of-big-o-5a7c5891a43f)

## 2.1 Big O of Objects

Example:
```js
let instructor = {
  firstName: 'Katie',
  isInstructor: true,
  favoriteNumbers: [ 1, 2, 3, 4 ]
}
```

When to use objects:
  * Objects work well when you don't need order
  * When you need fast access, insertion and removal

```
Insertion -> O(1)
Removal -> O(1)
Search -> O(n)
Access -> O(1)
```

As you can see from above, objects are VERY fast. They're constant time which is the best you can do.

### Object Methods

Now let's look at the Big O of some object methods we have in JavaScript:

```
Object.keys -> O(n)
Object.values -> O(n)
Object.entries -> O(n)
hasOwnProperty -> O(1)
```

**[⬆ Top](#📓-Table-of-Contents)**

## 2.2 Big O of Arrays

Example:
```js
let names = [ 'Katie', 'Ryan', 'Chinito' ];
let values = [ true, {}, [], 2, 'Hello World' ];
```

When to use objects:
  * When we need order
  * When we need fast access/insertion and removal (sort of...)

```
Insertion -> It depends...
Removal -> It depends...
Search -> O(n)
Access -> O(1)
```

Let's talk about insertion and removal. So with insertion, it really depends on where we're inserting. Say we want to add `Choncho` to the end of the `names` array from above:
```js
let names = [ 'Katie', 'Ryan', 'Chinito', 'Choncho' ];
```

This is _constant_. Where our problems come is when we want to add an item to the beginning of the array:
```js
let names = [ 'Choncho', 'Katie', 'Ryan', 'Chinito' ];
```

This has to do with the indices of the array. When we add an item to the beginning of an array we have to re-index every item in that array, so we have linear `O(n)` time. Where-as when adding an item to the end we just have to index that one item, so we have constant `O(1)` time.

The same logic applies for removing items from the beginning and end of arrays. So, `push()` and `pop()` will always be faster than `shift()` and `unshift()`.

### Array Methods:

Now let's look at the Big O of array methods we have in JavaScript:

```
push() -> O(1)
pop() -> O(1)

shift() -> O(n)
unshift() -> O(n)
concat() -> O(n)
slice() -> O(n)
splice() -> O(n)

sort() -> O(n * log n)
forEach() / map() / filter() / reduce() / etc. -> O(n)
```

### Summary

1. Objects are fast at pretty much everything, but there's no order to them.
2. Arrays are great when you need an order, but still be mindful that it's better (if we can) to add and remove from the end and avoid adding and removing from the  beginning, because that starts a cascade effect, hence the terms _shift_ and _unshift_ where everything has to be re-indexed (the same goes for adding and removing from the middle).
 
**[⬆ Top](#📓-Table-of-Contents)**

# 3. Problem Solving

### Table of Contents:
  * 3.1 [The Approach](#31-The-Approach)
  * 3.2 [The Patterns](#32-The-Patterns)

Let's start off by defining an __algorithm__. An algorithm is essentially a __process__ or __set of steps__ to accomplish a certain task.

Almost _everything_ we do in programming involves some sort of algorithm. It is the _foundation_ for being a _successful_ problem solving _developer_.

So how do we improve at solving problems?
  1. Devise a plan for solving problems (Section 3.1)
  2. Master common problem solving patterns (Section 3.2)

## 3.1 The Approach

Let's look at some problem solving strategies that can help when we are presented with an algorithm problem:
  * Understand the problem
  * Explore concrete examples
  * Break it down
  * Solve/simplify
  * Look back and refactor

### Understand the Problem

  1. Can I _restate_ the problem in my own words?
  2. What are the _inputs_ that go into the problem?
  3. What are the _outputs_ that should come from the solution to the problem?
  4. Can the _outputs_ be determined from the _inputs_? In other words, do I have enough information to solve the problem? 
  5. How should I _label_ the important pieces of _data_ that are a part of the problem?

### Explore concrete examples

Coming up with examples can help us understand the problem better. Examples also provide sanity checks that your eventual solution works as it should.

Examples of this could be __user stories__, which are basically, if given an _input_ what should the _output_ be? The input could be a _user action_ and what should happen after this _user action_?

Another example could be __unit tests__, which are used on a smaller scale to help layout how something should work for a smaller feature.

Let's now look at some steps we can take for exploring concrete examples:

  1. Start with _simple_ examples
  2. Progress to more _complex_ examples
  3. Explore examples with _empty inputs_
  4. Explore examples with _invalid inputs_

### Break it down

In other words take the actual steps of the problem and write them down. This doesn't mean full sudo code or valid syntax, it's little comments as a guide for the steps I'm going to need to take.

This forces us to think about our code before we write it, and it helps us catch any lingering conceptual issues or misunderstandings before we dive in and have to worry about details.

### Solve or simplify

So basically, SOLVE the problem if you can but if you can't SOLVE a simpler problem... This is where the "simplify" comes in.

What this means is, trying to ignore the part that is giving you a really hard time in order to focus on everything else. It's worth it to do this because in an interview setting, we want to have something to show for yourself.

#### The idea behind "Simplify":
  * Find the core difficulty in what your're trying to do
  * Temporarily ignore that difficulty
  * Write a simplified solution
  * Then incorporate that difficulty back in (by this step, we often gain insight into how to do this)

### Look back and refactor

After we have solved our problem let's look at a checklist of questions we can ask ourselves:
  * Can you check the result?
  * Can you derive the result differently?
  * Can you understand it at a glance?
  * Can you use the result or method for some other problem?
  * Can you improve the performance of your solution?
  * Can you think of other ways to refactor?
  * How have other people solved this problem?

**[⬆ Top](#📓-Table-of-Contents)**

## 3.2 The Patterns

In this section we will be covering some of the more common patterns we might come across in interview questions. For each of these concepts we will be introducing the idea, explaining it, and then coding an example of the pattern. Here are the patterns we will be covering:
  * 3.2.1 [Frequency Counters](#321-Frequency-Counters)
  * 3.2.2 [Multiple Pointers](#322-Multiple-Pointers)
  * 3.2.3 [Sliding Window](#323-Sliding-Window)

### 3.2.1 Frequency Counters

#### The Idea:

This pattern uses objects or sets to collect values/frequencies of values. This pattern can often help to avoid the need for nested loops or _quadratic_ `O(n²)` operations with arrays/strings.

This is useful in algorithms or challenges where we have multiple pieces of data/inputs, and you need to compare them to see if they consist of similar values.
  * If they are anagrams of one another
  * If the value is contained inside of another value

#### Example:

Write a function called `same`, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.
```js
same([ 1, 2, 3 ], [ 4, 1, 9 ]) // true
same([ 1, 2, 3 ], [ 1, 9 ]) // false (must be the same length)
same([ 1, 2, 1 ], [ 4, 4, 1 ]) // false (must be same frequency)
```

Let's write out some code:
```js
const same = (arr1, arr2) => {
  // check if the arr lengths are the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  let store1 = {};
  let store2 = {};
  // loop through arr1
  for (let val of arr1) {
    // update the store1 object and add 1 if it is already in there, if it's not we will initialize it with 1
    store1[val] = (store1[val] || 0) + 1;
  }
  // loop through arr2
  for (let val of arr2) {
    // update the store2 object and add 1 if it is already in there, if it's not we will initialize it with 1
    store2[val] = (store2[val] || 0) + 1;
  }

  console.log(store1); // -> { '1': 1, '2': 2, '3': 1 }
  console.log(store2); // -> { '1': 1, '4': 2, '9': 1 }

  // loop through store1's object keys
  for (let key in store1) {
    // check if the store1 key's squared is not a key in store2
    if (!(key ** 2 in store2)) {
      return false;
    }
    // then we check if the stores values don't correspond (for example, if there are two 2's there needs to be two 4's)
    if (store2[key ** 2] !== store1[key]) {
      return false;
    }
  }
  return true;
};
same([ 1, 2, 3, 2 ], [ 9, 1, 4, 4 ]); // -> true
```

In summary, the idea behind the frequency counter is you usually use an (storage) object. You then use that object to construct a profile (store), as a way of breaking down the contents of an array/string and then you can quickly compare that breakdown to how another object looks that was constructed from a string/array.

### 3.2.2 Multiple Pointers

#### Resources:
  * [Using the Multiple Pointers Strategy to Solve Algorithms](https://levelup.gitconnected.com/using-the-multiple-pointers-strategy-to-solve-algorithms-b90a98f854db)

#### The Idea:

We create pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition.

These are very efficient for solving problems with minimal space complexity as well.

#### Example:

Write a function called `sumZero` which accepts a _sorted_ array of integers. The function should find the _first_ pair where the sum is `0`. Return an array that includes both values that sum to zero or `undefined` if a pair does not exist.
```js
sumZero([ -3, -2, -1, 0, 1, 2, 3]) // [-3, 3]
sumZero([ -2, 0, 1, 3 ]) // undefined
sumZero([ 1, 2, 3 ]) // undefined
```

Let's start with the less efficient (easier) `O(n^2)` solution:
```js
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
```

Now, let's refactor to the more efficient `O(n)` solution:
```js
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
      // if true, subtract 1 from right index (move to next left index)
      right--;
    } else {
      // if false, add 1 to left index (move to next right index)
      left++;
    }
  }
};
sumZero([ -4, -3, -2, -1, 0, 1, 2, 3, 6 ]); // -> [ -3, 3 ]
```

### 3.2.3 Sliding Window

#### The Idea:

This pattern involves creating a _window_ which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created).

This pattern is very useful for keeping track of a subset of data in an array/string etc.

#### Example:



**[⬆ Top](#📓-Table-of-Contents)**