/*  Реализуйте функцию reverse(), которая обращает порядок следования символов переданной ей строки.
    Не пользуйтесь встроенной функцией reverse()
*/

var line = prompt('[Task 7] Введіть якусь строку', 'торобоан акортс Я');

stringReverse(line);

function stringReverse(str) {
  var newLine = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newLine += str[i];
  }
  console.log('Task 7\n\tВведена строка задом наперед: ' + newLine);
}