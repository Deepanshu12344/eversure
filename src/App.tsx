import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import CoreValues from './components/CoreValues';
import ProductCategories from './components/ProductCategories';
import Quality from './components/Quality';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <CoreValues />
      <ProductCategories />
      <Quality />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;