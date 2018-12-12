/*  Напишите программу, которая выводит через console.log все числа от 1 до 100, с исключениями:
    * для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’
    * для чисел, делящихся на 5 (но не на 3) – ‘Buzz’
    * если число делится и на 3 и на 5, то вывести ‘FizzBuzz’
*/

var arr = [];

for (var i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 !== 0) {
    arr.push('Fizz');
  } else if (i % 5 === 0 && i % 3 !== 0) {
    arr.push('Buzz');
  } else if (i % 5 === 0 && i % 3 === 0) {
    arr.push('FizzBuzz');
  } else {
    arr.push(i);
  }
}

console.log('Task 3\n\t' + arr);