console.log('Task 2');

do {
  var a = prompt('Введите строку с арифметической операцией над двумя операндами', 'Завтрак в   -3  * 3  часов');

  switch (a) {
    case null:
      console.log('You\'ve exited Task 2');
      break;
    default:
      findArithmeticOperation(a);
  }
} while (a !== null);

function findArithmeticOperation(str) {
  var match = /(-?\d+)\s*(\+|-|\*|\/)\s*(-?\d+)/.exec(str);

  if (match === null) {
    console.log('Arithmetic operation has not been found');
  } else {
    console.log('Received arithmetic operation: ' + match[1] + ' ' + match[2] + ' ' + match[3]);
    console.log('Result: ' + eval(match[1] + match[2] + match[3]));
  }
}