import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
  Header, 
  HeroSection, 
  HowItWorksSection, 
  WhyChooseUsSection, 
  TrustSection, 
  CommissionRebateSection, 
  AIAgentSection, 
  Footer,
  HomesPage,
  PropertyDetailPage
} from './components';

// Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TrustSection />
      <CommissionRebateSection />
      <AIAgentSection />
    </>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/homes" element={<HomesPage />} />
          <Route path="/property/:id" element={<PropertyDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;