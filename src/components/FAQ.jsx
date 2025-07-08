import React from 'react';

const faqs = [
  {
    q: 'How do I schedule an interview?',
  },
  {
    q: 'Will I be charged per interview?',
  },
  {
    q: 'Can I get a trial for On-demand interviews?',
  },
];

const FAQ = () => (
  <section className="faq-section">
    <div className="faq-container container">
      <div className="faq-left">
        <h2 className="faq-title">FAQs</h2>
        <div className="faq-subtitle">Here are frequently asked questions to clear all your doubts.</div>
        <div className="faq-link-row">
          <div className="faq-link-label">Still have doubts?</div>
          <a href="#" className="faq-link">
            <span className="faq-link-icon" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="#1565c0"/>
              </svg>
            </span>
            Talk to our representative
          </a>
        </div>
      </div>
      <div className="faq-right">
        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-question" tabIndex={0}>
                {faq.q}
                <span className="faq-toggle">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default FAQ; 