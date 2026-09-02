import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMapMarkerAlt, faBriefcase, faGraduationCap, faBuilding } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  period: string;
  employmentType: string;
  image: string;
  description: string;
  icon: IconDefinition;
}

const WorkExperience: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "AI Engineer Intern",
      company: "Sterling Trustees LLC",
      location: "Sioux Falls, SD",
      duration: "4 months",
      period: "May 2026 - Present",
      employmentType: "Internship",
      image: `${import.meta.env.BASE_URL}Images/sterling trustees.png`,
      description: "Building an agentic RAG knowledge assistant that answers staff questions over legal documents in Box and live Salesforce data, with citations, and designed its end-to-end architecture. Crawled and audited 992 legal entity folders (approx. 390K PDFs) to produce a structured manifest and an ingestion governance plan, and built a Python service that extracts account numbers and dates from custodial statement PDFs and auto-files them into the correct Box folders via the Box API, replacing a manual filing process. Scoped Salesforce automations to replace manual data entry, including a Box AI metadata extraction to Salesforce sync pipeline.",
      icon: faBriefcase
    },
    {
      id: 2,
      title: "AI Research Assistant",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "1 year",
      period: "June 2025 - May 2026",
      employmentType: "Part Time",
      image: `${import.meta.env.BASE_URL}Images/research.png`,
      description: "Worked under Dr. Debesh Jha training 3D medical image segmentation models for liver tumor and colorectal polyp detection using PyTorch CNNs, Vision Transformers, and Mamba (SSM) architectures. Ran systematic ablation studies across all three architecture families, evaluating Dice, IoU, sensitivity, and specificity - findings that contributed to a peer-reviewed publication at an AAAI 2026 workshop - and packaged the models into FastAPI and Docker microservices deployed on Hugging Face Spaces for real-time inference.",
      icon: faBriefcase
    },
    {
      id: 3,
      title: "Scholarship",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "8 months",
      period: "January 2026 - Present",
      employmentType: "Part Time",
      image: `${import.meta.env.BASE_URL}Images/scholar.png`,
      description: "As a Student Ambassador at the University of South Dakota, I represent the university by assisting with campus tours, admissions events, and student outreach while mentoring prospective and new students and promoting a positive campus experience.",
      icon: faGraduationCap
    },
    {
      id: 4,
      title: "Entrepreneurial Lead",
      company: "National Science Foundation (NSF)",
      location: "On Campus",
      duration: "2 months",
      period: "October 2025 - November 2025",
      employmentType: "Part Time",
      image: `${import.meta.env.BASE_URL}Images/nsf.png`,
      description: "DentiMap AI — Entrepreneurial Lead | University of South Dakota | NSF I-Corps Program. Worked with Dr. Debesh Jha and team to develop an AI-based tool for detecting dental diseases. I led customer discovery for the venture, conducting 20+ structured interviews with dentists and clinic owners to validate product-market fit and explore how AI can make dental diagnostics faster and more accurate.",
      icon: faBuilding
    },
    {
      id: 5,
      title: "SGA Senator",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "1 year",
      period: "January 2024 - December 2024",
      employmentType: "Part Time",
      image: `${import.meta.env.BASE_URL}Images/sga.png`,
      description: "Student leader who represents peers and advocates for student issues by participating in Student Government Association discussions, policy decisions, and campus initiatives, while also serving as Secretary for the SGA Finance Department, assisting with budget review, documentation, and allocation of funds for both small and large student organizations.",
      icon: faGraduationCap
    },
    {
      id: 6,
      title: "Student Supervisor",
      company: "University of South Dakota",
      location: "On Campus",
      duration: "1 year 5 months",
      period: "August 2023 - December 2024",
      employmentType: "Part Time",
      image: `${import.meta.env.BASE_URL}Images/Bros.png`,
      description: "A Student Supervisor at Einstein Bros. Bagels (operated by Sodexo at the University of South Dakota) supports daily dining operations while leading student employees. The role combines customer service, team supervision, and operational oversight, ensuring food quality, safety, and a positive experience for students, staff, and visitors.",
      icon: faBriefcase
    },
    {
      id: 7,
      title: "Facilities Member",
      company: "Department of Custodial Services",
      location: "On Campus",
      duration: "Summer 2023, 2024, 2025",
      period: "Summer 2023, 2024, 2025",
      employmentType: "Full Time",
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
                  </div>
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
