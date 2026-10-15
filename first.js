'use strict';

function inc(n) {
    return n += 1
}
const a = 5;
const b = inc(a);
console.log({a, b})

function inc(num) {
    return num.n += 1
}
const obj = { n: 5 };
inc(obj);
console.dir(obj);
