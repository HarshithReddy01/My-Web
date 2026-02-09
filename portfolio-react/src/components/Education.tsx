import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faGraduationCap, faAward } from '@fortawesome/free-solid-svg-icons';

const Education: React.FC = () => {
  const educationItems = [
    {
      id: 1,
      title: "Bachelor's of Science in Computer Science",
      institution: "University of South Dakota",
      location: "On Campus",
      period: "January 2023 - May 2027",
      gpa: "3.6/4.0",
      concentration: "Artificial Intelligence",
      minor: "Mathematics",
      deansList: "Dean's List: 2023 Spring, Fall | 2024 Fall | 2025 Spring, Fall",
      type: "education",
      image: `${import.meta.env.BASE_URL}Images/USD.png`,
      description: "",
      icon: faGraduationCap
    },
    {
      id: 2,
      title: "Data Structures and Algorithms - Java",
      institution: "Certificate",
      location: "",
      period: "",
      type: "certificate",
      image: `${import.meta.env.BASE_URL}Images/java.png`,
      description: "Certificate in Data Structures and Algorithms using Java programming language.",
      icon: faAward
    },
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education & <span>Certificates</span></h2>
        <div className="education-grid">
          {educationItems.map((item, index) => (
            <div key={item.id} className="education-card">
              <div className="education-image-container">
                <img src={item.image} alt={item.institution} className="education-image" />
                <div className="education-overlay">
                  <FontAwesomeIcon icon={item.icon} className="education-icon" />
                </div>
              </div>
              <div className="education-content">
                <div className="education-header">
                  <h3 className="education-title">{item.title}</h3>
                  <h4 className="education-institution">{item.institution}</h4>
                </div>
                <div className="education-meta">
                  {item.period && (
                    <div className="meta-item">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                      <span>{item.period}</span>
                    </div>
                  )}
                  {item.location && (
                    <div className="meta-item">
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span>{item.location}</span>
                    </div>
                  )}
                  {item.gpa && (
                    <div className="meta-item">
                      <FontAwesomeIcon icon={faGraduationCap} />
                      <span className="gpa-badge">GPA: {item.gpa}</span>
                    </div>
                  )}
                </div>
                {item.concentration && (
                  <div className="education-details">
                    <p><strong>Concentration:</strong> {item.concentration}</p>
                    {item.minor && <p><strong>Minor:</strong> {item.minor}</p>}
                    {(item as any).deansList && <p><strong>{(item as any).deansList}</strong></p>}
                  </div>
                )}
                {item.description && <p className="education-description">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

