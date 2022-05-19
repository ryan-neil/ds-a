<h1 align="left">Data Structures and Algorithms</h1>

The goal of this document is to provide a quick reference guide for the main concepts of Data Structures and Algorithms. There will also be some examples that are, hopefully, simple to understand.

For this reference guide all example code will be written in **JavaScript**.

### Resources:

- [JavaScript Algorithms: Crash Course](https://www.youtube.com/watch?v=JgWm6sQwS_I&t=1779s): Academind
- [JavaScript Data Structures: Getting Started](https://www.youtube.com/watch?v=41GSinwoMYA): Academind
- [Big O Notation: Full Course](https://www.youtube.com/watch?v=Mo4vesaut8g): FCC

### 📓 Table of Contents

1. [Data Structures](#1-Data-Structures)
   - [1.1](#11-Arrays-and-Strings): Arrays and Strings
2. [Algorithms](#2-Algorithms)

### TODO Checklist

Data Structures:

- [ ] Arrays and Strings
- [ ] Linked Lists
- [ ] Stacks and Queues
- [ ] Trees and Graphs

Concepts and Algorithms:

- [ ] Bit Manipulation
- [ ] Brain Teasers
- [ ] Object Oriented Design
- [ ] Recursion
- [ ] Sorting and Searching

# 1. Data Structures

### Resources

- [Data Structures - What Is A Data Structure](https://www.youtube.com/watch?v=vXTHprQp404&list=PLKsqsAxLw3B-JZS6q3X27-X7nNzeK7XhA): Code Fantasy

## 1.1 Arrays and Strings

Arrays, which are sometimes called "lists" organize items sequentially (one after another in memory). Arrays are the simplest and most widely used data structure.

When it comes to interviews and Strings, we can use a simple "trick". We can simply treat Strings just like Arrays. Stings are basically just arrays of characters.

So for example, we may get a challenge to reverse a string. What we should be thinking is to convert the string into an array, iterate over the array of characters with a `split()` method and then just returning it as a string after we have finished the operations with them.

```js
const groceryArray = ['Juice', 'Apple', 'Cheese', 'Eggs', 'Bread'];
```

### Resources

- [Arrays and Strings - Data Structures](https://www.youtube.com/watch?v=bGCTFXshum0&list=PLKsqsAxLw3B9BbCAiDAcbPeY_wam5HKVW): Code Fantasy

### Array Method Time Complexity:

- Lookup: O(1)
- Push: O(1)
- Insert: O(n)
- Delete: O(n)

### Implementation:

Check out the implementation of an array data structure in the [CodeSandbox](https://codesandbox.io/s/array-imp-pjje4k).

### Pros and Cons

Pros:

- Fast lookups
- Fast push/pop (adding things to the end or taking things out of the end)
- Ordered

Cons:

- Slow inserts/deletes (items need to be shifted)
- Fixed size (if using static array)

## 1.2 Linked Lists

### Resources

- [Linked Lists - Data Structures](https://www.youtube.com/watch?v=lezGdMfXgJo&list=PLKsqsAxLw3B87LrghOy4tcXru8lQGPWFa): Code Fantasy
