import React from 'react';

const Header = () => (
  <header className="header">
    <div className="header-inner container">
      <div className="logo">
        <img src="/logo.png" alt="Intervue Logo" className="logo-img" />
      </div>
      <div className="header-nav">
        <a href="#" className="header-interviewer">
          <span className="header-interviewer-icon">&#128100;</span>
          Become an Interviewer
          <span className="header-interviewer-arrow">&#8599;</span>
        </a>
        <a href="#" className="header-link">features</a>
        <a href="#" className="header-link">Pricing</a>
        <a href="#" className="header-link">Start a trial</a>
      </div>
      <div className="header-actions">
        <button className="btn btn-outline">Login</button>
        <button className="btn btn-black">Signup</button>
      </div>
    </div>
  </header>
);

export default Header; 