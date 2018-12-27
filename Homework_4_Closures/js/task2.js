/*  Задание в 2 этапа:
    * Напишите функцию comparePassword, которая получает в аргументе пароль и возвращает функцию, которая в аргументе
      получает введенную пользователем строку и возвращает true, если строка совпадает с паролем и false, если нет.
    * Теперь доработайте функцию, чтобы она считала колличество попыток ввода пароля и если колличество превысит 5
      попыток, выводилось сообщение с предупреждением.
*/

console.log('Task 2');

var truePassword = 'admin';

var c1 = comparePassword(truePassword);

do {
  var password = prompt('[Task 2] Введите правильный пароль');

  switch (password) {
    case null:
      alert('Вы закончили работу с Task 2');
      break;
    default:
      var call = c1(password);
  }
} while (password !== null && !call);

function comparePassword(truePass) {
  var count = 0;

  return function(pass) {
    count++;

    if (truePass === pass) {
      console.log('\tПароль принят');
      return true;
    } else if (count > 5) {
      console.log('\tЭто уже ' + count + '-я неверная попытка!');
      return false;
    } else {
      console.log('\tПароль неверный');
      return false;
    }
  }
}