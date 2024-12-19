// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXDgb_s3Upy-9Ejhb0ECJkssdkgBDrI8I",
  authDomain: "miproyectoclase-10d68.firebaseapp.com",
  projectId: "miproyectoclase-10d68",
  storageBucket: "miproyectoclase-10d68.firebasestorage.app",
  messagingSenderId: "25187750285",
  appId: "1:25187750285:web:e5ac5c79ff99715e8badc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)