"use client";

import React, { useState } from 'react';
import { useUserStore } from '../store/userDetails';
import { Switch } from '../components/switch'; 
import SVGIcon, { SVGList } from "../asset/icons";
import { cn } from "../lib/utils"


export default function Home() {
  const { userDetails } = useUserStore();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tallyDataOn, setTallyDataOn] = useState(false);
  const [exportRequestsOn, setExportRequestsOn] = useState(false);

  if (!userDetails) {
    return <p>Loading...</p>;
  }

  const handleTallyDataToggle = () => setTallyDataOn(prev => !prev);
  const handleExportRequestsToggle = () => setExportRequestsOn(prev => !prev);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-5xl mx-auto mt-8">
      <header className="flex items-center p-4 bg-gray-100 border-b border-gray-300">
        <button className="mr-4 p-2 text-gray-600">
          <i className="icon-back"></i>
        </button>
        <div className='border rounded-lg p-2'>
          
          
          <SVGIcon name={SVGList.attach} width={"20px"} height={"20px"} />
        </div>
        <h1 className="text-xl font-semibold flex-grow">MetaJi Tally Connector</h1>
          <span className="ml-2 text-gray-600">Tally data</span>
          <span className="ml-2 text-gray-600">Export  data</span>

        <span className="ml-4 py-2 px-4 bg-gray-200 rounded-full text-gray-600">
          Sync
          
          </span>
        <div className="flex items-center ml-4 space-x-4">
          <div className="flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-600">
            <i className="icon-wifi mr-2"></i> Connected
          </div>
          <div className="flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full text-green-600">
            <i className="icon-tally mr-2"></i> Connected
          </div>
        </div>
        <div className="relative ml-4">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center"
          >
            B
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="px-4 py-2 border-b border-gray-200">
                <strong>{userDetails.user.displayName}</strong>
                <p className="text-sm text-gray-500">{userDetails.user.email}</p>
              </div>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Account</button>
              <button className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100">Logout</button>
            </div>
          )}
        </div>
      </header>

      <main className="p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Tally Company name</th>
              <th className="p-4 text-left">MetaJi Company name</th>
              <th className="p-4 text-left">Last sync</th>
              <th className="p-4 text-left">Pending records</th>
              <th className="p-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <tr key={index} className="border-b">
                  <td className="p-4">JAY KHODIYAR INDUSTRIES</td>
                  <td className="p-4">JAY KHODIYAR INDUSTRIES</td>
                  <td className="p-4">02-05-2024</td>
                  <td className="p-4">1</td>
                  <td className="p-4 text-right">
                    <button className="text-red-600">
                      <i className="icon-delete"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </main>

      <footer className="p-4 bg-gray-100 text-center border-t border-gray-300">
        MetaJi.in | Version 1.0
      </footer>
    </div>
  );
}
