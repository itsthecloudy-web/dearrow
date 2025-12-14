import React from 'react';
import { Chrome, Globe, Award, TrendingUp } from 'lucide-react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="trust-container">
        <div className="trust-header">
          <h2 className="display-medium">Trusted by Millions</h2>
          <p className="body-medium section-subtitle">
            Join the community making YouTube better, one video at a time.
          </p>
        </div>
        <div className="trust-grid">
          <div className="trust-item">
            <Chrome size={48} color="var(--brand-primary)" strokeWidth={1.5} />
            <h3 className="heading-3">Chrome Extension</h3>
            <p className="body-small trust-text">4.8★ rating from 50,000+ users</p>
          </div>
          <div className="trust-item">
            <Globe size={48} color="var(--brand-primary)" strokeWidth={1.5} />
            <h3 className="heading-3">Firefox Add-on</h3>
            <p className="body-small trust-text">4.9★ rating from 30,000+ users</p>
          </div>
          <div className="trust-item">
            <Award size={48} color="var(--brand-primary)" strokeWidth={1.5} />
            <h3 className="heading-3">Award Winning</h3>
            <p className="body-small trust-text">Featured in tech publications worldwide</p>
          </div>
          <div className="trust-item">
            <TrendingUp size={48} color="var(--brand-primary)" strokeWidth={1.5} />
            <h3 className="heading-3">Rapidly Growing</h3>
            <p className="body-small trust-text">1,000+ new users join daily</p>
          </div>
        </div>
        <div className="trust-testimonial">
          <p className="body-large testimonial-quote">
            "DeArrow has completely changed how I use YouTube. No more wasted time
            on misleading videos. It's like having a quality filter for the entire platform."
          </p>
          <div className="testimonial-author">
            <div className="author-name">Sarah Chen</div>
            <div className="author-title">Content Creator & YouTuber</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;