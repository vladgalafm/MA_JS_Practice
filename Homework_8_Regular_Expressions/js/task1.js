console.log('Task 1');

do {
  var a = prompt('Введите строку с форматом времени hh:mm для проверки', 'Завтрак в 09:00');

  switch (a) {
    case null:
      console.log('You\'ve exited Task 1');
      break;
    default:
      timeSearcher(a);
  }
} while (a !== null);

function timeSearcher(str) {
  var match = /([0-1]\d|2[0-3]):([0-5]\d)/.exec(str);

  if (match === null) {
    console.log('Time has not been found');
  } else {
    console.log('Time - ' + match[0]);
  }
}