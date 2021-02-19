const btnHamburguer = document.querySelector('#btnHamburger')
const header = document.querySelector('header.header')
btnHamburguer.addEventListener('click', () => {
  header.classList.toggle('open')
})