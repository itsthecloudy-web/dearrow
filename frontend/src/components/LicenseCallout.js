import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import './LicenseCallout.css';

const LicenseCallout = () => {
  const [copied, setCopied] = useState(false);
  const licenseKey = 'ATi6l-130d8';

  const handleCopy = () => {
    navigator.clipboard.writeText(licenseKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="license" className="license-section">
      <div className="license-container">
        <div className="license-card">
          <div className="license-badge">Important</div>
          <h2 className="display-medium license-title">
            Your License Key
          </h2>
          <p className="body-medium license-description">
            After purchasing DeArrow, use this license key to activate your extension.
            <br />
            Save it somewhere safe or copy it now.
          </p>
          <div className="license-key-box">
            <div className="license-key-display">
              <span className="license-key-text">{licenseKey}</span>
            </div>
            <button onClick={handleCopy} className="copy-button">
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="license-note">
            <p className="body-small">
              💡 You'll need this key after completing your purchase to activate the extension.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LicenseCallout;