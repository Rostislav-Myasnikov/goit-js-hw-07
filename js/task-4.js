const res = {};
const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const userEmail = document.querySelector('[name="email"]');
  const userPassword = document.querySelector('[name="password"]');
  if (userEmail.value.trim() === '' || userPassword.value.trim() === '') {
    window.alert('All form fields must be filled in');
    return;
  }

  res.email = userEmail.value;
  res.password = userPassword.value;

  form.reset();
  console.log(res);
});
