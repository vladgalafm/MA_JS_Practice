/*  Есть массив с результатами исследований образцов конфет [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59].
    Нужно сделать задачу в несколько этапов (данное задание выполняйте с импользованием цикла for) :
    1.1. Вывести в консоль сообщения о каждом результате: “Образец под номером 1 - результат - 43”
    1.2. Затем вывести в консоль сообщение “Всего проведено исследований: 13"
    1.3. Затем вывести в консоль сообщение “Наилучший результат: 60”
    1.4. Вывести в консоль сообщение “Образцы с наилучшими результатами под номерами: [5, 8, 11]”
    1.5. Затем оформить свой код, чтобы он содержал 2 функции: одна выполняет пункты 1 2 3; другая - 4
*/

var candiesResearch = [43, 23, 57, 54, 60, 41, 10, 60, 23, 47, 60, 12, 59];

console.log('Task 1');
resultsOfResearch(candiesResearch);
bestResults(candiesResearch);

function resultsOfResearch(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log('\tОбразец под номером ' + (i + 1) + ' - результат - ' + arr[i]);
  }

  console.log('\tВсего проведено исследований: ' + arr.length);
  console.log('\tНаилучший результат: ' + maxResult(arr));
}

function bestResults(arr) {
  var resultsIndex = [];
  var max = maxResult(arr);
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === max) {
      resultsIndex.push(i + 1);
    }
  }
  console.log('\tОбразцы с наилучшими результатами под номерами: ' + resultsIndex);
}

function maxResult(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
}