
function goBack() {
  window.location.href = "signup-login.html";
}

function sendVerification() {
  const emailInput = document.getElementById('email');
  const popup = document.getElementById('pop-up-Message');
  const background = document.querySelector('.background');
  const editPass = document.querySelector('.edit-pass');
  if (emailInput.value.trim() === "") {
      alert("Please enter your email first.");
      return;
  }
  popup.textContent = "A verification code has been sent to your email.";

  popup.style.display = "block";
  background.classList.add('blur');
  editPass.classList.add('blur');

  setTimeout(() => {
      background.classList.remove('blur');
      editPass.classList.remove('blur');
      popup.style.display = "none";
      window.location.href = "forgot-pass2.html";
  }, 3000);
}
