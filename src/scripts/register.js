
const name = document.querySelector('#name-register');
const username = document.querySelector('#username-register');
const password = document.querySelector('#password-register');
const checkbox = document.querySelector('#checkbox-register');
const button = document.querySelector('#button-register');

button.addEventListener('click', (event) => {

  event.preventDefault();

  const nameValue = name.value;
  const usernameValue = username.value;
  const passwordValue = password.value;

  if (nameValue === '' || usernameValue === '' || passwordValue === '') {
    alert('Fill in all fields!');
    return;
  }

  sessionStorage.setItem('name', nameValue);
  sessionStorage.setItem('username', usernameValue);
  sessionStorage.setItem('password', passwordValue);

  alert('Registration successful.');

  window.location.href = './login.html';

});

checkbox.addEventListener('change', () => {
  
  const type = password.getAttribute('type');
  
  if (type === 'password') {
    password.setAttribute('type', 'text');
    return;
  }
  
  password.setAttribute('type', 'password');

});
