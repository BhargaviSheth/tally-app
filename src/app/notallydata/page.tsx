import React from 'react';
import Image from 'next/image';
import Notallydata from "../asset/Notallydata.png"
import change from "../asset/Change.png";
import tally from "../asset/tally.png"
import wifi from "../asset/Wifi.png"
import SVGIcon, { SVGList } from "../asset/icons";


const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <header className="flex justify-between items-center px-4 py-3 bg-white border-b border-gray-200">
      <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />

        <div className="text-gray-800 text-lg font-medium">MetaJi Tally Connector</div>
        <div className="flex items-center">
          <span className="mr-3 px-3 py-1 bg-gray-200 text-gray-700 rounded">
          <Image src = {change} alt ="syncing" className="w-5 h-5"/>

            Sync</span>
          <div className="flex items-center space-x-2">
            <span className="flex items-center px-3 py-1 bg-red-100 text-red-600 rounded">
            <Image src = {wifi} alt ="syncing" className="w-5 h-5"/>

              Not Connected
              

            </span>
            <span className="flex items-center px-3 py-1 bg-red-100 text-red-600 rounded">
            <Image src = {tally} alt ="syncing" className="w-5 h-5"/>

             
              Not Connected

            </span>
          </div>
          <div className="ml-3 w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-700 font-bold">
            B
          </div>
        </div>
      </header>

      <nav className="flex px-4 py-2 bg-gray-100 border-b border-gray-200">
        <button className="px-4 py-2 mr-2 bg-purple-100 text-purple-700 rounded">
          Telly data
        </button>
        <button className="px-4 py-2 bg-transparent text-gray-600 rounded">
          Export requests
        </button>
      </nav>

      <main className="flex flex-col flex-1 items-center justify-center bg-white text-center">
      <Image
                src={Notallydata}
                alt="Tally Icon"
                className="w-40 h-40 "
                />
        <h2 className="text-2xl font-medium">Data Unavailable</h2>
        <p className="text-gray-500">Tally is not connected, so we are unable to display your stats.</p>
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
