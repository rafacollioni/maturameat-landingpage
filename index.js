const menu_btn = document.querySelector('.hamburguer'),
  mobile_nav = document.querySelector('.mobile-nav'),
  menuItens = document.querySelectorAll('.nav-anchor');

for (let i = 0; i < menuItens.length; i++) {
  menuItens[i].addEventListener('click', function menuClose() {
    menu_btn.classList.toggle('is-active');
    mobile_nav.classList.toggle('is-active');
  });
}

menu_btn.addEventListener('click', function menuToggle() {
  menu_btn.classList.toggle('is-active');
  mobile_nav.classList.toggle('is-active');
});

// Carrousel

const swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  direction: 'horizontal',
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
  },
  grabCursor: 'true',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
