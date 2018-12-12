/*  Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
    Не пользуйтесь встроенной функцией reverse()
*/

var line = prompt('[Task 7] Введіть якусь строку', 'торобоан акортс Я');

stringReverse(line);

function stringReverse(str) {
  var arr = str.split('');
  var reverse = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    reverse.push(arr[i]);
  }
  console.log('Task 7\n\tВведена строка задом наперед: ' + reverse.join(''));
}