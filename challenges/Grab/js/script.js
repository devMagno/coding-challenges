const emailInput = document.querySelector('#e-mail')
const emailLabel = document.querySelector('label[for="e-mail"]')
const emailFeedback = document.getElementsByClassName('result')[0]

const passwordInput = document.querySelector('#password')
const passwordLabel = document.querySelector('label[for="password"]')
const passwordFeedback = document.getElementsByClassName('result')[1]

function verifyPasswordValue() {
  if (passwordInput.value.length >= 8) {
    passwordInput.style.borderColor = "#3CDC8C"
    passwordLabel.style.color = "#3CDC8C"
    passwordFeedback.innerHTML = ''
  }
  else {
    passwordInput.style.borderColor = "#FF5757"
    passwordLabel.style.color = "#FF5757"
    passwordFeedback.innerHTML = 'A senha deve ter no mínimo <b>8</b> caracteres!'
  }
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function verifyEmailValue() {
  if (validateEmail(emailInput.value)) {
    emailInput.style.borderColor = "#3CDC8C"
    emailLabel.style.color = "#3CDC8C"   
    emailFeedback.innerHTML = ''
  } else {
    emailInput.style.borderColor = "#FF5757"
    emailLabel.style.color = "#FF5757"    
    emailFeedback.innerHTML = 'Digite um email válido!'
  }
}