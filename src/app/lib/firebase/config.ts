// lib/firebase.js (or config.js if you're using that name)
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX74tB_bYU6wbBNqVuE_28156A6OyBftc",
  authDomain: "tally-app-87e7d.firebaseapp.com",
  projectId: "tally-app-87e7d",
  storageBucket: "tally-app-87e7d.appspot.com",
  messagingSenderId: "299719477757",
  appId: "1:299719477757:web:46d6b72b7ef1600e7f3194",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);

export { firebaseAuth };
