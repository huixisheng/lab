// import 'core-js/modules/es6.array.find';
import 'core-js/fn/array/find';

const array2 = [5, 12, 8, 130, 44];
const found = array2.find(function(element) {
  return element > 10;
});