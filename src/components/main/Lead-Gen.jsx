import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiSearch, FiTrendingUp, FiTarget, FiBarChart2, FiDollarSign, FiUsers } from 'react-icons/fi';
import '../styles/main/leadgen.scss';

const LeadGeneration = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState('searchAds');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  const services = [
    {
      id: 'searchAds',
      icon: <FiSearch size={24} />,
      title: "Search Ads",
      description: "Maximize visibility in search engine results with targeted Google Ads campaigns that capture high-intent users actively searching for your products or services.",
      features: [
        "Comprehensive keyword research and selection",
        "Strategic bid management and budget allocation",
        "Compelling ad copy with strong CTAs",
        "Negative keyword strategy to reduce wasted spend",
        "Performance tracking and conversion optimization"
      ],
      benefits: [
        "Reach customers at the moment they're searching",
        "Pay only when someone clicks your ad",
        "Target specific locations and devices",
        "Measure ROI with conversion tracking"
      ]
    },
    {
      id: 'displayNetwork',
      icon: <FiTrendingUp size={24} />,
      title: "Display Network",
      description: "Expand your reach with visually engaging banner and video ads across millions of websites, apps, and videos in the Google Display Network.",
      features: [
        "Eye-catching display ad creation",
        "Contextual and audience-based targeting",
        "Remarketing to previous visitors",
        "Responsive ad designs for all devices",
        "Detailed performance analytics"
      ],
      benefits: [
        "Build brand awareness at scale",
        "Visual format increases engagement",
        "Reach potential customers across the web",
        "Multiple ad formats to choose from"
      ]
    },
    {
      id: 'socialMediaAds',
      icon: <FiUsers size={24} />,
      title: "Social Media Ads",
      description: "Leverage the power of social platforms like Facebook, Instagram, and LinkedIn to target specific demographics and interests with precision.",
      features: [
        "Platform-specific ad campaign setup",
        "Advanced audience targeting options",
        "Engaging ad creatives and copy",
        "Retargeting website visitors",
        "Performance monitoring and optimization"
      ],
      benefits: [
        "Reach highly targeted audiences",
        "Multiple ad formats (image, video, carousel)",
        "Strong engagement and shareability",
        "Detailed demographic insights"
      ]
    },
    {
      id: 'remarketing',
      icon: <FiTarget size={24} />,
      title: "Remarketing",
      description: "Reconnect with visitors who left your website without converting by showing them relevant ads as they browse other websites.",
      features: [
        "Custom audience segmentation",
        "Dynamic remarketing for e-commerce",
        "Customizable ad frequency capping",
        "Cross-device remarketing",
        "Conversion tracking and attribution"
      ],
      benefits: [
        "Higher conversion rates than cold traffic",
        "Increased brand recall",
        "Personalized ad experiences",
        "Efficient use of ad spend"
      ]
    },
    {
      id: 'performance',
      icon: <FiBarChart2 size={24} />,
      title: "Performance Analytics",
      description: "Comprehensive tracking and reporting to measure the effectiveness of your PPC campaigns and optimize for better results.",
      features: [
        "Conversion tracking setup",
        "Custom dashboard and reports",
        "A/B testing of ads and landing pages",
        "ROI and revenue attribution",
        "Monthly performance reviews"
      ],
      benefits: [
        "Data-driven decision making",
        "Clear visibility into campaign performance",
        "Continuous optimization opportunities",
        "Maximized return on ad spend"
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
              PPC Advertising
            </motion.div>
            
            <motion.h1 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Drive Qualified Traffic With <br/><span className="highlight">Targeted PPC</span> Campaigns
            </motion.h1>
            
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our expert PPC management ensures your ads reach the right audience at the right time, maximizing conversions and delivering measurable ROI for your business.
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
                <button 
                  className="btn btn-primary btn-rounded"
                  onClick={() => navigate('/contact')}
                >
                  <span>Get Started With {activeServiceData.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                
                <button 
                  className="btn btn-secondary btn-rounded"
                  onClick={() => navigate('/contact')}
                >
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </motion.div>
          </div>
          
          <div className="process-section">
            <h2>Our PPC Process</h2>
            
            <div className="process-timeline">
              <div className="process-step">
                <div className="step-number">01</div>
                <div className="step-content">
                  <h3>Strategy Development</h3>
                  <p>We analyze your business goals, target audience, and market position to develop a customized PPC strategy.</p>
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
              <p>Let's discuss how our PPC services can help your business grow.</p>
            </div>
            
            <div className="cta-buttons">
              <button 
                className="btn btn-primary btn-lg btn-rounded"
                onClick={() => navigate('/contact')}
              >
                <span>Book a Strategy Call</span>
              </button>
              
              <button 
                className="btn btn-secondary btn-lg btn-rounded"
                onClick={() => navigate('/pricing')}
              >
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
