const wrapper = document.getElementById('formWrapper');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');
const SignUp = document.getElementById('SignUpID');
const Login = document.getElementById('LoginID');

toSignup.addEventListener('click', () => {
  wrapper.style.transform = 'translateX(0)';
});

toLogin.addEventListener('click', () => {
  wrapper.style.transform = 'translateX(-50%)';
});

function togglePassword(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  toggle.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password'; // if showed >>make it password, if not showed >> make it text 
    toggle.textContent = show ? '🙈' : '👁️';
  });
}

togglePassword('signupPass', 'toggleSignup');
togglePassword('loginPass', 'toggleLogin');

function validateForm(formInputs) { 
  for (let i = 0; i < formInputs.length; i++) {
    const input = formInputs[i];
    const error = document.getElementById(input.id + 'Error');

    if (input.value.trim() === "") {
      error.classList.add('visible');
      input.focus();
      return false;
    } else {
      error.classList.remove('visible');
    }
  }
  return true;
}


function showPopup(username) {
  const popup = document.getElementById("popup");
  const nameSpan = document.getElementById("popupName");

  nameSpan.textContent = username;
  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
    setTimeout(() => {
      window.location.href = "Menu.html";
    }, 500);
  }, 3000);
}

SignUp.addEventListener("click", (event) => {
  event.preventDefault();
  const signupInputs = SignUp.closest('form').querySelectorAll('input');
  if (validateForm(signupInputs)) {
    const username = signupInputs[0].value.trim();
    showPopup(username);
  }
});

Login.addEventListener("click", (event) => {
  event.preventDefault();
  const loginInputs = Login.closest('form').querySelectorAll('input');
  if (validateForm(loginInputs)) {
    window.location.href = "Menu.html";
  }
});


