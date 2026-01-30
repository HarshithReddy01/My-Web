import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { SiGooglescholar, SiHuggingface } from 'react-icons/si';

const Hero: React.FC = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-video-background">
        <video autoPlay muted loop playsInline>
          <source src={`${import.meta.env.BASE_URL}Images/Motion Animation.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I'm <span>Harshith Reddy Nalla</span> <span className="wave-emoji">👋</span></h1>
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
            <div className="hero-social-icons">
              <a href="https://www.linkedin.com/in/harshith-reddy-nalla-6005012ab/" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://scholar.google.com/citations?user=d5DblMEAAAAJ&hl=en" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Google Scholar">
                <SiGooglescholar />
              </a>
              <a href="https://huggingface.co/HarshithReddy01" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Hugging Face">
                <SiHuggingface />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img src={`${import.meta.env.BASE_URL}Images/Website.png`} alt="Harshith Reddy" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
