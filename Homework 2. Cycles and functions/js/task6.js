/*  Напишите функцию, которая выводит n-е число Фибоначчи. Сделайте 2-мя способами (с рекурсией и через цикл)
*/

var n = +prompt('[Task 6] Введіть індекс числа Фібоначчі', '8');

console.log('Task 6\n\tЧому дорівнює ' + n + '-е число Фібоначчі?');
cycleFibonacci(n);
console.log('\tРезультат реалізації з рекурсієй: ' + reverseFibonacci(n));

function cycleFibonacci(num) {
  var arr = [0,1]; // 0-е та 1-е числа Фібоначчі
  for (var i = 2; i <= num; i++) {
    var value = arr[i - 1] + arr[i - 2];
    arr.push(value);
  }
  console.log('\tРезультат реалізації з циклом: ' + arr[arr.length - 1]);
}

function reverseFibonacci(num) {
  if (num > 1) {
    return reverseFibonacci(num - 1) + reverseFibonacci(num - 2);
  } else {
    return num;
  }
}