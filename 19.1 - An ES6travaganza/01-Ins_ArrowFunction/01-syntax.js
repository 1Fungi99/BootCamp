// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};

// everything within the parentheses are the arguments that are passed through the function
var foo = () => {
  console.log("no arguments");
};

// if only one argument, no parentheses needed
var bar = arg1 => {
  console.log(arg1);
};

// simple one statement blocks of code do not require {}
var baz = arg1 => arg1 + 5;

// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
var greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);
