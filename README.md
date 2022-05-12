<h1 align="left">Data Structures and Algorithms</h1>

### Introduction

The goal of this document is to provide a quick reference guide for the main concepts of Data Structures and Algorithms. There will also be some examples that are, hopefully, simple to understand.

For this reference guide all example code will be written in **JavaScript**.

### Resources:

- [JavaScript Algorithms: Crash Course](https://www.youtube.com/watch?v=JgWm6sQwS_I&t=1779s): Academind
- [JavaScript Data Structures: Getting Started](https://www.youtube.com/watch?v=41GSinwoMYA): Academind

### 📓 Table of Contents

1. [Algorithms](#1-Algorithms)
2. [Data Structures](#2-Data-Structures)

## 1. Algorithms

An algorithm is a **sequence of steps** (instructions) to solve a **clearly defined problem**. The same steps always lead to the same solution of a problem (given the same inputs).

Every program is an algorithm. Or, every program consists of many smaller algorithms. As programmers we need to be able to solve problems and we need to be able to solve problems **efficiently**.

Well, what is the best possible solution? Most often times the best solution is the more performant solution (the one that takes the least amount of time). So in that case how do we measure performance?

Let's look at an example:

```js
function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

sumUp(4); // -> 10 (4 + 3 + 2 + 1)
```

For this algorithm a bigger input number leads to more loop iterations and hence the time it takes to execute this function increases. It seems to increase in a _Linear_ way so we have a _Linear_ growth function.

So in the end the factor by which the input increases (`n`) is the factor by which the time the function takes to run increases. It increases in a _Linear_ way.

This is how we judge performance when we talk about algorithms. We don't necessarily care about the concrete numbers, we care more about the trend, the function execution over time. This way we can make a statement about the performance of an algorithm based on the time it takes in relation to the inputs. This is called the **Time Complexity**.

In the example above we would say that the `sumUp` function has a **Linear Time Complexity**.

In addition to Linear Time Complexity, we also have **Constant Time Complexity**. This is when the number of inputs has no influence on the time this algorithm takes.

Let's see this in action with our `sumUp` function from above:

```js
function sumUp(n) {
  return (n / 2) * (1 + n);
}

sumUp(3); // -> 6 (3 + 2 + 1)
```

In this example, instead of a loop we have one singular mathematical equation. Because of this, regardless of the input (`n`) the execution time of the function is almost always the same. This is considered to have a **Constant Time Complexity**.

In addition to _Linear Time_ and _Constant Time_, other common measurements we have are **Quadratic Time** and **Cubic Time**.
