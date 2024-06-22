// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkcwIM-ZXvH61egW7rpfJ3L39PQAoDEdY",
  authDomain: "biblibuy.firebaseapp.com",
  projectId: "biblibuy",
  storageBucket: "biblibuy.appspot.com",
  messagingSenderId: "393589395234",
  appId: "1:393589395234:web:465e5f7562b764b2249f7b",
  measurementId: "G-WS7XCHFXN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);