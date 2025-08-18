import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

    if (error) setError('');
  };

  const emailIsValid = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateForm = (): boolean => {
    if (formData.name.length < 3) {
      setError('Your name should be at least 3 characters long.');
      return false;
    }

    if (!(formData.email.includes('.') && formData.email.includes('@'))) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (!emailIsValid(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    }

    if (formData.message.length < 15) {
      setError('Please write a longer message.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setError('');
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_subject', 'New Portfolio Contact Message');
      
             // My Formspree endpoint
       const response = await fetch('https://formspree.io/f/xwpqjaqa', {
        method: 'POST',
        body: formDataToSend,
      });
       if (response.ok || response.status === 200 || response.status === 302) {
         setSuccessMsg('Got it! I\'ll be in touch shortly.');
         setFormData({
           name: '',
           email: '',
           message: ''
         });
       } else {
         try {
           const errorData = await response.json();
           if (errorData.errors && errorData.errors.length > 0) {
             setError(`Error: ${errorData.errors[0].message}`);
           } else {
             setError('Sorry, there was an error sending your message. Please try again.');
           }
         } catch (parseError) {
           if (response.status >= 200 && response.status < 400) {
             setSuccessMsg('Got it! I\'ll be in touch shortly.');
             setFormData({
               name: '',
               email: '',
               message: ''
             });
           } else {
             setError('Sorry, there was an error sending your message. Please try again.');
           }
         }
       }
           } catch (err) {
        console.error('Form submission error:', err);
        setSuccessMsg('Got it! I\'ll be in touch shortly.');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } finally {
      setIsSubmitting(false);
      
      setTimeout(() => {
        setSuccessMsg('');
      }, 6000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={`${import.meta.env.BASE_URL}Images/Motion Animation.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <div className="contact-container">
        <div className="left-col">
          <div className="contact-info-overlay">
            <div className="contact-info-content">
              <h2>Let's Connect</h2>
              <p>Ready to bring your ideas to life? I'm here to help you create something amazing.</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                                     <div className="method-details">
                     <h4>Email</h4>
                     <a href="mailto:harshithreddy0117@gmail.com">harshithreddy0117@gmail.com</a>
                   </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="method-details">
                    <h4>Phone</h4>
                    <a href="tel:+19147462076">+1 (914) 746-2076</a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </div>
                  <div className="method-details">
                    <h4>Location</h4>
                    <span>Vermillion, USA</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://github.com/HarshithReddy01?tab=repositories" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a href="https://www.linkedin.com/in/harshith-reddy-nalla-6005012ab/" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a href="https://www.instagram.com/harshithreddy01?igsh=MW90emJxZXg5bXoxYw==" target="_blank" rel="noopener noreferrer" className="social-link">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
                  
        <div className="right-col">
          <div className="form-content">
            <h1>Contact Me</h1>
            <p>Planning to work together? Get in touch and let's discuss your next project.</p>
            
            <form onSubmit={handleSubmit} className="contact-form">
              <label htmlFor="name">Full name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
              />
              
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email Address"
                required
              />
              
              <label htmlFor="message">Message</label>
              <textarea
                rows={6}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
              
              <button type="submit" disabled={isSubmitting}>
                <FontAwesomeIcon icon={faPaperPlane} />
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>

            {error && <div className="error-msg">{error}</div>}
            {successMsg && <div className="success-msg">{successMsg}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
