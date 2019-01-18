var modalWindow = document.querySelector('.js-modal-window');
var showModalWindow = document.querySelector('.js-show-modal-window');
var closeModalWindow = modalWindow.querySelector('.js-close-modal-window');

showModalWindow.onclick = function() {
  modalWindow.classList.add('modal-window--animation');
};

closeModalWindow.onclick = function() {
  modalWindow.classList.remove('modal-window--animation');
};
