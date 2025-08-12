import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeMenu}>
          
        </Link>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu} className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
          <li><Link to="/skills" onClick={closeMenu} className={location.pathname === '/skills' ? 'active' : ''}>Skills</Link></li>
          <li><Link to="/projects" onClick={closeMenu} className={location.pathname === '/projects' ? 'active' : ''}>Projects</Link></li>
          <li><Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
        </ul>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
