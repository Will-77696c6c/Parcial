document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // Show success message
    document.getElementById('success-message').classList.remove('hidden');
    
    // Clear form fields
    event.target.reset();
    
    // Reload the page
    setTimeout(function() {
        window.location.reload();
    }, 2000); // Delay to allow user to see the success message
});
