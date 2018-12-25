/*  (function(food) {
	    if (food === 'cookies') {
		    console.log('More please :)');
	    } else {
		    console.log('Some food please :)');
	    }
    })('cookies');

    Переписать код выше через Function Expression
*/

console.log('Task 5');

var foodChoosing = function(food) {
  if (food === 'cookies') {
    console.log('\tMore please :)');
  } else if (food !== null) {
    console.log('\tSome food please :)');
  }
};

do {
  var a = prompt('[Task 5] Введите наименование еды либо нажмите Отмена, чтобы закончить');
  foodChoosing(a);
} while (a !== null);