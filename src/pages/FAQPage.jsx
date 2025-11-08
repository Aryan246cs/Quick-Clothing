import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = {
    customers: [
      {
        q: 'How fast is the delivery really?',
        a: 'We deliver fashion items within 20 minutes from the time you place your order. Our smart logistics system matches you with the nearest store that has your item in stock, ensuring ultra-fast delivery.'
      },
      {
        q: 'What if the product does not fit?',
        a: 'No worries! We offer same-day returns and exchanges. If the item does not fit or you do not like it, simply initiate a return through the app and we will pick it up and process your refund or exchange within 24 hours.'
      },
      {
        q: 'Are the products authentic?',
        a: 'Absolutely! All products come directly from verified local garment stores. We partner only with legitimate retailers, so you are getting the same authentic products you would find in physical stores.'
      },
      {
        q: 'What areas do you deliver to?',
        a: 'We currently operate in major metro cities including Delhi NCR, Mumbai, Bangalore, Hyderabad, and Pune. We are rapidly expanding to more cities. Enter your location in the app to check availability.'
      },
      {
        q: 'Can I track my order in real-time?',
        a: 'Yes! Once your order is confirmed, you can track your delivery partner location in real-time through our app. You will know exactly when your fashion haul will arrive.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major payment methods including UPI, credit/debit cards, net banking, and cash on delivery (COD). All transactions are 100% secure.'
      },
      {
        q: 'Is there a minimum order value?',
        a: 'No minimum order value! Whether you need a single accessory or a complete outfit, we deliver it all.'
      },
      {
        q: 'What if the store does not have my size?',
        a: 'Our live inventory system shows only items that are actually in stock at nearby stores. If your size is not available at one store, the app will show you other nearby stores that have it.'
      }
    ],
    sellers: [
      {
        q: 'How do I register my store?',
        a: 'Simply fill out our seller registration form with your store details, GST number, and product categories. Our team will verify your information and onboard you within 24-48 hours.'
      },
      {
        q: 'What commission do you charge?',
        a: 'We charge a competitive commission rate of 15-20% depending on the product category and order value. There are no hidden charges or listing fees.'
      },
      {
        q: 'How quickly do I receive payments?',
        a: 'We process payments within 2 business days after order delivery. Funds are directly transferred to your registered bank account.'
      },
      {
        q: 'Do I need to maintain additional inventory?',
        a: 'No! We list your existing store inventory. Our system syncs with your POS in real-time, so customers see what is actually available on your shelves.'
      },
      {
        q: 'Who handles delivery and returns?',
        a: 'We handle all logistics! Our delivery partners pick up orders from your store and deliver to customers. Returns are also picked up and brought back to your store.'
      },
      {
        q: 'Can I update my inventory myself?',
        a: 'Yes! You get access to a seller dashboard where you can add, remove, or update products. If you have a POS system, we can integrate for automatic updates.'
      },
      {
        q: 'What if a customer returns a used product?',
        a: 'We have strict quality checks. Customers can only return items in original condition with tags intact. Any damaged or used items are rejected at pickup.'
      },
      {
        q: 'Is there a contract period?',
        a: 'No lock-in period! You can join and leave our platform anytime. However, we are confident you will love the increased business and stay with us long-term.'
      }
    ],
    technical: [
      {
        q: 'Is my data secure?',
        a: 'Yes! We use industry-standard encryption and security protocols. Your personal information, payment details, and order history are completely secure and never shared with third parties.'
      },
      {
        q: 'Do I need to create an account to browse?',
        a: 'No account needed to browse! You can explore all products and stores without signing up. However, to place an order, you will need to create a quick account.'
      },
      {
        q: 'Is there an app?',
        a: 'Yes! Download our app from Google Play Store or Apple App Store for the best experience. The app offers faster checkout, better tracking, and exclusive deals.'
      },
      {
        q: 'What if I face a technical issue?',
        a: 'Our customer support team is available 9 AM - 9 PM daily. Contact us through in-app chat, email at support@fashionflash.com, or call our helpline.'
      }
    ]
  };

  const toggleFAQ = (category, index) => {
    const key = `${category}-${index}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  const renderFAQSection = (title, category, questions) => (
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">{title}</h2>
      <div className="space-y-4">
        {questions.map((faq, idx) => {
          const key = `${category}-${idx}`;
          const isOpen = openIndex === key;
          return (
            <div 
              key={idx}
              className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-100 dark:border-gray-700 overflow-hidden hover:border-red-500 dark:hover:border-red-400 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(category, idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white pr-4 transition-colors duration-300">{faq.q}</span>
                {isOpen ? (
                  <ChevronUp className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                )}
              </button>
              {isOpen && (
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed border-t border-gray-100 dark:border-gray-700 pt-4 transition-colors duration-300">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
            <HelpCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            Got questions? We have got answers. Find everything you need to know about FashionFlash.
          </p>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderFAQSection('For Customers', 'customers', faqs.customers)}
          {renderFAQSection('For Store Partners', 'sellers', faqs.sellers)}
          {renderFAQSection('Technical & Security', 'technical', faqs.technical)}
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">
            Cannot find the answer you are looking for? Our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#/contact" 
              className="px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200 font-semibold"
            >
              Contact Support
            </a>
            <a 
              href="mailto:support@fashionflash.com" 
              className="px-8 py-4 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white rounded-xl hover:border-red-500 dark:hover:border-red-400 hover:scale-105 transition-all duration-200 font-semibold"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQPage;
