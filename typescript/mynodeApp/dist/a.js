"use strict";
// const x:number = 1;
function greet(name) {
    return `Hello ${name}`;
}
console.log(greet('John'));
const t = {
    name: 'John',
    startDate: new Date(),
    department: 'IT'
};
console.log(t);
function filterUsers(users) {
    return users.filter(user => user.age >= 18);
}
const users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 18
    },
    {
        firstName: 'Jane',
        lastName: 'Doe',
        age: 17
    }
];
console.log(filterUsers(users));
function doSomething(keyPressed) {
}
doSomething('ArrowUp');
// doSomething("ArrowD");
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
function identity(arg) {
    return arg;
}
console.log(identity(1));
console.log(identity('Hello'));
function getFirstElement(arr) {
    return arr[0];
}
const e1 = getFirstElement(["harkirat", "singh"]);
console.log(e1.toUpperCase());
