import React from 'react';

const products = [
  {
    title: 'On-demand',
    desc: 'Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us',
    img: '/matching.png',
    link: '#',
  },
  {
    title: 'Live interviews',
    desc: 'Assess candidates in real-time with our live coding environment & integrated video calls',
    img: '/live.png',
    link: '#',
  },
  {
    title: 'Assessments',
    desc: 'Share assessments across batches with MCQ, Programming and Subjective questions.',
    img: '/aditya.png',
    link: '#',
  },
];

const ProductCards = () => (
  <section className="products-section">
    <div className="container">
      <h2 className="products-title">Explore more products on intervue</h2>
      <div className="products-grid">
        {products.map((prod, idx) => (
          <div key={idx} className="product-card">
            <div className="product-card-header">
              <img src={prod.img} alt={prod.title} className="product-card-img" />
            </div>
            <div className="product-card-title">{prod.title}</div>
            <div className="product-card-desc">{prod.desc}</div>
            <a href={prod.link} className="product-card-link">Know more &rarr;</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCards; 