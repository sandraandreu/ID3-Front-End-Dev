// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsQTxoaDL34EEStSUmyqpAVOJzCxdsnKQ",
  authDomain: "refugio-perros.firebaseapp.com",
  projectId: "refugio-perros",
  storageBucket: "refugio-perros.firebasestorage.app",
  messagingSenderId: "309058471096",
  appId: "1:309058471096:web:7f9689c2bb4defcf7de04d",
  measurementId: "G-DGWXCTJYTE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Get DOM elements

const accountText = document.querySelector(".account__text");
const currentUser = document.querySelector(".current__user");

// --- Auth State Observer ---
// This listens for changes in the user's sign-in state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    currentUser.style.display = "block";
    accountText.style.display = "none";
    currentUser.innerHTML = `<span id="current__user">Hola, ${user.displayName}</span>`;
  } else {
    // User is signed out
    currentUser.style.display = "none";
    accountText.style.display = "block";
  }
});