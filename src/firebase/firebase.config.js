// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhbvyx6P9rdHJOuzvCb_lxLPgKivCxLKM",
  authDomain: "teeth-wrzard.firebaseapp.com",
  projectId: "teeth-wrzard",
  storageBucket: "teeth-wrzard.firebasestorage.app",
  messagingSenderId: "974661686781",
  appId: "1:974661686781:web:5f0e7b04c8c9e526b8b594",
  measurementId: "G-X2SMFE253X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)
export default auth