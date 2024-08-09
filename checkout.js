document.addEventListener("DOMContentLoaded", function() {
    // Retrieve cart items from localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    let total = 0;
    document.getElementById('checkoutItems').innerHTML = cart.map((item, index) => {
        const { image, title, price, quantity } = item;
        total += price * quantity;
        return `
            <tr class="checkout-items">
                <td><img class="rowimg" src="${image}" alt="${title}" style="width: 50px; height: 50px;"></td>
                <td>${title}</td>
                <td>Rs. ${price * quantity}.00</td>
            </tr>
        `;
    }).join('');
    
    document.getElementById('checkoutTotal').innerHTML = `Rs. ${total}.00`;

    // Handle form submission
    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        // Validate the form inputs
        const name = document.getElementById('name').value;
        const address = document.getElementById('address').value;
        const phone = document.getElementById('phone').value;
        const city = document.getElementById('city').value;
        const zip = document.getElementById('zip').value;

        if (name && address && phone && city && zip) {
            // Show thank you message with delivery date
            const thankYouMessage = document.getElementById('thankYouMessage');
            const deliveryDate = new Date();
            deliveryDate.setDate(deliveryDate.getDate() + 7); // Set delivery date to 7 days from now
            document.getElementById('deliveryDate').innerText = deliveryDate.toDateString();

            // Hide form and show thank you message
            document.getElementById('form').style.display = 'none';
            thankYouMessage.style.display = 'block';

            // Clear cart and localStorage
            localStorage.removeItem('cart');
        } else {
            alert('Please fill in all the fields.');
        }
    });
});
