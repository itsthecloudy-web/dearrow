import React from 'react';
import './Header.css';

const Header = () => {
  const handleGetStarted = () => {
    window.open('https://dearrow.ajay.app/payment/', '_blank');
  };

  return (
    <header className="dark-header">
      <div className="header-content">
        <div className="dark-logo-text">DeArrow</div>
        <nav className="dark-nav">
          <a href="#features" className="dark-nav-link">Features</a>
          <a href="#license" className="dark-nav-link">License</a>
          <button onClick={handleGetStarted} className="btn-primary">
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;