/*  Напишите функцию, перемешивающую элементы массива в случайном порядке
*/

var numbers = prompt('[Task 4] Введите через пробел несколько чисел, порядок которых хотим поменять', '1 2 3 4 5 6 7 8');

console.log('Task 4\n\tНовый массив: ' + arrayElementsRandomOrder(numbers.split(' ')));

function arrayElementsRandomOrder(arr) {
  return arr.sort(function() {
    return Math.random() - 0.5;
  });
}