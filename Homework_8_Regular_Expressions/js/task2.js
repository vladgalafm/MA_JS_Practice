/*  Арифметическое выражение состоит из двух чисел и операции между ними, например: 1 + 2, 1.2 * 3.4, -3 / -6, -2 - 2.
    Список операций: +, -, *, /. Также могут присутствовать пробелы вокруг оператора и чисел.
    Напишите регулярное выражение, которое найдёт как всё арифметическое действие, так и (через группы) два операнда.
*/

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