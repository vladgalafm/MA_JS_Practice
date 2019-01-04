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
      if (numberIsOk(n) || (n === slides.length + 1)) {
        if (this.currentSlide >= n && slides.length > 0) {
          ++this.currentSlide;
        }
        slides.splice(n - 1, 0, {image: image, alt: alt});
        console.log('Новый слайд успешно добавлен');
        return slides[n - 1];
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    deleteSlide: function(n) {
      if (numberIsOk(n)) {
        if (this.currentSlide >= n && this.currentSlide !== 1) {
          --this.currentSlide;
        }
        console.log('Слайд успешно удален');
        return slides.splice(n - 1, 1);
      } else {
        console.log('Ошибка: Неверный номер слайда');
      }
    },

    currentSlideInformation: function () {
      if (slides.length > 0) {
        console.log('Текущий слайд:\n\tНомер: '
          + this.currentSlide
          + '\n\timage: '
          + slides[this.currentSlide - 1].image
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