const array2 = [5, 12, 8, 130, 44];
const found = array2.find(function(element) {
  return element > 10;
});

// Array.find(array2, (element) => {
//   return element > 10;
// });

console.log(found);
// expected output: 12

const array3 = [5, 12, 8, 130, 44];
function findFirstLargeNumber(element) {
  return element > 13;
}
console.log(array3.findIndex(findFirstLargeNumber));
// expected output: 3