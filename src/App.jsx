
import React, { useState, useEffect } from 'react';
import StarBackground from './components/StarBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FAB from './components/FAB';
import './index.css';

function App() {
  const [lang, setLang] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const savedLang = localStorage.getItem('astroji-lang');
    if (savedLang) {
      setLang(savedLang);
    }
  }, []);

  const toggleLang = () => {
    const newLang = lang === 'en' ? 'hi' : 'en';
    setLang(newLang);
    localStorage.setItem('astroji-lang', newLang);
  };

  return (
    <div className={`app-container ${lang === 'hi' ? 'lang-hi' : ''}`}>
      <StarBackground />
      <Hero lang={lang} />
      <Navbar lang={lang} toggleLang={toggleLang} setSearchQuery={setSearchQuery} />
      <ProductGrid lang={lang} searchQuery={searchQuery} />
      <Footer lang={lang} />
      <FAB />
    </div>
  );
}

export default App;
