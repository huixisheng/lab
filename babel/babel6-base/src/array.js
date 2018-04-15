// import 'core-js/fn/array/find';
import 'babel-polyfill';

const array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
division('Array.fill');

const array2 = [5, 12, 8, 130, 44];
const found = array2.find(function(element) {
  return element > 10;
});
console.log(found);
// expected output: 12
division('Array.find');

const array3 = [5, 12, 8, 130, 44];
function findFirstLargeNumber(element) {
  return element > 13;
}
console.log(array3.findIndex(findFirstLargeNumber));
// expected output: 3
division('Array.findIndex');


const array4 = ['a', 'b', 'c'];
const iterator1 = array4.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]

console.log('\n');
const a = ['a', 'b', 'c'];
const iterator = a.entries();

for (let e of iterator) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']

division('Array.entries');



const array5 = ['a', 'b', 'c'];
const iterator3 = array5.keys();
for (let key of iterator3) {
  console.log(key); // expected output: 0 1 2
}
division('Array.keys');


const arr = ['w', 'y', 'k', 'o', 'p'];
const iterator2 = arr.values();
console.log(iterator2);

for (let letter of iterator2) {
  console.log(letter);
}
division('Array.values');


function division(functionName) {
  console.log(functionName);
  console.log('\n');
  console.log('\n');
}