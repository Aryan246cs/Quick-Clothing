import React from 'react';
import { Sparkles, Users, Shield, Zap } from 'lucide-react';

const AboutPage = () => {
  const team = [
    { name: 'Rajesh Kumar', role: 'CEO & Founder', emoji: '👨‍💼' },
    { name: 'Priya Sharma', role: 'CTO', emoji: '👩‍💻' },
    { name: 'Amit Patel', role: 'Head of Operations', emoji: '👨‍💼' },
    { name: 'Sneha Reddy', role: 'Marketing Lead', emoji: '👩‍💼' },
  ];

  const values = [
    { 
      icon: Sparkles, 
      title: 'Innovation', 
      desc: 'Constantly pushing boundaries in fashion delivery' 
    },
    { 
      icon: Users, 
      title: 'Community', 
      desc: 'Supporting local businesses and neighborhoods' 
    },
    { 
      icon: Shield, 
      title: 'Trust', 
      desc: 'Building lasting relationships with transparency' 
    },
    { 
      icon: Zap, 
      title: 'Speed', 
      desc: 'Delivering fashion at unprecedented speed' 
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About FashionFlash
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to revolutionize fashion retail by connecting local stores 
              with customers through ultra-fast delivery.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                FashionFlash was born from a simple observation: local garment shops have 
                amazing products, but customers are moving online. We saw an opportunity to 
                bridge this gap while maintaining the speed and convenience that modern shoppers expect.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2025, we've quickly become India's fastest-growing fashion delivery 
                platform, partnering with over 500 local stores and delivering happiness to 
                thousands of customers every day.
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-400 to-pink-400 rounded-3xl p-12 text-center">
              <div className="text-9xl mb-4">🚀</div>
              <div className="text-white text-2xl font-bold">
                Building the Future of Fashion Retail
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 text-center hover:shadow-xl transition"
              >
                <div className="text-7xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;