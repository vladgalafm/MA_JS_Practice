/*  Напишите функцию, которая возвращает максимальный элемент массива
*/

var numbers = prompt('[Task 6] Введите через пробел несколько чисел, среди которых нужно найти максимальное', '' +
  '259.9 0xFF 3e2 -3e-5');

console.log('Task 6\n\tМаксимальный элемент массива: ' + arrayElementsSum(numbers.split(' ')));

function arrayElementsSum(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    max = Math.max(max, +arr[i]);
  }
  return max;
}