var sliderModule = function() {
  var slides = [{src: 'img/1.jpg', alt: '1'}, {src: 'img/2.jpg', alt: '2'}, {src: 'img/3.jpg', alt: '3'}, {src: 'img/4.jpg', alt: '4'}];

  function numberIsOk(n) {
    return ((n ^ 0) === n && n > 0 && n < slides.length + 1);
  }

  return {
    currentSlide: 1,

    toNextSlide: function() {
      if (!slides.length) {
        return;
      }
      if (this.currentSlide === slides.length) {
        this.currentSlide = 1;
      } else {
        this.currentSlide++;
      }
      console.log('Вы переключились на слайд №' + this.currentSlide);
    },

    toPreviousSlide: function() {
      if (!slides.length) {
        return;
      }
      if (this.currentSlide === 1) {
        this.currentSlide = slides.length;
      } else {
        this.currentSlide--;
      }
      console.log('Вы переключились на слайд №' + this.currentSlide);
    },

    toSlideNumber: function(n) {
      if (numberIsOk(n)) {
        this.currentSlide = n;
        console.log('Вы переключились на слайд №' + this.currentSlide);
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    addSlide: function() {
      var a = prompt('Введите через пробел \'src\' (путь к файлу) и \'alt\' нового слайда, ' +
        'а также номер позиции, на которую вы этот слайд желаете вставить', 'img/5.jpg 5 2');
      a = a.split(' ');
      if (numberIsOk(+a[2]) || (+a[2] === slides.length + 1)) {
        if (this.currentSlide >= a[2] && slides.length > 0) {
          this.currentSlide++;
        }
        slides.splice(+a[2] - 1, 0, {src: a[0], alt: a[1]});
        console.log('Новый слайд успешно добавлен');
        return +a[2];
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    deleteSlide: function() {
      var a = +prompt('Введите номер слайда, который вы желаете удалить');
      if (numberIsOk(a)) {
        if (this.currentSlide >= a && this.currentSlide !== 1) {
          this.currentSlide--;
        }
        slides.splice(a - 1, 1);
        console.log('Слайд успешно удален');
        return a;
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    currentSlideInformation: function () {
      if (slides.length > 0) {
        console.log('Текущий слайд:\n\tНомер: '
          + this.currentSlide
          + '\n\tsrc: '
          + slides[this.currentSlide - 1].src
          + '\n\talt: '
          + slides[this.currentSlide - 1].alt);
      } else {
        console.log('Ошибка: Слайды отсутствуют, получить информацию невозможно');
      }
    },

    getSlidesArray: function() {
      return slides;
    },
  };
}();