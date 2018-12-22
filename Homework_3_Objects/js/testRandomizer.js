var n = 1e6; // test iterations
var array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log('Полученный на вход массив: ', array);
console.log('Количество итераций: ', n);

randomFunctionTests(n);

function arrayElementsRandomOrder(arr) {
  return arr.sort(function() {
    return Math.random() - 0.5;
  });
}

function randomFunctionTests(n) {
  var iterationArr = [];
  for (var i = 0; i < n; i++) {
    var arrayCopy = array.slice();
    iterationArr.push(arrayElementsRandomOrder(arrayCopy));
  }
  var statsArr = [];
  for (i = 0; i < array.length; i++) {
    statsArr[i] = [];
    for (var j = 0; j < array.length; j++) {
      statsArr[i].push(0);
    }
  }
  for (i = 0; i < n; i++) {
    for (j = 0; j < array.length; j++) {
      statsArr[iterationArr[i][j] - 1][j]++;
    }
  }
  console.log('РАСПРЕДЕЛЕНИЕ ВЕРОЯТНОСТЕЙ');
  for (i = 0; i < array.length; i++) {
    console.log((i + 1) + '-й элемент попадет на позицию');
    for (j = 0; j < array.length; j++) {
      console.log('\t№' + (j + 1) + ': ' + statsArr[i][j] * 100 / n + '%');
    }
  }
}