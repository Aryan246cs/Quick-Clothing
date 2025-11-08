import React from 'react';
import { ShoppingBag, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { Link } from '../utils/Router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white pt-16 pb-8 border-t border-gray-800 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <ShoppingBag className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">FashionFlash</span>
            </div>
            <p className="text-gray-400 dark:text-gray-500 mb-6 leading-relaxed">
              India's fastest fashion delivery platform. Get your favorite clothes from neighborhood stores in just 20 minutes.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Social, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-11 h-11 bg-gray-800 dark:bg-gray-900 rounded-xl flex items-center justify-center hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
                  aria-label={`Follow us on ${Social.name}`}
                >
                  <Social className="w-5 h-5 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white dark:text-gray-100">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  How It Works
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white dark:text-gray-100">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Refund Policy
                </a>
              </li>
            </ul>
          </div>

          {/* For Partners Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-white dark:text-gray-100">For Partners</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/partner" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Register Store
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Become a Rider
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Business Support
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 transition-colors duration-200 inline-block">
                  Seller Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 dark:text-gray-500 text-sm">© 2025 FashionFlash. All rights reserved.</p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 text-sm transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 text-sm transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-gray-400 dark:text-gray-500 hover:text-red-400 dark:hover:text-red-400 text-sm transition-colors duration-200">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;