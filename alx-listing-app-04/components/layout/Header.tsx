import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md border-b">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
              LE
            </div>
            <span className="text-2xl font-bold text-gray-800">LuxuryEstates</span>
          </div>

          {/* Navigation - Centered */}
          <nav className="hidden md:flex flex-grow items-center justify-center space-x-8">
            <a href="/rooms" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Rooms</a>
            <a href="/mansion" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Mansion</a>
            <a href="/countryside" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Countryside</a>
            <a href="/beach" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">Beach</a>
            <a href="/city" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">City</a>
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600 font-semibold transition-colors duration-300">Sign in</button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300">
              Sign up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button type="button" title="Open menu" aria-label="Open menu" className="md:hidden text-gray-600 hover:text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;