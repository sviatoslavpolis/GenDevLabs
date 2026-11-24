function sum(...args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return result;
}

function sum(...args) {
  let result = 0;
  for (const x of args) {
    result += x;
  }
  return result;
}

function sum(...args) {
  let i = 0;
  let result = 0;
  while (i < args.length) {
    result += args[i];
    i++;
  }
  return result;
}

function sum(...args) {

  let i = 0;
  let result = 0;
  do {
    result += args[i];
    i++;
  } while (i < args.length);
  return result;
}

function sum(...args) {
  return args.reduce((acc, x) => acc + x, 0);
}
const a = sum(1, 2, 3) 
const b = sum(0) 
const c = sum()
const d = sum(1, -1, 1) 
const e = sum(10, -1, -1, -1) 

function max(matrix) {
  let result = -Infinity;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] > result) {
        result = matrix[i][j];
      }
    }
  }
  return result;
}

const m = max([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
console.log(m);
function ages(persons) {
  const result = {};
  for (const name in persons) {
    const person = persons[name];
    result[name] = person.died - person.born;
  }
  return result;
}

const persons = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
};
console.log(ages(persons));