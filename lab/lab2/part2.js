/* =====================
# Lab 2, Part 2 — Underscore Each Function

## Introduction

Up to this point, we have used Javascript's for loop to loop through data. Underscore's _.each function provides us with an easy to read, simple way to accomplish the same goal.

## Task

Find two previous labs that use for loops. Rewrite these labs to use _.each.

## Syntax
You can see an example of how to use ._each in the underscore documentation: http://underscorejs.org/#each and in the code below.

var myArray = [1, 10, 100, 1000];

_.each(myArray, function(value, key, list) {
  console.log(value, key, list);
});
===================== */

// var lessThan20 = function();

var fizzBuzzFunction = function(item){
if (item%3 === 0 && item%5 === 0)
     { console.log('FizzBuzz');
   } else if (item%5 === 0) {
      console.log('Buzz');
    } else if (item%3 === 0) {
      console.log('Fizz');
    } else {console.log(item);
    }
};

var array = [1,2,3,4,5,6,7,8,9,10];

_.each(array,fizzBuzzFunction);
