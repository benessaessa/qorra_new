$(document).ready(function(){
  jQuery(function() {
    AOS.init();
});
jQuery(window).on('load', function() {
    AOS.refresh();
});
    $('.nav-button').click(function(){
      $('body').toggleClass('nav-open');
    });
 
 

    /* First option in SELECT tag need to be BLANK */
/*$('.form-control').on('focus blur', function (e) {
     $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
}).trigger('blur');*/

/* First option in SELECT tag don't need to be BLANK */

(function() {
  
  var Menu = (function() {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('.menu');
    var menuList = document.querySelector('.menu__list');
    var menuContainer = document.querySelector('.nav-container');
    var menuItems = document.querySelectorAll('.menu__item');
    
    var active = false;
    
    var toggleMenu = function() {
      if (!active) {
        menu.classList.add('menu--active');
        menuContainer.classList.add('menuContainer');
        menuList.classList.add('menu__list--active');

        burger.classList.add('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.add('menu__item--active');
        }
        
        active = true;
      } else {
        menu.classList.remove('menu--active');
        menuList.classList.remove('menu__list--active');
        menuContainer.classList.remove('menuContainer');
        burger.classList.remove('burger--close');
        for (var i = 0, ii = menuItems.length; i < ii; i++) {
          menuItems[i].classList.remove('menu__item--active');
        }
        
        active = false;
      }
    };
    
    var bindActions = function() {
      burger.addEventListener('click', toggleMenu, false);
    };
    
    var init = function() {
      bindActions();
    };
    
    return {
      init: init
    };
    
  }());
  
  Menu.init();
  
}());

  });