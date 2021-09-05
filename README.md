<h1 align="left">Data Structures and Algorithms</h1>

### Introduction
The goal of this document is to provide a quick reference guide for the main concepts of Data Structures and Algorithms, along with simple to understand sample code.

###### If you found this guide helpful give me a follow and let me know! 🤙🏻
[![Twitter Badge](https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/home?lang=en)

#### References:
  * [Javascript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

## 📓 Table of Contents

1. [Big O Notation](#1-Big-O-Notation)

## 1. Big O Notation

__Big O Notation__ allows us to have a numeric representation of the performance of code. It allows us to talk formally about how the runtime of an algorithm grows as the input grows.

Well, why does this matter?

  * It's important to have a precise vocabulary to talk about how performant our code is
  * Useful for discussing trade-offs between different approaches
  * When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
  * It's important for interviews!

Big O is focused on the _big_ picture.

### Timing our code

Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number _n_. Let's look at two examples of some code:

Method 1: Big O = __O(n)__ (linear)
```js
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}

// test our algorithm
let t1 = performance.now();
addUpTo(1_000_000_000); // -> 500_000_000_067_109_000
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// -> Time Elapsed: 1.16610 seconds.
```

Method 2: Big O = __O(1)__ (constant)
```js
function addUpTo(n) {
	return n * (n + 1) / 2;
}

// test our algorithm
let time1 = performance.now();
addUpTo(1_000_000_000); // -> 500_000_000_067_109_000
let time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
// -> Time Elapsed: 0.00001 seconds.
```

You'll notice our second method is much faster (relative) than method 1. But this is not the most efficient way of tracking whether one code block is faster or better than another code block.

### The problem with time

  * Different machines will record different times
  * The same machine will record different times
  * For fast algorithms, speed measurements may not be precise enough

So how do we walk through our code and actually talk in general terms about which code is better without having to set up a new file and time it?

That's where Big O Notation comes in!

### Counting operations not seconds

Rather than counting _seconds_, which are so variable... Let's count the _number_ of simple operations the computer has to perform. This will remain constant no matter what computer we're on.

```js
function addUpTo(n) {
  return n * ( n + 1 ) / 2;
}
```
In the example above, we have 3 __operations__ going on (1 multiplication, 1 addition, and 1 division). Regardless if our number (`n`) is 1 or 1 billion there will always only be 3 __operations__. 

This is __O(1)__ (constant) which is very efficient.

Let's compare that to our other example from above:
```js
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
```
In this example, since we're looping, where we have `total += i` the addition is not just 1 addition operation, it's `n` number of operations. And same goes for the rest of the operators in this method, they will all run `n` number of times. 

This is __O(n)__ (linear) which is extremely inefficient.

Depending on what we count, the number of operations can be as low as _2n_ or as high as _5n + 2_. But regardless of the exact number, the number of operations grows roughly _proportionally_ with _n_.

### Big O logic

Warning! Technically definition:

We say that an algorithm is __O(f(n))__ if the number of simple operations the computer has to do is eventually less than a constant times __f(n)__, as __n__ increases. Huh...

Basically, what it's doing is describing the relationship between the input (f(n)) and the output or runtime (n, n², 1).

Let's look as some options below:

##### `f(n)`: a function with an input of 'n'
##### `f(n) = n`: a function with an input of 'n' and an output of 'n'

Options:
  * f(n) could be __linear__ (f(n) = n)
  * f(n) could be __quadratic__ (f(n) = n²)
  * f(n) could be __constant__ (f(n) = 1)
  * f(n) could be something entirely different

#### Linear

__O(n)__

As n scales, the input (f(n)) and the runtime (n) scales as well.

#### Quadratic

__O(n²)__

As n scales, the runtime (n²) squares (square event).

It's important to note that an __O(n)__ operation inside of an __O(n)__ operation gives us __O(n * n)__ or __O(n²)__.

#### Constant

__O(1)__

As n scales, it doesn't really have an impact because runtime is always constant, which we simplify down to 1.

### Simplifying Big O

Constants don't matter.
```
O(2n) -> O(n)
O(500) -> O(1)
O(13n²) -> O(n²)
```

Smaller terms don't matter.
```
O(n + 10) -> O(n)
O(1000n + 50) -> O(n)
O(n² + 5n + 8) -> O(n²)
```

#### Shorthands

> Note: these rules won't always work, but are a helpful starting point.

1. Arithmetic operations (+, -, *, /) are constant
2. Variable assignment is constant, (x = 1) and (x = 1000) are roughly the same
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop



**[⬆ Top](#📓-Table-of-Contents)**