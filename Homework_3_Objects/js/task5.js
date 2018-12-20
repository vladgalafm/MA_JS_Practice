/*  Напишите функцию, которая возвращает сумму элементов массива
*/

var numbers = prompt('[Task 5] Введите через пробел несколько чисел, сумму которых вы хотите найти', '1 2 3 4 5 6 7 8');

console.log('Task 5\n\tСумма элементов массива: ' + arrayElementsSum(numbers.split(' ')));

function arrayElementsSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += +arr[i];
  }
  return sum;
}