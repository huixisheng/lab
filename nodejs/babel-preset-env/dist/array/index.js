'use strict';

var array1 = [1, 2, 3, 4];
// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
division('Array.fill');

var array2 = [5, 12, 8, 130, 44];
var found = array2.find(function (element) {
  return element > 10;
});
console.log(found);
// expected output: 12
division('Array.find');

var array3 = [5, 12, 8, 130, 44];
function findFirstLargeNumber(element) {
  return element > 13;
}
console.log(array3.findIndex(findFirstLargeNumber));
// expected output: 3
division('Array.findIndex');

var array4 = ['a', 'b', 'c'];
var iterator1 = array4.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]

console.log('\n');
var a = ['a', 'b', 'c'];
var iterator = a.entries();

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = iterator[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var e = _step.value;

    console.log(e);
  }
  // [0, 'a']
  // [1, 'b']
  // [2, 'c']
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

division('Array.entries');

var array5 = ['a', 'b', 'c'];
var iterator3 = array5.keys();
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = iterator3[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var key = _step2.value;

    console.log(key); // expected output: 0 1 2
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

division('Array.keys');

var arr = ['w', 'y', 'k', 'o', 'p'];
var iterator2 = arr.values();
console.log(iterator2);

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = iterator2[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var letter = _step3.value;

    console.log(letter);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

division('Array.values');

function division(functionName) {
  console.log(functionName);
  console.log('\n');
  console.log('\n');
}