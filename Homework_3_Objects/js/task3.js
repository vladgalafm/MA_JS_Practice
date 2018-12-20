/*  Напишите функцию, которая получает на вход объект типа { Anna: 29, Misha: 35, Stepan: 1, Elena: 99 }
    и возвращает имя ученика с наиболее высоким баллом.
    UPD: Сделать так, чтобы выводило всех учеников с максимальным баллом, если таковых несколько
*/

var marks = {
  Anna: 29,
  Misha: 35,
  Stepan: 66,
  Kate: 59,
  Mary: 66,
  Elena: 80,
  Ruby: 77,
  Megan: 80,
  Poly: 80,
  Wendee: 79,
};

console.log('Task 3\n\tИмена учеников с наивысшим баллом: ' + highestMark(marks));

function highestMark(obj) {
  var max = 0;
  var studentNames = [];
  for (var key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      studentNames.splice(0, studentNames.length, key);
    } else if (obj[key] === max) {
      studentNames.push(key);
    }
  }
  return studentNames;
}