document.querySelector(".back-btn").addEventListener("click", () => {
    window.history.back();
});



const image = document.getElementsByClassName("prof_photo")[0],
    input = document.getElementsByClassName("inp")[0];

input.addEventListener("change", () => {
    const file = input.files[0];
    if (file) {
        image.src = URL.createObjectURL(file);
        image.onload = () => {
            URL.revokeObjectURL(image.src);
        }
        input.style.display = "none";
    }
});

function editUsername() {
    const usernameText = document.getElementById("username-text");
    const usernameInput = document.getElementById("username-input");
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");

    usernameInput.value = usernameText.textContent;
    usernameText.style.display = "none";
    usernameInput.style.display = "inline-block";
    editBtn.style.display = "none";
    saveBtn.style.display = "inline-block";
}

function saveUsername() {
    const usernameText = document.getElementById("username-text");
    const usernameInput = document.getElementById("username-input");
    const editBtn = document.getElementById("edit-btn");
    const saveBtn = document.getElementById("save-btn");

    usernameText.textContent = usernameInput.value;
    usernameText.style.display = "inline-block";
    usernameInput.style.display = "none";
    editBtn.style.display = "inline-block";
    saveBtn.style.display = "none";
    localStorage.setItem("username",usernameInput.value)
}


const dateElements = document.querySelectorAll('.order-date');
const today = new Date();
const formattedDate = today.toLocaleDateString('en-GB'); // "dd/mm/yyyy" format

dateElements.forEach(el => {
    el.textContent = formattedDate;
});
document.addEventListener("DOMContentLoaded", function () {
    const orders = JSON.parse(localStorage.getItem('pastOrders')) || [];
    const container = document.querySelector('.container');
    container.innerHTML = ''; // Clear existing placeholder orders
  
    const groupedOrders = orders.reduce((acc, order) => {
      if (!acc[order.date]) acc[order.date] = [];
      acc[order.date].push(order);
      return acc;
    }, {});
  
    for (const date in groupedOrders) {
      const dayOrders = groupedOrders[date];
      const orderCard = document.createElement("div");
      orderCard.classList.add("grouped-order");
  
      orderCard.innerHTML = `
        <div class="order-summary">
          <span class="order-date-title">${date}</span>
        </div>
        <div class="order-details">
          ${dayOrders.map(order => {
            // Ensure order.price is a string before replacing any non-numeric characters
            let price = order.price;
            if (typeof price !== "string") {
              price = price.toString();
            }
            price = price.replace(/[^0-9.-]+/g, ""); // Remove any unwanted characters
  
            return `
              <div class="order-item-detail">
                <img class="order-img" src="icons/logo1.svg" alt="${order.name}">
                <div class="info">
                  <h3>${order.name}</h3>
                  <p class="price">Price: $${parseFloat(price).toFixed(2)}</p>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `;
  
      container.appendChild(orderCard);
    }
  });  



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
        window.location.href = "signup-login.html";
    }, 3000);
}