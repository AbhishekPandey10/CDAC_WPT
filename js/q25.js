orderForm = document.getElementById('order-form');
errorMessage = document.querySelector('.error-message');

orderForm.addEventListener('submit', function (e) {
    e.preventDefault();

    orderId = document.getElementById('order-id').value;
    customerName = document.getElementById('customer-name').value;
    billingDate = document.getElementById('billing-date').value;
    shippingDate = document.getElementById('shipping-date').value;
    orderTotal = document.getElementById('order-total').value;
    let errorMessageText = "";

    if (customerName.length < 6) {
        errorMessageText = "Customer name must be at least 6 characters long.";
    } else if (isNaN(parseFloat(orderTotal))) {
        errorMessageText = "Order total must be a valid number.";
    } else if (new Date(billingDate) > new Date(shippingDate)) {
        errorMessageText = "Billing date cannot be after shipping date.";
    }

    if (errorMessageText !== "") {
        errorMessage.textContent = errorMessageText;
        return;
    }
    console.log('Order submitted successfully!', {
        orderId,
        customerName,
        billingDate,
        shippingDate,
        orderTotal
    });
    orderForm.reset();
});



