/*  Есть объект Автомобиль.
    * Добавьте ему свойства: марка, год выпуска, пробег, цвет
    * Добавьте метод, который включает зажигание
    * Добавьте метод, который начинает движение, но прежде проверяет, включено ли зажигание.
      Если нет - выводит сообщение “Включите вначале зажигание“.
      Если да - выводит сообщение “Машина _____ марки ______ цвета поехала!”
    * Добавьте метод, который останавливает движение и выключает зажигание, но прежде проверяет, было ли
      включено зажигание и выводит одно из сообщений - “Зажигание и так выключено” или “Машинка остановилась”
    * Добавьте свойство “количество бензина”
    * Добавьте в метод, который включает зажигание проверку, есть ли бензин в баке. Если нет - выведите
      предупреждение, что нужно заправить автомобиль.
    * Добавьте метод, который заправляет автомобиль
*/

var car = {
  model: 'audi',
  year: 2008,
  mileage: 54340,
  color: 'silver',
  ignition: false,
  moving: false,
  fuel: 90,
  turnOn: function() {
    if (this.ignition) {
      console.log('Ошибка: Зажигание и так включено');
    } else if (this.fuel > 0) {
      this.ignition = true;
      console.log('Зажигание включено');
    } else {
      console.log('Ошибка: Сначала заправьте машину');
    }
  },
  startGoing: function() {
    if (!this.ignition) {
      console.log('Ошибка: Включите вначале зажигание');
    } else if (this.moving) {
      console.log('Ошибка: Машина и так едет');
    } else {
      this.moving = true;
      console.log('Машина ' + this.model + ' цвета ' + this.color + ' поехала!');
    }
  },
  stopGoing: function() {
    if(!this.moving) {
      console.log('Ошибка: Машина и так стоит');
    } else {
      this.moving = false;
      console.log('Машина остановилась');
    }
  },
  turnOff: function() {
    if (!this.ignition) {
      console.log('Ошибка: Зажигание и так выключено');
    } else if (this.moving) {
      console.log('Опасно! Сначала остановите машину');
    } else {
      this.ignition = false;
      console.log('Зажигание выключено');
    }
  },
  fillUp: function() {
    this.fuel = 90;
    console.log('Машина заправлена');
  },
};

console.log(car);
car.turnOff();
car.stopGoing();
car.startGoing();
car.turnOn();
car.turnOff();
car.turnOn();
car.startGoing();
car.startGoing();
car.turnOff();
car.stopGoing();
car.turnOn();
car.turnOff();
car.fuel = 0;
car.turnOn();
car.fillUp();
car.turnOn();