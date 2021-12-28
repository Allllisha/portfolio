// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5FwBBfhWYW0Pzw4QPvtMYFbTP6oO97l0",
  authDomain: "portfolio-bbfd7.firebaseapp.com",
  projectId: "portfolio-bbfd7",
  storageBucket: "portfolio-bbfd7.appspot.com",
  messagingSenderId: "1068994782461",
  appId: "1:1068994782461:web:1d1a158bff5ef569678a94",
  measurementId: "G-9ZNYK78GBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
