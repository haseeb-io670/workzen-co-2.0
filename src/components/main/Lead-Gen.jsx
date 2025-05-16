import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiDatabase, FiPhone, FiMail, FiSearch, FiUsers } from 'react-icons/fi';
import '../styles/main/leadgen.scss';

const LeadGeneration = () => {
  const [activeService, setActiveService] = useState('coldCalling');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  const services = [
    {
      id: 'dataExtraction',
      icon: <FiDatabase size={24} />,
      title: "Data Extraction",
      description: "Automated collection of targeted business data from various sources, providing you with accurate contact information and intelligence to fuel your outreach campaigns.",
      features: [
        "Custom scraping solutions for industry-specific data",
        "Data cleaning and verification processes",
        "Integration with your CRM system",
        "Regular updates to maintain data freshness",
        "Compliance with data protection regulations"
      ],
      benefits: [
        "Access to high-quality, targeted prospect data",
        "Reduced time spent on manual research",
        "Improved contact accuracy rates",
        "Scalable data collection for growing businesses"
      ]
    },
    {
      id: 'coldCalling',
      icon: <FiPhone size={24} />,
      title: "Cold Calling",
      description: "Professional outreach to potential customers through trained sales representatives who engage prospects with personalized pitches aligned with your business objectives.",
      features: [
        "Dedicated team of trained callers",
        "Customized call scripts and pitches",
        "Scheduled follow-ups to nurture leads",
        "Detailed reporting and call recordings",
        "Real-time campaign adjustments"
      ],
      benefits: [
        "Direct communication with decision-makers",
        "Immediate feedback and objection handling",
        "Personalized conversations with prospects",
        "Higher conversion rates than digital-only approaches"
      ]
    },
    {
      id: 'emailMarketing',
      icon: <FiMail size={24} />,
      title: "Email and SMS Marketing",
      description: "Strategic communication campaigns delivered through email and text messaging with personalized content, automated workflows, and performance tracking.",
      features: [
        "Personalized messaging sequences",
        "A/B testing for optimal performance",
        "Automated follow-up workflows",
        "Engagement tracking and analytics",
        "Mobile-optimized designs"
      ],
      benefits: [
        "Wide reach across multiple channels",
        "Cost-effective lead nurturing",
        "Measurable results and ROI tracking",
        "Scalable for campaigns of any size"
      ]
    },
    {
      id: 'ppcAds',
      icon: <FiSearch size={24} />,
      title: "PPC (Google and Meta Ads)",
      description: "Targeted pay-per-click advertising on Google and social media platforms with optimized ad copy, audience targeting, and conversion tracking to maximize your ad spend.",
      features: [
        "Strategic keyword research and selection",
        "Custom ad creation and copywriting",
        "Landing page optimization",
        "Budget management and bid strategies",
        "Regular performance analysis"
      ],
      benefits: [
        "Immediate visibility in search results",
        "Precise audience targeting capabilities",
        "Flexible budgeting with controlled spending",
        "Fast testing and optimization cycles"
      ]
    },
    {
      id: 'socialMedia',
      icon: <FiUsers size={24} />,
      title: "Social Media Paid Campaigns",
      description: "Strategic paid promotions across social media platforms with specific audience targeting, creative ad formats, and performance optimization to generate quality leads.",
      features: [
        "Platform-specific campaign strategies",
        "Custom audience creation and targeting",
        "Creative ad design and copywriting",
        "Conversion tracking implementation",
        "Continuous optimization for performance"
      ],
      benefits: [
        "Highly targeted demographic reaching",
        "Engaging visual and interactive formats",
        "Advanced retargeting capabilities",
        "Brand awareness alongside lead generation"
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

  const activeServiceData = services.find(service => service.id === activeService);

  return (
    <section className="lead-gen-section" ref={sectionRef}>
      <div className="lead-gen-pattern-bg"></div>
      
      <div className="lead-gen-container">
        <div className={`lead-gen-content ${isInView ? 'in-view' : ''}`}>
          <div className="lead-gen-header">
            <motion.div 
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Lead Generation
            </motion.div>
            
            <motion.h1 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Drive Business Growth With <br/><span className="highlight">Lead Generation</span> Strategies
            </motion.h1>
            
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Lead Generation strategies help businesses acquire qualified prospects, fill your sales pipeline, and drive revenue growth through targeted approaches.
            </motion.p>
          </div>
          
          <div className="service-showcase">
            <motion.div 
              className="services-nav"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -30 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              {services.map(service => (
                <button
                  key={service.id}
                  className={`service-nav-item ${activeService === service.id ? 'active' : ''}`}
                  onClick={() => setActiveService(service.id)}
                >
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-title">{service.title}</span>
                </button>
              ))}
            </motion.div>
            
            <motion.div 
              className="service-detail"
              key={activeService}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <div className="service-header">
                <div className="service-icon-large">{activeServiceData.icon}</div>
                <h2>{activeServiceData.title}</h2>
              </div>
              
              <p className="service-description">{activeServiceData.description}</p>
              
              <div className="service-features-benefits">
                <div className="features-column">
                  <h3>What We Offer</h3>
                  <ul className="features-list">
                    {activeServiceData.features.map((feature, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="check-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                          </svg>
                        </span>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                
                <div className="benefits-column">
                  <h3>Key Benefits</h3>
                  <ul className="benefits-list">
                    {activeServiceData.benefits.map((benefit, index) => (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <span className="benefit-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </span>
                        {benefit}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="service-actions">
                <button className="btn btn-primary btn-rounded">
                  <span>Get Started With {activeServiceData.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                
                <button className="btn btn-secondary btn-rounded">
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="process-section">
            <h2>Our Lead Generation Process</h2>
            
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Strategy Development</h3>
                  <p>We analyze your business goals, target audience, and market position to develop a customized lead generation strategy.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">02</div>
                <div className="step-content">
                  <h3>Campaign Setup</h3>
                  <p>Our team sets up the necessary infrastructure, creates required assets, and prepares all systems for your campaign launch.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">03</div>
                <div className="step-content">
                  <h3>Execution & Optimization</h3>
                  <p>We implement the strategy, continuously monitor performance, and make data-driven optimizations to improve results.</p>
                </div>
              </div>
              
              <div className="process-step">
                <div className="step-number">04</div>
                <div className="step-content">
                  <h3>Reporting & Analysis</h3>
                  <p>You receive detailed reports showing campaign performance, lead quality metrics, and actionable insights.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cta-section">
            <div className="cta-content">
              <h2>Ready to Generate Quality Leads?</h2>
              <p>Let's discuss how our lead generation services can help your business grow.</p>
            </div>
            
            <div className="cta-buttons">
              <button className="btn btn-primary btn-lg btn-rounded">
                <span>Book a Strategy Call</span>
              </button>
              
              <button className="btn btn-secondary btn-lg btn-rounded">
                <span>View Pricing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="floating-elements">
        <div className="floating-element fe-1"></div>
        <div className="floating-element fe-2"></div>
        <div className="floating-element fe-3"></div>
      </div>
    </section>
  );
};

export default LeadGeneration;
