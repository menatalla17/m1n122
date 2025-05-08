function back() {
  window.location.href = "forgot-pass1.html";
}

function savePassword() {
  const verificationCode = document.getElementsByClassName('bars')[0].value.trim();
  const newPassword = document.getElementById('newPassword').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  if (verificationCode === "") {
    alert("Please enter the verification code.");
    return;
  }

  if (newPassword === "" || confirmPassword === "") {
    alert("Please enter and confirm your new password.");
    return;
  }

  if (newPassword !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }

  alert("Password changed successfully!");
  window.location.href = "signup-login.html";
}

function togglePassword(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  toggle.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    toggle.textContent = show ? '🙈' : '👁️';
  });
}

togglePassword("newPassword", "toggleNewPass");
togglePassword("confirmPassword", "toggleConfirmPass");
