import React, { useEffect, useRef } from 'react';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach((bar) => {
              const element = bar as HTMLElement;       
              void element.offsetHeight;
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills" ref={skillsRef}>
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
