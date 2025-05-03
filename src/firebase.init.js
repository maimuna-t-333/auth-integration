//Danger
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHQBMqyfRbWZULwR5xms2Tqq1Dno4lBNo",
  authDomain: "auth-integration-fef4f.firebaseapp.com",
  projectId: "auth-integration-fef4f",
  storageBucket: "auth-integration-fef4f.firebasestorage.app",
  messagingSenderId: "872446743216",
  appId: "1:872446743216:web:78fa43d3d1125f938a6175"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);