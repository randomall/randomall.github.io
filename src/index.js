import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, getRedirectResult } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: "AIzaSyDfBIXTHiGrUhv3rtBUgrGlIelxPMd1hGc",
  authDomain: "randomall.firebaseapp.com",
  projectId: "randomall",
  storageBucket: "randomall.appspot.com",
  messagingSenderId: "16783300762",
  appId: "1:16783300762:web:a9f6e5abddb6d37212a723",
  measurementId: "G-G37TTX60GJ"
});
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => { /* check status */ });

/**
 * getRedirectResult is unused and should not be included in the code base.
 * In addition, there are many other functions within firebase/auth that are
 * not imported and therefore should not be included as well.
 */