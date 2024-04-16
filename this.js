const a = function () {
  console.log("c points to", this);
  const b = function () {
    console.log("c points to", this);
    const c = {
      name: function () {
        console.log("c points to", this);
      },
    };
    c.name();
  };
  b();
};
// a();

//this keyword is scoped dynamically, doesnt matter where it is written
//it matters where it is scoped
const obj = {
  name: "John",
  sing() {
    console.log("object.function: ", this);
    const self = this;
    const normalFunc = function () { //this points to window object as it was not called any object
      console.log("normalFunction: ", this);
      console.log("self = this: ", self);
    };

    const arrowFunc = () => {
      //Arrow function is bound lexically
      console.log("arrowFunction", this);
    };

    normalFunc();
    arrowFunc();
  },
};
obj.sing();
