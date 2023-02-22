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

// Formulário

let form = document.getElementById('sheetdb-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(form.action, {
    method: 'POST',
    body: new FormData(document.getElementById('sheetdb-form')),
  })
    .then((response) => console.log('Formulário Enviado com Sucesso!'))
    .then(() => location.reload());
});

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 9) return phoneNumber;
  if (phoneNumberLength < 9) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 10)}`;
}
function phoneNumberFormatter() {
  const inputField = document.getElementById('tel');
  const formattedInputValue = formatPhoneNumber(inputField.value);
  inputField.value = formattedInputValue;
}
