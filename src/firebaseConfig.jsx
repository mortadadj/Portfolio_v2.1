// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTvtSSnRFcstqS8rPVnwgzYvaIaRZe568",
  authDomain: "bd-test-ced90.firebaseapp.com",
  projectId: "bd-test-ced90",
  storageBucket: "bd-test-ced90.appspot.com",
  messagingSenderId: "539627605752",
  appId: "1:539627605752:web:5c08aca11d2e6ef731f50d",
  measurementId: "G-9R39H6SCJE"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
