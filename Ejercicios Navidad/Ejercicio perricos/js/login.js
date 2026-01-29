//funcion de comprobacion del login
//si el usuario en usuario pone admin y contraseña admin:
//vuelve a la pagina de explorar perritos
//en el topnav ahora pone admin> alado del icono del login
//salen todos los perros que hay en el refugio
//sustituir los botones de añadir un perro y 5 perros por un boton de añadir un nuevo perro al refugio
//al pulsar el boton te lleva a una nueva pagina de añadir perros donde hay un formulario con los datos del perro
//Los perros añadidos con el formulario se añaden a dog array
//si no poner un mensaje de error
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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
const signOutIcon = document.querySelector(".signout__icon");
const accountIcon = document.querySelector(".account__icon");
const accountText = document.querySelector(".account__text");
const currentUser = document.querySelector(".current__user");
const signInBtn = document.querySelector(".btn_signIn");
const signUpBtn = document.querySelector(".btn_signUp");
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

//Show Sign In

signIn.hidden = false;

// Email/Password Sign In
signInBtn.addEventListener("click", async (event) => {
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

// Sign Out
signOutIcon.addEventListener("click", async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Sign out error:", error.message);
  }
});

// Email/Password Sign Up (Registro)

signUpBtn.addEventListener("click", function () {
  if (signUp.hidden === true) {
    signIn.hidden = true;
    signUp.hidden = false;
    return;
  }
});

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
  } catch (error) {
    messageErrorSignUp.hidden = false;
    inputEmailSignUp.value = "";
    inputPasswordSignUp.value = "";
    inputRepeatPassword.value = "";
    console.error("Email sign up error:", error.message);
  }

  await updateProfile(auth.currentUser, {
    displayName: userName,
  })
    .then(() => {
      console.log("Username:",userName)
    })
    .catch((error) => {
      console.error("Email sign up error:", error.message);
    });
});

// --- Auth State Observer ---
// This listens for changes in the user's sign-in state
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    currentUser.style.display = "block";
    accountText.style.display = "none";
    currentUser.innerHTML = `<span id="current__user">Hola, ${user.displayName}</span>`;

    inputEmailSignIn.value = "";
    inputPasswordSignIn.value = "";
  } else {
    // User is signed out
    currentUser.style.display = "none";
    accountText.style.display = "block";
  }
});
