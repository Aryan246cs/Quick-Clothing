import React from 'react';
import { X, Check } from 'lucide-react';

const ComparisonSection = () => {
  const comparisons = [
    {
      feature: 'Delivery Speed',
      traditional: '2-5 days',
      ecommerce: '1-3 days',
      fashionflash: '20 minutes',
      highlight: true
    },
    {
      feature: 'Returns & Exchanges',
      traditional: 'Store visit required',
      ecommerce: '7-15 days',
      fashionflash: 'Same day',
      highlight: true
    },
    {
      feature: 'Product Authenticity',
      traditional: '100% Guaranteed',
      ecommerce: 'Sometimes questionable',
      fashionflash: '100% Local stores',
      highlight: false
    },
    {
      feature: 'Try Before Buy',
      traditional: 'Yes (in-store)',
      ecommerce: 'No',
      fashionflash: 'Order & return same day',
      highlight: true
    },
    {
      feature: 'Support Local Business',
      traditional: 'Yes',
      ecommerce: 'No',
      fashionflash: 'Yes',
      highlight: false
    },
    {
      feature: 'Real-time Inventory',
      traditional: 'Limited',
      ecommerce: 'No',
      fashionflash: 'Live updates',
      highlight: true
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-gray-600 text-lg">
            The best of both worlds - convenience + speed
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-600">Traditional Stores</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-gray-600">E-commerce</th>
                <th className="px-6 py-4 text-center text-sm font-bold text-red-600 bg-red-50">
                  <div className="flex items-center justify-center space-x-2">
                    <span>FashionFlash</span>
                    <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full">Best</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, idx) => (
                <tr 
                  key={idx} 
                  className={`border-t border-gray-100 ${item.highlight ? 'bg-red-50 bg-opacity-30' : ''}`}
                >
                  <td className="px-6 py-4 font-semibold text-gray-900">{item.feature}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{item.traditional}</td>
                  <td className="px-6 py-4 text-center text-gray-600">{item.ecommerce}</td>
                  <td className="px-6 py-4 text-center font-bold text-red-600 bg-red-50">
                    {item.fashionflash}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {comparisons.map((item, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-6 ${item.highlight ? 'bg-red-50 border-2 border-red-200' : 'bg-gray-50'}`}
            >
              <h3 className="font-bold text-gray-900 mb-4 text-lg">{item.feature}</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Traditional:</span>
                  <span className="font-medium">{item.traditional}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">E-commerce:</span>
                  <span className="font-medium">{item.ecommerce}</span>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                  <span className="text-red-600 font-semibold">FashionFlash:</span>
                  <span className="font-bold text-red-600">{item.fashionflash}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Advantages */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Speed of E-commerce</h3>
            <p className="text-gray-600">Shop from your phone, just like online shopping</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Trust of Local Stores</h3>
            <p className="text-gray-600">Authentic products from verified neighborhood shops</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Ultra-Fast Delivery</h3>
            <p className="text-gray-600">Get it delivered in 20 minutes, not 20 days</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;