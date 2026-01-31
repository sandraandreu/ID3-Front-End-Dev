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
const signOutIcon = document.querySelector(".signout__icon");
const addDogIcon = document.querySelector(".add__icon");
const addDogBtn = document.querySelector(".addDog");


// --- Auth State Observer ---
// This listens for changes in the user's sign-in state
onAuthStateChanged(auth, (user) => {
  const isAdmin = user?.uid === "ZEo4UWtZdCSZNOVaKELHclette52";

  currentUser.classList.toggle("hidden", !user);
  signOutIcon.classList.toggle("hidden", !user);
  accountText.classList.toggle("hidden", user);

  addDogBtn.classList.toggle("hidden", !isAdmin);
  addDogIcon.classList.toggle("hidden", !isAdmin);

  if (user) {
    currentUser.innerHTML = `Hola, ${user.displayName}`;
  }
});