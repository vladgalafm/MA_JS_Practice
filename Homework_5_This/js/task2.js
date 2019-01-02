/*  Create a function 'getDoubled' that will double a 'number' property in current context (depends on context) and
    multiply it to 2, then create function 'getDoubledTripled' that will use getDoubled function result and
    multiplied it to 3. Use bind || call || apply in this cases.
*/

console.log('Task 2');

var obj = {
  number: 8,
};

function getDoubled() {
  return 2 * this.number;
}

function getDoubledTripled() {
  return 3 * getDoubled.call(this);
}

console.log('getDoubled() result: ', getDoubled.call(obj));
console.log('getDoubledTripled() result: ', getDoubledTripled.call(obj));