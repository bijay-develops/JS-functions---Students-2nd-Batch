// Arrow functions allows a short syntax for writing function expressions.
// You don't need the function keyword, the return keyword, and the curly brackets.

const x = (x, y) => x * y;
document.getElementById("demo1").innerHTML = x(5, 5);

// Arrow functions do not have their own this. They are not well suited for defining object methods.
// Arrow functions are not hoisted. They must be defined before they are used.
// Using const is safer than using var, because a function expression is always constant value.
// You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them:
const y = (x, y) => { return x * y };
document.getElementById("demo2").innerHTML = x(5, 6);

