var slider = document.querySelector('.js-slider');
var list = slider.querySelector('.js-slider__images-list');
var slideNumber = slider.querySelector('.js-slider__slide-number');

var images = sliderModule.getSlidesArray();

var toSlideInput = document.getElementById('to-n-slide');
toSlideInput.setAttribute('max', images.length);

var width = 600;

for (var i = 0; i < images.length; i++) {
  addNewImage(i);
}

slider.querySelector('.js-slider__switch--to-previous').onclick = function() {
  sliderModule.toPreviousSlide();
  goToCurrentSlide();
};

slider.querySelector('.js-slider__switch--to-next').onclick = function() {
  sliderModule.toNextSlide();
  goToCurrentSlide();
};

slider.querySelector('.js-slider__to-n-slide--input').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    sliderModule.toSlideNumber(+toSlideInput.value);
    goToCurrentSlide();
  }
});

slider.querySelector('.js-slider__button--add-slide').onclick = function() {
  var num = sliderModule.addSlide();
  images = sliderModule.getSlidesArray();
  toSlideInput.setAttribute('max', images.length);
  if (num) {
    addNewImage(num - 1);
  }
  goToCurrentSlide();
};

slider.querySelector('.js-slider__button--delete-slide').onclick = function() {
  var num = sliderModule.deleteSlide();
  images = sliderModule.getSlidesArray();
  toSlideInput.setAttribute('max', images.length);
  if (num) {
    list.removeChild(list.children[num - 1]);
  }
  goToCurrentSlide();
};

function addNewImage(i) {
  var newLi = document.createElement('li');
  newLi.className = 'js-slider__li';
  list.insertBefore(newLi, list.children[i]);
  var newImage = document.createElement('img');
  newImage.className = 'js-slider__image';
  newImage.setAttribute('src', images[i].src);
  newImage.setAttribute('alt', images[i].alt);
  newLi.appendChild(newImage);
}

function goToCurrentSlide() {
  list.style.marginLeft = -width * (sliderModule.currentSlide - 1) + 'px';
  slideNumber.innerHTML = sliderModule.currentSlide;
}