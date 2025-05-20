// Firebase configuration - Using your actual API key
const firebaseConfig = {
    apiKey: "AIzaSyDN_kbDoVeO0KfB_eMSCT01xeIs4Gthqw8",
    authDomain: "login-and-logout-c04df.firebaseapp.com",
    projectId: "login-and-logout-c04df",
    storageBucket: "login-and-logout-c04df.firebasestorage.app",
    messagingSenderId: "732386429201",
    appId: "1:732386429201:web:96686ff6041198564064b0",
    measurementId: "G-2PRGBKDHLZ"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeButtons = document.querySelectorAll('.close');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginError = document.getElementById('loginError');
const registerError = document.getElementById('registerError');
const registerSuccess = document.getElementById('registerSuccess');
const welcomeUser = document.getElementById('welcomeUser');
const loggedInView = document.getElementById('loggedInView');
const loggedOutView = document.getElementById('loggedOutView');

// Event Listeners for opening modals
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
    loginError.style.display = 'none';
    loginForm.reset();
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
    registerError.style.display = 'none';
    registerSuccess.style.display = 'none';
    registerForm.reset();
});

// Event Listeners for closing modals
closeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Click outside modal to close
window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
});

// Switch between login and register forms
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
    registerError.style.display = 'none';
    registerSuccess.style.display = 'none';
    registerForm.reset();
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
    loginError.style.display = 'none';
    loginForm.reset();
});

// Login Form Submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Sign in with Firebase Authentication
    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            loginModal.style.display = 'none';
            loginForm.reset();
        })
        .catch((error) => {
            loginError.textContent = 'Incorrect email or password. Please try again.';
            loginError.style.display = 'block';
            console.error('Login error:', error.message);
        });
});

// Register Form Submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const phone = document.getElementById('registerPhone').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Create user with Firebase Authentication
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            
            // Successfully created auth user
            registerSuccess.textContent = 'Registration successful! You can now login.';
            registerSuccess.style.display = 'block';
            registerError.style.display = 'none';
            
            // Storing user data in localStorage instead of Firestore
            // (We'll set up Firestore correctly later)
            localStorage.setItem('userName', name);
            localStorage.setItem('userPhone', phone);
            localStorage.setItem('userEmail', email);
            
            // Clear the form
            registerForm.reset();
            
            // Automatically switch to login after 2 seconds
            setTimeout(() => {
                registerModal.style.display = 'none';
                loginModal.style.display = 'block';
                loginError.style.display = 'none';
            }, 2000);
        })
        .catch((error) => {
            registerError.textContent = error.message;
            registerError.style.display = 'block';
            registerSuccess.style.display = 'none';
            console.error('Registration error:', error.message);
        });
});

// Logout event
logoutBtn.addEventListener('click', () => {
    auth.signOut().then(() => {
        console.log('User signed out');
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
});

// Auth state change listener
auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in
        // Using localStorage instead of Firestore for user data
        const userName = localStorage.getItem('userName') || user.email || 'User';
        welcomeUser.textContent = `Welcome, ${userName}`;
        
        // Update UI for logged in state
        loggedInView.style.display = 'flex';
        loggedOutView.style.display = 'none';
    } else {
        // User is signed out
        loggedInView.style.display = 'none';
        loggedOutView.style.display = 'flex';
    }
});

// Initialize the page correctly
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded');
});