/*  Напишите модуль “виртуального” слайдера. Он должен:

    1. Содержать в себе весь массив объектов показываемых картинок
       [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}];
    2. Содержать возможность переключать слайдер на следующий слайд.
    3. Содержать возможность переключать слайдер на предыдущий слайд.
    4. Содержать возможность переключать слайдер на слайд номер n.
    5. Содержать возможность получить информацию о текущем слайде.
    6. (*) Содержать возможность добавить новый слайд в любое место.
    7. (*) Содержать возможность удалить любой слайд.
*/

console.log('Task 6');

var slider = function() {
  var slides = [{image: 'car.jpg', alt: 'Car'}, {image: 'apple.jpg', alt: 'Apple'}, {image: 'choir.jpg', alt: 'Choir'}];

  function numberIsOk(n) {
    return ((n ^ 0) === n && n > 0 && n < slides.length + 1);
  }

  return {
    currentSlide: 1,

    toNextSlide: function() {
      if (this.currentSlide === slides.length) {
        this.currentSlide = 1;
        return slides[this.currentSlide - 1];
      }
      return slides[++this.currentSlide - 1];
    },

    toPreviousSlide: function() {
      if (this.currentSlide === 1) {
        this.currentSlide = slides.length;
        return slides[this.currentSlide - 1];
      }
      return slides[--this.currentSlide - 1];
    },

    toSlideNumber: function(n) {
      if (numberIsOk(n)) {
        this.currentSlide = n;
        console.log('Вы переключились на слайд №' + this.currentSlide);
        return slides[this.currentSlide - 1];
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    addSlide: function(image, alt, n) {
      if (numberIsOk(n)) {
        slides.splice(n - 1, 0, {image: image, alt: alt});
        console.log('Новый слайд успешно добавлен');
        return slides[n - 1];
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    deleteSlide: function(n) {
      if (numberIsOk(n)) {
        if (this.currentSlide >= n) {
          --this.currentSlide;
        }
        console.log('Слайд успешно удален');
        return slides.splice(n - 1, 1);
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    currentSlideInformation: function () {
      console.log('Текущий слайд:\n\tНомер: ' + this.currentSlide + '\n\timage: ' + slides[this.currentSlide - 1].image +
        '\n\talt: ' + slides[this.currentSlide - 1].alt);
    },

    getSlidesArray: function() {
      return slides;
    },
  };
}();

do {
  var a = prompt('[Task 6] Выберите действие:\n1 - Переключить слайдер на следующий слайд\n2 - Переключить слайдер на' +
    ' предыдущий слайд\n3 - Переключить слайдер на слайд №\n4 - Добавить новый слайд\n5 - Удалить слайд\n6 - ' +
    'Получить информацию о текущем слайде\n7 - Получить информацию о всех слайдах\nОтмена - Закончить работу со слайдером');

  switch (a) {
    case '1':
      slider.toNextSlide();
      console.log('Вы переключились на слайд №' + slider.currentSlide);
      break;
    case '2':
      slider.toPreviousSlide();
      console.log('Вы переключились на слайд №' + slider.currentSlide);
      break;
    case '3':
      a = +prompt('3: Введите номер слайда, на который желаете переключиться', '1');
      slider.toSlideNumber(a);
      break;
    case '4':
      a = prompt('Введите через пробел \'image\' и \'alt\' нового слайда, а также номер позиции, на которую вы этот ' +
        'слайд желаете вставить', 'kitten.jpg Kitten 2');
      a = a.split(' ');
      slider.addSlide(a[0], a[1], +a[2]);
      break;
    case '5':
      a = +prompt('Введите номер слайда, который вы желаете удалить');
      slider.deleteSlide(a);
      break;
    case '6':
      slider.currentSlideInformation();
      break;
    case '7':
      console.log('Информация о слайдах:');
      for (var i = 0; i < slider.getSlidesArray().length; i++) {
        console.log('\t№' + (i + 1) + ':\timage: ' + slider.getSlidesArray()[i].image + ', alt: ' +
          slider.getSlidesArray()[i].alt);
      }
      break;
    case null:
      alert('Вы закончили работу со слайдером');
      break;
    default:
      alert('Неверный ввод, попробуйте еще');
  }

  if (a === null) {
    break;
  }
} while (isNaN(+a) || a !== null);