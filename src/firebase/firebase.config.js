// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeT-5S0ixLE-ODdmnIKmYgu8zpoVV-O84",
  authDomain: "dolls-toy-client.firebaseapp.com",
  projectId: "dolls-toy-client",
  storageBucket: "dolls-toy-client.appspot.com",
  messagingSenderId: "615653020819",
  appId: "1:615653020819:web:2fdf507095a7e421efe966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;