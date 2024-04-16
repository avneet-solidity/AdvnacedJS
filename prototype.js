//PROTOTYPE CHAIN: an object gets properties and methods of other object through prototype chain
//function & array are type of objects ---> they get there properties inhertited from object

const arr = [];
console.log(arr.__proto__);                 //array prototype
console.log(arr.__proto__.__proto__);       //base object prototype

const f = ()=>{};
console.log(f.__proto__);                   //function prototype
console.log(f.__proto__.__proto__);         //base object prototype

const obj = {};
console.log(obj.__proto__);                 //base object prototype
console.log(obj.__proto__.__proto__);       //NULL

//UNDEFINED: variable is declared, but nothing is initialized
//NULL: Nothing is there, not even a prototype for that variable

const dragon = {
    name: 'varys',
    fire: true,
    fight(){
        return 5;
    },
    sing(){
        if(this.fire){
            return `I am ${this.name} the breather of fire`
        }
    }
}
console.log(dragon.sing());
const lizard = {
     name: 'kiki',
     fight(){
        return 1;
     }
}
const lizardFire = dragon.sing.bind(lizard);
//console.log(lizardFire());          //undefined: lizard does not have property of fire:true

 
//INHERITING THE PROPERTIES OF ONE OBJECT TO ANOTHER
lizard.__proto__ = dragon;
console.log(lizard.sing());
console.log(lizard.fight());

console.log(dragon.isPrototypeOf(lizard));
for(let prop in lizard){
    console.log(prop);
}
console.log('---------------------');
for(let prop in lizard){
    if(lizard.hasOwnProperty(prop)){
        console.log(prop);
    }
}


//-----------------------CUSTOM DATE---------------------------

Date.prototype.lastYear = function() {
    console.log(this);
    return this.getFullYear() - 1;
}
const date = new Date().lastYear();

console.log(date);

//----------------------CUSTOM ARRAY MAP----------------------------
Array.prototype.map = function (){
    const arr = [];
    for(let i in this){
        arr.push(this[i] + '*');
    }
    return arr;
}
console.log([1,2,3,4,5].map());