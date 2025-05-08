function saveToPastOrders(currentOrders) {
  const existing = JSON.parse(localStorage.getItem('pastOrders')) || [];
  const today = new Date().toLocaleDateString('en-GB');

  const stampedOrders = currentOrders.map(order => ({
      ...order,
      date: today, 
  }));

  localStorage.setItem('pastOrders', JSON.stringify([...existing, ...stampedOrders]));
}


document.addEventListener("DOMContentLoaded", function () {
  const orders = JSON.parse(localStorage.getItem('cartItems')) || [];
  const orderList = document.getElementById("orderList");
  const totalPriceEl = document.getElementById("totalPrice");
  const locationInput = document.getElementById("location");
  const locationError = document.getElementById("location-error");

  let total = 0;

  // Adds orders dynamically
  orders.forEach(order => {
      const item = document.createElement("div");
      item.classList.add("order-item");

      let price = parseFloat(order.price.replace(/[^0-9.-]+/g, "")); 
      let quantity = order.quantity || 1; 

      if (isNaN(price)) {
          price = 0; 
      }

      let totalPriceForPizza = price * quantity;

      item.innerHTML = `        
          <span>${order.name} (x${quantity})</span> 
          <span>$${totalPriceForPizza.toFixed(2)}</span> 
      `;
      orderList.appendChild(item);

      total += totalPriceForPizza;
  });

  totalPriceEl.textContent = total.toFixed(2); 

  
  document.querySelector(".back-btn").addEventListener("click", () => {
      window.history.back();
  });

  
  document.getElementById("cashBtn").addEventListener("click", () => {
      if (validateLocation()) {
          alert("You chose to pay with cash. Thank you!");
          saveToPastOrders(orders);
         localStorage.removeItem('cartItems');  
          window.location.href = "Menu.html";
      }
  });

  
  document.getElementById("cardBtn").addEventListener("click", () => {
      if (validateLocation()) {
          
          window.location.href = "card-payment.html";
      }
  });


  function validateLocation() {
      if (locationInput.value.trim() === "") {
          locationError.style.display = "block";
          return false;
      } else {
          locationError.style.display = "none";
          return true;
      }
  }
});
