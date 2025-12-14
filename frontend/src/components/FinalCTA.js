import React from 'react';
import { ArrowRight } from 'lucide-react';
import './FinalCTA.css';

const FinalCTA = () => {
  const handlePurchase = () => {
    window.open('https://dearrow.ajay.app/payment/', '_blank');
  };

  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="cta-content">
          <h2 className="display-large cta-title">
            Ready to Experience
            <br />
            YouTube Without Clickbait?
          </h2>
          <p className="body-large cta-description">
            Join over 1 million users who have already transformed their YouTube experience.
            <br />
            Purchase DeArrow today and reclaim your time.
          </p>
          <div className="cta-features-list">
            <div className="cta-feature-item">
              <div className="check-icon">✓</div>
              <span>Lifetime updates and support</span>
            </div>
            <div className="cta-feature-item">
              <div className="check-icon">✓</div>
              <span>One-time payment, no subscriptions</span>
            </div>
            <div className="cta-feature-item">
              <div className="check-icon">✓</div>
              <span>Works on Chrome, Firefox, and more</span>
            </div>
          </div>
          <button onClick={handlePurchase} className="btn-primary cta-button">
            Purchase DeArrow Now
            <ArrowRight size={20} />
          </button>
          <p className="body-small cta-note">
            Remember to use license key: <span className="license-key-highlight">ATi6l-130d8</span> after purchase
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;