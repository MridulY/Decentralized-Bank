document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Store user account information (e.g., in a database or file)
    // Replace this with your actual storage mechanism (e.g., database).

    // For simplicity, we're storing in localStorage.
    localStorage.setItem(username, password);

    // Redirect to the login page.
    window.location.href = 'login.html';
});
