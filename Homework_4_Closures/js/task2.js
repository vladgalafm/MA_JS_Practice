/*  Задание в 2 этапа:
    * Напишите функцию comparePassword, которая получает в аргументе пароль и возвращает функцию, которая в аргументе
      получает введенную пользователем строку и возвращает true, если строка совпадает с паролем и false, если нет.
    * Теперь доработайте функцию, чтобы она считала колличество попыток ввода пароля и если колличество превысит 5
      попыток, выводилось сообщение с предупреждением.
*/

var truePassword = 'admin';

var c1 = comparePassword(truePassword);

do {
  var password = prompt('Введите пароль', '');
  var call = c1(password);
} while (!call);

function comparePassword(truePass) {
  var count = 0;

  return function(pass) {
    count++;

    if (truePass === pass) {
      console.log('Пароль принят');
      return true;
    } else if (count > 5) {
      console.log('Это уже ' + count + '-я неверная попытка!');
      return false;
    } else {
      console.log('Пароль неверный');
      return false;
    }
  }
}