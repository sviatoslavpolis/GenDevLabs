const seq = (...fns) => {
  return (arg) => {
    if (typeof arg === 'function') {
      return seq(...fns, arg);
    }
    return fns.reduceRight((phidi,  fn) => fn(phidi), arg);
  };
};
seq(x => x + 7)
   (x => x * 2)(5)

seq(x => x * 2)
   (x => x + 7)(5)

 let r = seq(x => x + 1)
   (x => x * 2)
   (x => x / 3)
   (x => x - 4)(7)

console.log(r);

function array() {
  const items = [];
  function get(index) {
    return items[index];
  }
  get.push = function (value) {
    items.push(value);
  };
  get.pop = function () {
    return items.pop();
  };
  return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1));
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop());
console.log(arr.pop()); 