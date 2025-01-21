document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !password) {
        alert('Please Enter The Data in both fields.');
        return;
    }

    if (username.length < 3 || password.length < 6) {
        alert('Username must be at least 3 characters long and password must be at least 6 characters long.');
        return;
    }

    alert('Login successful.');
});