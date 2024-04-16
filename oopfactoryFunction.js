//1. ---------------------Factory functions------------------------------
function createElf(name, weapon){
    return {
        name,
        weapon,
        attack (){
            return `${name} attacks with ${weapon}`;
        }
    }
}
// const jack = createElf('Jack', 'stones');
// const sam = createElf('Sam', 'fire');
// console.log(jack.attack());
// console.log(sam.attack());


//2. ----------------------Object.create()--------------------------------
const elfFunction = {
    attack(){
        return `${this.name} attacks with ${this.weapon}`;
    }
}

function createElf(name, weapon){
    const newElf = Object.create(elfFunction);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}
// const jack = createElf('Jack', 'stones');
// const sam = createElf('Sam', 'fire');
// console.log(jack.attack());
// console.log(sam.attack());


//3. --------------------Constructor Functions---------------------------
function Elf(name, weapon){
    this.name = name,
    this.weapon = weapon

}
Elf.prototype.attack = function (){
    return `${this.name} attacks with ${this.weapon}`;
}
const jack = new Elf('Jack', 'stones');
const sam = new Elf('Sam', 'fire');
console.log(jack.attack());
console.log(sam.attack());


//4. class
class Elf2{
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon
    }
    attack(){
        r eturn `${this.name} attacks with ${this.weapon}`;
    }
}