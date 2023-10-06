// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz6qpahGfAQL3EEQRBt274XLY4pscGMy4",
  authDomain: "otp-project-25842.firebaseapp.com",
  projectId: "otp-project-25842",
  storageBucket: "otp-project-25842.appspot.com",
  messagingSenderId: "759045052223",
  appId: "1:759045052223:web:16991fbd43d89a042ea58a",
  measurementId: "G-PKWZ0MJLLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
