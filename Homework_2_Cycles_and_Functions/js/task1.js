/*  Напишите цикл, который предлагает (prompt) ввести число, большее 100.
    Если посетитель ввел не верное число — попросить ввести еще раз, и так далее.
    Цикл должен спрашивать число пока либо посетитель не введет число, большее 100,
    либо не нажмет кнопку Cancel (ESC).
*/

do {
  var a = prompt('[Task 1] Введіть число, більше за 100');
  if (a === null) {
    a = 'ви не вибрали число';
    break;
  }
} while (isNaN(+a) || (a <= 100 && a !== null));

console.log('Task 1\n\tВведене число: ' + a);