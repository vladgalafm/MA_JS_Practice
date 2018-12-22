/*  Напишите функцию с независимым счетчиком, который будет считать колличество вызовов данной функции.
    Используйте замыкания.
*/

var c1 = counter();
var c2 = counter();
c1();
c1();
c2();
c2();
c1();
c2();
c2();

function counter() {
  var count = 0;

  return function() {
    console.log('Вызов функции №' + ++count);
  }
}