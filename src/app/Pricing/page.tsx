
import React from 'react';

const PricingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header Section */}
      <header className="text-center py-16">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
          Agentia World Pricing
        </h1>
        <br />
        <p className="mt-4 text-lg text-gray-300">
          Choose the perfect plan for your AI-powered journey.
        </p>
      </header>

      {/* Pricing Cards Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Free Plan */}
          <div className="bg-gradient-to-b from-purple-900 to-black p-8 rounded-lg shadow-2xl border border-purple-700 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-purple-400">Free</h2>
            <p className="mt-2 text-gray-300">Get started with basic AI features.</p>
            <p className="mt-4 text-4xl font-bold text-white">$0<span className="text-lg text-gray-400">/month</span></p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Access to Basic AI Agent
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Limited Queries
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Community Support
              </li>
            </ul>
            <button className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-gradient-to-b from-purple-900 to-black p-8 rounded-lg shadow-2xl border border-purple-700 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-purple-400">Pro</h2>
            <p className="mt-2 text-gray-300">Unlock advanced AI capabilities.</p>
            <p className="mt-4 text-4xl font-bold text-white">$29<span className="text-lg text-gray-400">/month</span></p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Advanced AI Agent
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Unlimited Queries
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Priority Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Custom AI Models
              </li>
            </ul>
            <button className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Upgrade to Pro
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-gradient-to-b from-purple-900 to-black p-8 rounded-lg shadow-2xl border border-purple-700 transform hover:scale-105 transition-transform">
            <h2 className="text-2xl font-bold text-purple-400">Enterprise</h2>
            <p className="mt-2 text-gray-300">Tailored solutions for businesses.</p>
            <p className="mt-4 text-4xl font-bold text-white">Custom</p>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Dedicated AI Agents
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Custom Integrations
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> 24/7 Premium Support
              </li>
              <li className="flex items-center text-gray-300">
                <span className="text-purple-400 mr-2">✓</span> Scalable Infrastructure
              </li>
            </ul>
            <button className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default PricingPage;