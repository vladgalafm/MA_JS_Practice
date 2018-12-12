/*  Напишите функцию, которая генерирует случайное целое число в промежутке между min и max
*/

var min = +prompt('[Task 5] Введіть мінімальне значення на проміжку: ', '-5');
var max = +prompt('[Task 5] Введіть максимальне значення на проміжку: ', '15');

randomGen(min, max);

function randomGen(a, b) {
  var val = Math.round(Math.random() * (b - a) + a);
  console.log('Task 5\n\tЗгенероване число в проміжку від ' + a + ' до ' + b + ': ' + val);
}