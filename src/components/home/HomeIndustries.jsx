import React, { useState, useRef, useEffect, useCallback, memo } from 'react';
import '../styles/home/homeindustries.scss';

// Memoize the industry panel to prevent unnecessary re-renders
const IndustryPanel = memo(({ industry, isActive, onClick }) => (
  <div 
    className={`industry-panel ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    <div className="panel-content" style={{'--industry-color': industry.color, '--industry-accent': industry.accentColor}}>
      <div className="panel-image-container">
        <div className="panel-image-wrapper">
          <img 
            src={industry.image} 
            alt={industry.name}
            loading="lazy"
            decoding="async"
          />
          <div className="image-overlay"></div>
        </div>
        
        <div className="panel-symbol" style={{background: industry.color}}>
          {industry.symbol}
        </div>
      </div>
      
      <div className="panel-details">
        <div className="panel-header">
          <h3 className="industry-name">{industry.name}</h3>
          <div className="expertise-meter">
            <div className="expertise-fill" style={{width: `${industry.expertise}%`}}></div>
            <span className="expertise-label">{industry.expertise}% Expertise</span>
          </div>
        </div>
        
        <p className="industry-description">{industry.description}</p>
        
        <div className="industry-specialties">
          {industry.features.map((feature, i) => (
            <div key={i} className="specialty-item">
              <div className="specialty-indicator"></div>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="panel-accent"></div>
    </div>
  </div>
));

const HomeIndustries = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [hoveringIndicator, setHoveringIndicator] = useState(false);
  const sectionRef = useRef(null);
  const galleryRef = useRef(null);
  const panelsRef = useRef([]);
  const observerRef = useRef(null);
  const autoRotateTimeoutRef = useRef(null);

  // Memoize the industries data
  const industries = useRef([
    {
      id: 1,
      name: "E-Commerce",
      image: "/industries/e-commerce.webp",
      symbol: "EC",
      color: "#F27E63",
      accentColor: "#FFD5CC",
      description: "Boost conversions and scale your online store with our specialized e-commerce solutions.",
      features: ["Product Optimization", "Shopping Funnel Analysis", "Conversion Rate Optimization"],
      expertise: 92
    },
    {
      id: 2,
      name: "SaaS",
      image: "/industries/saas.webp",
      symbol: "SS",
      color: "#4F9CF9",
      accentColor: "#DBE9FF",
      description: "Accelerate growth and reduce CAC for your software company with our SaaS marketing expertise.",
      features: ["User Acquisition", "Retention Strategies", "Product-Led Growth"],
      expertise: 95
    },
    {
      id: 3,
      name: "Finance",
      image: "/industries/finance.webp",
      symbol: "FN",
      color: "#65C466",
      accentColor: "#D7F0D8",
      description: "Build trust and generate qualified leads for your financial services with compliant strategies.",
      features: ["Regulatory Compliance", "Trust Building", "Lead Qualification"],
      expertise: 88
    },
    {
      id: 4,
      name: "Law Firms",
      image: "/industries/law-firms.webp",
      symbol: "LF",
      color: "#7C5AC7",
      accentColor: "#E5DCFF",
      description: "Establish authority and convert high-value clients for your law practice.",
      features: ["Case Studies", "Client Testimonials", "Practice Area Specialization"],
      expertise: 85
    },
    {
      id: 5,
      name: "Medical",
      image: "/industries/medical.webp",
      symbol: "MD",
      color: "#42BDC8",
      accentColor: "#D5F2F5",
      description: "Expand your patient base and improve booking rates with HIPAA-compliant marketing.",
      features: ["Patient Acquisition", "HIPAA Compliance", "Healthcare Branding"],
      expertise: 90
    },
    {
      id: 6,
      name: "Real Estate",
      image: "/industries/real-estate.webp",
      symbol: "RE",
      color: "#F1A036",
      accentColor: "#FFEFD0",
      description: "Generate quality leads and showcase properties effectively with targeted strategies.",
      features: ["Property Showcasing", "Buyer/Seller Targeting", "Location-Based Marketing"],
      expertise: 93
    }
  ]).current;

  // Optimize intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observerRef.current.disconnect();
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '50px'
      }
    );
    
    if (sectionRef.current) {
      observerRef.current.observe(sectionRef.current);
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Optimize auto-rotation with useCallback
  const autoRotate = useCallback(() => {
    if (!isInteracting && !hoveringIndicator) {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }
  }, [isInteracting, hoveringIndicator, industries.length]);

  useEffect(() => {
    autoRotateTimeoutRef.current = setInterval(autoRotate, 6000);
    return () => {
      if (autoRotateTimeoutRef.current) {
        clearInterval(autoRotateTimeoutRef.current);
      }
    };
  }, [autoRotate]);

  // Optimize panel updates
  useEffect(() => {
    if (!galleryRef.current) return;

    const updatePanels = () => {
      requestAnimationFrame(() => {
        panelsRef.current.forEach((panel, index) => {
          if (panel) {
            if (index === activeIndustry) {
              panel.classList.add('active');
            } else {
              panel.classList.remove('active');
            }
          }
        });

        const scrollAmount = activeIndustry * (window.innerWidth > 1200 ? 410 : 330);
        galleryRef.current.scrollTo({
          left: scrollAmount,
          behavior: 'smooth'
        });
      });
    };

    updatePanels();
  }, [activeIndustry]);

  // Memoize event handlers
  const handleIndicatorClick = useCallback((index) => {
    setActiveIndustry(index);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsInteracting(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsInteracting(false);
  }, []);

  const handleIndicatorMouseEnter = useCallback(() => {
    setHoveringIndicator(true);
  }, []);

  const handleIndicatorMouseLeave = useCallback(() => {
    setHoveringIndicator(false);
  }, []);

  return (
    <section className="industries-section" ref={sectionRef}>
      <div className="industries-backdrop">
        <div className="backdrop-design"></div>
      </div>
      
      <div className="industries-container">
        <div className={`industries-content ${isInView ? 'in-view' : ''}`}>
          <div className="industries-header">
            <div className="section-mark">
              <span className="mark-line"></span>
              <span className="mark-text">Industry Expertise</span>
            </div>
            
            <h2 className="section-title">
              Refined <span className="highlight">Mastery</span> Across Sectors
            </h2>
            
            <p className="section-subtitle">
              Our sophisticated strategies are tailored to each industry's unique challenges and opportunities.
            </p>
          </div>
          
          <div className="industries-experience-gallery">
            <div className="gallery-main">
              <div 
                className="gallery-panels" 
                ref={galleryRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {industries.map((industry, index) => (
                  <IndustryPanel
                    key={industry.id}
                    industry={industry}
                    isActive={index === activeIndustry}
                    onClick={() => handleIndicatorClick(index)}
                    ref={el => panelsRef.current[index] = el}
                  />
                ))}
              </div>
              
              <div className="gallery-navigation">
                <div 
                  className="navigation-indicators"
                  onMouseEnter={handleIndicatorMouseEnter}
                  onMouseLeave={handleIndicatorMouseLeave}
                >
                  {industries.map((industry, index) => (
                    <button 
                      key={industry.id}
                      className={`nav-indicator ${index === activeIndustry ? 'active' : ''}`}
                      onClick={() => handleIndicatorClick(index)}
                      style={{'--indicator-color': industry.color}}
                      aria-label={`Show ${industry.name}`}
                    >
                      <span className="indicator-progress"></span>
                      <span className="indicator-label">{industry.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="industries-mobile">
            <div className="mobile-showcase">
              {industries.map((industry, index) => (
                <div 
                  key={industry.id}
                  className={`mobile-panel ${index === activeIndustry ? 'active' : ''}`}
                  style={{'--industry-color': industry.color, '--industry-accent': industry.accentColor}}
                >
                  <div className="mobile-panel-header">
                    <div className="mobile-symbol">{industry.symbol}</div>
                    <div className="mobile-title">
                      <h3>{industry.name}</h3>
                      <div className="expertise-indicator">
                        <div className="expertise-bar">
                          <div className="expertise-progress" style={{width: `${industry.expertise}%`}}></div>
                        </div>
                        <span className="expertise-percentage">{industry.expertise}%</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mobile-image">
                    <img src={industry.image} alt={industry.name} />
                  </div>
                  
                  <div className="mobile-content">
                    <p>{industry.description}</p>
                    
                    <div className="mobile-specialties">
                      {industry.features.map((feature, i) => (
                        <div key={i} className="mobile-specialty">
                          <span className="specialty-marker"></span>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mobile-navigation">
              {industries.map((industry, index) => (
                <button 
                  key={industry.id}
                  className={`mobile-nav-dot ${index === activeIndustry ? 'active' : ''}`}
                  onClick={() => handleIndicatorClick(index)}
                  style={{'--dot-color': industry.color}}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      <div className="industries-decorations">
        <div className="deco-element elem-1"></div>
        <div className="deco-element elem-2"></div>
        <div className="deco-element elem-3"></div>
        <div className="grid-pattern"></div>
      </div>
    </section>
  );
};

export default memo(HomeIndustries);