import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import '../styles/main/digitalpresense.scss';
import { FiTarget, FiUsers, FiMap, FiMessageCircle, FiMonitor, FiTrendingUp } from 'react-icons/fi';

const DigitalPresence = () => {
  const [activeService, setActiveService] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  
  // Services data
  const servicesData = [
    {
      id: 'branding',
      title: 'Branding',
      icon: <FiTarget size={28} />,
      gradient: 'linear-gradient(135deg, #FF7C6E, #F53C5A)',
      description: 'Comprehensive branding solutions including logo design, brand guidelines, visual identity, and consistent messaging that communicates your unique value proposition to your target audience.',
      benefits: [
        'Distinctive brand identity',
        'Consistent visual language',
        'Memorable customer experience',
        'Strategic positioning',
        'Enhanced market recognition'
      ],
      images: [
        '/images/branding-1.jpg',
        '/images/branding-2.jpg'
      ]
    },
    {
      id: 'social',
      title: 'Social Media Management',
      icon: <FiUsers size={28} />,
      gradient: 'linear-gradient(135deg, #36D1DC, #5B86E5)',
      description: 'Strategic social media account management with content creation, posting schedules, audience engagement, and performance analytics to build your online community and brand recognition.',
      benefits: [
        'Increased brand awareness',
        'Stronger audience engagement',
        'Consistent posting schedule',
        'Data-driven strategy',
        'Community growth'
      ],
      images: [
        '/images/social-1.jpg',
        '/images/social-2.jpg'
      ]
    },
    {
      id: 'gbp',
      title: 'Activation of GBP',
      icon: <FiMap size={28} />,
      gradient: 'linear-gradient(135deg, #43E97B, #38F9D7)',
      description: 'Complete setup and optimization of your Google Business Profile to improve local search visibility, manage reviews, and provide accurate business information to potential customers.',
      benefits: [
        'Enhanced local visibility',
        'Improved customer trust',
        'Better search rankings',
        'Increased store visits',
        'Review management'
      ],
      images: [
        '/images/gbp-1.jpg',
        '/images/gbp-2.jpg'
      ]
    }
  ];
  
  // Process data
  const processData = [
    {
      title: 'Client Onboarding',
      description: 'We start by understanding your unique needs and goals. This involves an initial consultation to tailor our services specifically to your requirements.',
      icon: <FiMessageCircle size={24} />
    },
    {
      title: 'Assistant Matching',
      description: 'Based on your specific needs, we match you with a skilled virtual assistant experienced in your industry to ensure seamless collaboration.',
      icon: <FiUsers size={24} />
    },
    {
      title: 'Task Delegation',
      description: 'We establish clear communication channels and define task priorities to ensure your virtual assistant can effectively manage and execute your tasks.',
      icon: <FiMonitor size={24} />
    },
    {
      title: 'Quality Assurance',
      description: 'Our team conducts regular reviews of the tasks completed to ensure they meet our high standards and your expectations.',
      icon: <FiTarget size={24} />
    },
    {
      title: 'Feedback & Improvement',
      description: 'We value your feedback and continuously seek to improve our services. Regular check-ins ensure we adapt to your evolving needs.',
      icon: <FiMessageCircle size={24} />
    },
    {
      title: 'Ongoing Support',
      description: 'Our support doesn\'t end after task completion. We\'re here to assist you continuously, ensuring your operations run smoothly.',
      icon: <FiTrendingUp size={24} />
    }
  ];

  // Handle mouse move for interactive elements
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left) / width;
        const y = (e.clientY - top) / height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Function to calculate transform values based on mouse position
  const getTransformValue = (index) => {
    const maxMovement = 15;
    const x = (mousePosition.x - 0.5) * maxMovement * (index % 2 === 0 ? 1 : -1);
    const y = (mousePosition.y - 0.5) * maxMovement * (index % 2 === 0 ? -1 : 1);
    
    return { x, y };
  };

  return (
    <div className="digital-presence" ref={containerRef}>
      {/* Animated background */}
      <div className="dp-interactive-bg">
        <motion.div 
          className="dp-bg-layer dp-bg-shapes"
          style={{ y: backgroundY }}
        ></motion.div>
        <div className="dp-bg-blur"></div>
        
        <div className="dp-floating-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={`dp-particle p${i + 1}`}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDuration: `${Math.random() * 20 + 10}s`,
                animationDelay: `${Math.random() * 5}s`,
                width: `${Math.random() * 50 + 10}px`,
                height: `${Math.random() * 50 + 10}px`,
                opacity: Math.random() * 0.5 + 0.1
              }}
            ></div>
          ))}
        </div>
        
        <div className="dp-connection-lines">
          <svg width="100%" height="100%" className="dp-lines-svg">
            <line className="dp-line line1" x1="10%" y1="20%" x2="40%" y2="70%" />
            <line className="dp-line line2" x1="30%" y1="80%" x2="70%" y2="30%" />
            <line className="dp-line line3" x1="60%" y1="10%" x2="90%" y2="50%" />
            <line className="dp-line line4" x1="20%" y1="40%" x2="80%" y2="85%" />
            <line className="dp-line line5" x1="50%" y1="5%" x2="95%" y2="75%" />
          </svg>
        </div>
      </div>
      
      <div className="dp-container">
        {/* Hero Section */}
        <section className="dp-hero">
          <motion.div 
            className="dp-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="dp-subtitle">BUILD YOUR ONLINE BRAND</div>
            <h1 className="dp-title">
              Digital Presence 
              <span className="dp-title-highlight"> Services</span>
            </h1>
            <p className="dp-description">
              We help businesses establish and strengthen their digital footprint, ensuring your brand stands out in the crowded digital landscape.
            </p>
            
            <div className="dp-hero-buttons">
              <button className="dp-btn dp-btn-primary">Get Started</button>
            </div>
          </motion.div>
          
          <motion.div 
            className="dp-hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="dp-digital-visual">
              <div className="dp-device">
                <div className="dp-device-screen">
                  <div className="dp-screen-content">
                    <div className="dp-mockup-logo"></div>
                    <div className="dp-mockup-text">
                      <div className="dp-text-line"></div>
                      <div className="dp-text-line"></div>
                      <div className="dp-text-line short"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="dp-social-icons-group">
                <div className="dp-social-icon facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
                <div className="dp-social-icon instagram">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="dp-social-icon twitter">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </div>
                <div className="dp-social-icon linkedin">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="dp-social-icon google">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 12h8M12 8v8"></path>
                  </svg>
                </div>
              </div>

              <div className="dp-connection-lines">
                <div className="dp-connection-line line1"></div>
                <div className="dp-connection-line line2"></div>
                <div className="dp-connection-line line3"></div>
                <div className="dp-connection-line line4"></div>
              </div>
            </div>
          </motion.div>
        </section>
        
        {/* Services Section */}
        <section className="dp-services">
          <motion.div
            className="dp-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Digital Presence Services</h2>
            <div className="dp-section-divider">
              <div className="dp-divider-line"></div>
              <div className="dp-divider-dot"></div>
              <div className="dp-divider-line"></div>
            </div>
          </motion.div>
          
          <div className="dp-services-wrapper">
            <div className="dp-services-list">
              {servicesData.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className={`dp-service-item ${activeService === service.id ? 'active' : ''}`}
                  initial={{ opacity: 0, x: 50 * (index % 2 ? -1 : 1) }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 * (index % 2 ? -1 : 1) }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                  style={{
                    borderImage: `${service.gradient} 1`
                  }}
                >
                  <div className="dp-service-icon" style={{ background: service.gradient }}>
                    {service.icon}
                  </div>
                  <div className="dp-service-content">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    
                    <motion.div 
                      className="dp-service-benefits"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: activeService === service.id ? 'auto' : 0,
                        opacity: activeService === service.id ? 1 : 0
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      <h4>Benefits</h4>
                      <ul>
                        {service.benefits.map((benefit, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: activeService === service.id ? 1 : 0, x: activeService === service.id ? 0 : -10 }}
                            transition={{ delay: i * 0.1 + 0.2 }}
                          >
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  <div className="dp-service-toggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d={activeService === service.id ? "M19 12H5" : "M12 5v14M19 12H5"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="dp-services-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6 }}
            >
              <div className="dp-device-mockup">
                <div className="dp-device-frame">
                  <div className="dp-device-screen">
                    <div className="dp-screen-content">
                      <div className="dp-mockup-header">
                        <div className="dp-mockup-logo"></div>
                        <div className="dp-mockup-nav">
                          <div className="dp-nav-item"></div>
                          <div className="dp-nav-item"></div>
                          <div className="dp-nav-item"></div>
                        </div>
                      </div>
                      <div className="dp-mockup-hero">
                        <div className="dp-mockup-headline"></div>
                        <div className="dp-mockup-paragraph"></div>
                        <div className="dp-mockup-paragraph short"></div>
                      </div>
                      <div className="dp-mockup-grid">
                        <div className="dp-mockup-card"></div>
                        <div className="dp-mockup-card"></div>
                        <div className="dp-mockup-card"></div>
                      </div>
                    </div>
                    
                    <div className="dp-social-icons">
                      <div className="dp-social-icon facebook"></div>
                      <div className="dp-social-icon instagram"></div>
                      <div className="dp-social-icon twitter"></div>
                      <div className="dp-social-icon linkedin"></div>
                    </div>
                  </div>
                </div>
                <div className="dp-device-reflection"></div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="dp-process">
          <div className="dp-section-header">
            <h2>How We Work</h2>
            <div className="dp-section-divider">
              <div className="dp-divider-line"></div>
              <div className="dp-divider-dot"></div>
              <div className="dp-divider-line"></div>
            </div>
          </div>
          
          <div className="dp-process-flow">
            <div className="dp-process-timeline">
              {processData.map((step, index) => (
                <motion.div 
                  key={index}
                  className="dp-process-step"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  <div className="dp-step-connector">
                    <div className="dp-step-line"></div>
                    <div className="dp-step-number">{index + 1}</div>
                  </div>
                  <div className="dp-step-content">
                    <div className="dp-step-icon">
                      {step.icon}
                    </div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="dp-cta">
          <motion.div 
            className="dp-cta-wrapper"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <div className="dp-cta-content">
              <h2>Ready to Work With Us?</h2>
              <p>Let's elevate your brand's digital presence today.</p>
              <div className="dp-cta-buttons">
                <a href="#" className="dp-btn dp-btn-primary">Start a Project</a>
                <a href="tel:(412) 866-2284" className="dp-cta-call">Call: (412) 866-2284</a>
              </div>
            </div>
            
            <div className="dp-cta-visual">
              <div className="dp-pulse-circle"></div>
              <div className="dp-pulse-circle"></div>
              <div className="dp-pulse-circle"></div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default DigitalPresence;
