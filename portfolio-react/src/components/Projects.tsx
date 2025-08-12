import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "PanInsight",
      description: "PanInsight is an AI-powered medical web app that detects pancreatic cancer from medical scans, showing lesion overlays, confidence scores, and downloadable reports to support faster, more accurate diagnosis.",
      image: "/Images/PancreasImage.jpg",
      liveLink: "https://debeshjha.github.io/PanInsight/",
      githubLink: "https://github.com/HarshithReddy01",
      tech: ["Python", "Java-Spring Boot", "React"]
    },
    {
      id: 2,
      title: "DentiMap",
      description: "A web app that uses AI to analyze dental X-rays, detect issues, filter invalid inputs, and provide accurate results with confidence scores.",
      image: "/Images/Dental.jpg",
      liveLink: "https://debeshjha.github.io/DentiMap/",
      githubLink: "https://github.com/HarshithReddy01",
      tech: ["Python", "Java-Spring Boot", "React"]
    },
    {
      id: 3,
      title: "UniVibe",
      description: "UniVibe is a campus social networking platform that connects students through events, chats, and real-time interactions.",
      image: "/Images/Ecommerce.png",
      liveLink: "https://v0-un-i-redsid5s-projects.vercel.app/",
      githubLink: "https://github.com/HarshithReddy01/univibe-code-only",
      tech: ["React", "Tailwind", "TypeScript"]
    },
    {
      id: 4,
      title: "TODO",
      description: "A simple TODO app to add, edit, delete, and track daily tasks with responsive design.",
      image: "/Images/Rest.png",
      liveLink: "https://usdynamicwebapp.ccbp.tech/",
      githubLink: "https://github.com/HarshithReddy01",
      tech: ["React", "Tailwind"]
    },
    {
      id: 5,
      title: "Weather Dashboard",
      description: "Real-time weather application with 5-day forecast and location-based services.",
      image: "/Images/Weather.png",
      liveLink: "#",
      githubLink: "https://github.com/HarshithReddy01/WeatherApplication",
      tech: ["React", "Java", "API"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
                <div className="project-links">
                  <a href={project.liveLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                  <a href={project.githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithubBrand} />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
