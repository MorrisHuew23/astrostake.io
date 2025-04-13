import { useState } from 'react';
import RegModal from './RegModal.jsx'
import React from 'react';

export function App() {
  const [isRegModalOpen, setIsRegModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="container mx-auto relative">
      <div className="bg-black rounded-4xl w-4/5 my-6 py-2 mx-auto shadow-[0_0_20px_10px_rgba(193,27,198,0.3)]">
        <div className="flex justify-between items-center pl-4 pr-2">
          <h1 className="text-white text-xl font-medium">Coinbase</h1>
          
          <div className="hidden md:flex">
            <h1 className="text-white text-xl font-light px-5 py-1 rounded-md">Home</h1>
            <h1 className="text-white text-xl font-light px-5 py-1 rounded-md">About</h1>
            <h1 className="text-white text-xl font-light px-5 py-1 rounded-md">FAQ</h1>
            <h1 className="text-white text-xl font-light px-5 py-1 rounded-md">Support</h1>
            <h1 className={"text-white text-xl font-light px-5 py-1 hover:text-purple-500 hover:rounded-3xl cursor-pointer transition-all duration-200 ${isRegModalOpen ? 'text-purple-400 rounded-3xl' : ''}"} onClick={() => setIsRegModalOpen(true)}>
            Join now
            </h1>
          </div>

          <button className="md:hidden text-white px-1 focus:outline-none" onClick={toggleMenu} >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </div>

      {/* Боковое окно меню */}
      <div className={`fixed inset-0 z-50 transform backdrop-blur-xs ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>

        <div className="absolute inset-0 bg-black/50" onClick={toggleMenu}>
        </div>
        
        {/* Мобильное меню */}
        <div className="relative w-1/2 max-w-xs h-full shadow-lg">
          <div className="p-4">
            <h1 className="text-xl font-medium mb-7 px-3">neutra</h1>
            <div className="flex flex-col space-y-3">
              <h1 className="text-white text-lg font-light px-3 py-2 hover:bg-gray-600/50 rounded-md">Home</h1>
              <h1 className="text-white text-lg font-light px-3 py-2 hover:bg-gray-600/50 rounded-md">About</h1>
              <h1 className="text-white text-lg font-light px-3 py-2 hover:bg-gray-600/50 rounded-md">FAQ</h1>
              <h1 className="text-white text-lg font-light px-3 py-2 hover:bg-gray-600/50 rounded-md">Support</h1>
              <h1 className={"text-purple-500 text-lg font-light px-3 py-2 bg-gray-900/50 rounded-md cursor-pointer transition-all duration-200 ${isRegModalOpen ? 'text-purple-400 rounded-3xl' : ''}"} onClick={() => setIsRegModalOpen(true)}>Join now</h1>
            </div>
          </div>
        </div>
      </div>
      {isRegModalOpen && (<RegModal isOpen={isRegModalOpen} onClose={() => setIsRegModalOpen(false)}/>)}
    </div>
  )
}

export default App