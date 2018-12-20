/*  Напишите функцию, которая возвращает массив, состоящий из всех возможных непрерывных подмассивов данного массива.
    Например: getSubArrays([1, 2, 3, 4]) => [ [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3], [2, 3, 4], [1, 2, 3, 4] ]
*/

var arr = [1, 2, 3, 4];

console.log('Task 7\n\tПодмассивы: ', getSubArrays(arr));

function getSubArrays(arr) {
  var result = [];
  for (var l = 1; l <= arr.length; l++) { // l - length of subarray
    for (var i = 0; i < arr.length - l + 1; i++) { // i - index of arr
      result.push(arr.slice(i, i + l));
    }
  }
  return result;
}