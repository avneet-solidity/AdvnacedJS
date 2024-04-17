const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("stuff worked");
  } else {
    reject("Error!!! it broked!! ");
  }
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'HEHEHEHE');
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'YIPEEE');
})
const promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'EEEHHHHHHHGGGG');
})

Promise.all([promise, promise2, promise3, promise4])
.then(values => {
    console.log(values);
})

promise
.then((result) => result + "!!")
.then(result2 => `${result2} ??`)
.catch((error) => console.log('arrghhhh' + error))
.then((result3) => console.log(`${result3} !!`))
