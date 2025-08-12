import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-content">
          <div className="about-image">
            <img src="/Images/about.png" alt="Harshith Reddy" className="about-img" />
          </div>
          <div className="about-text">
            <h3>AI Engineer & Full-Stack Developer | Spring Boot & React</h3>
            <p>
              I'm a BS Computer Science student at the University of South Dakota, specializing in Artificial Intelligence, and a research assistant under Dr. Debesh Jha, Assistant Professor at USD. I turn ideas into smart, powerful web apps that are easy and enjoyable to use. By blending AI models with strong backends and clean, responsive designs, I build products that solve real problems.
            </p>
            <a href="/Images/MyResume.pdf" download className="btn btn-primary">Download Resume</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
