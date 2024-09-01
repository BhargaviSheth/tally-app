import {
  type User,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  UserCredential,
} from "firebase/auth";

import { auth } from "./config";

export function onAuthStateChanged(callback: (authUser: User | null) => void) {
  return _onAuthStateChanged(auth, callback);
}

export async function signInWithGoogle() {
  const provider = new GoogleAuthProvider();
console.log({auth})
  try {
    const result = await signInWithPopup(auth, provider);

    if (!result || !result.user) {
      throw new Error("Google sign in failed");
    }

    return result as UserCredential;
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
}

export async function signOutWithGoogle() {
  try {
    await auth.signOut();
  } catch (error) {
    console.error("Error signing out with Google", error);
  }
}
