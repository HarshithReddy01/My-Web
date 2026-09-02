import React from 'react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={`${import.meta.env.BASE_URL}Images/Aboutme.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="container">
        <h2 className="section-title">My <span>Skills</span></h2>
        <div className="skills-container">
          <div className="skills-frontend">
            <h3>Frontend</h3>
            <div className="skill-item">
              <div className="skill-info">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress html"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>CSS/TailWind</span>
                <span>90%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress css"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>JavaScript</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress js"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>React</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress react"></div>
              </div>
            </div>
          </div>
          
          <div className="skills-backend">
            <h3>Backend</h3>
            <div className="skill-item">
              <div className="skill-info">
                <span>Java</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress node"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>Python</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress express"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>TypeScript</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress mongo"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>SQL</span>
                <span>70%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress sql"></div>
              </div>
            </div>
          </div>

          <div className="skills-ai">
            <h3>AI & Machine Learning</h3>
            <div className="skill-item">
              <div className="skill-info">
                <span>Machine Learning</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress ml"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>Deep Learning</span>
                <span>80%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress dl"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>Computer Vision</span>
                <span>85%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress cv"></div>
              </div>
            </div>
            <div className="skill-item">
              <div className="skill-info">
                <span>TensorFlow/PyTorch</span>
                <span>75%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-progress tf"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
