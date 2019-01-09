var menu = document.querySelector('.js-menu');
var menuWidth = menu.offsetWidth; // достаем фактическую ширину блока меню
menu.style.left = -(menuWidth + 1) + 'px';

var showMenu = document.querySelector('.js-show-menu');
var closeMenu = menu.querySelector('.js-close-menu');

showMenu.onclick = function() {
  menu.style.visibility = 'visible';
  menu.style.left = '10px';
};

closeMenu.onclick = function() {
  menu.style.left = -(menuWidth + 1) + 'px';
  menu.style.visibility = 'hidden';
};