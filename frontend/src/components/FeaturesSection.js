import React from 'react';
import { Zap, Target, Users, ShieldCheck } from 'lucide-react';
import './FeaturesSection.css';

const features = [
  {
    icon: Target,
    title: 'No More Clickbait',
    description: 'Automatically replaces exaggerated titles with accurate, descriptive alternatives that tell you what the video is actually about.'
  },
  {
    icon: Zap,
    title: 'Better Thumbnails',
    description: 'Say goodbye to shocked faces and misleading images. DeArrow shows you real frames from the video instead.'
  },
  {
    icon: Users,
    title: 'Community-Powered',
    description: 'Millions of users contribute to an ever-growing database of improved titles and thumbnails, making YouTube better for everyone.'
  },
  {
    icon: ShieldCheck,
    title: 'Privacy Focused',
    description: 'Your viewing habits stay private. DeArrow works locally in your browser without tracking or collecting your data.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="display-medium">Why DeArrow?</h2>
          <p className="body-medium section-subtitle">
            Transform your YouTube experience with powerful features designed
            <br />
            to cut through the noise and show you what really matters.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card dark-hover">
                <div className="feature-icon-wrapper">
                  <Icon size={32} color="var(--brand-primary)" strokeWidth={1.5} />
                </div>
                <h3 className="heading-2 feature-title">{feature.title}</h3>
                <p className="body-small feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;