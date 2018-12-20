/*  Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
    Напишите функцию, которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.
*/

var string = prompt('[Task 9] Введите строку, чтобы узнать: палиндром она или нет', 'А роза упала на лапу Азора');

console.log('Task 9\n\tВведенная строка палиндром? ', isPalindrome(string));

function isPalindrome(str) {
  var newStr = str.toLowerCase().split(' ').join('');
  var strReverse = '';
  for (var i = newStr.length - 1; i >= 0; i--) {
    strReverse += newStr[i];
  }
  return (newStr === strReverse);
}