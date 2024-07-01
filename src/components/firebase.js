// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat/app";

import { Firestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDes56ZZr_uzq5uL3vcWmbgTtyPW73JqO4",
  authDomain: "bookbuy-8cca8.firebaseapp.com",
  projectId: "bookbuy-8cca8",
  storageBucket: "bookbuy-8cca8.appspot.com",
  messagingSenderId: "53430276028",
  appId: "1:53430276028:web:49811c4e38560b496a65b9"
};
// Initialize firbase store
const db =firebase.firestore;
// Initialize Firebase
const app = initializeApp(firebaseConfig);

 const AuthO = getAuth(app)
 const googleProvider =new GoogleAuthProvider()
export {AuthO ,googleProvider}