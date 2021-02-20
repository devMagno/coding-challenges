const btnHamburguer = document.querySelector('#btnHamburger')
const body = document.querySelector('body')
const header = document.querySelector('header.header')
const overlay = document.querySelector('div.overlay')
const mobileMenu = document.querySelector('.header__menu')

btnHamburguer.addEventListener('click', () => {
  if(header.classList.contains('open')) {
    body.classList.remove('no-scroll')
    header.classList.remove('open')
    overlay.classList.add('fade-out')
    overlay.classList.remove('fade-in')
    mobileMenu.classList.add('fade-out')
    mobileMenu.classList.remove('fade-in')
  }
  else {
    body.classList.add('no-scroll')
    header.classList.add('open')
    overlay.classList.add('fade-in')
    overlay.classList.remove('fade-out')
    mobileMenu.classList.add('fade-in')
    mobileMenu.classList.remove('fade-out')
  }
})