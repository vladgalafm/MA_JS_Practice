/*  Create function getName, that takes a 'name' from it's current context, and returns it to user. Then create an
    object, with 'name' key and call 'getName' in context of object, and then in context of global window.
*/

console.log('Task 1');

var obj = {
  name: 'Vasilii',
};

function getName() {
  return this.name;
}

obj.getName = getName;

console.log('obj.getName() output: ', obj.getName());
console.log('getName() output: ', getName());