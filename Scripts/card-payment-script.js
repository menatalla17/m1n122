const correctPassword = "1234";
const correctCode = "5678";

document.getElementById("submitPaymentBtn").addEventListener("click", () => {
  const passwordInput = document.getElementById("cardPassword").value;

  if (passwordInput === correctPassword) {
    // Authentication
    document.getElementById("paymentForm").classList.add("hidden");
    document.getElementById("authForm").classList.remove("hidden");
    alert("A code has been sent to your phone (ex: 5678)");
  } else {
    alert("Incorrect password. Try again.");
  }
});

document.getElementById("verifyCodeBtn").addEventListener("click", () => {
  const codeInput = document.getElementById("authCode").value;

  if (codeInput === correctCode) {
    // Get orders from localStorage
    const orders = JSON.parse(localStorage.getItem("cartItems")) || [];

    if (orders.length > 0) {
      // Save orders
      saveToPastOrders(orders);
    } else {
      alert("No items in the cart to save.");
      return;
    }

    // Payment Successful
    document.getElementById("authForm").classList.add("hidden");
    document.getElementById("paymentResult").classList.remove("hidden");
    document.getElementById("paymentStatus").textContent = "Payment Successful! 🎉";

    // Clear cart items from localStorage after payment
    localStorage.removeItem('cartItems');

    // Navigate to the Menu page
    setTimeout(() => {
      window.location.href = "Menu.html";  
    }, 1500);  
  } else {
    alert("Incorrect code. Please try again.");
  }
});

function togglePassword(inputId, toggleId) {
  const input = document.getElementById(inputId);
  const toggle = document.getElementById(toggleId);

  toggle.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    toggle.textContent = show ? '🙈' : '👁️';
  });
}

togglePassword("cardPassword", "toggleCardPassword");

function goBack() {
  window.history.back();
}

// Save el orders to localStorage
function saveToPastOrders(currentOrders) {
  const pastOrders = JSON.parse(localStorage.getItem('pastOrders')) || [];
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-GB');

  const newOrders = currentOrders.map(order => ({
    name: order.name,
    price: parseFloat(order.price.replace(/[^0-9.-]+/g, "")) * (order.quantity || 1), // Ensure price is numeric
    description: "Delicious pizza ordered.",
    date: formattedDate
  }));

  const updatedOrders = [...pastOrders, ...newOrders];

 
  localStorage.setItem('pastOrders', JSON.stringify(updatedOrders));
}
