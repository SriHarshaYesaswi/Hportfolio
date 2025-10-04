// firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA2OFu3omgw_fKZOhAQGilbVqCt5E1IJ_E",
  authDomain: "portfolio-ed459.firebaseapp.com",
  projectId: "portfolio-ed459",
  storageBucket: "portfolio-ed459.firebasestorage.app",
  messagingSenderId: "298260487263",
  appId: "1:298260487263:web:bb289131c1181bfd378fea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
