import { getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfv1oGt7LMZnj-vbc8kaygOO9nYGQD7Ec",
  authDomain: "metaji-auth01.firebaseapp.com",
  projectId: "metaji-auth01",
  storageBucket: "metaji-auth01.appspot.com",
  messagingSenderId: "689182450363",
  appId: "1:689182450363:web:5b31a32016e1e64ad37f9e",
  measurementId: "G-2LDF4F7VS1",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}
const auth = getAuth();

export { auth };

const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
