export var myName = 'huixisheng';
export var myObj = { 'name': 'huixisheng' };

var name = 'huixisheng';
var age = 29;

export { name, age};

export function getBirthDay () {
  return '0510';
}

function getHeight() {
  return 161;
}

export {
  getHeight as v1,
  age as age1
}