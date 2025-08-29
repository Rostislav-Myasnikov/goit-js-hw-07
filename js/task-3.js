const userNameOutput = document.querySelector('#name-output');
const userName = document.querySelector('#name-input');
const userNameInput = userName.addEventListener('input', event => {
  if (event.currentTarget.value.trim() === '') {
    userNameOutput.textContent = 'Anonymous';
  } else {
    userNameOutput.textContent = event.currentTarget.value;
  }
});
