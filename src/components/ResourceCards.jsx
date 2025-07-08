import React from 'react';

const resources = [
  { level: 'Easy', color: 'blue', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Medium', color: 'yellow', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Hard', color: 'green', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Easy', color: 'blue', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Medium', color: 'yellow', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Hard', color: 'green', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Easy', color: 'blue', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Medium', color: 'yellow', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
  { level: 'Hard', color: 'green', title: 'Design a Free Food App', desc: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews.' },
];

const levelColors = {
  Easy: 'resource-tag-blue',
  Medium: 'resource-tag-yellow',
  Hard: 'resource-tag-green',
};

const ResourceCards = () => (
  <div className="resources-grid">
    {resources.map((res, idx) => (
      <div key={idx} className="resource-card">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span className={`resource-tag ${levelColors[res.level]}`}>{res.level}</span>
          <span className="resource-category">DATA STRUCTURES & ALGORITHMS</span>
        </div>
        <div className="resource-title">{res.title}</div>
        <div className="resource-desc">{res.desc}</div>
      </div>
    ))}
  </div>
);

export default ResourceCards; 