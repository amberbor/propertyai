import React from 'react';
import './App.css';
import { 
  Header, 
  HeroSection, 
  HowItWorksSection, 
  WhyChooseUsSection, 
  TrustSection, 
  CommissionRebateSection, 
  AIAgentSection, 
  Footer 
} from './components';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TrustSection />
      <CommissionRebateSection />
      <AIAgentSection />
      <Footer />
    </div>
  );
}

export default App;