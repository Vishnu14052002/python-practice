// Import the necessary Firebase functions (ensure all imports are consistent in version)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_NVQG0_-niQLnFVFnp_kdIZoUqHQgXrk",
  authDomain: "sample-92185.firebaseapp.com",
  projectId: "sample-92185",
  storageBucket: "sample-92185.firebasestorage.app",
  messagingSenderId: "387337024867",
  appId: "1:387337024867:web:13a144941a350e419bcf56",
  measurementId: "G-3VYMHBSF3Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Add a new document to Firestore
  try {
    await addDoc(collection(db, "contacts"), {
      name: name,
      email: email,
      message: message,
      timestamp: new Date()
    });
    alert("Form submitted successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error submitting form.");
  }

  // Clear the form after submission
  document.getElementById("contactForm").reset();
});
