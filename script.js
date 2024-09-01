// JavaScript to handle adding items to the order
document.addEventListener('DOMContentLoaded', function () {
    const orderList = document.getElementById('order-list');
    const checkoutBtn = document.getElementById('checkout-btn');
    let orderItems = [];

    // Function to add item to the order
    function addToOrder(itemName) {
        orderItems.push(itemName);
        updateOrderList();
    }

    // Update order list display
    function updateOrderList() {
        if (orderItems.length === 0) {
            orderList.innerHTML = '<p>No items in your order.</p>';
        } else {
            orderList.innerHTML = '';
            orderItems.forEach((item, index) => {
                orderList.innerHTML += `<p>${index + 1}. ${item}</p>`;
            });
        }
    }

    // Adding event listeners to menu buttons
    document.querySelectorAll('.menu-item button').forEach(button => {
        button.addEventListener('click', function () {
            const itemName = this.parentElement.querySelector('h3').textContent;
            addToOrder(itemName);
        });
    });

    // Handle checkout button click
    checkoutBtn.addEventListener('click', function () {
        if (orderItems.length > 0) {
            alert('Order placed successfully! Redirecting to payment...');
            // Redirect to payment page (to be implemented)
        } else {
            alert('Please add items to your order before proceeding.');
        }
    });
});

// ORDER DATA

checkoutBtn.addEventListener('click', function () {
    if (orderItems.length > 0) {
        // Convert order to JSON and send it to the backend
        fetch('process_order.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ order: orderItems })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                alert(data.message);
                // Redirect to payment page (to be implemented)
            } else {
                alert("Order failed: " + data.message);
            }
        })
        .catch(error => console.error('Error:', error));
    } else {
        alert('Please add items to your order before proceeding.');
    }
});



/*EXPLANATION :
Order Management: This JavaScript code handles adding items to the order, 
updating the order list, and proceeding to checkout.

Event Listeners: Buttons in the menu section trigger the addition of items
 to the order. The checkout button alerts the user and can be linked to the payment process later.
 */