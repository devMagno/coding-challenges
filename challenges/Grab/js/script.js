const passwordInput = document.querySelector('#password')
const passwordLabel = document.querySelector('label[for="password"]')
const passwordFeedback = document.getElementsByClassName('result')[1]

function verifyPasswordValue() {
  if (passwordInput.value.length < 8) {
    passwordInput.style.borderColor = "#FF5757"
    passwordLabel.style.color = "#FF5757"
    passwordFeedback.innerHTML = 'A senha deve ter no mínimo <b>8</b> caracteres!'
  }
  else {
    passwordInput.style.borderColor = "#3CDC8C"
    passwordLabel.style.color = "#3CDC8C"
    passwordFeedback.innerHTML = ''
  }
}
