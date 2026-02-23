// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Simple validation
    if (email === '') {
        alert('Please enter your email.');
        return;
    }

    if (password === '') {
        alert('Please enter your password.');
        return;
    }

    // Check if email is valid (basic check)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass, simulate login
    alert('Login successful! Welcome back.');

    // Here you could redirect to another page or perform further actions
    // For example: window.location.href = 'dashboard.html';
});
