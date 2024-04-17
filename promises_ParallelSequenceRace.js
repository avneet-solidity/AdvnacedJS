const promisify = (item, delay) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(item), delay)
  );
};

const a = () => promisify('a', 500);
const b = () => promisify('b', 1500);
const c = () => promisify('c', 2500);

const parallel = async () => {
    const promises = [a(), b(), c()];
    const [output1, output2, output3] = await Promise.all(promises);
    return `Parallel is done: ${output1} ${output2} ${output3}`
}

const race = async () => {
    const promises = [a(), b(), c()];
    const output = await Promise.race(promises);
    return `Race is done: ${output}`;
}

const sequence = async () => {
    const promises = [a(), b(), c()];
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence is done: ${output1} ${output2} ${output3}`
}

sequence().then(console.log);
parallel().then(data => console.log(data));
race().then(data => console.log(data));

