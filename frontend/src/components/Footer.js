import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark-footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">DeArrow</div>
            <p className="footer-tagline">
              Making YouTube better, one title at a time.
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4 className="footer-heading">Product</h4>
              <a href="#features" className="footer-link">Features</a>
              <a href="#license" className="footer-link">License</a>
              <a href="https://dearrow.ajay.app/payment/" className="footer-link" target="_blank" rel="noopener noreferrer">Purchase</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Support</h4>
              <a href="#" className="footer-link">Documentation</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Contact</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms of Service</a>
              <a href="#" className="footer-link">Refund Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} DeArrow. All rights reserved.
          </div>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="GitHub">
              <Github size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-link" aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;