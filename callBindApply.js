console.log("heal");

const wizard = {
  name: "Gandalf",
  health: 90,
  heal(num1, num2) {
    console.log((this.health += num1 + num2));
    return this.health += num1 + num2;
  },
};

const soldier = {
  name: "frodo",
  health: 30,
};

wizard.heal(20, 30);

//call and apply is used to borrow object methods
wizard.heal.call(soldier, 20, 30)     //passes parameters as p1, p2, p3...
wizard.heal.apply(soldier, [20, 30])  //parameters passed as an array

//bind is iused to save methods and call later with certain this keyword
const healSoldier = wizard.heal.bind(soldier, 10, 20);
healSoldier();


