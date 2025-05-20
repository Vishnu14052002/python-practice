// DOM elements
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const welcomeUser = document.getElementById('welcomeUser');
const loggedIn = document.getElementById('loggedIn');
const loggedOut = document.getElementById('loggedOut');

// Modal elements
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close');
const switchToRegister = document.getElementById('switchToRegister');
const switchToLogin = document.getElementById('switchToLogin');

// Form elements
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

// Check authentication state on page load
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged(user => {
        if (user) {
            // User is signed in
            getUserData(user.uid);
            loggedIn.style.display = 'flex';
            loggedOut.style.display = 'none';
        } else {
            // User is signed out
            loggedIn.style.display = 'none';
            loggedOut.style.display = 'flex';
        }
    });
});

// Get user data from Firestore
function getUserData(userId) {
    db.collection('users').doc(userId).get()
        .then(doc => {
            if (doc.exists) {
                const userData = doc.data();
                welcomeUser.textContent = `Welcome, ${userData.name}`;
                
                // Store user info in localStorage for persistence across pages
                localStorage.setItem('userName', userData.name);
            } else {
                console.log('No user data found');
            }
        })
        .catch(error => {
            console.error('Error getting user data:', error);
        });
}

// Check if username is in localStorage (for page refreshes)
if (localStorage.getItem('userName')) {
    welcomeUser.textContent = `Welcome, ${localStorage.getItem('userName')}`;
    loggedIn.style.display = 'flex';
    loggedOut.style.display = 'none';
}

// Open modals
loginBtn.addEventListener('click', () => {
    loginModal.style.display = 'block';
});

registerBtn.addEventListener('click', () => {
    registerModal.style.display = 'block';
});

// Close modals
closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

// Switch between login and register forms
switchToRegister.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'none';
    registerModal.style.display = 'block';
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'none';
    loginModal.style.display = 'block';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
    }
    if (e.target === registerModal) {
        registerModal.style.display = 'none';
    }
});

// Handle register form submission
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('registerName').value;
    const phone = document.getElementById('registerPhone').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    
    // Create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Save additional user info to Firestore
            const user = userCredential.user;
            return db.collection('users').doc(user.uid).set({
                name: name,
                email: email,
                phone: phone,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            });
        })
        .then(() => {
            // Close modal and reset form
            registerModal.style.display = 'none';
            registerForm.reset();
            
            // Update UI
            localStorage.setItem('userName', name);
            welcomeUser.textContent = `Welcome, ${name}`;
            loggedIn.style.display = 'flex';
            loggedOut.style.display = 'none';
            
            // Show success message
            alert('Registration successful!');
        })
        .catch((error) => {
            console.error('Error registering user:', error);
            alert(`Registration failed: ${error.message}`);
        });
});

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Sign in with email/password or phone
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Close modal and reset form
            loginModal.style.display = 'none';
            loginForm.reset();
            
            // Get user data
            const user = userCredential.user;
            getUserData(user.uid);
            
            // Show success message
            alert('Login successful!');
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            alert(`Login failed: ${error.message}`);
        });
});

// Handle logout
logoutBtn.addEventListener('click', () => {
    auth.signOut()
        .then(() => {
            // Clear local storage
            localStorage.removeItem('userName');
            
            // Update UI
            loggedIn.style.display = 'none';
            loggedOut.style.display = 'flex';
            
            // Show message
            alert('Logged out successfully!');
        })
        .catch((error) => {
            console.error('Error signing out:', error);
        });
});