// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByKafLa1GGa9C5xRwnNUzmy2Z3l8pLlOE",
  authDomain: "employment-app-demo.firebaseapp.com",
  projectId: "employment-app-demo",
  storageBucket: "employment-app-demo.appspot.com",
  messagingSenderId: "903374047335",
  appId: "1:903374047335:web:d5cfe5262f98c93df16cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;