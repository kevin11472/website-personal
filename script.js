document.getElementById('login-button').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Here you would typically handle the login logic,
        // such as sending a request to your backend.
        console.log('Trying to login with:', username, password);
    } else {
        alert('Harap lengkapi semua kolom!');
    }
});