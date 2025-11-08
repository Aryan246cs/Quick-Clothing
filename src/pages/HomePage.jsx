import React, { useState } from 'react';
import { Zap, Store, Shield, Award, ArrowRight, MapPin, Clock, Star, ChevronRight } from 'lucide-react';
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-md border border-red-100">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-700">Delivering Fashion Since 2025</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Fashion at</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  Lightning Speed
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Get your favorite clothes from neighborhood stores delivered to your doorstep in just <span className="font-bold text-red-500">20 minutes</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition font-semibold text-center flex items-center justify-center space-x-2"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/partner"
                  className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-900 rounded-xl hover:border-red-500 transition font-semibold text-center"
                >
                  Partner With Us
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4">
                {[
                  { value: '500+', label: 'Partner Stores' },
                  { value: '10K+', label: 'Happy Customers' },
                  { value: '15 min', label: 'Avg Delivery' }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden md:block">
              <div className="relative bg-gradient-to-br from-red-400 via-pink-400 to-purple-400 rounded-3xl p-12 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="relative text-center">
                  <div className="text-9xl mb-4">👕</div>
                  <div className="text-white text-2xl font-bold">Shop Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Category Filter Bar */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Shop by Category</h2>
            <Link to="" className="text-red-500 hover:text-red-600 font-semibold text-sm flex items-center space-x-1">
              <span>View All</span>
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="flex items-center space-x-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap transition ${selectedCategory === cat
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      


      {/* Featured Stores Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Stores Near You</h2>
              <p className="text-gray-600">Discover local fashion boutiques delivering in minutes</p>
            </div>
            <button className="hidden md:flex items-center space-x-2 px-6 py-3 bg-white border-2 border-gray-200 text-gray-900 rounded-xl hover:border-red-500 hover:text-red-500 transition font-semibold">
              <MapPin className="w-5 h-5" />
              <span>Change Location</span>
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stores.map((store) => (
              <div
                key={store.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group border border-gray-100"
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
                      : 'bg-gray-800 text-white'
                    }`}>
                    {store.isOpen ? 'Open Now' : 'Closed'}
                  </div>
                  {/* Distance Badge */}
                  <div className="absolute bottom-3 left-3 bg-white bg-opacity-95 px-3 py-1.5 rounded-lg flex items-center space-x-1 shadow-md">
                    <MapPin className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-semibold text-gray-900">{store.distance}</span>
                  </div>
                </div>

                {/* Store Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-red-500 transition">
                        {store.name}
                      </h3>
                      <p className="text-sm text-gray-600">{store.address}</p>
                    </div>
                    <div className="flex items-center space-x-1 bg-yellow-50 px-2.5 py-1 rounded-lg">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-bold text-gray-900">{store.rating}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {store.categories.map((cat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-semibold"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Delivery Time */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-red-500" />
                      <span className="text-sm font-semibold text-gray-900">Delivery in {store.time}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Stores Button */}
          <div className="text-center mt-10">
            <button className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg transition font-semibold inline-flex items-center space-x-2">
              <span>View All Stores</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FashionFlash?</h2>
            <p className="text-gray-600 text-lg">Fast, reliable, and trusted by thousands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative bg-gray-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
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
              className="px-8 py-4 bg-white text-red-500 rounded-xl hover:scale-105 transition font-semibold"
            >
              Contact Us
            </Link>
            <Link
              to="/partner"
              className="px-8 py-4 bg-white bg-opacity-20 border-2 border-white text-white rounded-xl hover:bg-opacity-30 transition font-semibold"
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