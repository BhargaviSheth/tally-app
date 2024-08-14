// pages/index.js

import React from 'react';
import Head from 'next/head';
import SVGIcon, { SVGList } from "./asset/icons";
import { Button } from './components/button';
import { signInWithGoogle } from "./lib/firebase/auth";

import tallyLogo from './asset/tallyLogo.png'



export default function MetajiConnector() {


  const handleSignIn = async () => {
    const firebaseUser = await signInWithGoogle();
    const userIdToken = await firebaseUser?.user.getIdToken();
    
  return (
    <div className="flex justify-center items-center h-screen bg-gray">
      <Head>
        <title>MetaJi Tally Connector</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md text-center w-8/12 h-4/5 ">
        <div className="mb-5 flex space-x-0">
          {/* <img src="/metaji-icon.png" alt="MetaJi" className="w-12 mx-auto mb-2" /> */}
          <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />

          <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
        </div>


        <div className='flex justify-center items-center flex-col h-[80%]'>
        <div className="mb-6">
        {/* <img src={tallyLogo}  className="w-40 mx-auto mb-4" /> */}
          <SVGIcon name={SVGList.logo} className="w-60 mx-auto mb-4" height={"36px"} width={"36px"} />

          <p className="text-gray-700">
            Connecting your <strong>Tally</strong> account to <strong>MetaJi</strong>
          </p>
        </div>

        <Button
        variant={"outline"}
        className="max-w-[100%]  rounded-[8px] gap-2 my-8 py-6"
      //  onClick={() => handleSignIn()}
      >
       
          <SVGIcon name={SVGList.google} height={"24px"} width={"24px"} />
        
        <div className="text-base font-normal w-auto">Continue with Google</div>
      </Button>
       
        <p className="text-xs text-gray-500">
          By clicking "Continue with Google" above, you acknowledge that you have read and understood, and agree to MetaJi <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>

      </div>


        <footer className="text-xs text-gray-400 bg-slate-50">
          MetaJi.in | Version 1.0
        </footer>
      </div>
    </div>
  );
}
}
