import React from 'react';
import { MapPin, ShoppingBag, Truck, Store, Package, Users, ArrowRight } from 'lucide-react';
import { Link } from '../utils/Router';

const HowItWorksPage = () => {
  const customerSteps = [
    { 
      num: '01', 
      icon: MapPin, 
      title: 'Enter Location', 
      desc: 'Enter your delivery address to see nearby stores' 
    },
    { 
      num: '02', 
      icon: ShoppingBag, 
      title: 'Browse & Shop', 
      desc: 'Choose from thousands of fashion items' 
    },
    { 
      num: '03', 
      icon: Truck, 
      title: 'Fast Delivery', 
      desc: 'Get your order delivered in 20 minutes' 
    },
  ];

  const sellerSteps = [
    { 
      num: '01', 
      icon: Store, 
      title: 'Register Your Store', 
      desc: 'Fill out a simple registration form' 
    },
    { 
      num: '02', 
      icon: Package, 
      title: 'List Products', 
      desc: 'Add your inventory to our platform' 
    },
    { 
      num: '03', 
      icon: Users, 
      title: 'Receive Orders', 
      desc: 'Start receiving orders and grow your business' 
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            How It Works
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Simple, fast, and efficient. Here's how FashionFlash works for customers and sellers.
          </p>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center transition-colors duration-300">
            For Customers
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 transition-colors duration-300">
            Get fashion delivered in 3 easy steps
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {customerSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full border border-gray-100 dark:border-gray-700 hover:scale-105">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                    {step.num}
                  </div>
                  <div className="mt-8">
                    <step.icon className="w-12 h-12 text-red-500 dark:text-red-400 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Store Partners */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center transition-colors duration-300">
            For Store Partners
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 transition-colors duration-300">
            Join our network and expand your reach
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {sellerSteps.map((step, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 h-full border border-gray-200 dark:border-gray-700 hover:scale-105">
                  <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl">
                    {step.num}
                  </div>
                  <div className="mt-8">
                    <step.icon className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{step.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/partner" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
            >
              <span>Register as Partner</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorksPage;
