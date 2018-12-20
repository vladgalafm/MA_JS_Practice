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
      console.log('\tОшибка: Зажигание и так включено');
    } else if (this.fuel > 0) {
      this.ignition = true;
      console.log('\tЗажигание включено');
    } else {
      console.log('\tОшибка: Сначала заправьте машину');
    }
  },

  startGoing: function() {
    if (!this.ignition) {
      console.log('\tОшибка: Включите вначале зажигание');
    } else if (this.moving) {
      console.log('\tОшибка: Машина и так едет');
    } else {
      this.moving = true;
      console.log('\tМашина ' + this.model + ' цвета ' + this.color + ' поехала!');
    }
  },

  stopGoing: function() {
    if (!this.moving) {
      console.log('\tОшибка: Машина и так стоит');
    } else {
      this.moving = false;
      console.log('\tМашина остановилась');
    }
  },

  turnOff: function() {
    if (!this.ignition) {
      console.log('\tОшибка: Зажигание и так выключено');
    } else if (this.moving) {
      console.log('\tОшибка: Сперва следует остановить машину');
    } else {
      this.ignition = false;
      console.log('\tЗажигание выключено');
    }
  },

  fillUp: function() {
    if (!this.moving) {
      this.fuel = 90;
      console.log('\tМашина заправлена');
    } else {
      console.log('\tОшибка: Вы не можете заправлять машину на ходу');
    }
  },
};

console.log('Task 2');

do {
  var a = prompt('[Task 2] Выберите действие:\n1 - Включить зажигание\n2 - Выключить зажигание\n3 - Начать движение\n' +
    '4 - Остановить машину\n5 - Заправить машину\n6 - Обнулить счетчик топлива (Alert! Это действие остановит машину ' +
    'и выключит двигатель)\nОтмена - Выйти из режима симуляции');

  switch (a) {
    case '1':
      car.turnOn();
      break;
    case '2':
      car.turnOff();
      break;
    case '3':
      car.startGoing();
      break;
    case '4':
      car.stopGoing();
      break;
    case '5':
      car.fillUp();
      break;
    case '6':
      car.fuel = 0;
      car.ignition = false;
      car.moving = false;
      console.log('\tТопливо на нуле! Машина заглохла и остановилась');
      break;
    case null:
      alert('Вы вышли из режима симуляции');
      break;
    default:
      alert('Неверный ввод, попробуйте еще');
  }

  if (a === null) {
    break;
  }
} while (isNaN(+a) || a !== null);