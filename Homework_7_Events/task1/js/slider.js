var slider = document.querySelector('.js-slider');
var list = slider.querySelector('.js-list');
var slideNumber = slider.querySelector('.js-slide-number');

var images = sliderModule.getSlidesArray();

var toSlideInput = document.getElementById('to-n-slide');
toSlideInput.setAttribute('max', images.length);

var width = 600; // ширина одного слайда в пикселях

setListWidth();

for (var i = 0; i < images.length; i++) {
  addNewImage(i);
}

slider.querySelector('.js-to-previous-slide').onclick = function() {
  sliderModule.toPreviousSlide();
  goToCurrentSlide();
};

slider.querySelector('.js-to-next-slide').onclick = function() {
  sliderModule.toNextSlide();
  goToCurrentSlide();
};

slider.querySelector('.js-to-n-slide').addEventListener('keydown', function(e) {
  if (e.keyCode === 13) {
    sliderModule.toSlideNumber(+toSlideInput.value);
    goToCurrentSlide();
  }
});

slider.querySelector('.js-add-slide').onclick = function() {
  var num = sliderModule.addSlide();
  if (num) {
    images = sliderModule.getSlidesArray();
    toSlideInput.setAttribute('max', images.length);
    setListWidth();
    addNewImage(num - 1);
    goToCurrentSlide();
  }
};

slider.querySelector('.js-delete-slide').onclick = function() {
  var num = sliderModule.deleteSlide();
  if (num) {
    images = sliderModule.getSlidesArray();
    toSlideInput.setAttribute('max', images.length);
    setListWidth();
    list.removeChild(list.children[num - 1]);
    goToCurrentSlide();
  }
};

function setListWidth() {
  list.style.width = width * images.length + 'px';
}

function addNewImage(i) {
  var newLi = document.createElement('li');
  newLi.className = 'slider__li';
  list.insertBefore(newLi, list.children[i]);
  var newImage = document.createElement('img');
  newImage.className = 'slider__image';
  newImage.setAttribute('src', images[i].src);
  newImage.setAttribute('alt', images[i].alt);
  newLi.appendChild(newImage);
}

function goToCurrentSlide() {
  list.style.marginLeft = -width * (sliderModule.currentSlide - 1) + 'px';
  slideNumber.innerHTML = sliderModule.currentSlide;
}