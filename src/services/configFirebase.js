import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAySwO4tYDnjtu_rDVXSwcby37GO6lMSIE",
    authDomain: "system-login-4c440.firebaseapp.com",
    databaseURL: "https://system-login-4c440-default-rtdb.firebaseio.com",
    projectId: "system-login-4c440",
    storageBucket: "system-login-4c440.appspot.com",
    messagingSenderId: "762110567542",
    appId: "1:762110567542:web:29c9f9e6966e8a867aeb57"
  };

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };