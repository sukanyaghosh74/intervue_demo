import React from 'react';

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-container container">
      <div className="footer-main-row">
        <div className="footer-brand-block">
          <img src="/footer.png" alt="Intervue Logo" className="footer-logo-img" />
          <div className="footer-socials">
            <a href="#" className="footer-social">Facebook</a>
            <a href="#" className="footer-social">Instagram</a>
            <a href="#" className="footer-social">Linkedin</a>
            <a href="#" className="footer-social">Pinterest</a>
          </div>
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
              <li><a href="#" className="footer-link">So gehts</a></li>
              <li><a href="#" className="footer-link">Erfahrung</a></li>
              <li><a href="#" className="footer-link">Aligner</a></li>
              <li><a href="#" className="footer-link">Preise</a></li>
              <li><a href="#" className="footer-link">Standorte</a></li>
            </ul>
          </div>
          <div className="footer-link-col">
            <div className="footer-link-title">Resources</div>
            <ul className="footer-link-list">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Lift Media</a></li>
              <li><a href="#" className="footer-link">Offene Stellen</a></li>
              <li><a href="#" className="footer-link">Presse kit</a></li>
            </ul>
          </div>
          <div className="footer-link-col">
            <div className="footer-link-title">Product</div>
            <ul className="footer-link-list">
              <li><a href="#" className="footer-link">Gratis Termin</a></li>
              <li><a href="#" className="footer-link">Freunde einladen</a></li>
              <li><a href="#" className="footer-link">Patienteninforma</a></li>
            </ul>
          </div>
          <div className="footer-link-col">
            <div className="footer-link-title">Product</div>
            <ul className="footer-link-list">
              <li><a href="#" className="footer-link">Blog</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Lift Media</a></li>
              <li><a href="#" className="footer-link">Offene Stellen</a></li>
              <li><a href="#" className="footer-link">Presse kit</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom-row">
        <div className="footer-copyright">© 2023 Intervue. Crafted by great minds.</div>
        <div className="footer-legal-links">
          <a href="#" className="footer-legal-link">Datenschutz</a>
          <a href="#" className="footer-legal-link">Impressum</a>
          <a href="#" className="footer-legal-link">Cookie Policy</a>
          <a href="#" className="footer-legal-link">AGBs</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 