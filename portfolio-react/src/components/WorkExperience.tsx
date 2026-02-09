import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faBriefcase, faGraduationCap, faBuilding, faAward } from '@fortawesome/free-solid-svg-icons';

const WorkExperience: React.FC = () => {
  const experiences = [
    {
      id: 1,
      title: "Research Assistant",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "9 months",
      period: "June 2025 - Present",
      employmentType: "Part Time",
      type: "work",
      image: `${import.meta.env.BASE_URL}Images/research.png`,
      description: "Working under Dr. Debesh Jha on AI research in machine learning and deep learning. I contribute to the development of AI models, with several more in progress.",
      icon: faBriefcase
    },
    {
      id: 2,
      title: "Scholarship",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "2 months",
      period: "January 2026 - Present",
      employmentType: "Part Time",
      type: "work",
      image: `${import.meta.env.BASE_URL}Images/scholar.png`,
      description: "As a Student Ambassador at the University of South Dakota, I represent the university by assisting with campus tours, admissions events, and student outreach while mentoring prospective and new students and promoting a positive campus experience.",
      icon: faGraduationCap
    },
    {
      id: 3,
      title: "Entrepreneurial Lead",
      company: "National Science Foundation (NSF)",
      location: "On Campus",
      duration: "2 months",
      period: "October 2025 - November 2025",
      employmentType: "Part Time",
      type: "work",
      image: `${import.meta.env.BASE_URL}Images/nsf.png`,
      description: "DentiMap AI — Entrepreneurial Lead | University of South Dakota | NSF I-Corps Program. Worked with Dr. Debesh Jha and team to develop an AI-based tool for detecting dental diseases. I helped connect research with real-world use by talking to potential users, refining our idea, and exploring how AI can make dental diagnostics faster and more accurate.",
      icon: faBuilding
    },
    {
      id: 4,
      title: "SGA Senator",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "1 year",
      period: "January 2024 - December 2024",
      employmentType: "Part Time",
      type: "work",
      image: `${import.meta.env.BASE_URL}Images/sga.png`,
      description: "Student leader who represents peers and advocates for student issues by participating in Student Government Association discussions, policy decisions, and campus initiatives, while also serving as Secretary for the SGA Finance Department, assisting with budget review, documentation, and allocation of funds for both small and large student organizations.",
      icon: faGraduationCap
    },
    {
      id: 5,
      title: "Student Supervisor",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "1 year 5 months",
      period: "August 2023 - December 2024",
      employmentType: "Part Time",
      type: "work",
      image: `${import.meta.env.BASE_URL}Images/Bros.png`,
      description: "A Student Supervisor at Einstein Bros. Bagels (operated by Sodexo at the University of South Dakota) supports daily dining operations while leading student employees. The role combines customer service, team supervision, and operational oversight, ensuring food quality, safety, and a positive experience for students, staff, and visitors.",
      icon: faBriefcase
    },
    {
      id: 6,
      title: "Facilities Member",
      company: "Department of Custodial Services",
      location: "On Campus",
      duration: "Summer 2023, 2024, 2025",
      period: "Summer 2023, 2024, 2025",
      employmentType: "Full Time",
      type: "work",
      image: `${import.meta.env.BASE_URL}Images/facilities.png`,
      description: "Responsible for cleaning and disinfecting dormitory rooms and common areas, vacuuming and mopping floors, sanitizing high-touch surfaces, and safely lifting and moving heavy objects. Ensured a clean, hygienic, and safe living environment for residents.",
      icon: faBuilding
    }
  ];

  return (
    <section id="work-experience" className="work-experience">
      <div className="container">
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`experience-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-connector"></div>
              <div className="timeline-dot"></div>
              <div className="experience-card">
                <div className="experience-image-container">
                  <img src={exp.image} alt={exp.company} className="experience-image" />
                  <div className="experience-overlay">
                    <FontAwesomeIcon icon={exp.icon} className="experience-icon" />
                  </div>
                </div>
                <div className="experience-content">
                  <div className="experience-header">
                    <h3 className="experience-title">{exp.title}</h3>
                    <h4 className="experience-company">{exp.company}</h4>
                  </div>
                  <div className="experience-meta">
                    {exp.period && (
                      <div className="meta-item">
                        <FontAwesomeIcon icon={faCalendarAlt} />
                        <span>{exp.period}</span>
                        {exp.duration && <span className="duration-badge">{exp.duration}</span>}
                      </div>
                    )}
                    {exp.location && (
                      <div className="meta-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>{exp.location}</span>
                      </div>
                    )}
                    {exp.employmentType && (
                      <div className="meta-item">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span>{exp.employmentType}</span>
                      </div>
                    )}
                    {(exp as any).gpa && (
                      <div className="meta-item">
                        <FontAwesomeIcon icon={faGraduationCap} />
                        <span>GPA: {(exp as any).gpa}</span>
                      </div>
                    )}
                  </div>
                  {(exp as any).concentration && (
                    <div className="experience-details">
                      <p><strong>Concentration:</strong> {(exp as any).concentration}</p>
                      {(exp as any).minor && <p><strong>Minor:</strong> {(exp as any).minor}</p>}
                    </div>
                  )}
                  <p className="experience-description">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
