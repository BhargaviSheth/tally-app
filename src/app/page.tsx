// pages/index.js
"use client";  

import React, { useState } from 'react';
import Head from 'next/head';
import SVGIcon, { SVGList } from "./asset/icons";
import { Button } from './components/button';
import { signInWithGoogle } from "./lib/firebase/auth";
import { useUserStore } from "./store/userDetails";
import tallyLogo from './asset/tallyLogo.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
//import { useRouter } from 'next/router';
import { auth, provider } from './lib/firebase/config';
import { getRedirectResult, onAuthStateChanged ,signInWithRedirect} from 'firebase/auth';



export default function MetajiConnector() {
  const { updateUser } = useUserStore();
  const router = useRouter(); 

  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const checkRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result && result.user) {
          router.push('/main');
        }
      } catch (error) {
        console.error("Error handling redirect result", error);
      }
    };

    checkRedirect();

    // Optional: handle user state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/main');
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleGoogleLogin = async () => {
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error during Google sign-in", error);
    }
  };

  //code of popup login
  const handleSignIn = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const firebaseUser = await signInWithGoogle();
      const userIdToken = await firebaseUser?.user.getIdToken();

      if (userIdToken && firebaseUser?.user.uid) {
        await fetch('/api/auth', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userIdToken}`
          },
          body: JSON.stringify({ uid: firebaseUser.user.uid })
        });
        router.push('/main'); 

        // Update user store with Firebase user data
        updateUser(firebaseUser);
        console.log("User ID Token:", userIdToken);
      }

    } catch (error) {
      console.error("Error during Google sign-in:", error);
      setErrorMessage("Failed to sign in. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
    
  return (
    <div className="flex justify-center items-center h-screen bg-gray">
      <Head>
        <title>MetaJi Tally Connector</title>
      </Head>
      <div className="flex flex-col justify-between bg-white rounded-lg shadow-md text-center w-3/6 h-3/4">
        <div className="p-4 flex gap-x-2 items-center border-b">
          <div className='border rounded-lg p-2'>
            <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />
          </div>
          <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
        </div>

        <div className='flex justify-center items-center flex-col h-[80%] p-4'>
          <div className="">
            <Image src={tallyLogo} alt="tallylogo" className="w-52 mx-auto mb-4" />
            <p className="text-gray-700">
              Connecting your <strong>Tally</strong> account to <strong>MetaJi</strong>
            </p>
          </div>

          <Button
            variant={"outline"}
            className="max-w-[100%] rounded-[8px] gap-2 my-8 py-6"
            onClick={handleGoogleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="text-base font-normal w-auto">Loading...</div>
            ) : (
              <>
                <SVGIcon name={SVGList.google} height={"24px"} width={"24px"} />
                <div className="text-base font-normal w-auto">Continue with Google</div>
              </>
            )}
          </Button>

          {errorMessage && (
            <p className="text-xs text-red-500">{errorMessage}</p>
          )}

          <p className="text-xs text-gray-500 w-4/5">
            By clicking &quot;Continue with Google&quot; above, you acknowledge that you have read and understood, and agree to MetaJi <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
          </p>
        </div>

        <footer className="text-xs text-gray-600 bg-slate-100 p-3">
          MetaJi.in | Version 1.0
        </footer>
      </div>
    </div>
  );
}
