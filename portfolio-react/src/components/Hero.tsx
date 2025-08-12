import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-background">
        <video autoPlay muted loop playsInline>
          <source src="/Images/Motion Animation.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Harshith Reddy</span> <span className="wave-emoji">👋</span></h1>
          <h2 className="hero-subtitle">AI Engineer & Full-Stack Developer</h2>
          <p className="hero-description">
            I love turning ideas into intelligent, scalable web apps that feel as good to use as they are powerful under the hood. 
            Blending AI models with solid backend systems and clean, responsive UIs, I create products that make complex tech feel simple. 
            For me, it's all about building tools that not only work flawlessly but also make a real impact.
          </p>
          <div className="hero-buttons">
            <a href="https://github.com/HarshithReddy01" className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src="/Images/Website.png" alt="Harshith Reddy" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
