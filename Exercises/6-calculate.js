'use strict';

/* Call function from function in loop
- Implement function `average` with signature
  `average(a: number, b: number): number`
  calculating average (arithmetic mean).
- Implement function `square` with signature
  `square(x: number): number` calculating square of x.
- Implement function `cube` with signature
  `cube(x: number): number` calculating cube of x.
- Call `square` and `cube` in loop 0 to 9, pass results
  to function `average` on each iteration.
  Add calculation results to array and return this array
  from function `calculate`.

Call functions `square` and `cube` in loop, then pass their
results to function `average`. Print what `average` returns. */

function average(a, b) {
    return (a + b) / 2;
}
function square(x) {
    return x * x;
}
function cube(x) {
    return x * x * x;
}
function calculate() {
    let result = [];
    for (let i = 0; i <= 9; i++) {
        let s = square(i);
        let c = cube(i);
        result.push(average(s, c));
    }
    return result;
}
module.exports = { square, cube, average, calculate };
