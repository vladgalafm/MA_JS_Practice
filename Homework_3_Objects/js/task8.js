/*  Напишите функцию, которая получает на вход массив чисел типа [1, -2, 3, 4, -9, 6]. Задача – найти непрерывный
    подмассив, сумма элементов которого максимальна. И вернуть эту сумму.
*/

var numbers = prompt('[Task 8] Введите через пробел несколько чисел, среди которых нужно найти непрерывную подстроку,' +
  ' сумма элементов которой максимальна', '1 -2 3 4 -9 6');

console.log('Task 8\n\tСумма искомой подстроки: ' + subArrayMaximum(numbers.split(' ')));

function subArrayMaximum(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    var sum = 0;
    for (var j = i; j < arr.length; j++) {
      sum += +arr[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}