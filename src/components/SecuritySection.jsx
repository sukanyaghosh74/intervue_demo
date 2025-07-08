import React from 'react';

const SecuritySection = () => (
  <section className="security-section">
    <div className="container">
      <h2 className="security-title">Security is our top priority</h2>
      <p className="security-desc">Intervue serves startups to Fortune 500 companies with enterprise grade security, baked in by design.</p>
      <div className="security-cards">
        {/* Left column: Security */}
        <div className="security-card">
          <div className="security-card-content-row">
            <div>
              <span className="security-icon">🔑</span>
              <div className="security-card-title">Security</div>
              <div className="security-card-desc">Protecting your data at every layer is fundamental to how Intervue works</div>
            </div>
            <span className="security-card-arrow">→</span>
          </div>
        </div>
        {/* Middle column: Compliance */}
        <div className="security-card">
          <div className="security-card-content-row">
            <div>
              <span className="security-icon">📄</span>
              <div className="security-card-title">Compliances</div>
              <div className="security-card-desc">Enterprise grade compliance commitments where we have established controls to adhere to those commitments</div>
            </div>
            <span className="security-card-arrow">→</span>
          </div>
        </div>
        {/* Right column: two stacked half cards */}
        <div className="security-card-half-col">
          <div className="security-card security-card-half">
            <div className="security-card-content-row">
              <div>
                <span className="security-icon">🚀</span>
                <div className="security-card-title">Intervue for Startups</div>
              </div>
              <span className="security-card-arrow">→</span>
            </div>
          </div>
          <div className="security-card security-card-half">
            <div className="security-card-content-row">
              <div>
                <span className="security-icon">🌐</span>
                <div className="security-card-title">Intervue for Enterprises</div>
              </div>
              <span className="security-card-arrow">→</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection; 