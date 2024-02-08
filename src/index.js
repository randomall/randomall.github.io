// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfBIXTHiGrUhv3rtBUgrGlIelxPMd1hGc",
  authDomain: "randomall.firebaseapp.com",
  projectId: "randomall",
  storageBucket: "randomall.appspot.com",
  messagingSenderId: "16783300762",
  appId: "1:16783300762:web:a9f6e5abddb6d37212a723",
  measurementId: "G-G37TTX60GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);