import { useState, useEffect, useRef } from 'react';
import '../../components/styles/layout/header.scss';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    // Only add the event listener if the dropdown is open
    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close dropdown when mobile menu is toggled
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const toggleServicesDropdown = (e) => {
    e.preventDefault(); // Prevent navigation for all devices
    e.stopPropagation(); // Stop event bubbling
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src="/logo.svg" alt="WorkZen Logo" className="logo-img" />
          </a>
        </div>

        <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about-us" className="nav-link">About</a>
            </li>
            <li className={`nav-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`} ref={servicesDropdownRef}>
              <a 
                href="/services" 
                className="nav-link dropdown-toggle" 
                onClick={toggleServicesDropdown}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </a>
              <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}>
                <li><a href="/services/digital-marketing" className="dropdown-item">Digital Marketing</a></li>
                <li><a href="/services/seo" className="dropdown-item">SEO Optimization</a></li>
                <li><a href="/services/social-media" className="dropdown-item">Social Media Management</a></li>
                <li><a href="/services/content" className="dropdown-item">Content Creation</a></li>
                <li><a href="/services/ppc" className="dropdown-item">PPC Advertising</a></li>
                <li><a href="/services/email" className="dropdown-item">Email Marketing</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/industries-details" className="nav-link">Industries</a>
            </li>
            <li className="nav-item">
              <a href="/blog" className="nav-link">Blog</a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="/contact" className="btn-wrapper">
            <button className="glow-button">Get Started</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
