import React, { useState, useEffect } from 'react';
import '../styles/main/pricingmain.scss';

const PricingMain = () => {
  const [activePlan, setActivePlan] = useState('pro');
  const [isHovered, setIsHovered] = useState(null);
  const [animatedElements, setAnimatedElements] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAnimatedElements(prev => [...prev, entry.target.dataset.id]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter',
      description: 'Establish your business with the basics',
      price: '$399',
      period: '/month',
      hours: '2 hrs/day',
      color: '#ff6b35',
      highlighted: false
    },
    {
      id: 'pro',
      name: 'Pro',
      description: 'Use advanced features to speed up transactions',
      price: '$799',
      period: '/month',
      hours: '4 hrs/day',
      color: '#1d7ec2',
      highlighted: true
    },
    {
      id: 'max',
      name: 'Business Pro',
      description: 'Access additional features for your business',
      price: '$1,199',
      period: '/month',
      hours: '6 hrs/day',
      color: '#8a4fff',
      highlighted: false
    },
    {
      id: 'custom',
      name: 'Custom Plan',
      description: 'Speak with an expert to customize a plan',
      price: 'Custom',
      period: '',
      hours: 'Flexible',
      color: '#333333',
      highlighted: false
    }
  ];

  const serviceCategories = [
    {
      name: 'Lead Generation',
      services: [
        { name: 'Data Extraction', starter: true, pro: true, max: true, custom: true },
        { name: 'Cold Calling', starter: true, pro: true, max: true, custom: true },
        { name: 'Email/SMS Marketing', starter: false, pro: true, max: true, custom: true },
        { name: 'PPC Ads (Add-On)', starter: '+$15/hr', pro: '+$15/hr', max: '+$15/hr', custom: '+$15/hr' }
      ]
    },
    {
      name: 'Development',
      services: [
        { name: 'Website/Landing Pages', starter: false, pro: true, max: true, custom: true },
        { name: 'eCommerce Store', starter: false, pro: false, max: true, custom: true },
        { name: 'Integrations', starter: false, pro: false, max: true, custom: true },
        { name: 'Admin and CMS Panel', starter: false, pro: false, max: true, custom: true }
      ]
    },
    {
      name: 'Digital Presence',
      services: [
        { name: 'Social Media Management', starter: false, pro: '3 Posts/week', max: '5 Posts/week', custom: true },
        { name: 'Google Business (GBP) Setup', starter: false, pro: true, max: true, custom: true }
      ]
    },
    {
      name: 'SEO',
      services: [
        { name: 'Local/National SEO', starter: false, pro: false, max: true, custom: true },
        { name: 'Blog Writing', starter: false, pro: true, max: true, custom: true }
      ]
    },
    {
      name: 'Virtual Assistant',
      services: [
        { name: 'CRM Management', starter: true, pro: true, max: true, custom: true },
        { name: 'Calendar Management', starter: true, pro: true, max: true, custom: true }
      ]
    }
  ];

  return (
    <div className="pricing-main">
      {/* Hero Section */}
      <section className="pricing-hero">
        <div className="container">
          <div className="hero-content animate-on-scroll" data-id="hero-content">
            <h1>Pricing <span className="highlight">Plans</span></h1>
            <p>Flexible plans designed to meet your business needs. Choose the package that works best for you.</p>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="pricing-particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}></div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-plans-section">
        <div className="container">
          <div className="pricing-tabs animate-on-scroll" data-id="pricing-tabs">
            {pricingPlans.map(plan => (
              <button 
                key={plan.id}
                className={`pricing-tab ${activePlan === plan.id ? 'active' : ''}`}
                onClick={() => setActivePlan(plan.id)}
                style={activePlan === plan.id ? {borderColor: plan.color} : {}}
              >
                {plan.name}
              </button>
            ))}
          </div>

          <div className="pricing-cards-container animate-on-scroll" data-id="pricing-cards">
            {pricingPlans.map(plan => (
              <div 
                key={plan.id}
                className={`pricing-card ${activePlan === plan.id ? 'active' : ''} ${plan.highlighted ? 'highlighted' : ''}`}
                style={{
                  '--plan-color': plan.color,
                  transform: isHovered === plan.id ? 'translateY(-10px)' : 'translateY(0)',
                  boxShadow: isHovered === plan.id ? `0 20px 30px rgba(0, 0, 0, 0.1), 0 0 0 2px ${plan.color}20` : ''
                }}
                onMouseEnter={() => setIsHovered(plan.id)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {plan.highlighted && <div className="popular-badge">Most Popular</div>}
                <div className="plan-header">
                  <h3 className="plan-name">{plan.name}</h3>
                  <p className="plan-description">{plan.description}</p>
                </div>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">{plan.period}</span>
                </div>
                <div className="hours-per-day">
                  <span className="hours">{plan.hours}</span>
                  <span className="label">of combined services</span>
                </div>
                <div className="plan-features">
                  <h4>Included Services:</h4>
                  <ul>
                    {serviceCategories.map(category => (
                      category.services.map((service, idx) => {
                        const isIncluded = service[plan.id];
                        if (!isIncluded && isIncluded !== '+$15/hr' && isIncluded !== '3 Posts/week' && isIncluded !== '5 Posts/week') return null;
                        
                        return (
                          <li key={`${category.name}-${idx}`} className={typeof isIncluded === 'string' ? 'feature-special' : 'feature-included'}>
                            <span className="feature-icon">
                              {typeof isIncluded === 'string' ? 
                                <span className="special-text">{isIncluded}</span> : 
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              }
                            </span>
                            <span className="feature-text">{service.name}</span>
                          </li>
                        );
                      })
                    ))}
                  </ul>
                </div>
                <div className="plan-action">
                  <a 
                    href={plan.id === 'custom' ? '/contact' : '#contact-form'} 
                    className="action-button"
                  >
                    {plan.id === 'custom' ? 'Contact Sales' : 'Get Started'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Comparison */}
      <section className="services-comparison-section">
        <div className="container">
          <div className="section-header animate-on-scroll" data-id="comparison-header">
            <h2>Detailed Service <span className="highlight">Comparison</span></h2>
            <p>Compare our plans to find the perfect match for your business needs</p>
          </div>

          <div className="comparison-table-container animate-on-scroll" data-id="comparison-table">
            <div className="comparison-table">
              <div className="table-header">
                <div className="category-column">Service Category</div>
                <div className="service-column">Service</div>
                {pricingPlans.map(plan => (
                  <div key={plan.id} className="plan-column">
                    <div className="plan-name" style={{color: plan.color}}>{plan.name}</div>
                    <div className="plan-price">{plan.price}{plan.period}</div>
                    <div className="plan-hours">{plan.hours}</div>
                  </div>
                ))}
              </div>

              <div className="table-body">
                {serviceCategories.map((category, categoryIdx) => (
                  <React.Fragment key={categoryIdx}>
                    {category.services.map((service, serviceIdx) => (
                      <div 
                        key={`${categoryIdx}-${serviceIdx}`} 
                        className={`table-row ${serviceIdx === 0 ? 'category-start' : ''}`}
                      >
                        {serviceIdx === 0 && (
                          <div className="category-cell" style={{gridRow: `span ${category.services.length}`}}>
                            {category.name}
                          </div>
                        )}
                        <div className="service-cell">{service.name}</div>
                        {pricingPlans.map(plan => (
                          <div key={`${plan.id}-${serviceIdx}`} className="plan-cell">
                            {service[plan.id] === true && (
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={plan.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            )}
                            {service[plan.id] === false && (
                              <span className="x-mark">✕</span>
                            )}
                            {typeof service[plan.id] === 'string' && (
                              <span className="special-text" style={{color: plan.color}}>{service[plan.id]}</span>
                            )}
                          </div>
                        ))}
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="additional-benefits-section">
        <div className="container">
          <div className="section-header animate-on-scroll" data-id="benefits-header">
            <h2>Additional <span className="highlight">Benefits</span></h2>
            <p>All plans include these extra value-added services</p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card animate-on-scroll" data-id="benefit-1">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3>Dedicated Account Manager</h3>
              <p>A personal point of contact who understands your business needs</p>
            </div>

            <div className="benefit-card animate-on-scroll" data-id="benefit-2">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h3>Regular Performance Reviews</h3>
              <p>Stay on track with detailed analytics and optimization suggestions</p>
            </div>

            <div className="benefit-card animate-on-scroll" data-id="benefit-3">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h3>Priority Support</h3>
              <p>Get fast responses when you need assistance with your services</p>
            </div>

            <div className="benefit-card animate-on-scroll" data-id="benefit-4">
              <div className="benefit-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h3>Customized Reporting</h3>
              <p>Receive tailored reports that focus on metrics that matter to you</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pricing-faq-section">
        <div className="container">
          <div className="section-header animate-on-scroll" data-id="faq-header">
            <h2>Frequently Asked <span className="highlight">Questions</span></h2>
            <p>Everything you need to know about our pricing plans</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item animate-on-scroll" data-id="faq-1">
              <h3>How are hours calculated?</h3>
              <p>Hours are calculated based on actual work performed and tracked through our system. You'll receive detailed reports showing how time is spent.</p>
            </div>

            <div className="faq-item animate-on-scroll" data-id="faq-2">
              <h3>Can I upgrade my plan mid-month?</h3>
              <p>Yes, you can upgrade your plan at any time. The price difference will be prorated for the remainder of the billing cycle.</p>
            </div>

            <div className="faq-item animate-on-scroll" data-id="faq-3">
              <h3>What happens if I need more hours?</h3>
              <p>Additional hours can be purchased as needed at our hourly rate, or you can upgrade to a higher tier plan.</p>
            </div>

            <div className="faq-item animate-on-scroll" data-id="faq-4">
              <h3>Is there a contract or commitment?</h3>
              <p>Our standard plans are billed monthly with no long-term commitment. Custom plans may have different terms based on your specific needs.</p>
            </div>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default PricingMain;
