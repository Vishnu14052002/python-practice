// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyASd73wVljlXm9P1Du-AdSyTGmfh5g_PME",
authDomain: "sample-project-one-8073b.firebaseapp.com",
projectId: "sample-project-one-8073b",
storageBucket: "sample-project-one-8073b.firebasestorage.app",
messagingSenderId: "499062708453",
appId: "1:499062708453:web:d7205228de8942d3f8dc0c",
measurementId: "G-ES02EH7XYE"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Show the registration form by default
document.getElementById("registration-form").style.display = "block";

// Function to show registration form
function showRegistrationForm() {
    document.getElementById("registration-form").style.display = "block";
    document.getElementById("login-form").style.display = "none";
}

// Function to show login form
function showLoginForm() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("registration-form").style.display = "none";
}

// Function to register a user
function registerUser() {
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const phone = document.getElementById("reg-phone").value;
    const password = document.getElementById("reg-password").value;
    const repassword = document.getElementById("reg-repassword").value;

    if (password !== repassword) {
        document.getElementById("registration-error").textContent = "Passwords do not match!";
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            user.updateProfile({
                displayName: name
            });
            document.getElementById("registration-error").textContent = "";
            showWelcomeMessage(user.displayName);
        })
        .catch(error => {
            document.getElementById("registration-error").textContent = error.message;
        });
}

// Function to log in a user
function loginUser() {
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            const user = userCredential.user;
            document.getElementById("login-error").textContent = "";
            showWelcomeMessage(user.displayName);
        })
        .catch(error => {
            document.getElementById("login-error").textContent = "Invalid email or password!";
        });
}

// Function to show the welcome message
function showWelcomeMessage(userName) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("registration-form").style.display = "none";
    document.getElementById("welcome-message").style.display = "block";
    document.getElementById("welcome-text").textContent = `Welcome, ${userName}`;
}

// Function to log out
function logout() {
    auth.signOut()
        .then(() => {
            document.getElementById("welcome-message").style.display = "none";
            showLoginForm();
        })
        .catch(error => {
            console.error("Error signing out: ", error);
        });
}

// Check if the user is already logged in
auth.onAuthStateChanged(user => {
    if (user) {
        showWelcomeMessage(user.displayName);
    } else {
        showLoginForm();
    }
});