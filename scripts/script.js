// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            // Validate form fields
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert('Thank you for your message, ' + name + '!');
                contactForm.reset();
            } else {
                alert('Please fill in all fields.');
            }
        });
    }

    // Example of a product image hover effect
    const productImages = document.querySelectorAll('.product-image');
    productImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});