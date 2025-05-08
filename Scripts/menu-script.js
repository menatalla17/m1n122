const cart = [];

function toggleCart() {
    const cartList = document.getElementById('cart-list');
    const overlay = document.getElementById('overlay');

    cartList.classList.toggle('hidden');
    overlay.classList.toggle('hidden');
    renderCart(); // Re-render every time the cart opens
}

function addToCart(button) {
    const pizzaCard = button.closest('.pizza-card');
    const pizzaName = pizzaCard.querySelector('h3').textContent;
    const pizzaPrice = pizzaCard.querySelector('.price').textContent;
    const pizzaImgSrc = pizzaCard.querySelector('img').src;

    const existingItem = cart.find(item => item.name === pizzaName);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: pizzaName,
            price: pizzaPrice,
            imgSrc: pizzaImgSrc,
            quantity: 1,
        });
    }

    // Update localStorage and re-render
    localStorage.setItem('cartItems', JSON.stringify(cart));
    renderCart();

    // Handle button animation (change text)
    const textSpan = button.querySelector('.btn-text');
    const originalText = textSpan.textContent;

    textSpan.textContent = "✔";
    button.classList.add('adding');

    setTimeout(() => {
        textSpan.textContent = originalText;
        button.classList.remove('adding');
    }, 2000);
}

function removeFromCart(index) {
    cart.splice(index, 1); // Remove item
    localStorage.setItem('cartItems', JSON.stringify(cart)); // Update localStorage
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = ''; // Clear previous content

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.imgSrc}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover;">
                <div class="item-details">
                    <div class="name-price">
                        <h3>${item.name}</h3>
                        <span class="new-price">${item.price}</span>
                    </div>
                    <div class="quantity">
                        <button onclick="decreaseQuantity(${index})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${index})">+</button>
                    </div>
                </div>
            `;

            cartItemsContainer.appendChild(cartItem);
            
             // Add a horizontal line after each item, except the last one
            if (index < cart.length - 1) {
                const hr = document.createElement('hr');
                cartItemsContainer.appendChild(hr);
            }
        });
    }
}

function increaseQuantity(index) {
    cart[index].quantity++;
    renderCart();
}

function decreaseQuantity(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1); // Remove item if quantity hits 0
    }
    renderCart();
}

function goToCheckOut() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Save cart to localStorage to pass it to checkout page
    localStorage.setItem("cartItems", JSON.stringify(cart));
    window.location.href = "checkout.html"; // Navigate to checkout page
}

// Connect Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => addToCart(button));
});

// Initial render of the cart
renderCart();


// Connect Add to Cart buttons
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => addToCart(button));
});

//initial render of cart
renderCart();

//bar-icon

const closebtn = document.getElementById('close-btn');
const barIcon = document.getElementById('bar-icon');
const profilePopup = document.getElementById('profile-popup');

barIcon.addEventListener('click', function(event) {
    event.stopPropagation();
    if (profilePopup.style.display === 'flex') {
        profilePopup.style.display = 'none';
        overlay.classList.toggle('hidden');
    } else {
        profilePopup.style.display = 'flex';
        overlay.classList.toggle('hidden');
    }
});

// Hide popup if clicking outside
closebtn.addEventListener('click', function(event) {
    profilePopup.style.display = 'none';
    overlay.classList.toggle('hidden');
});

function goToProfile() {
    window.location.href = "profile.html";
}

function goToCheckOut() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

// Save cart to localStorage to pass it to checkout page
    localStorage.setItem("cartItems", JSON.stringify(cart));
    window.location.href = "checkout.html"; // Navigate to your checkout page
}

document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function () {
        addToCart(button);
    });
});