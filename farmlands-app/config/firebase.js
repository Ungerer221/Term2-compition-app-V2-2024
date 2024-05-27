// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDhncQ-zmbOgwkcUqlwDHExKCLGCQIM-Q",
  authDomain: "class-work-c5bee.firebaseapp.com",
  projectId: "class-work-c5bee",
  storageBucket: "class-work-c5bee.appspot.com",
  messagingSenderId: "156765701708",
  appId: "1:156765701708:web:d543605b3a4218c9d5d6e9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// const loginEmailPassword = async ()=> {
// }

// TODO: Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)