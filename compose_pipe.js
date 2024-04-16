const compose = (f, g) => (data) => f(g(data));
const pipe = (f, g) => (data) => g(f(data));
const multiplyBy3 = (num) => num*3;
const positive = (num) => Math.abs(num);

const multiply1 = compose(multiplyBy3, positive);
const multiply2 = compose(multiplyBy3, positive);

console.log(multiply1(-50));
console.log(multiply2(-50));

//compose(fn1, fn2, fn3)(data)  left to right
//pipe(fn3, fn2, fn1)(data)     right to left