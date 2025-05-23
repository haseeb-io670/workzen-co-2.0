import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FiSearch, FiMapPin, FiGlobe, FiSettings, FiEdit } from 'react-icons/fi';
import '../styles/main/seo.scss';

const SEOPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isInView, setIsInView] = useState(true);
  const [hoverRank, setHoverRank] = useState(false);
  const [activeProcess, setActiveProcess] = useState(null);
  const sectionRef = useRef(null);
  const rankingBarRef = useRef(null);
  
  // Mouse parallax effect values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseX, [-300, 300], [-10, 10]);
  
  // SEO Services data
  const seoServices = [
    {
      id: 'onpage',
      title: 'On Page / Off Page',
      icon: <FiSearch size={24} />,
      description: 'Complete on-page optimization of content, metadata, and website structure, plus off-page link building and digital PR to establish site authority and improve search rankings.',
      benefits: [
        'Higher search engine rankings',
        'Increased organic traffic',
        'Improved website authority',
        'Better link profile',
        'Enhanced digital presence'
      ],
      metrics: {
        traffic: 65,
        conversion: 38,
        rankings: 72
      }
    },
    {
      id: 'local',
      title: 'Local SEO',
      icon: <FiMapPin size={24} />,
      description: 'Targeted optimization for local search visibility, including Google Business Profile management, local citation building, and location-specific keyword strategies.',
      benefits: [
        'Higher visibility in local search results',
        'Improved Google Maps presence',
        'More local customer engagement',
        'Enhanced local business listings',
        'Better regional targeting'
      ],
      metrics: {
        traffic: 58,
        conversion: 52,
        rankings: 68
      }
    },
    {
      id: 'national',
      title: 'National SEO',
      icon: <FiGlobe size={24} />,
      description: 'Broad-scale search optimization strategies designed to improve visibility across an entire country, focusing on competitive keywords and comprehensive content marketing.',
      benefits: [
        'Nationwide search visibility',
        'Broader market reach',
        'Competitive keyword dominance',
        'Improved brand awareness',
        'Higher domain authority'
      ],
      metrics: {
        traffic: 75,
        conversion: 42,
        rankings: 80
      }
    },
    {
      id: 'onsite',
      title: 'Onsite SEO',
      icon: <FiSettings size={24} />,
      description: 'Technical optimization of your website including site structure, page speed improvements, mobile optimization, schema markup, and fixing crawlability issues.',
      benefits: [
        'Faster site speed',
        'Better user experience',
        'Enhanced crawlability',
        'Reduced technical errors',
        'Improved mobile performance'
      ],
      metrics: {
        traffic: 45,
        conversion: 65,
        rankings: 58
      }
    },
    {
      id: 'blog',
      title: 'Blog Writing',
      icon: <FiEdit size={24} />,
      description: 'SEO-optimized content creation with targeted keywords, proper formatting, and engaging information that both search engines and users will value.',
      benefits: [
        'Fresh, relevant content',
        'Long-tail keyword targeting',
        'Higher user engagement',
        'Increased topical authority',
        'More indexable content'
      ],
      metrics: {
        traffic: 62,
        conversion: 48,
        rankings: 55
      }
    }
  ];
  
  // Working process steps
  const processSteps = [
    {
      title: 'Client Onboarding',
      description: 'We start by understanding your unique needs and goals. This involves an initial consultation to tailor our services specifically to your requirements.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="8.5" cy="7" r="4"></circle>
          <line x1="20" y1="8" x2="20" y2="14"></line>
          <line x1="23" y1="11" x2="17" y2="11"></line>
        </svg>
      )
    },
    {
      title: 'SEO Audit',
      description: 'We perform a comprehensive analysis of your website, identifying strengths, weaknesses, and opportunities for optimization to develop a strategic SEO plan.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      )
    },
    {
      title: 'Strategy Implementation',
      description: 'We execute the tailored SEO strategy, optimizing on-page elements, improving technical aspects, and developing high-quality content and backlinks.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
        </svg>
      )
    },
    {
      title: 'Performance Monitoring',
      description: 'We continuously track key metrics and rankings to measure the effectiveness of our strategies and make data-driven adjustments for optimal results.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
          <path d="M18 10l-3 -3l3 -3"></path>
          <path d="M12 4l-3 3l3 3"></path>
        </svg>
      )
    },
    {
      title: 'Optimization & Reporting',
      description: 'We refine our strategies based on performance data and provide detailed reports with insights and recommendations for continued growth.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 3H3v18h18z"></path>
          <path d="M3 9h18"></path>
          <path d="M3 15h18"></path>
          <path d="M9 3v18"></path>
          <path d="M15 3v18"></path>
        </svg>
      )
    },
    {
      title: 'Ongoing Support',
      description: 'Our support doesn\'t end after implementation. We provide continuous optimization and adapt strategies to search engine algorithm updates.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z"></path>
          <path d="M9 12l2 2l4-4"></path>
        </svg>
      )
    }
  ];

  useEffect(() => {
    setIsInView(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
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

  // Function to handle mouse move for 3D effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <section className="seo-section" ref={sectionRef}>
      {/* 3D Floating Elements Background */}
      <div className="seo-floating-elements">
        {[...Array(15)].map((_, index) => (
          <div 
            key={index} 
            className={`floating-element fe-${index + 1}`} 
            style={{ 
              width: `${Math.random() * 80 + 20}px`,
              height: `${Math.random() * 80 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          >
            {index % 3 === 0 && (
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
                <path d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="0.5"></path>
              </svg>
            )}
            {index % 3 === 1 && (
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="0.5"></circle>
              </svg>
            )}
            {index % 3 === 2 && (
              <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
                <rect width="18" height="18" x="3" y="3" stroke="currentColor" strokeWidth="0.5"></rect>
              </svg>
            )}
          </div>
        ))}
      </div>
      
      {/* Gradient BG */}
      <div className="seo-gradient-bg"></div>
      
      {/* Mesh Background */}
      <div className="seo-mesh-grid"></div>
      
      <div className="seo-container">
        <div className={`seo-content ${isInView ? 'in-view' : ''}`}>
          {/* Hero Section */}
          <div className="seo-hero">
            
            
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Elevate Your <span className="highlight">Online Visibility</span>
              <br />With Data-Driven SEO
            </motion.h1>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              Our comprehensive SEO services help your business gain visibility online, 
              attract more qualified traffic, and improve your search engine rankings.
            </motion.p>
            
            <motion.div 
              className="hero-stats"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="stat-item">
                <div className="stat-value">94%</div>
                <div className="stat-label">Client Retention</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">55+</div>
                <div className="stat-label">Industries Served</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">3.2x</div>
                <div className="stat-label">Avg. Traffic Growth</div>
              </div>
            </motion.div>
          </div>
          
        
          
          {/* Services Section */}
          <div className="services-section">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5 }}
            >
              Our SEO Services
            </motion.h2>
            
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Tailored strategies to boost your online presence and drive organic traffic
            </motion.p>
            
            <div className="services-grid">
              {seoServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`service-card ${activeService === index ? 'active' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 15px 30px rgba(var(--color-dark-rgb), 0.1)'
                  }}
                  onClick={() => setActiveService(index)}
                >
                  <div className="service-card-header">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                  </div>
                  
                  <p className="service-description">{service.description}</p>
                  
                  <div className="service-metrics-preview">
                    <div className="metric-preview">
                      <div className="metric-circle" style={{ background: `conic-gradient(var(--color-primary) ${service.metrics.traffic * 3.6}deg, rgba(var(--color-dark-rgb), 0.1) 0deg)` }}>
                        <div className="metric-value">{service.metrics.traffic}%</div>
                      </div>
                      <div className="metric-label">Traffic</div>
                    </div>
                    <div className="metric-preview">
                      <div className="metric-circle" style={{ background: `conic-gradient(var(--color-secondary) ${service.metrics.rankings * 3.6}deg, rgba(var(--color-dark-rgb), 0.1) 0deg)` }}>
                        <div className="metric-value">{service.metrics.rankings}%</div>
                      </div>
                      <div className="metric-label">Rankings</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeService}
                className="service-detail-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="service-detail-header">
                  <div className="detail-icon">{seoServices[activeService].icon}</div>
                  <h3>{seoServices[activeService].title}</h3>
                </div>
                
                <div className="service-detail-content">
                  <div className="detail-description">
                    <p>{seoServices[activeService].description}</p>
                    
                    <h4>Key Benefits</h4>
                    <ul className="benefits-list">
                      {seoServices[activeService].benefits.map((benefit, index) => (
                        <motion.li 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <span className="benefit-check">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                          </span>
                          {benefit}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-metrics">
                    <h4>Performance Metrics</h4>
                    <div className="metrics-container">
                      <div className="metric">
                        <div className="metric-label">Traffic Increase</div>
                        <div className="metric-bar">
                          <div 
                            className="metric-fill" 
                            style={{ width: `${seoServices[activeService].metrics.traffic}%` }}
                          ></div>
                        </div>
                        <div className="metric-percentage">{seoServices[activeService].metrics.traffic}%</div>
                      </div>
                      <div className="metric">
                        <div className="metric-label">Conversion Rate</div>
                        <div className="metric-bar">
                          <div 
                            className="metric-fill"
                            style={{ width: `${seoServices[activeService].metrics.conversion}%` }}
                          ></div>
                        </div>
                        <div className="metric-percentage">{seoServices[activeService].metrics.conversion}%</div>
                      </div>
                      <div className="metric">
                        <div className="metric-label">Keyword Rankings</div>
                        <div className="metric-bar">
                          <div 
                            className="metric-fill"
                            style={{ width: `${seoServices[activeService].metrics.rankings}%` }}
                          ></div>
                        </div>
                        <div className="metric-percentage">{seoServices[activeService].metrics.rankings}%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="service-detail-cta">
                  <button className="btn-service-action"
                  onClick={() => window.location.href = '/contact'}>
                    <span>Get Started with {seoServices[activeService].title}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Process Section */}
          <div className="process-section">
            <h2 className="section-title">Our SEO Process</h2>
            <p className="section-subtitle">A strategic approach to improving your online visibility and driving results</p>

            <div className="process-timeline">
              <div className="timeline-track"></div>
              
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`timeline-item ${activeProcess === index ? 'active' : ''}`}
                  onMouseEnter={() => setActiveProcess(index)}
                  onMouseLeave={() => setActiveProcess(null)}
                >
                  <div className="timeline-icon">
                    <div className="icon-bg">
                      {step.icon}
                    </div>
                    <div className="icon-number">{index + 1}</div>
                  </div>
                  
                  <motion.div 
                    className="timeline-content"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ 
                      opacity: activeProcess === index || activeProcess === null ? 1 : 0.6,
                      scale: activeProcess === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                    
                    <div className="timeline-progress">
                      <div className="progress-bar">
                        <div className="progress-fill" style={{ width: `${(index + 1) / processSteps.length * 100}%` }}></div>
                      </div>
                      <div className="progress-text">Step {index + 1} of {processSteps.length}</div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          {/* SEO Ranking Graph */}
          <div className="seo-ranking-graph">
            <div className="graph-header">
              <h2>Expected SEO Results Timeline</h2>
              <p>Typical progression of organic rankings and traffic with our services</p>
            </div>
            
            <div className="graph-container">
              <div className="graph-axes">
                <div className="y-axis">
                  <span>Rankings</span>
                  <span>Traffic</span>
                  <span>Conversions</span>
                </div>
                <div className="x-axis">
                  <span>Month 1</span>
                  <span>Month 3</span>
                  <span>Month 6</span>
                  <span>Month 9</span>
                  <span>Month 12</span>
                </div>
              </div>
              
              <div className="graph-plot">
                <div className="plot-line rankings-line">
                  <div className="plot-point" style={{ left: '0%', bottom: '10%' }}></div>
                  <div className="plot-point" style={{ left: '25%', bottom: '25%' }}></div>
                  <div className="plot-point" style={{ left: '50%', bottom: '45%' }}></div>
                  <div className="plot-point" style={{ left: '75%', bottom: '65%' }}></div>
                  <div className="plot-point" style={{ left: '100%', bottom: '85%' }}></div>
                </div>
                <div className="plot-line traffic-line">
                  <div className="plot-point" style={{ left: '0%', bottom: '5%' }}></div>
                  <div className="plot-point" style={{ left: '25%', bottom: '15%' }}></div>
                  <div className="plot-point" style={{ left: '50%', bottom: '35%' }}></div>
                  <div className="plot-point" style={{ left: '75%', bottom: '55%' }}></div>
                  <div className="plot-point" style={{ left: '100%', bottom: '75%' }}></div>
                </div>
                <div className="plot-line conversion-line">
                  <div className="plot-point" style={{ left: '0%', bottom: '2%' }}></div>
                  <div className="plot-point" style={{ left: '25%', bottom: '10%' }}></div>
                  <div className="plot-point" style={{ left: '50%', bottom: '20%' }}></div>
                  <div className="plot-point" style={{ left: '75%', bottom: '40%' }}></div>
                  <div className="plot-point" style={{ left: '100%', bottom: '60%' }}></div>
                </div>
                <div className="plot-legend">
                  <div className="legend-item">
                    <span className="legend-color rankings"></span>
                    <span className="legend-label">Rankings</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color traffic"></span>
                    <span className="legend-label">Traffic</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-color conversions"></span>
                    <span className="legend-label">Conversions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="seo-cta-section">
            <div className="cta-glass-card">
              <div className="cta-content">
                <h2>Ready to Boost Your Search Rankings?</h2>
                <p>Let's create an SEO strategy tailored to your business goals and industry needs.</p>
                
                <div className="cta-buttons">
                  <button className="btn btn-primary btn-glow"
                  onClick={() => window.location.href = '/contact'}>
                    <span>Get a Free SEO Audit</span>
                    <div className="btn-particles"></div>
                  </button>
                  
                  <button className="btn btn-secondary btn-outline"
                  onClick={() => window.location.href = '/pricing'}>
                    <span>Get Pricing</span>
                  </button>
                </div>
              </div>
              
              <div className="cta-decoration">
                <div className="decoration-element de-1"></div>
                <div className="decoration-element de-2"></div>
                <div className="decoration-element de-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOPage;
