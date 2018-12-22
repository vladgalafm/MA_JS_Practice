/*  Реализуйте функцию, чтобы ее вызов multiA(a)(b) возвращал a*b. С использованием multiA создайте несколько функций
    multi3(x), multi4(x), которые возвращают, соответственно, 3*x, 4*x.
*/

multiA(365)(123);

var multi3 = multiA(3);
multi3(4);
multi3(25);

var multi4 = multiA(4);
multi4(4);
multi4(25);

function multiA(a) {
  return function(b) {
    console.log('Результат умножения ' + a + ' на ' + b + ': ' + a * b);
  }
}