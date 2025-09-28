// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwa1KLtPu-VlLIURBQD31rWJktJ-Dw3ig",
  authDomain: "netflix-gpt-55823.firebaseapp.com",
  projectId: "netflix-gpt-55823",
  storageBucket: "netflix-gpt-55823.firebasestorage.app",
  messagingSenderId: "400447715937",
  appId: "1:400447715937:web:5f28fa07b7ef66d2c3c820",
  measurementId: "G-L0WWD6K3F7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
