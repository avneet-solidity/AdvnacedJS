// VARIABLES ARE PASSED BY VALUE
let a = 5;
b = a;
b = 6;
console.log("a = ", a);
console.log("b = ", b);

//OBJECTS INCLUDING ARRAYS ARE PASSED BY REFERENCE
const obj1 = {
  name: "John",
  age: 27,
};
obj2 = obj1;
obj3 = Object.assign({}, obj1); //creating new duplicate of object
obj4 = { ...obj1 }; //using spread operators
obj2.age = 99;
console.log(obj1);
console.log(obj2); //passed by reference
console.log(obj3); //Object.assign()
console.log(obj4); //spread operators


const arr1 = [1, 2, 3, 4];
const arr2 = arr1;
const arr3 = [].concat(arr1); //creating a new duplicate array
arr2.push(999);

console.log(arr1);
console.log(arr2); //passed by reference
console.log(arr3); //new address asigned

//SHADOW CLONING - DEEP CLONE
const person = {
  name: "jimmy",
  age: 27,
  address: {
    street: "Delhi",
  },
};
const personCopy = { ...person };
personCopy.address.city = "Jaipur"; //nested objects will change by changing it in any object

const person_deepCopy = JSON.parse(JSON.stringify(person)); //deep clone
person_deepCopy.address.city = "mumbai";
//we should avoid deep clone as it will take time and slow down our project

console.log(person);
console.log(person_deepCopy);

//const eq = Object.toJSON(obj1) == Object.toJSON(obj2)