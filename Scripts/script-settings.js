document.querySelector(".back-btn").addEventListener("click", () => {
  window.history.back();
});


//toggle sliders that open and close el Account and Appearance
document.querySelectorAll(".toggle-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const sectionContent = btn.parentElement.nextElementSibling;
    sectionContent.classList.toggle("visible"); 

    if (sectionContent.classList.contains("visible")) {
      btn.textContent = "^"; 
    } else {
      btn.textContent = "v"; 
    }
  });
});

// Light/Dark Mode Toggle
document.getElementById("lightModeBtn").addEventListener("click", () => {
  document.body.classList.add("light");
  document.body.classList.remove("dark");
});

document.getElementById("darkModeBtn").addEventListener("click", () => {
  document.body.classList.add("dark");
  document.body.classList.remove("light");
});

// Change el Password:
let currentPassword = "1234"; // example password

document.getElementById("changePassBtn").addEventListener("click", () => {
  document.getElementById("authSection").classList.toggle("hidden");
});

document.getElementById("authSubmit").addEventListener("click", () => {
  const current = document.getElementById("currentPass").value;
  if (current === currentPassword) { // if password is Correct 
    document.getElementById("newPassSection").classList.remove("hidden");
  } else { //if its false
    alert("Incorrect password");
  }
});

document.getElementById("resetPassBtn").addEventListener("click", () => {
  const newPassword = document.getElementById("newPassword").value;
  if (newPassword) {
    currentPassword = newPassword; // Reset password
    alert("Password reset successful!");
    document.getElementById("authSection").classList.remove("hidden");
    document.getElementById("newPassSection").classList.add("hidden");
  } else {
    alert("Please enter a new password");
  }
});

// Payment Methods section
document.getElementById("paymentbtn").addEventListener("click", () => {
  document.getElementById("paymentsec").classList.toggle("hidden");
});

// Add Payment card>>
document.getElementById("addPaymentBtn").addEventListener("click", () => {
  // Clear the form fields before showing the form
  document.getElementById("cardNumber").value = "";
  document.getElementById("expiryDate").value = "";
  document.getElementById("cvv").value = "";
  document.getElementById("cardholderName").value = "";
  document.getElementById("paymentPassword").value = "";

  // Now toggle visibility of the cleared payment section
  document.getElementById("newPaymentSec").classList.toggle("hidden");
});

// Submit New Payment Form to add card
document.getElementById("submitPayment").addEventListener("click", () => {
  const paymentPassword = document.getElementById("paymentPassword").value;
  if (paymentPassword === currentPassword) {
    // Adds a new visa card dynamically
    const cardContainer = document.querySelector(".visa-cards");
    const visaCard = document.createElement("div");
    visaCard.classList.add("visa-card");
    visaCard.innerHTML = `
      <img src="icons/visa.svg" alt="Visa Logo" />
      <div class="visa-info">
        <p>Owner Name: ${document.getElementById("cardholderName").value}</p>
        <p>Card Number: ${document.getElementById("cardNumber").value}</p>
      </div>
    `;
    cardContainer.appendChild(visaCard);
    document.getElementById("newPaymentSec").classList.add("hidden");
  } else {
    alert("Incorrect password");
  }
});

// Logout button
document.getElementById("logoutBtn").addEventListener("click", () => { 
  const logoutModal = document.getElementById("logoutModal");
  logoutModal.classList.remove("hidden");  
  logoutModal.style.visibility = "visible"; 
  logoutModal.style.opacity = "1";  
});

// Logout confirmation
document.getElementById("confirmLogout").addEventListener("click", () => {
  window.location.href = "signup-login.html";
});

// Cancel logout
document.getElementById("cancelLogout").addEventListener("click", () => {
  const logoutModal = document.getElementById("logoutModal");
  logoutModal.classList.add("hidden");
});