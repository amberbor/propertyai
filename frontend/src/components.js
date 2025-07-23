import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom';

// Mock data for the website
const mockHomes = [
  {
    id: 1,
    price: '$825,000',
    beds: 3,
    baths: 2.5,
    sqft: 2419,
    address: '4116 52nd Street NE, Tacoma, WA 98422',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    status: 'NEW',
    type: 'Single Family',
    yearBuilt: 2018,
    lotSize: '0.25 acres',
    hoaFees: 'None',
    propertyTax: '$8,250/year',
    description: 'Beautiful modern home with open concept design, chef\'s kitchen with granite countertops, and spacious master suite. Large backyard perfect for entertaining.',
    features: ['Granite Countertops', 'Hardwood Floors', 'Walk-in Closets', 'Stainless Steel Appliances', 'Two-Car Garage'],
    neighborhoods: ['Tacoma', 'Lincoln District'],
    walkScore: 85,
    transitScore: 72,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
    ],
    agent: 'Sarah Johnson · WithJoy.AI Realty'
  },
  {
    id: 2,
    price: '$1,080,000',
    beds: 3,
    baths: 3,
    sqft: 3200,
    address: '415 Shoreland Drive SE, Bellevue, WA 98004',
    image: 'https://images.unsplash.com/photo-1621693722835-44c9dcb724fd',
    status: 'NEW',
    type: 'Luxury Home',
    yearBuilt: 2021,
    lotSize: '0.33 acres',
    hoaFees: '$200/month',
    propertyTax: '$12,960/year',
    description: 'Stunning luxury home with premium finishes throughout. Features include a gourmet kitchen, spa-like master bath, and private backyard with pool.',
    features: ['Swimming Pool', 'Quartz Countertops', 'Smart Home Technology', 'Wine Cellar', 'Three-Car Garage'],
    neighborhoods: ['Bellevue', 'Somerset'],
    walkScore: 78,
    transitScore: 65,
    images: [
      'https://images.unsplash.com/photo-1621693722835-44c9dcb724fd',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    agent: 'Michael Chen · WithJoy.AI Realty'
  },
  {
    id: 3,
    price: '$530,000',
    beds: 3,
    baths: 2,
    sqft: 1850,
    address: '1234 Maple Street, Seattle, WA 98101',
    image: 'https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg',
    status: 'NEW',
    type: 'Family Home',
    yearBuilt: 2015,
    lotSize: '0.18 acres',
    hoaFees: 'None',
    propertyTax: '$5,830/year',
    description: 'Charming family home in a quiet neighborhood. Updated kitchen, spacious living areas, and a lovely garden make this the perfect starter home.',
    features: ['Updated Kitchen', 'Fenced Yard', 'Hardwood Floors', 'Central Air', 'Storage Shed'],
    neighborhoods: ['Seattle', 'Capitol Hill'],
    walkScore: 92,
    transitScore: 88,
    images: [
      'https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
    ],
    agent: 'Emily Rodriguez · WithJoy.AI Realty'
  },
  {
    id: 4,
    price: '$649,000',
    beds: 2,
    baths: 2,
    sqft: 1200,
    address: '5678 Pine Avenue, Seattle, WA 98102',
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
    status: 'NEW',
    type: 'Condo',
    yearBuilt: 2019,
    lotSize: 'N/A',
    hoaFees: '$450/month',
    propertyTax: '$7,137/year',
    description: 'Modern condo with city views and premium amenities. Building features fitness center, rooftop deck, and concierge service.',
    features: ['City Views', 'In-Unit Laundry', 'Balcony', 'Gym Access', 'Concierge'],
    neighborhoods: ['Seattle', 'Belltown'],
    walkScore: 95,
    transitScore: 92,
    images: [
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    agent: 'David Thompson · WithJoy.AI Realty'
  },
  {
    id: 5,
    price: '$1,200,000',
    beds: 4,
    baths: 3.5,
    sqft: 2800,
    address: '9876 Oak Boulevard, Bellevue, WA 98005',
    image: 'https://images.unsplash.com/photo-1722555286588-fa6b686f8ed5',
    status: 'NEW',
    type: 'Townhouse',
    yearBuilt: 2020,
    lotSize: 'N/A',
    hoaFees: '$320/month',
    propertyTax: '$14,400/year',
    description: 'Elegant townhouse with sophisticated design and premium finishes. Features include a gourmet kitchen, master suite with walk-in closet, and private patio.',
    features: ['Gourmet Kitchen', 'Master Suite', 'Private Patio', 'Attached Garage', 'Guest Bath'],
    neighborhoods: ['Bellevue', 'Crossroads'],
    walkScore: 82,
    transitScore: 75,
    images: [
      'https://images.unsplash.com/photo-1722555286588-fa6b686f8ed5',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
    ],
    agent: 'Lisa Wang · WithJoy.AI Realty'
  },
  {
    id: 6,
    price: '$929,000',
    beds: 3,
    baths: 2,
    sqft: 2200,
    address: '4567 Cedar Lane, Redmond, WA 98052',
    image: 'https://images.pexels.com/photos/12913623/pexels-photo-12913623.jpeg',
    status: 'NEW',
    type: 'Ranch',
    yearBuilt: 2017,
    lotSize: '0.28 acres',
    hoaFees: 'None',
    propertyTax: '$11,148/year',
    description: 'Spacious ranch-style home with single-level living. Open floor plan, vaulted ceilings, and large windows create a bright and airy atmosphere.',
    features: ['Vaulted Ceilings', 'Open Floor Plan', 'Large Windows', 'Main Floor Living', 'RV Parking'],
    neighborhoods: ['Redmond', 'Education Hill'],
    walkScore: 68,
    transitScore: 55,
    images: [
      'https://images.pexels.com/photos/12913623/pexels-photo-12913623.jpeg',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    agent: 'Robert Kim · WithJoy.AI Realty'
  },
  {
    id: 7,
    price: '$769,000',
    beds: 2,
    baths: 2,
    sqft: 1400,
    address: '1357 Birch Street, Seattle, WA 98103',
    image: 'https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1',
    status: 'NEW',
    type: 'Modern Condo',
    yearBuilt: 2022,
    lotSize: 'N/A',
    hoaFees: '$520/month',
    propertyTax: '$8,459/year',
    description: 'Brand new modern condo with floor-to-ceiling windows and contemporary finishes. Building amenities include rooftop terrace and bike storage.',
    features: ['Floor-to-Ceiling Windows', 'Modern Finishes', 'Rooftop Access', 'Bike Storage', 'Energy Efficient'],
    neighborhoods: ['Seattle', 'Fremont'],
    walkScore: 89,
    transitScore: 84,
    images: [
      'https://images.unsplash.com/photo-1664813954641-1ffcb7b55fd1',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
    ],
    agent: 'Jennifer Park · WithJoy.AI Realty'
  },
  {
    id: 8,
    price: '$1,130,000',
    beds: 5,
    baths: 4,
    sqft: 3500,
    address: '2468 Elm Drive, Kirkland, WA 98033',
    image: 'https://images.unsplash.com/photo-1593857389276-7c794900c90f',
    status: 'NEW',
    type: 'Traditional',
    yearBuilt: 2016,
    lotSize: '0.31 acres',
    hoaFees: '$150/month',
    propertyTax: '$13,569/year',
    description: 'Stately traditional home with classic design and modern updates. Features include formal dining room, family room with fireplace, and spacious bedrooms.',
    features: ['Formal Dining', 'Fireplace', 'Spacious Bedrooms', 'Updated Bathrooms', 'Three-Car Garage'],
    neighborhoods: ['Kirkland', 'Juanita'],
    walkScore: 74,
    transitScore: 62,
    images: [
      'https://images.unsplash.com/photo-1593857389276-7c794900c90f',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    agent: 'Andrew Davis · WithJoy.AI Realty'
  },
  {
    id: 9,
    price: '$679,000',
    beds: 2,
    baths: 1.5,
    sqft: 1100,
    address: '3691 Willow Way, Tacoma, WA 98406',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
    status: 'NEW',
    type: 'Starter Home',
    yearBuilt: 2014,
    lotSize: '0.15 acres',
    hoaFees: 'None',
    propertyTax: '$7,469/year',
    description: 'Perfect starter home with updated features and move-in ready condition. Cozy living spaces and a private backyard make this home ideal for first-time buyers.',
    features: ['Move-in Ready', 'Updated Features', 'Private Backyard', 'New Paint', 'Storage'],
    neighborhoods: ['Tacoma', 'North End'],
    walkScore: 76,
    transitScore: 68,
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
    ],
    agent: 'Maria Garcia · WithJoy.AI Realty'
  },
  {
    id: 10,
    price: '$589,000',
    beds: 2,
    baths: 2,
    sqft: 1300,
    address: '8520 Spruce Circle, Everett, WA 98201',
    image: 'https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg',
    status: 'NEW',
    type: 'Family Home',
    yearBuilt: 2013,
    lotSize: '0.20 acres',
    hoaFees: '$75/month',
    propertyTax: '$6,479/year',
    description: 'Well-maintained family home in a friendly neighborhood. Features include an updated kitchen, comfortable living spaces, and a large backyard.',
    features: ['Updated Kitchen', 'Large Backyard', 'Comfortable Living', 'Good Schools', 'Quiet Street'],
    neighborhoods: ['Everett', 'Mukilteo'],
    walkScore: 65,
    transitScore: 58,
    images: [
      'https://images.pexels.com/photos/1212053/pexels-photo-1212053.jpeg',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    agent: 'Thomas Wilson · WithJoy.AI Realty'
  },
  {
    id: 11,
    price: '$925,000',
    beds: 2,
    baths: 2,
    sqft: 1600,
    address: '7410 Fir Avenue, Bellevue, WA 98004',
    image: 'https://images.unsplash.com/photo-1621693722835-44c9dcb724fd',
    status: 'NEW',
    type: 'Luxury Condo',
    yearBuilt: 2021,
    lotSize: 'N/A',
    hoaFees: '$650/month',
    propertyTax: '$10,175/year',
    description: 'Luxury condo with high-end finishes and stunning views. Building amenities include spa, fitness center, and 24/7 concierge service.',
    features: ['High-end Finishes', 'Stunning Views', 'Spa Access', 'Fitness Center', '24/7 Concierge'],
    neighborhoods: ['Bellevue', 'Downtown'],
    walkScore: 91,
    transitScore: 87,
    images: [
      'https://images.unsplash.com/photo-1621693722835-44c9dcb724fd',
      'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      'https://images.unsplash.com/photo-1556911220-bff31c812dba',
      'https://images.unsplash.com/photo-1615874959474-d609969a20ed'
    ],
    agent: 'Susan Lee · WithJoy.AI Realty'
  },
  {
    id: 12,
    price: '$700,000',
    beds: 3,
    baths: 2.5,
    sqft: 1900,
    address: '9632 Ash Street, Redmond, WA 98052',
    image: 'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
    status: 'NEW',
    type: 'Modern Home',
    yearBuilt: 2019,
    lotSize: '0.22 acres',
    hoaFees: '$120/month',
    propertyTax: '$8,400/year',
    description: 'Contemporary modern home with clean lines and energy-efficient features. Open concept design with high ceilings and natural light throughout.',
    features: ['Energy Efficient', 'High Ceilings', 'Natural Light', 'Open Concept', 'Modern Design'],
    neighborhoods: ['Redmond', 'Bear Creek'],
    walkScore: 72,
    transitScore: 65,
    images: [
      'https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg',
      'https://images.unsplash.com/photo-1631679706909-1844bbd07221',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'
    ],
    agent: 'Kevin Martinez · WithJoy.AI Realty'
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavigate('/')}>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">WithJoy.AI</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => handleNavigate('/homes')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === '/homes' || location.pathname.startsWith('/property/')
                  ? 'text-purple-600 bg-purple-50' 
                  : 'text-gray-700 hover:text-purple-600'
              }`}
            >
              Buy
            </button>
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
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate('/homes');
  };

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
            <button 
              onClick={handleSearch}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Search
            </button>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => navigate('/homes')}
            className="bg-white text-purple-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
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

// Homes Page Component
export const HomesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    priceRange: '',
    bedrooms: '',
    bathrooms: '',
    homeType: '',
    sortBy: 'price-low'
  });
  const [filteredHomes, setFilteredHomes] = useState(mockHomes);
  const navigate = useNavigate();

  const filterOptions = {
    priceRange: [
      { value: '', label: 'Any Price' },
      { value: '0-500000', label: 'Under $500K' },
      { value: '500000-800000', label: '$500K - $800K' },
      { value: '800000-1200000', label: '$800K - $1.2M' },
      { value: '1200000-999999999', label: 'Over $1.2M' }
    ],
    bedrooms: [
      { value: '', label: 'Any Beds' },
      { value: '1', label: '1+ Beds' },
      { value: '2', label: '2+ Beds' },
      { value: '3', label: '3+ Beds' },
      { value: '4', label: '4+ Beds' }
    ],
    bathrooms: [
      { value: '', label: 'Any Baths' },
      { value: '1', label: '1+ Baths' },
      { value: '2', label: '2+ Baths' },
      { value: '3', label: '3+ Baths' },
      { value: '4', label: '4+ Baths' }
    ],
    homeType: [
      { value: '', label: 'All Types' },
      { value: 'Single Family', label: 'Single Family' },
      { value: 'Condo', label: 'Condo' },
      { value: 'Townhouse', label: 'Townhouse' },
      { value: 'Luxury Home', label: 'Luxury' }
    ],
    sortBy: [
      { value: 'price-low', label: 'Price: Low to High' },
      { value: 'price-high', label: 'Price: High to Low' },
      { value: 'beds-high', label: 'Beds: Most to Least' },
      { value: 'sqft-high', label: 'Size: Largest to Smallest' }
    ]
  };

  useEffect(() => {
    let filtered = mockHomes.filter(home => {
      const matchesSearch = !searchQuery || 
        home.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        home.type.toLowerCase().includes(searchQuery.toLowerCase());

      const price = parseInt(home.price.replace(/[$,]/g, ''));
      const matchesPrice = !selectedFilters.priceRange || (() => {
        const [min, max] = selectedFilters.priceRange.split('-').map(Number);
        return price >= min && price <= max;
      })();

      const matchesBeds = !selectedFilters.bedrooms || home.beds >= parseInt(selectedFilters.bedrooms);
      const matchesBaths = !selectedFilters.bathrooms || home.baths >= parseInt(selectedFilters.bathrooms);
      const matchesType = !selectedFilters.homeType || home.type === selectedFilters.homeType;

      return matchesSearch && matchesPrice && matchesBeds && matchesBaths && matchesType;
    });

    // Sort filtered results
    switch (selectedFilters.sortBy) {
      case 'price-high':
        filtered.sort((a, b) => parseInt(b.price.replace(/[$,]/g, '')) - parseInt(a.price.replace(/[$,]/g, '')));
        break;
      case 'beds-high':
        filtered.sort((a, b) => b.beds - a.beds);
        break;
      case 'sqft-high':
        filtered.sort((a, b) => b.sqft - a.sqft);
        break;
      default: // 'price-low'
        filtered.sort((a, b) => parseInt(a.price.replace(/[$,]/g, '')) - parseInt(b.price.replace(/[$,]/g, '')));
    }

    setFilteredHomes(filtered);
  }, [searchQuery, selectedFilters]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      priceRange: '',
      bedrooms: '',
      bathrooms: '',
      homeType: '',
      sortBy: 'price-low'
    });
    setSearchQuery('');
  };

  const handleViewProperty = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              Search through our curated selection of homes and get paid up to $15K when you buy
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Search by location, neighborhood, or home type..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                  />
                </div>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {Object.entries(filterOptions).map(([filterType, options]) => (
                <select
                  key={filterType}
                  value={selectedFilters[filterType]}
                  onChange={(e) => handleFilterChange(filterType, e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ))}
            </div>
            <button
              onClick={clearFilters}
              className="text-purple-600 hover:text-purple-700 font-medium"
            >
              Clear All Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {filteredHomes.length} Homes Found
          </h2>
          <div className="text-sm text-gray-600">
            Showing results for Washington state
          </div>
        </div>

        {/* Homes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHomes.map((home) => (
            <div key={home.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative">
                <img 
                  src={home.image} 
                  alt={home.address}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {home.status}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors">
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-2xl font-bold text-gray-900">{home.price}</h3>
                  <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-lg text-sm font-medium">
                    {home.type}
                  </span>
                </div>
                
                <div className="flex items-center space-x-4 mb-3 text-gray-600">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                    </svg>
                    {home.beds} Beds
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    {home.baths} Baths
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l4 4m8-4v4m0-4h-4m4 0l-4 4M4 16v4m0 0h4m-4 0l4-4m8 4l-4-4m4 4v-4m0 4h-4" />
                    </svg>
                    {home.sqft.toLocaleString()} Sq Ft
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4">{home.address}</p>
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleViewProperty(home.id)}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-all transform hover:scale-105"
                  >
                    View Details
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                    Schedule Tour
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredHomes.length > 0 && (
          <div className="text-center mt-12">
            <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-xl font-medium transition-all">
              Load More Homes
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredHomes.length === 0 && (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No homes found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search criteria or clearing some filters.</p>
            <button 
              onClick={clearFilters}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Property Detail Page Component
export const PropertyDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  const property = mockHomes.find(home => home.id === parseInt(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Property Not Found</h1>
          <button 
            onClick={() => navigate('/homes')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-all transform hover:scale-105"
          >
            Back to Homes
          </button>
        </div>
      </div>
    );
  }

  const calculateRebate = (price) => {
    const numericPrice = parseInt(price.replace(/[$,]/g, ''));
    const commission = numericPrice * 0.03; // 3% commission
    const rebate = commission * 0.70; // 70% rebate
    return Math.round(rebate);
  };

  const getSimilarProperties = () => {
    return mockHomes
      .filter(home => home.id !== property.id && home.type === property.type)
      .slice(0, 3);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Image Gallery */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-4">
            {/* Main Image */}
            <div className="lg:col-span-2 relative">
              <img 
                src={property.images[currentImageIndex]} 
                alt={property.address}
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
              />
              <button 
                onClick={() => navigate('/homes')}
                className="absolute top-4 left-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <button className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg text-gray-700 font-medium hover:bg-white transition-colors">
                Show all photos ({property.images.length})
              </button>
            </div>
            
            {/* Thumbnail Grid */}
            <div className="grid grid-cols-2 gap-4">
              {property.images.slice(1, 5).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index + 1)}
                  className={`relative rounded-xl overflow-hidden ${
                    currentImageIndex === index + 1 ? 'ring-2 ring-purple-500' : ''
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${property.address} ${index + 2}`}
                    className="w-full h-32 lg:h-36 object-cover hover:scale-105 transition-transform"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Property Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Header */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium">
                  💰 ${calculateRebate(property.price).toLocaleString()} rebate
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                  {property.status}
                </span>
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                  {property.type}
                </span>
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-2">{property.price}</h1>
              <p className="text-lg text-gray-600 mb-4">{property.address}</p>
              
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{property.beds}</div>
                  <div className="text-sm text-gray-600">Beds</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{property.baths}</div>
                  <div className="text-sm text-gray-600">Bath</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{property.sqft.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">Sq ft</div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="flex items-center space-x-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Home Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Home highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Property Details</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Year Built:</span>
                      <span>{property.yearBuilt}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Lot Size:</span>
                      <span>{property.lotSize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>HOA Fees:</span>
                      <span>{property.hoaFees}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Property Tax:</span>
                      <span>{property.propertyTax}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Walkability</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Walk Score:</span>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-sm font-medium">
                        {property.walkScore}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Transit Score:</span>
                      <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm font-medium">
                        {property.transitScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About this home</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{property.description}</p>
              
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <div className="grid md:grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Listing Agent */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Listed by</h2>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {property.agent.split(' ')[0][0]}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{property.agent}</h3>
                  <p className="text-sm text-gray-600">WithJoy.AI Realty Partner</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Commission Rebate Card */}
              <div className="bg-gradient-to-br from-purple-600 to-blue-600 text-white rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Commission rebate</h3>
                    <div className="text-3xl font-bold">${calculateRebate(property.price).toLocaleString()}</div>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                </div>
                <button className="w-full bg-white text-purple-600 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all transform hover:scale-105">
                  How it Works
                </button>
              </div>

              {/* Schedule Tour Card */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Ready to see this home?</h3>
                <button 
                  onClick={() => setShowScheduleModal(true)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all transform hover:scale-105 mb-4"
                >
                  Request a Tour
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all">
                  Contact an agent
                </button>
              </div>

              {/* Neighborhood Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Neighborhood</h3>
                <div className="space-y-2">
                  {property.neighborhoods.map((neighborhood, index) => (
                    <span key={index} className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Similar Properties */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Similar properties</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getSimilarProperties().map((home) => (
              <div key={home.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden group cursor-pointer"
                   onClick={() => navigate(`/property/${home.id}`)}>
                <div className="relative">
                  <img 
                    src={home.image} 
                    alt={home.address}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded-lg text-sm font-medium">
                      {home.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">{home.price}</h3>
                    <span className="bg-purple-100 text-purple-600 px-2 py-1 rounded-lg text-sm font-medium">
                      {home.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-3 text-gray-600">
                    <span>{home.beds} Beds</span>
                    <span>{home.baths} Baths</span>
                    <span>{home.sqft.toLocaleString()} Sq Ft</span>
                  </div>
                  
                  <p className="text-gray-700">{home.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schedule Tour Modal */}
      {showScheduleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-900">Schedule a Tour</h3>
              <button 
                onClick={() => setShowScheduleModal(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <p className="text-gray-600 mb-6">Choose your preferred date and time to tour this property.</p>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>9:00 AM - 10:00 AM</option>
                  <option>10:00 AM - 11:00 AM</option>
                  <option>11:00 AM - 12:00 PM</option>
                  <option>1:00 PM - 2:00 PM</option>
                  <option>2:00 PM - 3:00 PM</option>
                  <option>3:00 PM - 4:00 PM</option>
                  <option>4:00 PM - 5:00 PM</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                <input type="text" placeholder="Enter your full name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input type="tel" placeholder="(555) 123-4567" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500" />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button 
                onClick={() => setShowScheduleModal(false)}
                className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-all"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-xl font-semibold transition-all">
                Schedule Tour
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
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