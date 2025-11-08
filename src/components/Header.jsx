import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from '../utils/Router';
import { useDarkMode } from '../contexts/DarkModeContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('');
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                FashionFlash
              </span>
              <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Fashion in 20 minutes</div>
            </div>
          </Link>

          {/* Location Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500 dark:text-red-400" />
              <input 
                type="text"
                placeholder="Delivery in 20 minutes"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-xl border-2 border-transparent focus:border-red-500 dark:focus:border-red-400 focus:bg-white dark:focus:bg-gray-800 outline-none transition text-sm font-medium text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-200">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-200">
              Features
            </Link>
            <Link to="/how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-200">
              How It Works
            </Link>
            <Link to="/faq" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-200">
              FAQ
            </Link>
            <Link to="/partner" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 font-medium transition-colors duration-200">
              Partner
            </Link>
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <Link to="/contact" className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
            <button 
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-gray-200 dark:border-gray-800">
            <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 py-2 transition-colors duration-200">
              Home
            </Link>
            <Link to="/features" className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 py-2 transition-colors duration-200">
              Features
            </Link>
            <Link to="/how-it-works" className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 py-2 transition-colors duration-200">
              How It Works
            </Link>
            <Link to="/faq" className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 py-2 transition-colors duration-200">
              FAQ
            </Link>
            <Link to="/partner" className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 py-2 transition-colors duration-200">
              Partner With Us
            </Link>
            <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 py-2 transition-colors duration-200">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;