import { useState, useEffect, useRef } from 'react';
import '../../components/styles/layout/header.scss';

const servicesData = [
  {
    title: "Social Media Management",
    path: "social-media"
  },
  {
    title: "Web & Platform Development",
    path: "development"
  },
  {
    title: "Pay Per Click (PPC)",
    path: "ppc"
  },
  {
    title: "Search Engine Optimization (SEO)",
    path: "seo"
  },
  {
    title: "Automation and Admin Support",
    path: "admin-support"
  }
 
];

const ServiceItem = ({ service, closeDropdown }) => {
  const handleClick = (e) => {
    // Close the dropdown menu when a service item is clicked
    closeDropdown();
    // On mobile, we also want to close the mobile menu
    document.querySelector('.main-navigation').classList.remove('mobile-menu-open');
  };

  return (
    <li className="service-item">
      <a 
        href={`/${service.path}`} 
        className="dropdown-item"
        onClick={handleClick}
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const servicesDropdownRef = useRef(null);
  const isMobile = useRef(window.innerWidth <= 991);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      isMobile.current = width <= 991;
      
      // Close mobile menu if window is resized to desktop
      if (width > 991 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Close services dropdown when resizing
      if (isServicesDropdownOpen) {
        setIsServicesDropdownOpen(false);
      }
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
    // Always close the services dropdown when toggling mobile menu
    if (isServicesDropdownOpen) {
      setIsServicesDropdownOpen(false);
    }
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
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
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'menu-open' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
          <a href="/" className="logo">
            <img src="/logo.svg" alt="WorkZen Logo" className="logo-img" />
          </a>
        </div>

        <div className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className="header-actions desktop-only">
          <a href="tel:+14128662284" className="btn-wrapper">
            <button className="glow-button">(412) 866-2284</button>
          </a>
        </div>
      </div>
      
      {/* Full-screen mobile navigation */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
        <nav className={`main-navigation ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`} ref={navRef}>
          <div className="mobile-nav-container">
            <ul className="nav-list">
              <li className="nav-item">
                <a href="/" className="nav-link" onClick={toggleMobileMenu}>Home</a>
              </li>
              <li className="nav-item">
                <a href="/about-us" className="nav-link" onClick={toggleMobileMenu}>About</a>
              </li>
              <li 
                className={`nav-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`} 
                ref={servicesDropdownRef}
              >
                <div 
                  className="nav-link dropdown-toggle" 
                  onClick={handleServicesClick}
                  aria-expanded={isServicesDropdownOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg className="dropdown-arrow" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" fill="none" />
                  </svg>
                </div>
                <ul className={`dropdown-menu ${isServicesDropdownOpen ? 'show' : ''}`}>
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
                <a href="/pricing" className="nav-link" onClick={toggleMobileMenu}>Pricing</a>
              </li>
              <li className="nav-item">
                <a href="/industries-details" className="nav-link" onClick={toggleMobileMenu}>Industries</a>
              </li>
              <li className="nav-item">
                <a href="/blogs" className="nav-link" onClick={toggleMobileMenu}>Blog</a>
              </li>
            </ul>
            
            <div className="mobile-header-actions">
              <a href="/contact" className="btn-wrapper">
                <button className="btn-primary mobile-cta">Contact Us</button>
              </a>
              <a href="tel:+14128662284" className="btn-wrapper">
                <button className="btn-secondary mobile-cta">(412) 866-2284</button>
              </a>
            </div>
          </div>
        </nav>
      </div>
      
      {/* Desktop navigation */}
      <nav className="desktop-navigation">
        <div className="container">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">Home</a>
            </li>
            <li className="nav-item">
              <a href="/about-us" className="nav-link">About</a>
            </li>
            <li 
              className={`nav-item dropdown ${isServicesDropdownOpen ? 'open' : ''}`} 
              onMouseEnter={() => handleServicesHover(true)}
              onMouseLeave={() => handleServicesHover(false)}
            >
              <a 
                href="/services" 
                className="nav-link dropdown-toggle" 
                onClick={(e) => e.preventDefault()}
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
        </div>
      </nav>
    </header>
  );
};

export default Header;
