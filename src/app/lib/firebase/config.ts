// lib/firebase.js (or config.js if you're using that name)
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyCX74tB_bYU6wbBNqVuE_28156A6OyBftc",
  authDomain: "tally-app-87e7d.firebaseapp.com",
  projectId: "tally-app-87e7d",
  storageBucket: "tally-app-87e7d.appspot.com",
  messagingSenderId: "299719477757",
  appId: "1:299719477757:web:46d6b72b7ef1600e7f3194",
};

// Initialize Firebase app (ensure only one instance is created)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase Auth and Google Auth Provider
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//export {firebaseauth}
