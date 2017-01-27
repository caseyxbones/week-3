// Today is January 25th 2017


  // use your console to drive your experiments and thoughts while working

// OBJECTS

      //When you're working with an object you need to tell javascript what your
      // keys are and what their corresponding values are
      var obj = {"firstKey": "firstValue", "secondKey": "secondValue"};

      // if you use console log to look at these two variables you will see the
      // difference between an object and an array
      var person = {"firstName": "Nathan", "lastName": "Zimmerman"};
      var personArray = ["Nathan", "Zimmerman"];

// DOT NOTATION

      var obj = {}; // This is an empty object
      obj.color = red; // this will add a key and a value to the object
            // obj now looks like this:
            // var obj = {"color": "red"};

      // you can't use the name of a variable in dot NOTATION

      var apple = {"taste": "boring", "color": "red"};
      var keys = ["taste", "color"];

      // what if you want to access the value of a specific key?
      keys[0] = "taste";
        // apple.keys [0] = nothing
        // do this instead:
      apple[keys[0]] = "boring";

      // this super weird banana has the same keys and values as our apple
      var banana = {"taste": "boring", "color": "red"};
        // you would think you could set apple equal to banana
        // but you can't. so don't.
        // banana === apple will return false
        // banana === banana will return true

// FUNCTIONS

      // f(x) = function(argument)
      

      // you can have a function with multiple arguments
      // how might you simplify a loop? maybe with a multi-argument function.
      //here is an array with two items in it:
      var arr = [banana, apple];
      //let's pretend you want to print out the value of both banana and apple:
      var func = function(argument1, argument2){};
      var print = function(thing){console.log(thing);}; // this very basic function will print a thing

      // here is a way to create a little test for optional arguments
      var print = function(maybeThing){
        if (typeof maybeThing === "undefined"); {
          maybeThing = "nothing here";
        }
        console.log(maybeThing);
      };
      // don't write code that passes "undefined" into a function
      // keep required stuff in the front of your argument and optional stuff at the end
      // there's generally a better way to do this that we will maybe learn later

      // there should be a coherant idea around grouping your function's logic
      // functions describe an idea/thought about about your manipulation does
      // start breaking things down into thoughts
