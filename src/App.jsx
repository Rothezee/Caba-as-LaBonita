import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Banner from './components/Banner';
import AboutComplex from './components/AboutComplex';
import CabinSection from './components/CabinSection';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import ContactSection from './components/ContactSection';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Banner />
      <AboutComplex />
      <CabinSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;