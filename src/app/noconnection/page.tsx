import React from 'react';
import Nodata from "../asset/Nodata.png"
import Image from 'next/image';
import change from "../asset/Change.png"
import wifi from "../asset/Wifi.png"
import tally from "../asset/tally.png"
import SVGIcon, { SVGList } from "../asset/icons";
import Head from 'next/head';
import  {Switch } from '../components/switch';





const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 rounded-lg shadow-md overflow-hidden">
       <Head>
        <title>MetaJi Tally Connector</title>
      </Head>
      <div className="flex flex-col justify-between bg-white rounded-lg shadow-md text-center w-full h-auto">
        <div className="p-4 flex gap-x-2 items-center border-b">
          <div className='border rounded-lg p-2'>
            <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />
          </div>
          <h1 className="text-xl font-bold">MetaJi Tally Connector</h1>
        </div>

        <div className='flex items-center justify-end mr-5'>

          <div className='mr-auto'>
            <Switch/>

          </div>
          
          <div className='flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200 space-x-2'>
          <span className="flex items-center px-3 py-1 bg-gray-200 text-gray-700 rounded">
          <Image src = {change} alt ="syncing" className="w-5 h-5"/>
           Sync</span>

           <span className="flex items-center px-3 py-1 bg-red-100 text-red-600 rounded">
            <Image src = {wifi} alt ="syncing" className="w-5 h-5"/>
             Not Connected
            </span>

            <span className="flex items-center px-3 py-1 bg-red-100 text-red-600 rounded">
            <Image src = {tally} alt ="syncing" className="w-5 h-5"/>
             Not Connected
            </span>
            </div>

            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
            B
          </div>
          </div>



        </div>
      
      
    

      {/* <nav className="flex px-4 py-2 bg-gray-100 border-b border-gray-200">
        <button className="px-4 py-2 mr-2 bg-purple-100 text-purple-700 rounded">
          Telly data
        </button>
        <button className="px-4 py-2 bg-transparent text-gray-600 rounded">
          Export requests
        </button>
      </nav> */}

      <main className="flex flex-col flex-1 items-center justify-center bg-white text-center">
        <Image
          src={Nodata}
          alt="Offline Icon"
          className="w-20 h-20 mb-4"
        />
        <h2 className="text-2xl font-medium">Connect to the Internet</h2>
        <p className="text-gray-500">`&rsquo;`You're offline. Check your connection.`&rsquo;`</p>
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded">
          Reconnect
        </button>
      </main>

      <footer className="px-4 py-2 bg-gray-100 text-center text-sm text-gray-600">
        MetaJi.in | Version 1.0
      </footer>
    </div>
  );
};

export default Home;
