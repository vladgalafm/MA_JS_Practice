/*  Сделайте аналог задачи со счетчиком (1), но пусть функция возвращает объект с методом,
    который увеличивает значение счетчика.
*/

console.log('Task 4');

var c1 = counter();
var c2 = counter();

do {
  var a = prompt('[Task 4] Выберите действие:\n1 - Вызвать функцию №1\n2 - Вызвать функцию №2\nОтмена - Закончить ' +
    'работу со счетчиками');

  switch (a) {
    case '1':
      c1.getNext();
      break;
    case '2':
      c2.getNext();
      break;
    case null:
      alert('Вы закончили работу с Task 4');
      break;
    default:
      alert('Неверный ввод, попробуйте еще');
  }
} while (isNaN(+a) || a !== null);

function counter() {
  var count = 0;

  return {
    getNext: function () {
      console.log('\tВызов метода getNext №' + ++count);
    },
  }
}