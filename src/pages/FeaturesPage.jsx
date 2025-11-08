import React from 'react';
import { Clock, Shield, CreditCard, Repeat, MapPin, Store, Smartphone, TrendingUp, Award, Zap, Package, CheckCircle } from 'lucide-react';

const FeaturesPage = () => {
  const customerFeatures = [
    {
      icon: Clock,
      title: '20-Minute Delivery',
      desc: 'Get your fashion fix delivered to your doorstep in just 20 minutes. Perfect for last-minute events and fashion emergencies.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: MapPin,
      title: 'Real-Time Tracking',
      desc: 'Track your order from store to doorstep with live GPS tracking. Know exactly when your outfit will arrive.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Repeat,
      title: 'Same-Day Returns & Exchanges',
      desc: 'Not the right fit? Return or exchange within the same day. We have made returns as fast as delivery.',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      desc: 'All products are verified by local stores. Get authentic branded clothing with zero compromise on quality.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'Live Inventory',
      desc: 'See what is actually available in stores near you in real-time. No more out of stock disappointments.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Award,
      title: 'Best Local Prices',
      desc: 'Shop at the same prices as physical stores. Support local businesses without paying premium delivery charges.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const sellerBenefits = [
    {
      icon: TrendingUp,
      title: 'Instant Visibility',
      desc: 'Get your store listed and visible to thousands of customers within 24 hours of registration.',
      stat: '10x More Reach'
    },
    {
      icon: CreditCard,
      title: 'Quick Settlements',
      desc: 'Receive your earnings within 2 business days. No waiting periods, no hassles.',
      stat: '48 Hour Payout'
    },
    {
      icon: Package,
      title: 'Zero Inventory Risk',
      desc: 'We list your existing stock. No need for warehouses or additional inventory investment.',
      stat: '0% Risk'
    },
    {
      icon: Store,
      title: 'Digital Storefront',
      desc: 'Get a professional online presence without building your own website or app.',
      stat: 'Free Setup'
    },
    {
      icon: Zap,
      title: 'Smart Logistics',
      desc: 'We handle all deliveries, returns, and exchanges through our logistics network.',
      stat: '20 Min Delivery'
    },
    {
      icon: CheckCircle,
      title: 'Easy Integration',
      desc: 'Sync with your existing POS system. Real-time inventory updates automatically.',
      stat: 'Seamless Sync'
    }
  ];

  const howItHelps = [
    {
      emoji: '🚨',
      title: 'Fashion Emergencies',
      desc: 'Last-minute party invite? Job interview tomorrow? Wedding next week? We have got you covered with ultra-fast delivery.'
    },
    {
      emoji: '🎯',
      title: 'Try Before You Commit',
      desc: 'Not sure about the fit or color? Order multiple options and return what does not work - same day, no questions asked.'
    },
    {
      emoji: '🏪',
      title: 'Support Local Businesses',
      desc: 'Every order supports your neighborhood garment shops. Help local stores compete with e-commerce giants.'
    },
    {
      emoji: '♻️',
      title: 'Sustainable Shopping',
      desc: 'Shorter delivery distances mean lower carbon footprint. Shop locally, think globally.'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-red-100 dark:bg-red-900/30 rounded-full text-red-600 dark:text-red-400 font-semibold mb-6">
            ⚡ Revolutionary Fashion Delivery
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Why FashionFlash is Different
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            We are not just another delivery app. We are revolutionizing how India shops for fashion 
            by combining the speed of quick commerce with the authenticity of local stores.
          </p>
        </div>
      </section>

      {/* Customer Features */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">For Fashion Lovers</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">Everything you need for the perfect shopping experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 border-2 border-gray-100 dark:border-gray-700 rounded-3xl p-8 hover:border-red-500 dark:hover:border-red-400 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors duration-300">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Helps */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Perfect For Every Situation</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg transition-colors duration-300">Real solutions for real fashion needs</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItHelps.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
                <div className="text-6xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seller Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">For Store Partners</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg transition-colors duration-300">Grow your business without the hassle</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sellerBenefits.map((benefit, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:scale-105">
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm font-bold">
                    {benefit.stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-red-500 via-pink-500 to-purple-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Trusted by Thousands</h2>
            <p className="text-xl text-white text-opacity-90">Real numbers, real impact</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Partner Stores' },
              { value: '10K+', label: 'Happy Customers' },
              { value: '50K+', label: 'Orders Delivered' },
              { value: '15 min', label: 'Average Delivery' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold mb-2 text-white">{stat.value}</div>
                <div className="text-lg text-white text-opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Ready to Experience Fast Fashion?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
            Join thousands who have already discovered the future of fashion shopping
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#download" className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold">
              Download App
            </a>
            <a href="#/partner" className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:border-red-500 dark:hover:border-red-400 hover:scale-105 transition-all duration-200 font-semibold">
              Partner With Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesPage;
