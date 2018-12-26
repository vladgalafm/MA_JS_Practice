/*  Create a function 'getDoubled' that will double a 'number' property in current context (depends on context) and
    multiply it to 2, then create function 'getDoubledTripled' that will use getDoubled function result and
    multiplied it to 3. Use bind || call || apply in this cases.
*/

var obj = {
  number: 8,
};

var obj2 = {
  number: 12,
};

//obj.getDoubled = getDoubled;

function getDoubled() {
  return 2 * this.number;
}

function getDoubledTripled() {
  return 3 * getDoubled.call(this);
}

console.log(getDoubled.call(obj));
console.log(getDoubledTripled.call(obj2));