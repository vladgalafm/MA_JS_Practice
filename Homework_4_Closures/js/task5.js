/*  (function(food) {
	    if (food === 'cookies') {
		    console.log('More please :)');
	    } else {
		    console.log('Some food please :)');
	    }
    })('cookies');

    Переписать код выше через Function Expression
*/

var foodChoosing = function(food) {
  if (food === 'cookies') {
    console.log('More please :)');
  } else {
    console.log('Some food please :)');
  }
};

foodChoosing('cookies');
foodChoosing('chocolate');