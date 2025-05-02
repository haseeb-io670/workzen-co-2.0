import React, { useState, useRef, useEffect } from 'react';
import '../styles/home/homeindustries.scss';

const HomeIndustries = () => {
  const [isInView, setIsInView] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const industries = [
    {
      id: 1,
      name: "E-Commerce",
      image: "/industries/e-commerce.webp",
      description: "Boost conversions and scale your online store with our specialized e-commerce solutions.",
      features: ["Product Optimization", "Shopping Funnel Analysis", "Conversion Rate Optimization"]
    },
    {
      id: 2,
      name: "SaaS",
      image: "/industries/saas.webp",
      description: "Accelerate growth and reduce CAC for your software company with our SaaS marketing expertise.",
      features: ["User Acquisition", "Retention Strategies", "Product-Led Growth"]
    },
    {
      id: 3,
      name: "Finance",
      image: "/industries/finance.webp",
      description: "Build trust and generate qualified leads for your financial services with compliant strategies.",
      features: ["Regulatory Compliance", "Trust Building", "Lead Qualification"]
    },
    {
      id: 4,
      name: "Law Firms",
      image: "/industries/law-firms.webp",
      description: "Establish authority and convert high-value clients for your law practice.",
      features: ["Case Studies", "Client Testimonials", "Practice Area Specialization"]
    },
    {
      id: 5,
      name: "Medical",
      image: "/industries/medical.webp",
      description: "Expand your patient base and improve booking rates with HIPAA-compliant marketing.",
      features: ["Patient Acquisition", "HIPAA Compliance", "Healthcare Branding"]
    },
    {
      id: 6,
      name: "Real Estate",
      image: "/industries/real-estate.webp",
      description: "Generate quality leads and showcase properties effectively with targeted strategies.",
      features: ["Property Showcasing", "Buyer/Seller Targeting", "Location-Based Marketing"]
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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!hoverIndex) {
        setActiveIndustry((prev) => (prev + 1) % industries.length);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [hoverIndex, industries.length]);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(-${activeIndustry * 100}%)`;
    }
  }, [activeIndustry]);

  const handleIndicatorClick = (index) => {
    setActiveIndustry(index);
  };

  const handleMouseEnter = (index) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null);
  };

  return (
    <section className="industries-section" ref={sectionRef}>
      <div className="industries-container">
        <div className={`industries-content ${isInView ? 'in-view' : ''}`}>
          <div className="industries-header">
            <div className="section-tag">Industries We Serve</div>
            <h2 className="section-title">
              Specialized <span className="highlight">Strategies</span> for Your Industry
            </h2>
            <p className="section-subtitle">
              We understand the unique challenges and opportunities in your sector
            </p>
          </div>
          
          <div className="industries-showcase">
            <div className="industry-display">
              <div className="industry-image-wrapper">
                <div className="industry-slider" ref={sliderRef}>
                  {industries.map((industry, index) => (
                    <div 
                      key={industry.id} 
                      className={`industry-slide ${index === activeIndustry ? 'active' : ''}`}
                    >
                      <div className="image-container">
                        <img src={industry.image} alt={industry.name} />
                      </div>
                      <div className="industry-info">
                        <h3>{industry.name}</h3>
                        <p>{industry.description}</p>
                        <ul className="industry-features">
                          {industry.features.map((feature, i) => (
                            <li key={i}>
                              <span className="feature-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                        {/* <a href={`/industries/${industry.name.toLowerCase().replace(/\s+/g, '-')}`} className="industry-link">
                          <span>Learn More</span>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                          </svg>
                        </a> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="industry-indicators">
                {industries.map((industry, index) => (
                  <div 
                    key={industry.id}
                    className={`indicator ${index === activeIndustry ? 'active' : ''}`}
                    onClick={() => handleIndicatorClick(index)}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="industry-selection">
              <div className="selection-heading">
                <h3>Explore Industries</h3>
              </div>
              <div className="industry-tabs">
                {industries.map((industry, index) => (
                  <div 
                    key={industry.id}
                    className={`industry-tab ${index === activeIndustry ? 'active' : ''}`}
                    onClick={() => handleIndicatorClick(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="tab-content">
                      <div className="indicator"></div>
                      <span>{industry.name}</span>
                    </div>
                    <div className="hover-reveal">
                      <img src={industry.image} alt={industry.name} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="industries-cta">
            <div className="cta-content">
              <h3>Not seeing your industry?</h3>
              <p>Our methodologies adapt to any business. Let's discuss your specific needs.</p>
            </div>
           
          </div>
        </div>
      </div>
      
      <div className="industries-decoration">
        <div className="deco-circle circle-1"></div>
        <div className="deco-circle circle-2"></div>
        <div className="deco-shape shape-1"></div>
        <div className="deco-shape shape-2"></div>
        <div className="deco-lines"></div>
      </div>
    </section>
  );
};

export default HomeIndustries;