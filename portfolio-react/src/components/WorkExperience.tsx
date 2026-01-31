import React from 'react';

const WorkExperience: React.FC = () => {
  return (
    <section id="work-experience" className="work-experience">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="work-experience-content">
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px', lineHeight: '1.8' }}>
              This page is under development. Kindly download my resume to see my background.
            </p>
            <a 
              href={`${import.meta.env.BASE_URL}MyResume.pdf`} 
              download 
              className="btn btn-primary"
              style={{ display: 'inline-block', marginTop: '20px' }}
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;

