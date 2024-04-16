//  CLOSURE = FUNCTION + LEXICAL ENVIRONMENT     

//in closures, when function a is called, it returns function b and popped out of execution context
//when function c tries to use variables of a and b, it gets access to it due to closure property
//when js sees closure, function a() and b() are not removed by garbage collector
//hence c() can use there variables

//CLOSURES are called LEXICAL SCOPPING

function a() {
  const num1 = 15;
  return function b() {
    const num2 = 10;
    return function c() {
      const num3 = 5;
      return `${num1} > ${num2} >  ${num3}`;
    };
  };
}
const op1 = a()()();
console.log(op1);

//use of closure: setTimeout function
//after call stack is emptied, event loop pushes setimeout resp from event queue to call stack
//though, there is no greet function in call stack
//setTimeout still uses its variables

const greet = (name) => {
  const say = "hi";
  return setTimeout(() => {
    console.log(`${say} ${name}`);
  }, 3000);
};
// greet("john");

//--------------------------------MEMORY EFFICIENT---------------------------------
const heavyDuty = (idx) => {
  const bigArray = new Array(8000).fill("duhh!!");
  console.log("array created");
  return bigArray[idx];
};

console.log(heavyDuty(23));
console.log(heavyDuty(234));

// every time bigArray is created and used, which leads to duplicate memory
// instead we can use closure to create array and retrieve from index value
const closureMemory = () => {
  const bigArray = new Array(8000).fill("yipee");
  console.log("array created");
  return (idx) => bigArray[idx];
};
const displayArray = closureMemory();
console.log(displayArray(329));
console.log(displayArray(789));
console.log(displayArray(356));

//---------------------------------ENCAPSULATION---------------------------------
const makeNuclearButton = () => {
  let timeWithoutDestruction = 0;
  const passTime = () => timeWithoutDestruction++;
  const totalPeaceTime = () => timeWithoutDestruction;
  const launch = () => {
    timeWithoutDestruction = -1;
    return "booom!!!";
  };
  setInterval(passTime, 1000);
  return {
    totalPeaceTime: totalPeaceTime,
  };
};
const ohhNo = makeNuclearButton();
//  console.log(ohhNo.launch());
//TYPE ERROR: launch can not be accesed due to closures as make nuclear is popped from callStack
console.log(ohhNo.totalPeaceTime());

//------------------------------QUESTION-----------------------------------
const arr = [3, 4, 5, 6];
for (var i = 0; i < arr.length; i++) {
  setTimeout(() => console.log(`index: ${i}`), 2000);
}
// o/p: 4,4,4,4
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => console.log(`index: ${i}`), 2000);
}
// o/p: 1,2,3,4
//we can solve it using let keyword, as it has block scope and var has global scope
//2nd way: using closures

for (var i = 0; i < arr.length; i++) {
  (function (idx) {
    setTimeout(() => console.log(`index: ${idx}`), 2000);
  })(i);
}
