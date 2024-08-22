"use client";

import { useState, useEffect } from "react";
import { useUserStore } from "../store/userDetails";
import Head from "next/head";
import SVGIcon, { SVGList } from "../asset/icons";
import Nodata from "../asset/Nodata.png"
import Image from 'next/image';
import change from "../asset/Change.png"
import wifi from "../asset/Wifi.png"
import tally from "../asset/tally.png"
//import SVGIcon, { SVGList } from "../asset/icons";
import { Switch } from "../components/switch";

export default function MetaJiTallyConnector() {
  const { userDetails } = useUserStore();

  const [tallyServer, setTallyServer] = useState("localhost:9999");
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
    console.log("Email:", user.email);
    console.log("Tally Gateway Server:", tallyServer);
    setIsSaved(true);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-6">
        <Head>
          <title>MetaJi Tally Connector</title>
        </Head>
        <div className="flex flex-col justify-between bg-white rounded-lg shadow-md text-center w-full h-auto">
          <div className="p-2 flex gap-x-2 items-center border-b">
            <div className="border rounded-lg p-2">
              <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />
            </div>
            <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
          </div>
        </div>

        <div className='flex items-center justify-end mr-5'>

          {/* <div className='mr-auto'>
            <Switch/>

          </div> */}
          
          <div className='flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200 space-x-2'>
          <span className="flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded">
          <Image src = {change} alt ="syncing" className="w-5 h-5"/>
           Sync</span>

           <span className="flex items-center px-3 py-1 bg-green-100 text-green-600 rounded">
            <Image src = {wifi} alt ="syncing" className="w-5 h-5 "/>
              Connected
            </span>

            <span className="flex items-center px-3 py-1 bg-green-100 text-green-600 rounded">
            <Image src = {tally} alt ="syncing" className="w-5 h-5"/>
              Connected
            </span>
            </div>

            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
            B
          </div>
          </div>

        {/* <div className="flex justify-between items-center mt-4 mb-6">
          <button className="text-purple-600">Telly data</button>
          <button className="text-purple-600">Export requests</button>
          <button className="bg-purple-600 text-white px-4 py-1 rounded-lg">Sync</button>
        </div> */}

        {/* <div className="flex items-center justify-between mb-4">
          <span className="text-red-600">Not Connected</span>
          <span className="text-red-600">Tally Not Connected</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">B</div>
        </div> */}

        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Account</h2>
          <p className="text-gray-600 mb-2">Manage your profile and preferences here.</p>
          <hr></hr>
          <p className="text-400 font-semibold mb-2 mt-8">Email</p>

          
          <div className="flex items-center border border-gray-300 rounded-lg mb-4 p-3 ">

            <SVGIcon name={SVGList.email} width={"20px"} height={"20px"} className="ml-4" />
            <input
              type="email"
              className="w-full outline-none ml-2"
              value={user.email}
              readOnly
              disabled
            />
          </div>
          

          <p className="text-400 font-semibold mb-2">Tally Gateway Server</p>
          <input
            type="text"
            className="w-full border border-gray-300 p-3 rounded-lg"
            value={tallyServer}
            onChange={(e) => setTallyServer(e.target.value)}
          />
        </div>

        <div className="flex justify-between">
          <button
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg"
            onClick={() => {
              setTallyServer("localhost:9999");
            }}
          >
            Cancel
          </button>
          <button
            className={`bg-purple-600 text-white px-4 py-2 rounded-lg ${
              isSaved ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleSave}
            disabled={isSaved}
          >
            Save
          </button>
        </div>

        <footer className="mt-5 text-center text-gray-600 bg-slate-100 text-sm p-3">
          MetaJi.in | Version 1.0
        </footer>
      </div>
    </div>
  );
}
