import { useState, useEffect, useRef } from 'react';
import '../../components/styles/layout/header.scss';

// Organize services in a 3x2 grid with external SVG files
const servicesData = [
  {
    title: "Social Media Management",
    path: "digital-presence"
  },
  {
    title: "Web & Platform Development",
    path: "development"
  },
  {
    title: "Pay Per Click (PPC)",
    path: "lead-generation"
  },
  {
    title: "Search Engine Optimization (SEO)",
    path: "seo"
  },
  {
    title: "Automation and Admin Support",
    path: "virtual-assistant"
  }
 
];

const ServiceItem = ({ service, closeDropdown }) => {
  return (
    <li className="service-item">
      <a 
        href={`${service.path}`} 
        className="dropdown-item"
        onClick={closeDropdown}
      >
        {service.title}
      </a>
    </li>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const isMobile = useRef(window.innerWidth <= 991);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      isMobile.current = window.innerWidth <= 991;
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen && isMobile.current) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const handleServicesClick = (e) => {
    if (isMobile.current) {
      e.preventDefault();
      setIsServicesDropdownOpen(!isServicesDropdownOpen);
    }
  };

  const handleServicesHover = (isHovering) => {
    if (!isMobile.current) {
      setIsServicesDropdownOpen(isHovering);
    }
  };

  const closeDropdown = () => {
    setIsServicesDropdownOpen(false);
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
            <li 
              className={`nav-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`} 
              ref={servicesDropdownRef}
              onMouseEnter={() => handleServicesHover(true)}
              onMouseLeave={() => handleServicesHover(false)}
            >
              <a 
                href="/services" 
                className="nav-link dropdown-toggle" 
                onClick={handleServicesClick}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
              >
                Services
                <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                </svg>
              </a>
              <ul className={`dropdown-menu staggered-dropdown ${isServicesDropdownOpen ? 'show' : ''}`}>
                {servicesData.map((service, index) => (
                  <ServiceItem 
                    key={index} 
                    service={service} 
                    closeDropdown={closeDropdown}
                  />
                ))}
              </ul>
            </li>
            <li className="nav-item">
              <a href="/pricing" className="nav-link">Pricing</a>
            </li>
            <li className="nav-item">
              <a href="/industries-details" className="nav-link">Industries</a>
            </li>
            <li className="nav-item">
              <a href="/blogs" className="nav-link">Blog</a>
            </li>
            
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+14128662284" className="btn-wrapper">
            <button className="glow-button">(412) 866-2284</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
