import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-image">
            <img src={`${import.meta.env.BASE_URL}Images/about image.webp`} alt="Hand using a stylus on a laptop, overlaid with glowing AI and neural-network graphics" className="about-img" />
          </div>
          <div className="about-text">
            <h3>AI Engineer & Full-Stack Developer</h3>
            <p>
              I'm a senior Computer Science student at the University of South Dakota, specializing in Artificial Intelligence, and currently an AI Engineer Intern at <a href="https://www.sterlingtrustees.com/" target="_blank" rel="noopener noreferrer" className="highlight-link">Sterling Trustees</a>, where I'm building an agentic RAG knowledge assistant that answers staff questions over legal documents and live Salesforce data with citations. Before that I spent a year as an AI research assistant under <a href="https://www.linkedin.com/in/debesh-jha-ph-d-071462aa/" target="_blank" rel="noopener noreferrer" className="highlight-link"><span className="name-red">Dr. Debesh Jha</span> (Named among the world's top 2% of researchers in Medical Imaging by Stanford University)</a>, Assistant Professor at USD, training 3D medical image segmentation models for liver tumor and colorectal polyp detection at the <a href="https://perceptionintelligencelab.github.io/Lab-Website/" target="_blank" rel="noopener noreferrer" className="highlight-link">Biomedical Perception & Intelligence Lab</a> - work that contributed to a peer-reviewed publication at an AAAI 2026 workshop.
            </p>
                         <a href={`${import.meta.env.BASE_URL}MyResume.pdf`} download className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
