// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSUE7TEgK0W5UQGu0LrhZcNfyyzlH_A9g",
  authDomain: "management-app-44244.firebaseapp.com",
  projectId: "management-app-44244",
  storageBucket: "management-app-44244.appspot.com",
  messagingSenderId: "296797091381",
  appId: "1:296797091381:web:4feee211c559d6b225a37c",
  measurementId: "G-GXNR4HGQ0D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
