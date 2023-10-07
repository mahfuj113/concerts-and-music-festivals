// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlvIX8i8QY5bJ-OrknC2Dy8qvjnjWZr50",
  authDomain: "concerts-and-music-festivals.firebaseapp.com",
  projectId: "concerts-and-music-festivals",
  storageBucket: "concerts-and-music-festivals.appspot.com",
  messagingSenderId: "1001827136142",
  appId: "1:1001827136142:web:66b93f0933df8605438fdf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;