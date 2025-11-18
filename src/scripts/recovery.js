
const username = document.querySelector('#username-recovery');
const newPassword = document.querySelector('#new-password-recovery');
const confirmNewPassword = document.querySelector('#confirm-new-password-recovery');
const checkbox = document.querySelector('#checkbox-recovery');
const button = document.querySelector('#button-recovery');

button.addEventListener('click', (event) => {

  event.preventDefault();

  const usernameValue = username.value;
  const newPasswordValue = newPassword.value;
  const confirmNewPasswordValue = confirmNewPassword.value;

  if (usernameValue === '' || newPasswordValue === '' || confirmNewPasswordValue === '') {
    alert('Fill in all fields!');
    return;
  }

  if (usernameValue !== sessionStorage.getItem('username')) {
    alert('User not found!');
    return;
  }

  if (newPasswordValue !== confirmNewPasswordValue) {
    alert('Mismatched passwords.');
    return;
  }

  sessionStorage.setItem('password', newPasswordValue);

  window.location.href = './login.html';

});

checkbox.addEventListener('change', () => {

  const type = newPassword.getAttribute('type');

  if (type === 'password') {
    newPassword.setAttribute('type', 'text');
    confirmNewPassword.setAttribute('type', 'text');
    return;
  }

  newPassword.setAttribute('type', 'password');
  confirmNewPassword.setAttribute('type', 'password');

});
