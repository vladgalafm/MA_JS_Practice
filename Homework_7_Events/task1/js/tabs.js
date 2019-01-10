function switchTo(e, tab) {
  var tabs = document.querySelector('.js-tabs');
  var tabSwitch = tabs.querySelectorAll('.js-switch');
  var tabContent = tabs.querySelectorAll('.js-content');

  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('tabs__content--visible');
  }

  for (i = 0; i < tabSwitch.length; i++) {
    tabSwitch[i].classList.remove('tabs__switch--active');
  }

  tabs.querySelector('.js-content-' + tab).classList.add('tabs__content--visible');
  e.currentTarget.classList.add('tabs__switch--active');
}