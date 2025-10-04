// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

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
// Lazily create and return the RTDB instance. This avoids throwing at import
// time if a databaseURL isn't configured. Callers should handle a `null`
// return value which indicates the RTDB couldn't be initialized.
function getDB() {
  try {
    return getDatabase(app);
  } catch (err) {
    // Common reason: databaseURL not configured for this project.
    // We'll log a warning and return null so the app can continue.
    // The Contact form will attempt to write only when a DB instance is
    // available.
    // eslint-disable-next-line no-console
    console.warn("Realtime Database not initialized:", err.message || err);
    return null;
  }
}

export { app, getDB };

export default app;
