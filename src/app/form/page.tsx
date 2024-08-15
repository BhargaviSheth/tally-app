"use client"
import { useState } from 'react';

export default function MetaJiTallyConnector() {
  const [email, setEmail] = useState('jaydeepdedaniya@gmail.com');
  const [tallyServer, setTallyServer] = useState('localhost:9999');
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    console.log('Email:', email);
    console.log('Tally Gateway Server:', tallyServer);
    setIsSaved(true);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
      <h1 className="text-xl font-semibold mb-4">MetaJi Tally Connector</h1>
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
            setEmail('jaydeepdedaniya@gmail.com');
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
  );
}
