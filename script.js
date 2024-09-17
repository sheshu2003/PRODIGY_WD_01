function addToCart(productName) {
    alert(productName + " has been added to your cart.");
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});