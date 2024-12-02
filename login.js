function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const storedUser = localStorage.getItem(username);

    if (storedUser) {
        const user = JSON.parse(storedUser);
        if (user.password === password) {
            alert('Login successful');
            window.location.href = 'website.html';
        } else {
            alert('Incorrect password');
        }
    } else {
        alert('User not found. Please sign up.');
    }
}

function showSignUp() {
    document.getElementById('signup').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup').style.display = 'none';
}

function signUp() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (localStorage.getItem(newUsername)) {
        alert('Username already exists. Please choose a different one.');
    } else {
        const user = { username: newUsername, password: newPassword };
        localStorage.setItem(newUsername, JSON.stringify(user));
        alert('Sign up successful. Please log in.');
        document.getElementById('signup').style.display = 'none';
    }
}

// Google Login
function loginWithGoogle() {
    alert('Redirecting to Google login...');
    // Google OAuth logic
}

// Facebook Login
function loginWithFacebook() {
    alert('Redirecting to Facebook login...');
    // Facebook OAuth logic
}

// Twitter Login
function loginWithTwitter() {
    alert('Redirecting to Twitter login...');
    // Twitter OAuth logic
}
