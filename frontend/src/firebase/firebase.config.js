// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC21wGppgtNEEFb4syZJ2qb8ydtBQ8yu_8",
  authDomain: "book-store-mern-app-29458.firebaseapp.com",
  projectId: "book-store-mern-app-29458",
  storageBucket: "book-store-mern-app-29458.firebasestorage.app",
  messagingSenderId: "954218233670",
  appId: "1:954218233670:web:7dadd3a322dca888b82f47",
  measurementId: "G-FRJX7WFR23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth =  getAuth(app);