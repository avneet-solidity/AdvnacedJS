console.log("5: " + typeof(5));
console.log("true: " + typeof(true));
console.log("str: " + typeof('str'));
console.log("undefined: " + typeof(undefined));
console.log("symbol: " + typeof(Symbol('its me')));
console.log("null: " + typeof(null));
console.log("{}: " + typeof({}));
console.log("[]: " + typeof([]));
console.log("function: " + typeof(()=>{}));

//Assume that functions and arrays are type of object

function a(){
    return 'hahaha';
}
a.greet = 'haha';
console.log(a);
console.log(a.greet);

console.log(true.toString());
//true is a primitive type, but is converted to string using object method
//because Boolean() is an object present in js which automatically wraps true
//Boolean(true).toString

Array.isArray([1,2,3])
//since arrays in js are just objects, it is difficult to check if it os an array or object
//so we have Array class constructor and isArray property to check