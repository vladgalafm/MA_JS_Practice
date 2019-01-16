var transport = {
  stop: null
};
var car = {
  stop: true
};
car.__proto__ = transport;

console.log(car.stop); // ? (1)
delete car.stop;
console.log(car.stop); // ? (2)
delete transport.stop;
console.log(car.stop); // ? (3)

/*
(1) - Searching property "stop" in car. Found, got in console "true"
(2) - Searching property "stop" in car. Didn't find, cause previously we'd deleted this property in car. Next we dive into
      __proto__, where we can find all properties of transport object. There we find property "stop". Got "null"
(3) - Cause we deleted property "stop" from transport object too, now we can't find this property neither in car, nor in its
      __proto__ (transport). Got "undefined"
*/