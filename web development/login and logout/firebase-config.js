// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_NVQG0_-niQLnFVFnp_kdIZoUqHQgXrk",
    authDomain: "sample-92185.firebaseapp.com",
    projectId: "sample-92185",
    storageBucket: "sample-92185.firebasestorage.app",
    messagingSenderId: "387337024867",
    appId: "1:387337024867:web:13a144941a350e419bcf56",
    measurementId: "G-3VYMHBSF3Q"
  };
  
  // Initialize Firebase - using the compat version since our HTML imports use this
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firebase services and make them globally available
  const auth = firebase.auth();
  const db = firebase.firestore();