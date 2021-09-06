<h1 align="left">Data Structures and Algorithms</h1>

### Introduction
The goal of this document is to provide a quick reference guide for the main concepts of Data Structures and Algorithms, along with simple to understand sample code.

For this reference guide all example code will be written in the JavaScript programming language.

###### If you found this guide helpful give me a follow and let me know! 🤙🏻
[![Twitter Badge](https://img.shields.io/badge/-Twitter-00acee?style=flat-square&logo=Twitter&logoColor=white)](https://twitter.com/home?lang=en)

#### References:
  * [Javascript Algorithms and Data Structures Masterclass](https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/)

## 📓 Table of Contents

1. [Big O Notation](#1-Big-O-Notation)
    * [Timing our code](#Timing-our-code)
    * [The problem with time](#The-problem-with-time)
    * [Big O logic](#Big-o-logic)
    * [Space complexity](#Space-complexity)

## 1. Big O Notation

__Big O Notation__ allows us to have a numeric representation of the performance of code. It allows us to talk formally about how the runtime of an algorithm grows as the input grows.

Well, why does this matter?

  * It's important to have a precise vocabulary to talk about how performant our code is
  * Useful for discussing trade-offs between different approaches
  * When your code slows down or crashes, identifying parts of the code that are inefficient can help us find pain points in our applications
  * It's important for interviews!

Big O is focused on the _big_ picture.

**[⬆ Top](#📓-Table-of-Contents)**

---

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

**[⬆ Top](#📓-Table-of-Contents)**

---

### The problem with time

  * Different machines will record different times
  * The same machine will record different times
  * For fast algorithms, speed measurements may not be precise enough

So how do we walk through our code and actually talk in general terms about which code is better without having to set up a new file and time it?

That's where Big O Notation comes in!

#### Counting operations not seconds:

Rather than counting _seconds_, which are so variable... Let's count the _number_ of simple operations the computer has to perform. This will remain constant no matter what computer we're on.

```js
function addUpTo(n) {
  return n * ( n + 1 ) / 2;
}
```
In the example above, we have 3 __operations__ going on (1 multiplication, 1 addition, and 1 division). Regardless if our number (`𝑛`) is 1 or 1 billion there will always only be 3 __operations__. 

This is __𝑂(1)__ (constant) which is very efficient.

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
In this example, since we're looping, where we have `total += i` the addition is not just 1 addition operation, it's `𝑛` number of operations. And same goes for the rest of the operators in this method, they will all run `𝑛` number of times. 

This is __𝑂(𝑛)__ (linear) which is extremely inefficient.

Depending on what we count, the number of operations can be as low as _2𝑛_ or as high as _5𝑛 + 2_. But regardless of the exact number, the number of operations grows roughly _proportionally_ with _𝑛_.

**[⬆ Top](#📓-Table-of-Contents)**

---

### Big O logic

Warning! Technically definition:

We say that an algorithm is __𝑂(f(𝑛))__ if the number of simple operations the computer has to do is eventually less than a constant times __f(𝑛)__, as __𝑛__ increases. Huh...

Basically, what it's doing is describing the relationship between the input (f(𝑛)) and the output or runtime (𝑛, 𝑛², 1).

Let's look as some options below:

##### `f(𝑛)`: a function with an input of '𝑛'
##### `f(𝑛) = 𝑛`: a function with an input of '𝑛' and an output of '𝑛'

Options:
  * f(𝑛) could be __linear__ (f(𝑛) = 𝑛)
  * f(𝑛) could be __quadratic__ (f(𝑛) = 𝑛²)
  * f(𝑛) could be __constant__ (f(𝑛) = 1)
  * f(𝑛) could be something entirely different

#### Linear:

__𝑂(𝑛)__

As n scales, the input (`f(n)`) and the runtime (`𝑛`) scales as well.

#### Quadratic:

__𝑂(𝑛²)__

As `𝑛` scales, the runtime (`𝑛²`) squares (square event).

It's important to note that an `𝑂(𝑛)` operation inside of an `𝑂(n)` operation gives us `𝑂(𝑛 * 𝑛)` or `𝑂(𝑛²)`.

#### Constant:

__𝑂(1)__

As `𝑛` scales, it doesn't really have an impact because runtime is always constant, which we simplify down to `1`.

#### Simplifying Big O:

Constants don't matter.
```
𝑂(2𝑂) -> 𝑂(𝑛)
𝑂(500) -> 𝑂(1)
𝑂(13𝑛²) -> 𝑂(𝑛²)
```

Smaller terms don't matter.
```
𝑂(𝑛 + 10) -> 𝑂(𝑛)
𝑂(1000𝑛 + 50) -> 𝑂(𝑛)
𝑂(𝑛² + 5𝑛 + 8) -> 𝑂(𝑛²)
```

#### Shorthands:

> Note: these rules won't always work, but are a helpful starting point.

1. Arithmetic operations (+, -, *, /) are constant
2. Variable assignment is constant, (x = 1) and (x = 1000) are roughly the same
3. Accessing elements in an array (by index) or object (by key) is constant
4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

**[⬆ Top](#📓-Table-of-Contents)**

---

### Space complexity

So far, we've been focusing on __time complexity__: 
  * How can we analyze the __runtime__ of an algorithm as the size of the inputs increase?

We can also use Big O Notation to analyze __space complexity__: 
  * How much additional memory do we need to allocate in order to run the code in our algorithm?

> Note: when we talk about space complexity, technically we'll be talking about auxiliary space complexity

__Auxiliary Space__: is the temporary space allocated by your algorithm to solve the problem, with respect to input size.

__Space Complexity__: is the total space used by your algorithm to solve the problem, with respect to input size. Note that the Space Complexity includes input size.

An example between the two would be:

If we compare Quicksort and Mergesort, they both have a space complexity of 𝑂(𝑛) and run at 𝑂(𝑛log𝑛) time, but Mergesort requires Auxiliary space of 𝑂(𝑛) while Quicksort requires Auxiliary space of 𝑂(1).

#### Rules of thumb:

  * Most primitives (booleans, numbers, undefined, null) are constant space
  * Strings require 𝑂(𝑛) space (where 𝑛 is the string length)
  * Reference types are generally 𝑂(𝑛), where 𝑛 is the length (for arrays) or the number of keys (for objects)

Let's look at an example:
```js
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[1];
  }
  return total;
};
sum([ 2, 6, 4, 9 ]); // -> 24
```

In the example above, no matter what the array length is, we have one variable called `total` (one number). And then we're looping through, but remember we're not concerned about the _time_, we also have a second declaration inside the for loop (`let i = 0`) which is another number. But that's it for _space_.

So again no matter what the size of the array is (𝑛), or in our case `arr`, as it grows it won't have an impact on the space that's taken up because we only have 2 variables (`total` and `i`). We aren't adding new variables based on the length, we're adding to the `total` variable, but not making a new one.

So this means we have _constant_ space (𝑂(1) space!).

Let's have a look at another example:
```js

```