import React from 'react';
import { Zap, Store, Shield, Award, ArrowRight } from 'lucide-react';
import { Link } from '../utils/Router';

const HomePage = () => {
  const categories = [
    { name: 'Men', icon: '👔', color: 'from-blue-400 to-blue-600', items: '2000+' },
    { name: 'Women', icon: '👗', color: 'from-pink-400 to-pink-600', items: '3500+' },
    { name: 'Kids', icon: '👶', color: 'from-yellow-400 to-yellow-600', items: '1200+' },
    { name: 'Accessories', icon: '👜', color: 'from-purple-400 to-purple-600', items: '800+' },
    { name: 'Footwear', icon: '👟', color: 'from-green-400 to-green-600', items: '1500+' },
    { name: 'Ethnic', icon: '🥻', color: 'from-orange-400 to-orange-600', items: '900+' },
  ];

  const features = [
    { icon: Zap, title: '20 Min Delivery', desc: 'Lightning fast delivery from nearby stores', color: 'from-yellow-400 to-orange-500' },
    { icon: Store, title: 'Local Stores', desc: 'Supporting neighborhood garment shops', color: 'from-blue-400 to-indigo-500' },
    { icon: Shield, title: 'Quality Assured', desc: 'Verified products and genuine brands', color: 'from-green-400 to-teal-500' },
    { icon: Award, title: 'Best Prices', desc: 'Competitive pricing from local retailers', color: 'from-pink-400 to-red-500' },
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

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 text-lg">Explore thousands of products from local stores</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className={`relative bg-gradient-to-br ${cat.color} p-8 rounded-3xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                  <div className="text-center">
                    <div className="text-6xl mb-3 transform group-hover:scale-110 transition">{cat.icon}</div>
                    <div className="font-bold text-white text-lg mb-1">{cat.name}</div>
                    <div className="text-white text-sm opacity-90">{cat.items} items</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose FashionFlash?</h2>
            <p className="text-gray-600 text-lg">Fast, reliable, and trusted by thousands</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="group relative bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100">
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