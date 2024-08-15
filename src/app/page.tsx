// pages/index.js
"use client";  


import React from 'react';
import Head from 'next/head';
import SVGIcon, { SVGList } from "./asset/icons";
import { Button } from './components/button';
import { signInWithGoogle } from "./lib/firebase/auth";
// import { useGetToken } from "./lib/api/quires/authQueries";
import { useUserStore } from "./store/userDetails";
//import { createSession } from "/actions/authActions";
import tallyLogo from './asset/tallyLogo.png'
import Image from 'next/image';



export default function MetajiConnector() {

 // const { mutateAsync, status } = useGetToken();
  const { updateUser } = useUserStore();



  const handleSignIn = async () => {
    try {
      const firebaseUser = await signInWithGoogle();
      const userIdToken = await firebaseUser?.user.getIdToken();

      
      console.log("User ID Token:", userIdToken);
      
    } catch (error) {
      console.error("Error during Google sign-in:", error);
      
    }
  };
    
  return (
    <div className="flex justify-center items-center h-screen bg-gray ">
      <Head>
        <title>MetaJi Tally Connector</title>
      </Head>
      <div className=" flex flex-col justify-between bg-white  rounded-lg shadow-md text-center w-3/6 h-3/4 ">
        <div className="p-4 flex gap-x-2 items-center border-b">
          {/* <img src="/metaji-icon.png" alt="MetaJi" className="w-12 mx-auto mb-2" /> */}
          <div className='border rounded-lg p-2'>
          <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />
          </div>
          <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
        </div>


        <div className='flex justify-center items-center flex-col h-[80%] p-4'>
        <div className="">
        <Image src={tallyLogo}  alt="tallylogo" className="w-52 mx-auto mb-4" />
          {/* <SVGIcon name={SVGList.logo} className="w-60 mx-auto mb-4" height={"36px"} width={"36px"} /> */}

          <p className="text-gray-700">
            Connecting your <strong>Tally</strong> account to <strong>MetaJi</strong>
          </p>
        </div>

        <Button
        variant={"outline"}
        className="max-w-[100%]  rounded-[8px] gap-2 my-8 py-6"
        onClick={() => handleSignIn()}
      >
       
          <SVGIcon name={SVGList.google} height={"24px"} width={"24px"} />
        
        <div className="text-base font-normal w-auto">Continue with Google</div>
      </Button>
       
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

