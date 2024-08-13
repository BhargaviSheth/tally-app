// pages/index.js

import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Head>
        <title>MetaJi Tally Connector</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-sm w-full">
        <div className="mb-5">
          <img src="/metaji-icon.png" alt="MetaJi" className="w-12 mx-auto mb-2" />
          <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
        </div>
        <div className="mb-6">
          <img src="/tally-logo.png" alt="Tally" className="w-40 mx-auto mb-4" />
          <p className="text-gray-700">
            Connecting your <strong>Tally</strong> account to <strong>MetaJi</strong>
          </p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md flex items-center justify-center mx-auto mb-4">
          <img src="/google-logo.png" alt="Google Logo" className="w-5 mr-2" />
          Continue with Google
        </button>
        <p className="text-xs text-gray-500">
          By clicking "Continue with Google" above, you acknowledge that you have read and understood, and agree to MetaJi <a href="#" className="text-blue-500">Terms & Conditions</a> and <a href="#" className="text-blue-500">Privacy Policy</a>.
        </p>
        <footer className="mt-6 text-xs text-gray-400">
          MetaJi.in | Version 1.0
        </footer>
      </div>
    </div>
  );
}
