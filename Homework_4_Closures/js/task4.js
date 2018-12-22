/*  Сделайте аналог задачи со счетчиком (1), но пусть функция возвращает объект с методом,
    который увеличивает значение счетчика.
*/

var c1 = counter();
var c2 = counter();
c1.getNext();
c2.getNext();
c1.getNext();
c2.getNext();
c1.getNext();
c1.getNext();
c2.getNext();
c2.getNext();

function counter() {
  var count = 0;

  return {
    getNext: function () {
      console.log('Вызов метода getNext №' + ++count);
    },
  }
}