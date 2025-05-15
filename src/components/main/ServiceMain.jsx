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
      bulletPoints: [
        "Data Extraction",
        "Cold Calling",
        "Email and SMS Marketing",
        "PPC (Google and Meta Ads)",
        "Social Media Paid Campaigns"
      ],
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
      bulletPoints: [
        "Website / Landing Pages",
        "eCommerce Store",
        "Integrations (Payment Platforms/APIs)",
        "CMS and Admin Panel"
      ],
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
      icon: "/svg/digital.svg",
      description: "Build a strong, cohesive online presence that resonates with your target audience.",
      bulletPoints: [
        "Branding",
        "Social Media Management",
        "Activation of GBP"
      ],
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
      title: "SEO",
      path: "seo",
      category: "marketing",
      icon: "/svg/seo.svg",
      description: "Improve visibility and drive organic traffic with our comprehensive SEO strategies.",
      bulletPoints: [
        "On Page / Off Page",
        "Local SEO",
        "National SEO",
        "Onsite SEO",
        "Blog Writing"
      ],
      features: [
        "On-Page Optimization",
        "Off-Page SEO",
        "Local SEO",
        "Technical SEO",
        "Content Creation"
      ]
    },
    {
      id: 5,
      title: "Virtual Assistant",
      path: "virtual-assistant",
      category: "support",
      icon: "/svg/va.svg",
      description: "Focus on growth while our skilled VAs handle your day-to-day operations efficiently.",
      bulletPoints: [
        "Appointment Scheduling",
        "CRM Management",
        "Calendar Management",
        "Administrative Support"
      ],
      features: [
        "Calendar Management",
        "CRM Administration",
        "Email Management",
        "Administrative Support",
        "Customer Service"
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
            <p>Transforming ideas into digital success stories through innovative strategies and cutting-edge solutions</p>
          
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Digital patterns overlay */}
        <div className="digital-patterns">
          {[...Array(20)].map((_, index) => (
            <div key={index} className="pattern-element" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}></div>
          ))}
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
            <p>Discover how our tailored digital solutions can elevate your brand, drive growth, and create meaningful connections with your audience</p>
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
                    <ul className="service-bullet-points">
                      {service.bulletPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                    <div className="card-overlay"></div>
                    <a href={`/services/${service.path}`} className="card-hover-button">
                      Details
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
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
            <p>A strategic approach designed to transform your digital presence</p>
          </div>
          
          <div className="process-timeline">
            <div className="timeline-track">
              <div className="track-line"></div>
              <div className="track-progress"></div>
            </div>
            
            <div className="process-steps">
              <div className="process-step" data-step="1">
                <div className="step-connector">
                  <div className="connector-dot"></div>
                  <div className="connector-line"></div>
                </div>
                <div className="step-content">
                  <div className="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="12"></line>
                      <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    </svg>
                  </div>
                  <div className="step-details">
                    <div className="step-number">01</div>
                    <h3>Discovery</h3>
                    <p>We dive deep into understanding your business, target audience, and competitive landscape to form a solid strategic foundation.</p>
                    <ul className="step-deliverables">
                      <li>Business Analysis</li>
                      <li>User Research</li>
                      <li>Competitive Review</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="process-step" data-step="2">
                <div className="step-connector">
                  <div className="connector-dot"></div>
                  <div className="connector-line"></div>
                </div>
                <div className="step-content">
                  <div className="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <div className="step-details">
                    <div className="step-number">02</div>
                    <h3>Strategy</h3>
                    <p>Based on insights gathered, we craft a comprehensive roadmap that aligns with your business goals and sets clear benchmarks for success.</p>
                    <ul className="step-deliverables">
                      <li>Strategic Planning</li>
                      <li>KPI Definition</li>
                      <li>Timeline Creation</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="process-step" data-step="3">
                <div className="step-connector">
                  <div className="connector-dot"></div>
                  <div className="connector-line"></div>
                </div>
                <div className="step-content">
                  <div className="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <div className="step-details">
                    <div className="step-number">03</div>
                    <h3>Execution</h3>
                    <p>Our specialized teams implement the strategy with precision, ensuring every detail is perfectly executed while maintaining open communication.</p>
                    <ul className="step-deliverables">
                      <li>Content Creation</li>
                      <li>Technical Implementation</li>
                      <li>Regular Progress Updates</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="process-step" data-step="4">
                <div className="step-connector">
                  <div className="connector-dot"></div>
                </div>
                <div className="step-content">
                  <div className="step-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                      <line x1="6" y1="1" x2="6" y2="4"></line>
                      <line x1="10" y1="1" x2="10" y2="4"></line>
                      <line x1="14" y1="1" x2="14" y2="4"></line>
                    </svg>
                  </div>
                  <div className="step-details">
                    <div className="step-number">04</div>
                    <h3>Optimization</h3>
                    <p>We continuously analyze performance data to refine our approach, ensuring maximum effectiveness and optimal return on investment.</p>
                    <ul className="step-deliverables">
                      <li>Performance Analytics</li>
                      <li>Iterative Improvements</li>
                      <li>Detailed Reporting</li>
                    </ul>
                  </div>
                </div>
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
