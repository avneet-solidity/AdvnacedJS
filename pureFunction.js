//PURE FUNCTIONS ARE FUNCTIONS WITH
// 1. No SideEffects
// 2. for same i/p ---> o/p should be same - IDEMPOTENCE


//These are pure functions because nothing outside the function is changed
const arr = [1, 2, 3, 4, 5];
const removeElement = (arr) => {
    const newArr = [].concat(arr);
    newArr.pop();
    return newArr;
}
const multiplyBy2 = () => {
    return arr.map((num) => num*2);
}
const arr2 = removeElement(arr);
console.log(arr2);
const arr3 = multiplyBy2(arr);
console.log(arr3);
console.log(arr);


//Not a pure function - as console of the window is being changed
function greet() {
    console.log('Hello');
}
greet();

//Refferential Transparency - same i/p give same o/p
function a(num1, num2){
    return num1+num2;
}
function b(num){
    return num*2;
}
const result = b(a(3,4)); //replace with ---> b(7);
console.log(result);