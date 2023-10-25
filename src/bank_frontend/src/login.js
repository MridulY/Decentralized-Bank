document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Retrieve user account information (e.g., from a database or storage mechanism).
    // For simplicity, we're using localStorage.

    const storedPassword = localStorage.getItem(username);

    if (password === storedPassword) {
        // Redirect to your DFX app or any other URL upon successful login.
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials. Please try again.');
    }
});
