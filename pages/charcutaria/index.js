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
