import { signOut } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-auth.js";
import { auth } from "./auth_observer.js";



export function initSignOut() {
  const signOutIcon = document.querySelector(".signout__icon");

  if (!signOutIcon) return;

  signOutIcon.addEventListener("click", async () => {
    try {
      await signOut(auth);
      console.log("User signed out");
    } catch (error) {
      console.error("Sign out error:", error.message);
    }
  });
}