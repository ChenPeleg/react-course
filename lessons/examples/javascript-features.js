// Object

const friends = ["Dor", "Stav", "Or"];

export const presonObject = {
  name: "chen",
  age: 44,
  myFreinds: friends,
};

// destructuring object
const person = { firsName: "John", age: 30 };
export const { age: myAge, color, firsName } = person;

// destructuring an array
const myFriends = ["Dor", "Or"];
export const [firstFriend, secondFriend] = myFriends;

// ternary expression
export const isAdult = myAge > 18 ? "yes" : "no";

// function as first class objects

const add = function (param1, param2) {
  return param1 + param2;
};

function callFuncAftetSecond(fn, value1, value2) {
  setTimeout(() => fn(value1, value2), 1000);
}
callFuncAftetSecond(add, 2, 4);

export const myArrowAdd5 = (par1) => par1 + (5 / 1000) * 9000;
[1, 2].map((v) => v * 2);
