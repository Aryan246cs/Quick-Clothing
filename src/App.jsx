import React from 'react';
import { Router, Route } from './utils/Router';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import FeaturesPage from './pages/FeaturesPage';
import PartnerPage from './pages/PartnerPage';
import ContactPage from './pages/ContactPage';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Router>
        <Route path="/">
          <HomePage />
        </Route>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/features">
          <FeaturesPage />
        </Route>
        <Route path="/how-it-works">
          <HowItWorksPage />
        </Route>
        <Route path="/partner">
          <PartnerPage />
        </Route>
        <Route path="/contact">
          <ContactPage />
        </Route>
        <Route path="/faq">
          <FAQPage />
        </Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;