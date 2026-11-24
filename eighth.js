function iterate(object, callback) {
  for (const key of Object.keys(object)) {
    callback(key, object[key], object);
  }
}
function store(value) {
  return () => value;
}
function contract(fn, ...types) {
  const argTypes = types.slice(0, -1);
  const resultType = types[types.length - 1];

  return (...args) => {
    args.forEach((arg, i) => {
      const type = argTypes[i];
      if (type && arg.constructor !== type) {
        throw new TypeError(`Argument ${i + 1} must be ${type.name}`);
      }
    });

    const result = fn(...args);

    if (result.constructor !== resultType) {
      throw new TypeError(`Result must be ${resultType.name}`);
    }

    return result;
  };
}
iterate({ a: 1, b: 2, c: 3 }, (key, value) => console.log({ key, value }));

const read = store(5);
console.log(read()); // 5

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
console.log(addNumbers(2, 3)); // 5

try {
  addNumbers(2, '3');
} catch (e) {
  console.log(e.name, e.message); // TypeError Argument 2 must be Number
}