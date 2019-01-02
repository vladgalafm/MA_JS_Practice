/*  Create constructor that will describe 'Car' from 3 Homework.
    Create several different objects from constructor 'Car'.
*/

console.log('Task 3');

var audi = new Car('audi', 2008, 'silver');
var kopeyka = new Car('ваз', 1974, 'red');

console.log(audi.model);
console.log(kopeyka.year);
kopeyka.turnOn();
kopeyka.startGoing();

function Car(model, year, color) {
  this.model = model;
  this.year = year;
  this.color = color;
  this.ignition = false;
  this.moving = false;
  this.fuel = 90;

  this.turnOn = function() {
    if (this.ignition) {
      console.log('\tОшибка: Зажигание и так включено');
    } else if (this.fuel > 0) {
      this.ignition = true;
      console.log('\tЗажигание включено');
    } else {
      console.log('\tОшибка: Сначала заправьте машину');
    }
  };

  this.turnOff = function() {
    if (!this.ignition) {
      console.log('\tОшибка: Зажигание и так выключено');
    } else if (this.moving) {
      console.log('\tОшибка: Сперва следует остановить машину');
    } else {
      this.ignition = false;
      console.log('\tЗажигание выключено');
    }
  };

  this.startGoing = function() {
    if (!this.ignition) {
      console.log('\tОшибка: Включите вначале зажигание');
    } else if (this.moving) {
      console.log('\tОшибка: Машина и так едет');
    } else {
      this.moving = true;
      console.log('\tМашина ' + this.model + ' цвета ' + this.color + ' поехала!');
    }
  };

  this.stopGoing = function() {
    if (!this.moving) {
      console.log('\tОшибка: Машина и так стоит');
    } else {
      this.moving = false;
      console.log('\tМашина остановилась');
    }
  };

  this.fillUp = function() {
    if (!this.moving) {
      this.fuel = 90;
      console.log('\tМашина заправлена');
    } else {
      console.log('\tОшибка: Вы не можете заправлять машину на ходу');
    }
  };
}