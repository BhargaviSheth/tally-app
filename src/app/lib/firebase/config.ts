// lib/firebase.js (or config.js if you're using that name)
//import { initializeApp } from "firebase/app";
import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

//import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCX74tB_bYU6wbBNqVuE_28156A6OyBftc",
  authDomain: "tally-app-87e7d.firebaseapp.com",
  projectId: "tally-app-87e7d",
  storageBucket: "tally-app-87e7d.appspot.com",
  messagingSenderId: "299719477757",
  appId: "1:299719477757:web:46d6b72b7ef1600e7f3194",
};

// const app = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(app);


// export { firebaseAuth };

//code of signinwith redirect
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// let app;

// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApp();
// }

// const auth = getAuth(app);

// export { auth };
