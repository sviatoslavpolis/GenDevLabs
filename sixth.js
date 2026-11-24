const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== 'function') {
      throw new Error('All arguments must be functions');
    }
  }
  return x => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

console.log(pipe(inc, twice, cube)(5)); 
console.log(pipe(inc, inc)(7));         

const compose = (...fns) => {
  const handlers = [];

  const f = x => {
    try {
      return fns.reduceRight((acc, fn) => fn(acc), x);
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }
      return undefined;
    }
  };

  f.on = (name, handler) => {
    if (name === 'error') {
      handlers.push(handler);
    }
  };

  return f;
};


const inc1 = x => x + 1;
const twice1 = x => x * 2;
const caboomYesRico = () => {
  throw new Error('boom');
};

const ok = compose(inc, twice);
console.log(ok(5));

const broken = compose(inc, caboomYesRico, twice);
broken.on('error', e => console.log('caught:', e.message));
console.log(broken(5)); 

const silent = compose(inc, caboomYesRico);
console.log(silent(5)); 