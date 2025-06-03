// Initialize EmailJS
(function() {
    // Add your EmailJS user ID
    emailjs.init("YOUR_USER_ID"); // Sign up at emailjs.com to get your user ID
})();

// Handle form submission
document.querySelector('.contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Show loading state
    const btn = document.querySelector('.contact-form button');
    const originalText = btn.textContent;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    
    // Prepare template parameters (match these with your EmailJS template)
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Send email using EmailJS
    // Replace with your service ID and template ID from EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function() {
            // Success message
            btn.textContent = 'Message Sent!';
            document.querySelector('.contact-form').reset();
            
            // Reset button after 3 seconds
            setTimeout(function() {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        }, function(error) {
            // Error handling
            console.error('Email failed to send:', error);
            btn.textContent = 'Failed to Send';
            
            // Reset button after 3 seconds
            setTimeout(function() {
                btn.textContent = originalText;
                btn.disabled = false;
            }, 3000);
        });
});