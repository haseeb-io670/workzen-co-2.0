import React, { useState, useRef, useEffect } from 'react';
import '../styles/home/homeservices.scss';

const HomeServices = () => {
  const [activeService, setActiveService] = useState(1);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Service categories data
  const services = [
    {
      id: 1,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
          <polyline points="17 6 23 6 23 12"></polyline>
        </svg>
      ),
      title: "Pay Per Click",
      description: "Generate high-quality leads through targeted campaigns and proven strategies.",
      image: "/service/lead-generation.webp",
      subServices: [
        "Search Ads",
        "Social Media Ads",
        "Display Network",
        "Remarketing",
        "Conversion Rate Optimization"
      ]
    },
    {
      id: 2,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: "Development",
      description: "Create stunning digital experiences with our expert development services.",
      image: "/service/development.webp",
      subServices: [
        "Website / Landing Pages",
        "eCommerce Store",
        "Integrations (Payment Platforms/APIs)",
        "CMS and Admin Panel"
      ]
    },
    {
      id: 3,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      title: "Social Media Management",
      description: "Build a strong online presence that attracts and engages your target audience.",
      image: "/service/digital-presense.webp",
      subServices: [
        "Branding",
        "Social Media Management",
        "Activation of GBP"
      ]
    },
    {
      id: 4,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
      title: "SEO",
      description: "Boost your visibility and rankings with our comprehensive SEO strategies.",
      image: "/service/SEO.webp",
      subServices: [
        "On Page / Off Page",
        "Local SEO",
        "National SEO",
        "Onsite SEO",
        "Blog Writing"
      ]
    },
    {
      id: 5,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      title: "Automation & Admin Support",
      description: "Focus on what matters most while our VAs handle the day-to-day operations.",
      image: "/service/virtual-assistant.webp",
      subServices: [
        "Appointment Scheduling",
        "CRM Management",
        "Calendar Management",
        "Administrative Support"
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-pattern-bg"></div>
      
      <div className="services-container">
        <div className={`services-content ${isInView ? 'in-view' : ''}`}>
          <div className="services-header">
            <div className="section-tag">Our Services</div>
            <h2 className="section-title">
              Comprehensive <span className="highlight">Solutions</span> <br />for Your Business Growth
            </h2>
            <p className="section-subtitle">
              Choose the services that align with your goals and watch your business transform
            </p>
          </div>
          
          <div className="services-tabs">
            <div className="tabs-wrapper">
              {services.map(service => (
                <button
                  key={service.id}
                  className={`service-tab ${activeService === service.id ? 'active' : ''}`}
                  onClick={() => setActiveService(service.id)}
                >
                  <span className="tab-icon">{service.icon}</span>
                  <span className="tab-title">{service.title}</span>
                </button>
              ))}
            </div>
            
            <div className="service-panel">
              {services.map(service => (
                <div 
                  key={service.id} 
                  className={`service-content ${activeService === service.id ? 'active' : ''}`}
                >
                  <div className="service-info">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                    <div className="sub-services">
                      {service.subServices.map((subService, index) => (
                        <div className="sub-service" key={index}>
                          <span className="check-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          <span className="sub-service-name">{subService}</span>
                        </div>
                      ))}
                    </div>
                    
                  
                  </div>
                  
                  <div className="service-visual">
                    <div className="service-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-icon-large">
                      {service.icon}
                    </div>
                    <div className="service-accent"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        
        </div>
      </div>
      
      <div className="services-floating-elements">
        <div className="floating-element fe-1"></div>
        <div className="floating-element fe-2"></div>
        <div className="floating-element fe-3"></div>
      </div>
    </section>
  );
};

export default HomeServices;
