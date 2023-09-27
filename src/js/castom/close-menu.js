'use strict';

let mainSwitch = document.querySelector('.main-nav__switch');
let mainNav = document.querySelector('.main-nav__list');
let mainNavItems = document.querySelectorAll('.main-nav__item');

let onActiveMenu = function () {
  let mainSwitchImg = document.querySelector('.main-nav__switch-img');

  if (mainSwitchImg.classList.contains('main-nav__switch-img--open')) {
    mainSwitchImg.classList.remove('main-nav__switch-img--open');
    mainSwitchImg.classList.add('main-nav__switch-img--close');
    mainNav.classList.remove('main-nav__list--open');
    mainNav.classList.add('main-nav__list--close');
    onItemClose()

  } else if (mainSwitchImg.classList.contains('main-nav__switch-img--close')) {
    mainSwitchImg.classList.remove('main-nav__switch-img--close');
    mainSwitchImg.classList.add('main-nav__switch-img--open');
    mainNav.classList.remove('main-nav__list--close');
    mainNav.classList.add('main-nav__list--open');
    onItemOpen();
  }
};

mainSwitch.addEventListener('mousedown', onActiveMenu);

let onItemClose = function() {
  mainNavItems.forEach(function (el,index) {

    setTimeout(function () {
      el.classList.add('main-nav__item--close');
    },600)
    el.classList.remove('main-nav__item--close');
  })
}

let onItemOpen = function() {
  mainNavItems.forEach(function (el,index) {
    setTimeout(function () {
      el.classList.remove('main-nav__item--close');
    },1500)
  })

}


















