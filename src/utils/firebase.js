// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDIaBJNVPMlTN87fHJMeAbH75sPF-yQ6lU",
  authDomain: "netflixgpt-22d17.firebaseapp.com",
  projectId: "netflixgpt-22d17",
  storageBucket: "netflixgpt-22d17.firebasestorage.app",
  messagingSenderId: "659691307985",
  appId: "1:659691307985:web:b02454dc774466ec3896f0",
  measurementId: "G-GVE836YKCT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);