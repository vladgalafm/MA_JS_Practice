/*  Напишите функцию с независимым счетчиком, который будет считать колличество вызовов данной функции.
    Используйте замыкания.
*/

console.log('Task 1');

var c1 = counter();
var c2 = counter();

do {
  var a = prompt('[Task 1] Выберите действие:\n1 - Вызвать функцию №1\n2 - Вызвать функцию №2\nОтмена - Закончить ' +
    'работу со счетчиками');

  switch (a) {
    case '1':
      c1();
      break;
    case '2':
      c2();
      break;
    case null:
      alert('Вы закончили работу с Task 1');
      break;
    default:
      alert('Неверный ввод, попробуйте еще');
  }
} while (isNaN(+a) || a !== null);

function counter() {
  var count = 0;

  return function() {
    console.log('\tВызов функции №' + ++count);
  }
}