// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHGKWyos_i0X2jIjGvjT9SiLI4h5SGtuc",
  authDomain: "biblioteca-ziraldo-500f9.firebaseapp.com",
  projectId: "biblioteca-ziraldo-500f9",
  storageBucket: "biblioteca-ziraldo-500f9.firebasestorage.app",
  messagingSenderId: "693891709096",
  appId: "1:693891709096:web:3451c1933e28f84587ea9d",
  measurementId: "G-M4LN6KGSB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);