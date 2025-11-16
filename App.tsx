
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductRange from './components/ProductRange';
import KeySegments from './components/KeySegments';
import BusinessSolutions from './components/BusinessSolutions';
import DealerNetwork from './components/DealerNetwork';
import QualityManufacturing from './components/QualityManufacturing';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#333333]">
      <Header />
      <main>
        <Hero />
        <ProductRange />
        <KeySegments />
        <BusinessSolutions />
        <DealerNetwork />
        <QualityManufacturing />
        <Stats />
      </main>
      <Footer />
    </div>
  );
};

export default App;
