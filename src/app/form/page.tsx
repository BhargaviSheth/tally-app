"use client"
import { useState, useEffect } from 'react';
import { useUserStore } from '../store/userDetails';
import Head from 'next/head';
import SVGIcon, { SVGList } from "../asset/icons";

export default function MetaJiTallyConnector() {
  const { userDetails } = useUserStore();
  
  const [tallyServer, setTallyServer] = useState('localhost:9999');
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userDetails) {
      setLoading(false);
    }
  }, [userDetails]);

  // Handle early return if data is not ready
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDetails) {
    return <div>No user details available</div>;
  }

  const user = userDetails["user"];
  console.log(user);

  const handleSave = () => {
    console.log('Email:', user.email);
    console.log('Tally Gateway Server:', tallyServer);
    setIsSaved(true);
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray '>
      
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">

     <Head>
        <title>MetaJi Tally Connector</title>
      </Head>
      <div className="flex flex-col justify-between bg-white rounded-lg shadow-md text-center w-full h-auto">
        <div className="p-2 flex gap-x-2 items-center border-b">
          <div className='border rounded-lg p-2'>
            <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />
          </div>
          <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
        </div>
        </div>
      {/* <h1 className="text-xl font-semibold mb-4">MetaJi Tally Connector</h1> */}
      <div className="flex justify-between items-center mb-4">
        <button className="text-purple-600">Telly data</button>
        <button className="text-purple-600">Export requests</button>
        <button className="bg-purple-600 text-white px-4 py-1 rounded-lg">Sync</button>
      </div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-green-600">Connected</span>
        <span className="text-green-600">Tally Connected</span>
        <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">J</div>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Account</h2>
        <p className="text-gray-600 mb-2">Manage your profile and preferences here.</p>
        <input
          type="email"
          className="w-full border border-gray-300 p-2 rounded-lg mb-4"
          value={user.email}
        //  onChange={(e) => setEmail(user.email)}
        />
        <input
          type="text"
          className="w-full border border-gray-300 p-2 rounded-lg"
          value={tallyServer}
          onChange={(e) => setTallyServer(e.target.value)}
        />
      </div>
      <div className="flex justify-between">
        <button
          className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
          onClick={() => {
            setTallyServer('localhost:9999');
          }}
        >
          Cancel
        </button>
        <button
          className={`bg-purple-600 text-white px-4 py-2 rounded-lg ${
            isSaved ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleSave}
          disabled={isSaved}
        >
          Save
        </button>
      </div>
      <footer className="mt-6 text-center text-gray-500 text-sm">
        MetaJi.in | Version 1.0
      </footer>
    </div>
    </div>
  );
}
