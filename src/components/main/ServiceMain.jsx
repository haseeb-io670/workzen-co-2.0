import React, { useState, useEffect, useRef } from 'react';
import '../styles/main/servicemain.scss';

const ServiceMain = () => {
  const [animatedItems, setAnimatedItems] = useState([]);
  const servicesRef = useRef(null);
  
  // Service data with categories
  const services = [
    {
      id: 1,
      title: "Lead Generation",
      path: "lead-generation",
      category: "marketing",
      icon: "/svg/lead-generation.svg",
      description: "Attract high-quality leads with our targeted campaigns and data-driven strategies.",
      features: [
        "Data Extraction & Analysis",
        "Cold Calling Campaigns",
        "Email & SMS Marketing",
        "PPC Advertising",
        "Social Media Campaigns"
      ]
    },
    {
      id: 2,
      title: "Development",
      path: "development",
      category: "tech",
      icon: "/svg/development.svg",
      description: "Create stunning, functional digital experiences with our expert development services.",
      features: [
        "Website & Landing Pages",
        "eCommerce Solutions",
        "API Integrations",
        "CMS Development",
        "Custom Web Applications"
      ]
    },
    {
      id: 3,
      title: "Digital Presence",
      path: "digital-presence",
      category: "marketing",
      icon: "/svg/digital-presence.svg",
      description: "Build a strong, cohesive online presence that resonates with your target audience.",
      features: [
        "Brand Identity Design",
        "Social Media Management",
        "Google Business Profile",
        "Content Strategy",
        "Online Reputation Management"
      ]
    },
    {
      id: 4,
      title: "Virtual Assistant",
      path: "virtual-assistant",
      category: "support",
      icon: "/svg/virtual-assistant.svg",
      description: "Focus on growth while our skilled VAs handle your day-to-day operations efficiently.",
      features: [
        "Calendar Management",
        "CRM Administration",
        "Email Management",
        "Administrative Support",
        "Customer Service"
      ]
    },
    {
      id: 5,
      title: "SEO",
      path: "seo",
      category: "marketing",
      icon: "/svg/seo.svg",
      description: "Improve visibility and drive organic traffic with our comprehensive SEO strategies.",
      features: [
        "On-Page Optimization",
        "Off-Page SEO",
        "Local SEO",
        "Technical SEO",
        "Content Creation"
      ]
    }
  ];

  // Handle intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedItems(prev => [...prev, entry.target.dataset.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = document.querySelectorAll('.service-card');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, [services]);

  // Handle service card navigation
  const scrollToService = (serviceId) => {
    if (servicesRef.current) {
      const card = document.querySelector(`.service-card[data-id="${serviceId}"]`);
      if (card) {
        const containerRect = servicesRef.current.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const scrollLeft = cardRect.left - containerRect.left - (containerRect.width / 2) + (cardRect.width / 2);
        
        servicesRef.current.scrollTo({
          left: servicesRef.current.scrollLeft + scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <div className="services-main">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-content centered">
          <div className="hero-text">
            <h1>Our <span className="highlight">Services</span></h1>
            <p>Comprehensive digital solutions tailored to elevate your business</p>
          
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services-showcase" className="services-showcase">
        <div className="container">
          <div className="section-header">
            <h2>Explore Our <span className="highlight">Services</span></h2>
            <p>Discover how we can help transform your business with our range of specialized services</p>
          </div>
          
          <div className="services-carousel" ref={servicesRef}>
            {services.map((service) => (
              <div 
                key={service.id}
                data-id={service.id}
                className={`service-card ${service.category} ${animatedItems.includes(service.id.toString()) ? 'animated' : ''}`}
              >
                <div className="service-inner">
                  <div className="service-front">
                    <div className="service-icon">
                      <img src={service.icon} alt={service.title} />
                    </div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <div className="card-overlay"></div>
                  </div>
                  <div className="service-back">
                    <h3>{service.title}</h3>
                    <ul className="service-features">
                      {service.features.map((feature, index) => (
                        <li key={index}>
                          <svg className="check-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a href={`/services/${service.path}`} className="service-link">
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="service-number">0{service.id}</div>
              </div>
            ))}
          </div>
          
          <div className="services-nav">
            <div className="nav-dots">
              {services.map((service) => (
                <button 
                  key={service.id} 
                  className={`nav-dot ${service.category}`} 
                  aria-label={`Go to ${service.title}`}
                  onClick={() => scrollToService(service.id)}
                >
                  <span className="dot-icon">
                    <img src={service.icon} alt="" />
                  </span>
                  <span className="dot-label">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="showcase-bg-element"></div>
      </section>

      {/* Process Section */}
      <section className="services-process">
        <div className="container">
          <div className="section-header">
            <h2>Our <span className="highlight">Process</span></h2>
            <p>How we deliver exceptional results for your business</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
              </div>
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Discovery</h3>
                <p>We learn about your business, goals, and challenges to create a tailored strategy.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                  <polyline points="2 17 12 22 22 17"></polyline>
                  <polyline points="2 12 12 17 22 12"></polyline>
                </svg>
              </div>
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Strategy</h3>
                <p>Our team develops a comprehensive plan aligned with your objectives and timeline.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Execution</h3>
                <p>We implement the strategy with precision, keeping you informed at every step.</p>
              </div>
            </div>
            
            <div className="process-step">
              <div className="step-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                  <line x1="6" y1="1" x2="6" y2="4"></line>
                  <line x1="10" y1="1" x2="10" y2="4"></line>
                  <line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Optimization</h3>
                <p>Continuous monitoring and refinement to maximize results and ROI.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="process-bg"></div>
      </section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>Schedule a consultation with our experts to discuss your specific needs</p>
            <a href="/contact" className="cta-button">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </div>
          <div className="cta-visual">
            <div className="cta-shape"></div>
            <div className="cta-graphic">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 400">
                <defs>
                  <linearGradient id="cta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1D7EC2" stopOpacity="0.8"/>
                    <stop offset="100%" stopColor="#FF6B35" stopOpacity="0.8"/>
                  </linearGradient>
                </defs>
                <rect x="50" y="50" width="400" height="300" rx="20" fill="url(#cta-gradient)" opacity="0.1"/>
                <circle cx="150" cy="150" r="80" fill="#1D7EC2" opacity="0.2"/>
                <circle cx="350" cy="250" r="60" fill="#FF6B35" opacity="0.2"/>
                <path d="M100,200 Q250,100 400,200" stroke="#1D7EC2" strokeWidth="5" fill="none"/>
                <circle cx="100" cy="200" r="15" fill="#1D7EC2"/>
                <circle cx="400" cy="200" r="15" fill="#FF6B35"/>
              </svg>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceMain;
