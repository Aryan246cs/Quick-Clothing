import React, { useState } from 'react';
import { Zap, Store, Shield, Award, ArrowRight, MapPin, Clock, Star, ChevronRight, Sparkles, ShoppingBag } from 'lucide-react';
import { Link } from '../utils/Router';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Compact category filters
  const categories = ['All', 'Men', 'Women', 'Kids', 'Accessories', 'Footwear', 'Ethnic Wear'];

  const features = [
    { icon: Zap, title: '20 Min Delivery', desc: 'Lightning fast delivery from nearby stores', color: 'from-yellow-400 to-orange-500' },
    { icon: Store, title: 'Local Stores', desc: 'Supporting neighborhood garment shops', color: 'from-blue-400 to-indigo-500' },
    { icon: Shield, title: 'Quality Assured', desc: 'Verified products and genuine brands', color: 'from-green-400 to-teal-500' },
    { icon: Award, title: 'Best Prices', desc: 'Competitive pricing from local retailers', color: 'from-pink-400 to-red-500' },
  ];

  // Sample stores data - will be replaced with API later
  const stores = [
    {
      id: 1,
      name: 'Fashion Hub',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop',
      distance: '1.2 km',
      time: '15 min',
      rating: 4.5,
      categories: ['Men', 'Women', 'Accessories'],
      address: 'Sector 15, Gurugram',
      isOpen: true
    },
    {
      id: 2,
      name: 'Style Boutique',
      image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=400&h=300&fit=crop',
      distance: '0.8 km',
      time: '12 min',
      rating: 4.8,
      categories: ['Women', 'Ethnic Wear', 'Accessories'],
      address: 'MG Road, Gurugram',
      isOpen: true
    },
    {
      id: 3,
      name: 'Trendy Threads',
      image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop',
      distance: '1.5 km',
      time: '18 min',
      rating: 4.6,
      categories: ['Men', 'Kids', 'Footwear'],
      address: 'Cyber City, Gurugram',
      isOpen: true
    },
    {
      id: 4,
      name: 'Elite Fashion',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop',
      distance: '0.5 km',
      time: '10 min',
      rating: 4.7,
      categories: ['Men', 'Women', 'Footwear'],
      address: 'DLF Phase 2, Gurugram',
      isOpen: true
    },
    {
      id: 5,
      name: 'Kids Paradise',
      image: 'https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=400&h=300&fit=crop',
      distance: '2.0 km',
      time: '20 min',
      rating: 4.4,
      categories: ['Kids', 'Accessories'],
      address: 'Sohna Road, Gurugram',
      isOpen: false
    },
    {
      id: 6,
      name: 'Ethnic Elegance',
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=300&fit=crop',
      distance: '1.8 km',
      time: '17 min',
      rating: 4.9,
      categories: ['Ethnic Wear', 'Women', 'Accessories'],
      address: 'Golf Course Road, Gurugram',
      isOpen: true
    }
  ];

  return (
    <>
      {/* Hero Section - Full height, sticky, slides under next sections */}
      <section className="relative h-screen bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 dark:from-red-700 dark:via-pink-700 dark:to-purple-800 text-white overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/30 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-purple-400/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-lg px-5 py-2.5 rounded-full border border-white/30 shadow-lg">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                <span className="font-semibold text-white">India's Fastest Fashion Delivery</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-black leading-tight">
                <span className="block text-white">Fashion in</span>
                <span className="block mt-2 bg-gradient-to-r from-yellow-300 via-yellow-200 to-white bg-clip-text text-transparent animate-gradient">
                  20 Minutes
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
                Your neighborhood stores, now at your fingertips.
                <span className="block mt-2 font-semibold text-yellow-300">Shop local, get it fast.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-yellow-400 text-gray-900 font-bold rounded-2xl shadow-2xl hover:shadow-yellow-400/50 hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Start Shopping</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/partner"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/50 text-white font-bold rounded-2xl hover:bg-white hover:text-gray-900 transition-all flex items-center justify-center"
                >
                  Partner With Us
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                {[
                  { value: '500+', label: 'Local Stores', icon: '🏪' },
                  { value: '10K+', label: 'Happy Customers', icon: '😊' },
                  { value: '15 min', label: 'Avg Delivery', icon: '⚡' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center group cursor-pointer">
                    <div className="text-5xl mb-2 group-hover:scale-125 transition-transform">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-black text-white">{stat.value}</div>
                    <div className="text-sm text-white/80 mt-1 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Enhanced Image Card */}
            <div className="relative hidden md:flex justify-center items-center">
              {/* Main Image Container */}
              <div className="relative group">
                {/* Glowing Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Image Card */}
                <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-3 shadow-2xl transform hover:scale-105 transition-all duration-500 border border-white/20">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] w-80">
                    <img
                      src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=500&h=700&fit=crop&q=80"
                      alt="Fashion Shopping"
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Floating Badge - Top */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl flex items-center space-x-2 animate-bounce-slow">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-bold text-gray-900">Shop Now</span>
                    </div>

                    {/* Floating Badge - Bottom */}
                    <div className="absolute bottom-4 left-4 bg-yellow-400 px-4 py-2 rounded-full shadow-xl">
                      <span className="text-sm font-black text-gray-900">⚡ 20 Min Delivery</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-300/40 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-400/40 rounded-full blur-xl animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade Overlay */}
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none"></div>
      </section>
      {/* Category Filter Section */}
      <section className="py-12 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading + View All */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">
                Shop by Category
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base transition-colors duration-300">
                Browse trendy collections curated for every mood and moment
              </p>
            </div>
            <Link
              to=""
              className="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:border-red-500 dark:hover:border-red-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all duration-200 font-semibold text-sm"
            >
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Category Buttons */}
          <div className="flex flex-wrap gap-3 overflow-x-auto pb-3 scrollbar-hide">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-lg font-semibold text-sm whitespace-nowrap transition-all duration-200 border ${selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white border-transparent shadow-md scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-red-400 hover:text-red-500 dark:hover:text-red-400'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>



      {/* Featured Stores Section */}
      <section className="pb-12 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Stores Near You</h2>
              <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Discover local fashion boutiques delivering in minutes</p>
            </div>
            <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:border-red-500 dark:hover:border-red-400 hover:text-red-500 dark:hover:text-red-400 hover:scale-105 transition-all duration-200 font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Change Location</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100 dark:border-gray-700"
              >
                {/* Store Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={store.image}
                    alt={store.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Status Badge */}
                  <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-bold ${store.isOpen
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-800 dark:bg-gray-600 text-white'
                    }`}>
                    {store.isOpen ? 'Open Now' : 'Closed'}
                  </div>
                  {/* Distance Badge */}
                  <div className="absolute bottom-3 left-3 bg-white dark:bg-gray-800 bg-opacity-95 dark:bg-opacity-95 px-3 py-1.5 rounded-lg flex items-center space-x-1 shadow-md">
                    <MapPin className="w-4 h-4 text-red-500 dark:text-red-400" />
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">{store.distance}</span>
                  </div>
                </div>

                {/* Store Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200">
                        {store.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{store.address}</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-yellow-50 dark:bg-yellow-900/30 px-2.5 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{store.rating}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {store.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-xs font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Delivery Time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-red-500 dark:text-red-400" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">Delivery in {store.time}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500 group-hover:text-red-500 dark:group-hover:text-red-400 transition-colors duration-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Stores Button */}
          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold inline-flex items-center space-x-2">
              <span>View All Stores</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
<section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    
    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-3">
        Why Choose <span className="text-pink-600 dark:text-pink-400">FashionFlash?</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg">
        Fast, reliable, and trusted by thousands of shoppers
      </p>
    </div>

    {/* Feature Cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
      {features.map((feature, idx) => (
        <div
          key={idx}
          className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border border-gray-100 dark:border-gray-700 rounded-3xl p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          {/* Accent Badge */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-pink-500 to-red-400 dark:from-pink-600 dark:to-red-500 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
            <feature.icon className="w-7 h-7 text-white" />
          </div>

          {/* Card Content */}
          <div className="pt-10 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-white text-opacity-90">
            Join thousands of happy customers and local stores
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-red-500 rounded-xl hover:scale-105 transition-all duration-200 font-semibold"
            >
              Contact Us
            </Link>
            <Link
              to="/partner"
              className="px-8 py-4 bg-white bg-opacity-20 border-2 border-white text-white rounded-xl hover:bg-opacity-30 hover:scale-105 transition-all duration-200 font-semibold"
            >
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
