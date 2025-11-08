import React, { useState } from 'react';
import { Users, Zap, Truck, Award, Building, Package, ArrowRight } from 'lucide-react';

const PartnerPage = () => {
  const [formData, setFormData] = useState({
    storeName: '',
    ownerName: '',
    phone: '',
    email: '',
    city: '',
    address: '',
    gst: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! We will contact you soon. (Backend integration coming next week)');
    console.log('Form Data:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">Partner With Us</h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
              Join 500+ local stores growing their business with FashionFlash. 
              Fill out the form below and we'll get in touch!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                  Why Partner With Us?
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: Users, text: 'Reach thousands of new customers' },
                    { icon: Zap, text: 'Zero inventory risk - we handle everything' },
                    { icon: Truck, text: 'Fast delivery through our logistics network' },
                    { icon: Award, text: 'Competitive commission rates' },
                    { icon: Building, text: 'Digital presence for your local store' },
                    { icon: Package, text: 'Easy inventory management system' },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Register Your Store
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Store Name *
                  </label>
                  <input
                    type="text"
                    name="storeName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Fashion Boutique"
                    value={formData.storeName}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Owner Name *
                  </label>
                  <input
                    type="text"
                    name="ownerName"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Your Name"
                    value={formData.ownerName}
                    onChange={handleChange}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Delhi, Mumbai, Bangalore..."
                    value={formData.city}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Store Address *
                  </label>
                  <textarea
                    name="address"
                    required
                    rows="3"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="Complete store address"
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    GST Number (Optional)
                  </label>
                  <input
                    type="text"
                    name="gst"
                    className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-xl focus:border-blue-500 dark:focus:border-blue-400 outline-none transition bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder="22AAAAA0000A1Z5"
                    value={formData.gst}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 transition-colors duration-300">
                    Product Categories
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['Men', 'Women', 'Kids', 'Accessories', 'Footwear', 'Ethnic Wear'].map((cat) => (
                      <label key={cat} className="flex items-center space-x-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 text-blue-500 rounded" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm transition-colors duration-300">{cat}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <span>Submit Registration</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center transition-colors duration-300">
                  By submitting, you agree to our Terms & Conditions
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PartnerPage;
