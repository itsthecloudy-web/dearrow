import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import './HeroSection.css';

const HeroSection = () => {
  const handleGetStarted = () => {
    window.open('https://dearrow.ajay.app/payment/', '_blank');
  };

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-text">Browser Extension for YouTube</span>
        </div>
        <h1 className="display-huge hero-title">
          Stop Falling for
          <br />
          Clickbait. Forever.
        </h1>
        <p className="body-large hero-description">
          DeArrow replaces clickbait titles and thumbnails with accurate,
          <br />
          community-powered alternatives. Experience YouTube without the noise.
        </p>
        <div className="hero-buttons">
          <button onClick={handleGetStarted} className="btn-primary hero-cta">
            Purchase DeArrow
            <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            <PlayCircle size={20} />
            Watch Demo
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">1M+</div>
            <div className="stat-label">Active Users</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">10M+</div>
            <div className="stat-label">Titles Improved</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">99%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;