// This file handles the registration form submission, including validation and server communication.

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate form data
        const username = document.getElementById('Uname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (!username || !email || !password) {
            alert('All fields are required!');
            return;
        }

        // Prepare data for submission
        const formData = {
            Username: username,
            email: email,
            password: password
        };

        // Send data to the server
        fetch('/submit_registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            alert('Registration successful: ' + data.message);
            form.reset(); // Reset the form after successful submission
        })
        .catch(error => {
            alert('There was a problem with the registration: ' + error.message);
        });
    });
});