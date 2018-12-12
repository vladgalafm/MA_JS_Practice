/*  Напишите функцию, которая будет считать количество вхождений буквы в строку (без учета регистра)
*/

var line = prompt('[Task 4] Введіть будь-яку строку', 'Forty four frameworks');
var symbol = prompt('[Task 4] Введіть символ, який збираєтесь шукати', 'f');

findSymbol(line, symbol);

function findSymbol(l, s) {
  line = l.toLowerCase();
  symbol = s.toLowerCase();
  var count = 0;
  for (var i = 0; i < line.length; i++) {
    if (symbol === line[i]) {
      count++;
    }
  }
  console.log('Task 4\n\tК-ть входжень символа ' + symbol + ' у введену строку: ' + count);
}