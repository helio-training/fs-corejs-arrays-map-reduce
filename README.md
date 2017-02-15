# Assignment: Filter, Map, and Reduce

> Working with arrays of information.

## Introduction

Engineers are both lazy and intuitive.  It's quite odd to join those two words together to describe an a typical engineer.  I suspect that patterns and practices emerge out out of necessity and frequency of encountering similar problems.  
   
Chances are when you encounter an array you'll filter, map, and reduce it to accomplish the problem that your trying to solve.  The pattern emerged and has become a preferred pattern to work with arrays.  

Arrays should be treated as immutable (when possible). We strive to not harm the original array when we need to filter, sort, manipulate, etc. This allows us to change the array's state in our applications and write code that simplify's our operations and make it easier to debug.

### An example of the pattern

To conceptualize the steps we can focus on this diagram below: 

![Filter, Map, Reduce](https://docs.mongodb.com/manual/_images/map-reduce.png)

_Borrowed from [MongoDB's Website](https://docs.mongodb.com/manual/core/map-reduce/)_

Ignoring the db.orders.mapreduce piece (near the top) the process of filter, map, reduce starts from right to left with an original array.


### Filtering

We filter an array's items to usually constrict the items to a subset of information that is needed to solve our problem.  In the example above, the original array is already pre-filtered.
  
We continue to refine the filtering by adding additional filters until we arrive at the subset of information needed to solve our problem.

Take for example an additional filter on our example above.  Using an additional filter the array down to a single user like `customer_id === 'A123`.  Each filter is restricting a subset of the array down until we arrive at the subset of information needed to start our mapping process.

[.filter() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)


### Mapping

The concept of mapping can be conceptualized as shaping the contained objects to have a more natural shape for our problem space.  Map functions iterate over all the values of an array, thus providing an opportunity to restructure the object.  Upon traversing the entire array a new array will be returned with them modified arrays.
 
To isolate what a map does, we can study the function in a singular example and observe when we could use a map function.
  
```js
const people = [
  { first: 'Tyler', last: 'Garlick', email: 'somewhere@domain.com', addresses: []},
  { first: 'Thor', last: 'Anderson', email: 'somewhere1@domain.com', addresses: []},
  { first: 'David', last: 'Preece', email: 'somewhere2@domain.com', addresses: []}
];

const result = people.map(person => {
  return {
    name: `${person.first} ${person.last}`,
    email: person.email
  }
});

console.log(result);

// This is what the result would look like
// 
// result = [
//   { name: 'Tyler Garlick', email: 'somewhere@domain.com' },
//   { name: 'Thor Anderson', email: 'somewhere1@domain.com' },
//   { name: 'David Preece', email: 'somewhere1@domain.com' }
// ]
```

The map function has the ability to simplify or complicate an object/array/etc. As the developer, your in control of structuring the data to a format that is condusive to your problem.  In the example above the new object was simplified by combining `first` and `last` omitting the `addresses` array.

[.map() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

### Reducing

The last step is reducing (if necessary) the output.  Simply, the reduction function will take something like:

```js
const people = [{ name: 'Tyler Garlick', email: 'somewhere@domain.com' }];

people.reduce((prev, current) => current, {}) // { name: 'Tyler Garlick', email: 'somewhere@domain.com' }
```

Breaking it out of the array and giving us a simple object. Reducing an array is doing an aggregate operation on the array.  The aggregation will result in a single value.  Useful for summation.

[.reduce() Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)


### Everything is optional

Each process as defined above are optional in the pattern.  This mean you could filter, and reduce, or just map, or just reduce or any other combination.  It really depends on the problem your trying to solve.

### You found an array? 

> Immediately think, do I need to: filter, map, or reduce it?
 
As with any other problem there are various ways to solve it. Remember that this pattern has emerged because it is simple, elegant, and logical.  Forcing yourself to think this way takes time and effort.  Resist using traditional looping mechanisms `for`, `while`, `for...of`, etc.


## Assignment

We'll be using data from another card game called `Magic: the Gathering`.  You can find information about our data [here](https://mtgjson.com/documentation.html).

