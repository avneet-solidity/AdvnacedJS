// 1. Pure functions

// 2. Idempotence - same i/p should give same o/p

// 3. imperative(how to do) v/s declarative(what to do)
const arr = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < arr.length; i++) {
  //IMPERATIVE
  console.log(arr[i]);
}
arr.forEach((item) => console.log(item)); //DECLARATIVE

// 4. Immutability - nothing outside the function should be changed
const obj = {
  name: "John",
};
const changeName = (obj) => {
  const obj2 = { ...obj };
  obj2.name = "Lia";
  return obj2;
};
const changedName = changeName(obj);
console.log(changedName);
console.log(obj);

// 5. Higher order function
// uses functions as variables, function can take or return a function

// 6. Closure

// 7. Currying
const mutilpy = (a, b) => a * b;
console.log(mutilpy(5, 4));
const curriedMultiply = (a) => (b) => a * b;
const multiplyBy5 = curriedMultiply(5); //first part of function is stored with one parameter ---> memory efficient
console.log(multiplyBy5(4));

//8. partialFunction
const multi = (a, b, c) => a * b * c;
const partialMultiplyBy10 = multi.bind(null, 10);
console.log(partialMultiplyBy10(2, 3));

//9. COMPOSE & PIPE
