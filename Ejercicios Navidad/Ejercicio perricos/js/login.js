// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import "./auth_observer.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
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
const auth = getAuth(app);

// Get DOM elements

const signIn = document.querySelector('form[name="login"]');
const signUp = document.querySelector('form[name="signUp"]');
const goSignInBtn = document.querySelector(".btn_goSignIn");
const goSignUpBtn = document.querySelector(".btn_goSignUp");
const messagePassSignIn = document.querySelector(".message__form.passSignIn");
const messageErrorSignIn = document.querySelector(".message__error__signIn");
const messagePassSignUp = document.querySelector(".message__form.passSignUp");
const messageErrorSignUp = document.querySelector(".message__error__signUp");
const inputEmailSignIn = document.querySelector("#email-signIn");
const inputPasswordSignIn = document.querySelector("#password-signIn");
const inputEmailSignUp = document.querySelector("#email-signUp");
const inputUserNameSignUp = document.querySelector("#userName-signUp");
const inputPasswordSignUp = document.querySelector("#password-signUp");
const inputRepeatPassword = document.querySelector("#repeat-password-signUp");

//Show and hide the login and registration form

signIn.hidden = false;

goSignInBtn.addEventListener("click", () => {
  signUp.hidden = true;
  signIn.hidden = false;
});

goSignUpBtn.addEventListener("click", () => {
  signIn.hidden = true;
  signUp.hidden = false;
});

// Email/Password Sign In

signIn.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = inputPasswordSignIn.value.trim();
  const email = inputEmailSignIn.value.trim();

  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    console.log("Email signed in with email:", userCredential.user.email);
    messagePassSignIn.hidden = false;
  } catch (error) {
    messageErrorSignIn.hidden = false;
    console.error("Email sign in error:", error.message);
  }
});

// Email/Password Sign Up (Registro)

signUp.addEventListener("submit", async (event) => {
  event.preventDefault();
  const password = inputPasswordSignUp.value;
  const repeatPassword = inputRepeatPassword.value;
  const email = inputEmailSignUp.value;
  const userName = inputUserNameSignUp.value;

  if (password !== repeatPassword) {
    messageErrorSignUp.hidden = false;
    return;
  }

  try {
    // Función de Firebase para crear un nuevo usuario con email y contraseña
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    messagePassSignUp.hidden = false;
    console.log("User signed up with email:", userCredential.user.email);

    await updateProfile(auth.currentUser, {
      displayName: userName,
    });
  } catch (error) {
    messageErrorSignUp.hidden = false;
    inputEmailSignUp.value = "";
    inputPasswordSignUp.value = "";
    inputRepeatPassword.value = "";
    console.error("Email sign up error:", error.message);
  }
});
