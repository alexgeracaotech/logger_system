
const username = document.querySelector('#username-login');
const password = document.querySelector('#password-login');
const checkbox = document.querySelector('#checkbox-login');
const button = document.querySelector('#button-login');

button.addEventListener('click', (event) => {
  
  event.preventDefault();
  
  const usernameValue = username.value;
  const passwordValue = password.value;
  
  if (usernameValue === '' || passwordValue === '') {
    alert('Fill in all fields!');
    return;
  }

  const usernameSession = sessionStorage.getItem('username');
  const passwordSession = sessionStorage.getItem('password');
  
  if (usernameValue !== usernameSession || passwordValue !== passwordSession) {
    alert('Incorrect username or password.');
    return;
  }

  alert('Access released!');

});

checkbox.addEventListener('change', () => {
  
  const type = password.getAttribute('type');
  
  if (type === 'password') {
    password.setAttribute('type', 'text');
    return;
  }
  
  password.setAttribute('type', 'password');

});
