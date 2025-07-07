import React, { useState } from 'react';

// Mock data for the website
const mockHomes = [
  {
    id: 1,
    price: '$825,000',
    beds: 3,
    baths: 2.5,
    sqft: 2419,
    address: '4116 52nd Street NE, Tacoma, WA 98422',
    image: 'https://images.unsplash.com/photo-1616003618788-413cd29e3f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb250ZW1wb3JhcnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MHx8fGJsdWV8MTc1MTg3NjYxOXww&ixlib=rb-4.1.0&q=85'
  },
  {
    id: 2,
    price: '$24,985,000',
    beds: 5,
    baths: 5.5,
    sqft: 8980,
    address: '415 Shoreland Drive SE, Bellevue, WA 98004',
    image: 'https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg'
  }
];

const mockTestimonials = [
  {
    name: 'Joseph L.',
    profession: 'Architect',
    feedback: 'Knowing we would get such a large rebate allowed us to expand our budget and find our dream house.',
    image: 'https://images.pexels.com/photos/7616608/pexels-photo-7616608.jpeg'
  },
  {
    name: 'Tyler J.',
    profession: 'Engineer',
    feedback: 'The process was incredibly smooth and convenient.',
    image: 'https://images.pexels.com/photos/12676895/pexels-photo-12676895.jpeg'
  }
];

const mockNeighborhoods = [
  'Best Places to Retire',
  'Best Affordable Areas Near Seattle',
  'Best for Young Professionals',
  'Best Family Neighborhood Seattle'
];

const companyLogos = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Blue Origin', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Blue_Origin_Logo.svg' },
  { name: 'Meta', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg' },
  { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' }
];

// Header Component
export const Header = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">WithJoy.AI</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#buy" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Buy
            </a>
            <a href="#tour" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Tour Home
            </a>
            <div className="relative group">
              <a href="#resources" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => setIsSignedIn(!isSignedIn)}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              {isSignedIn ? 'Dashboard' : 'Sign In'}
            </button>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-2 text-white text-sm">
            ⭐⭐⭐⭐⭐ Real Estate Brokerage for Buyers
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Buy a home.
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Get paid ~$15K.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          No strings attached. Sign up today, buy a home with us, and we'll share
          <br />
          70% of our commission with you.
        </p>

        {/* Search Bar */}
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search for a home or type a location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-600 transition-all transform hover:scale-105">
            Learn More
          </button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-8 text-white/80 text-sm">
          for Washington home buyers
        </div>
      </div>
    </section>
  );
};

// How It Works Section
export const HowItWorksSection = () => {
  const steps = [
    {
      icon: '🔍',
      title: 'Find',
      description: 'Describe your dream home and we\'ll find your perfect match.',
      detail: 'Use AI to find your perfect home'
    },
    {
      icon: '📅',
      title: 'Tour',
      description: 'Schedule online tours and a local agent will meet you there.',
      detail: 'Schedule home tours online with ease'
    },
    {
      icon: '💰',
      title: 'Offer',
      description: 'Work with an expert agent to submit a competitive offer.',
      detail: 'Work with a Human agent to draft a competitive offer'
    },
    {
      icon: '🏠',
      title: 'Close',
      description: 'Expert support through closing and get paid ~$15K.',
      detail: 'Get a 70% commission rebate at closing'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four simple steps to finding your dream home and getting paid for it
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200" style={{ transform: 'translateX(-50%)' }} />
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 mb-2">{step.description}</p>
              <p className="text-sm text-purple-600 font-medium">{step.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Homebuyers <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Love WithJoy.AI</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Benefits */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Buy a home like it's 2025. Not 1995.</h3>
                <p className="text-gray-600">Find your home with AI, work with a Human Agent using the latest tools, get paid a 70% rebate at closing.</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">📱</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Private Home Tours</h3>
                <p className="text-gray-600">Our Human Agents are connected with all the agents in your area. Book online, see homes.</p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">70%</h4>
                  <p className="text-gray-600">Commission Rebate</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600">Average rebate for</p>
                  <p className="text-xl font-bold text-purple-600">$500K</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full mb-2"></div>
              <div className="flex justify-between text-sm text-gray-600">
                <span>$0</span>
                <span>$10k</span>
                <span>$15k</span>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                A local agent to see your rebate amount based on a 3% commission.
              </p>
            </div>
          </div>

          {/* Right side - Testimonials */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 text-lg">⭐⭐⭐⭐⭐</div>
                <span className="ml-2 text-sm text-gray-600">As Seen In</span>
              </div>
              <div className="flex space-x-4 mb-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon" className="h-8 object-contain" />
                <span className="text-red-600 font-bold text-lg">CNET</span>
              </div>
            </div>

            {mockTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.profession}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.feedback}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Trust Section
export const TrustSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Trusted by Homebuyers at</h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {companyLogos.map((company, index) => (
              <div key={index} className="flex items-center justify-center h-12 grayscale hover:grayscale-0 transition-all">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-full max-w-[120px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Commission Rebate Section
export const CommissionRebateSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Receive up to <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">$15,000</span> or more
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Traditional agents take up to a 3% commission, but you have buying power. At WithJoy.AI, you get 70% of that commission back 💰, making your home more affordable.
            </p>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ready now to submit an offer?</h3>
                  <p className="text-purple-100">Get your personal team and your rebate approved.</p>
                </div>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1616003618788-413cd29e3f1a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHxjb250ZW1wb3JhcnklMjBob21lJTIwZXh0ZXJpb3J8ZW58MHx8fGJsdWV8MTc1MTg3NjYxOXww&ixlib=rb-4.1.0&q=85" 
              alt="Modern Home"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

// AI Agent Section
export const AIAgentSection = () => {
  const workflowSteps = [
    {
      number: '01',
      title: 'Find',
      description: 'Use AI to search for the perfect home as if you were talking to a friend.'
    },
    {
      number: '02',
      title: 'Tour',
      description: 'Schedule tours online with local agents who know the area.'
    },
    {
      number: '03',
      title: 'Offer',
      description: 'Work with expert agents to submit competitive offers.'
    },
    {
      number: '04',
      title: 'Close',
      description: 'Get support through closing and receive your rebate.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How it Works: Joy the <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">AI Real Estate Agent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Buy your home, pocket 70% of our commission
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Component
export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="ml-2 text-xl font-bold">WithJoy.AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered real estate brokerage offering 70% commission rebates to home buyers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 mb-4">Get updates on new listings and market insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-4 py-2 rounded-r-lg transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; 2025 WithJoy.AI. All rights reserved.</p>
          <p className="mt-2 text-sm">
            Licensed real estate broker. Equal housing opportunity. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};