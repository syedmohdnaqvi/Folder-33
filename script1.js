document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // script.js
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const messageContainer = document.getElementById('message');

    // Hardcoded user credentials for demonstration purposes
    const validUsername = 'user';
    const validPassword = 'password';

    if (username === validUsername && password === validPassword) {
        messageContainer.style.color = '#00ff00';
        messageContainer.textContent = 'Login successful! Redirecting...';

        // In a real-world scenario, you would redirect the user or perform other actions here.
        setTimeout(() => {
            window.location.href = '/dashboard';
        }, 2000);
    } else {
        messageContainer.style.color = '#ff0000';
        messageContainer.textContent = 'Invalid username or password. Please try again.';
    }
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    function signup() {
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;
        const messageContainer = document.getElementById('message');
    
        // In a real-world scenario, you would send this data to the server for user registration.
        // Here, we're just showing a message for simplicity.
        messageContainer.style.color = '#00ff00';
        messageContainer.textContent = `Account created for ${username}!`;
    }
    
    });    
});
