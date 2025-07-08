import React from 'react';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container container">
      <div className="footer-top">
        {/* Removed footer-logo block to eliminate duplicate logo */}
        <div className="footer-newsletter">
          <div className="footer-newsletter-title">Hire better & faster</div>
          <form className="footer-newsletter-form">
            <input type="email" className="footer-newsletter-input" placeholder="Enter your email address" />
            <button type="submit" className="footer-newsletter-btn">→</button>
          </form>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-link-col">
          <div className="footer-link-title">Company</div>
          <ul className="footer-link-list">
            <li><a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
            <li><a href="#" className="footer-link">Careers</a></li>
            <li><a href="#" className="footer-link">Support</a></li>
          </ul>
        </div>
        <div className="footer-link-col">
          <div className="footer-link-title">Resources</div>
          <ul className="footer-link-list">
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
            <li><a href="#" className="footer-link">LMS Media</a></li>
            <li><a href="#" className="footer-link">Press kit</a></li>
          </ul>
        </div>
        <div className="footer-link-col">
          <div className="footer-link-title">Product</div>
          <ul className="footer-link-list">
            <li><a href="#" className="footer-link">Gratis Termin</a></li>
            <li><a href="#" className="footer-link">Pruvets edition</a></li>
            <li><a href="#" className="footer-link">Offene Stellen</a></li>
            <li><a href="#" className="footer-link">Patenplattform</a></li>
          </ul>
        </div>
        <div className="footer-link-col">
          <div className="footer-link-title">Product</div>
          <ul className="footer-link-list">
            <li><a href="#" className="footer-link">Blog</a></li>
            <li><a href="#" className="footer-link">FAQ</a></li>
            <li><a href="#" className="footer-link">LMS Media</a></li>
            <li><a href="#" className="footer-link">Press kit</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2023 Intervue. Contact us by email. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer; 