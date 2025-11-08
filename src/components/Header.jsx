import React, { useState } from 'react';
import { ShoppingBag, MapPin, Menu, X } from 'lucide-react';
import { Link } from '../utils/Router';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location, setLocation] = useState('');

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <ShoppingBag className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                FashionFlash
              </span>
              <div className="text-xs text-gray-500 font-medium">Fashion in 20 minutes</div>
            </div>
          </Link>

          {/* Location Bar - Desktop */}
          <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-8">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-red-500" />
              <input 
                type="text"
                placeholder="Delivery in 20 minutes"
                className="w-full pl-11 pr-4 py-3 bg-gray-50 rounded-xl border-2 border-transparent focus:border-red-500 focus:bg-white outline-none transition text-sm font-medium"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-500 font-medium transition">
              Home
            </Link>
            <Link to="/features" className="text-gray-700 hover:text-red-500 font-medium transition">
              Features
            </Link>
            <Link to="/how-it-works" className="text-gray-700 hover:text-red-500 font-medium transition">
              How It Works
            </Link>
            <Link to="/faq" className="text-gray-700 hover:text-red-500 font-medium transition">
              FAQ
            </Link>
            <Link to="/partner" className="text-gray-700 hover:text-red-500 font-medium transition">
              Partner
            </Link>
            <Link to="/contact" className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition font-semibold">
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-3 border-t border-gray-100">
            <Link to="/" className="block text-gray-700 hover:text-red-500 py-2">
              Home
            </Link>
            <Link to="/features" className="block text-gray-700 hover:text-red-500 py-2">
              Features
            </Link>
            <Link to="/how-it-works" className="block text-gray-700 hover:text-red-500 py-2">
              How It Works
            </Link>
            <Link to="/faq" className="block text-gray-700 hover:text-red-500 py-2">
              FAQ
            </Link>
            <Link to="/partner" className="block text-gray-700 hover:text-red-500 py-2">
              Partner With Us
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-red-500 py-2">
              Contact
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;