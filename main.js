// Task 2: Add Event Listener for Product Selection

// Declaring constants to grab elements from html structure

const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');

// Function to update the price display

function updateTotalPrice() {
    const productPrice = parseFloat(productSelector.value);
    const quantity = parseInt(quantityInput.value);
    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Add event listeners for product selection

productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);


// Task 3: Calculate Total Price Dynamically
// Task 4: Handle Order Submission

// Handle order submission
placeOrderButton.addEventListener('click', function() {
    const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
    const quantity = quantityInput.value;
    const totalPrice = totalPriceElement.textContent;


    // Display order summary with a text
    orderSummary.textContent = `You ordered ${quantity} of ${selectedProduct}. Total price: $${totalPrice}`;
});

// Call funtion to display the initial total on the page
updateTotalPrice();

