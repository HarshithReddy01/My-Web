import React from 'react';
import { FaFilePdf, FaExternalLinkAlt } from 'react-icons/fa';

const Publications: React.FC = () => {
  const publications = [
    {
      id: 1,
      title: "When CNNs Outperform Transformers and Mambas: Revisiting Deep Architectures for Dental Caries Segmentation",
      authors: "Aashish Ghimire, Jun Zeng, Roshan Paudel, Nikhil Kumar Tomar, Deepak Ranjan Nayak, Harshith Reddy Nalla, Vivek Jha, Glenda Reynolds, Debesh Jha",
      venue: "AAAI 2026 Workshop on AI4Research",
      year: "Nov 2025",
      arxiv: "https://arxiv.org/pdf/2511.14860",
      pdf: `${import.meta.env.BASE_URL}cnn paper.pdf`
    }
  ];

  return (
    <section id="publications" className="publications">
      <div className="container">
        <h2 className="section-title">My <span>Publications</span></h2>
        <div className="publications-list">
          {publications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="publication-content">
                <h3 className="publication-title">{pub.title}</h3>
                <p className="publication-authors">
                  {pub.authors.split(', ').map((author, index, array) => {
                    if (author === 'Harshith Reddy Nalla') {
                      return (
                        <span key={index}>
                          <a 
                            href="https://scholar.google.com/citations?user=d5DblMEAAAAJ&hl=en" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="author-highlight author-link"
                          >
                            {author}
                          </a>
                          {index < array.length - 1 ? ', ' : ''}
                        </span>
                      );
                    }
                    return (
                      <span key={index}>
                        {author}
                        {index < array.length - 1 ? ', ' : ''}
                      </span>
                    );
                  })}
                </p>
                <div className="publication-meta">
                  <span className="publication-venue">{pub.venue}</span>
                  <span className="publication-year">— {pub.year}</span>
                </div>
                <div className="publication-links">
                  <a 
                    href={pub.pdf} 
                    className="publication-link pdf-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    download
                  >
                    <FaFilePdf />
                    <span>Download PDF</span>
                  </a>
                  <a 
                    href={pub.arxiv} 
                    className="publication-link arxiv-link" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                    <span>arXiv</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;

