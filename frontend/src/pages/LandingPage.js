import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import LicenseCallout from '../components/LicenseCallout';
import TrustSection from '../components/TrustSection';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LicenseCallout />
        <TrustSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;