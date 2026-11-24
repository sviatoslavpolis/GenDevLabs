function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function removeElements(array, ...items) {
  items.forEach((item) => removeElement(array, item));
}

function unique(array) {
  return [...new Set(array)];
}
function difference(array1, array2) {
  const excluded = new Set(array2);
  return array1.filter((item) => !excluded.has(item));
}

const a = [1, 2, 3, 4, 5, 6, 7];
removeElements(a, 5, 1, 6);
console.log(a);

console.log(unique([2, 1, 1, 3, 2]));
console.log(difference([7, -2, 10, 5, 0], [0, 10]));