import React from 'react';

const Testimonial = () => (
  <section className="testimonial-section">
    <div className="testimonial-container container">
      <div className="testimonial-media">
        <img src="/niket.png" alt="Niket Gupta" className="testimonial-author-img" />
        <button className="testimonial-play" aria-label="Play video">▶</button>
      </div>
      <div className="testimonial-content">
        <div className="testimonial-quote">
          After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.
        </div>
        <div className="testimonial-author-details">
          <span className="testimonial-author-name">Niket Gupta</span><br />
          <span className="testimonial-author-role">Group head of talent acquisition, Yubi</span>
        </div>
        <a href="#" className="testimonial-link">See more customer stories &rarr;</a>
      </div>
    </div>
  </section>
);

export default Testimonial; 