import React, { useState, useRef, useEffect } from 'react';
import '../styles/main/industriesmain.scss';

const IndustriesMain = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Industry data
  const industries = [
    {
      id: 1,
      name: "E-Commerce",
      icon: "shopping_cart",
      image: "/industries/e-commerce.webp",
      symbol: "EC",
      color: "#F27E63",
      accentColor: "#FFD5CC",
      tagline: "Transform Browsers Into Buyers",
      description: "We turn your online store into a revenue-generating powerhouse with data-driven strategies that multiply conversions and scale customer acquisition.",
      benefits: [
        "30-50% increase in conversion rates through optimized customer journeys",
        "Strategic product positioning that maximizes average order value",
        "Abandoned cart recovery systems that recapture lost revenue"
      ],
      case: "Helped MegaShop increase revenue by 87% in just 6 months through strategic funnel optimization and targeted customer acquisition."
    },
    {
      id: 2,
      name: "SaaS",
      icon: "cloud_done",
      image: "/industries/saas.webp",
      symbol: "SS",
      color: "#4F9CF9",
      accentColor: "#DBE9FF",
      tagline: "Accelerate User Acquisition, Minimize CAC",
      description: "We engineer growth frameworks that dramatically reduce customer acquisition costs while maximizing lifetime value through optimized onboarding and retention.",
      benefits: [
        "Product-led growth strategies that reduce CAC by up to 40%",
        "Engagement automation that boosts trial-to-paid conversion rates",
        "Strategic pricing optimization that increases LTV"
      ],
      case: "Helped CloudTech reduce CAC by 35% while increasing trial conversion rates by 28% through targeted messaging and streamlined onboarding."
    },
    {
      id: 3,
      name: "Finance",
      icon: "account_balance",
      image: "/industries/finance.webp",
      symbol: "FN",
      color: "#65C466",
      accentColor: "#D7F0D8",
      tagline: "Build Trust, Secure Transactions",
      description: "We translate complex financial offerings into clear, compelling messaging that builds trust while maintaining strict regulatory compliance.",
      benefits: [
        "Compliant lead generation strategies that qualify high-value prospects",
        "Trust-building content architecture that overcomes skepticism",
        "Educational funnels that simplify complex financial decisions"
      ],
      case: "Helped FinSecure increase qualified leads by 62% while maintaining full regulatory compliance through strategic educational content."
    },
    {
      id: 4,
      name: "Law Firms",
      icon: "gavel",
      image: "/industries/law-firms.webp",
      symbol: "LF",
      color: "#7C5AC7",
      accentColor: "#E5DCFF",
      tagline: "Convert Inquiries Into High-Value Cases",
      description: "We position your firm as the authoritative choice through case-specific content strategies and frictionless client acquisition systems.",
      benefits: [
        "Authority positioning that commands premium rates",
        "Case-specific landing pages that pre-qualify clients",
        "Testimonial frameworks that showcase previous successes"
      ],
      case: "Helped LexGroup increase high-value case inquiries by 94% through strategic authority positioning and targeted client acquisition."
    },
    {
      id: 5,
      name: "Medical",
      icon: "medical_services",
      image: "/industries/medical.webp",
      symbol: "MD",
      color: "#42BDC8",
      accentColor: "#D5F2F5",
      tagline: "Fill Your Practice, Help More Patients",
      description: "We create HIPAA-compliant patient acquisition systems that expand your patient base while building trust through educational content.",
      benefits: [
        "Patient-centered acquisition funnels that increase bookings",
        "HIPAA-compliant marketing systems that protect sensitive information",
        "Reputation management strategies that build community trust"
      ],
      case: "Helped MediClinic increase new patient bookings by 75% through targeted, compliant acquisition strategies and trust-building content."
    },
    {
      id: 6,
      name: "Real Estate",
      icon: "home",
      image: "/industries/real-estate.webp",
      symbol: "RE",
      color: "#F1A036",
      accentColor: "#FFEFD0",
      tagline: "Showcase Properties, Close More Deals",
      description: "We create immersive property showcases and targeted lead generation systems that connect you with qualified buyers and sellers.",
      benefits: [
        "Virtual property experiences that generate qualified inquiries",
        "Location-specific marketing strategies that dominate local markets",
        "Lead qualification systems that prioritize serious buyers"
      ],
      case: "Helped RealtyPro increase property inquiries by 108% and reduced time-to-sale by 40% through immersive showcases and strategic targeting."
    }
  ];
  
  // WorkZen process steps
  const workflowSteps = [
    {
      id: 1,
      number: "01",
      title: "Strategic Discovery",
      icon: "search",
      description: "We analyze your industry, competitors, and customers to uncover hidden opportunities and positioning advantages."
    },
    {
      id: 2,
      number: "02",
      title: "Custom Growth Blueprint",
      icon: "architecture",
      description: "We develop a custom-engineered growth framework designed specifically for your industry's unique challenges."
    },
    {
      id: 3,
      number: "03",
      title: "Implementation & Optimization",
      icon: "rocket_launch",
      description: "Our team executes with precision, continuously optimizing for maximum ROI through data-driven refinements."
    },
    {
      id: 4,
      number: "04",
      title: "Scale & Dominate",
      icon: "trending_up",
      description: "We amplify what works, systematically eliminating friction points to accelerate your industry dominance."
    }
  ];
  
  // Intersection Observer to trigger animation when section is in view
  useEffect(() => {
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
  
  return (
    <main className="industries-main" ref={sectionRef}>
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="container">
          <div className={`hero-content ${isInView ? 'animate' : ''}`}>
            <span className="overline">INDUSTRY EXPERTISE</span>
            <h1 className="hero-title">
              We Don't Just Understand Your Industry.
              <span className="highlight"> We Transform It.</span>
            </h1>
            <p className="hero-description">
              WorkZen has engineered growth systems for every major industry, delivering measurable ROI through custom-crafted marketing solutions.
            </p>
            <div className="hero-cta">
              <a href="#industries-tabs" className="btn btn-primary btn-lg">
                <span>Explore Industries</span>
              </a>
              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Schedule Consultation</span>
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">94%</span>
              <span className="stat-label">Client Retention</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">78%</span>
              <span className="stat-label">Average ROI Improvement</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">6+</span>
              <span className="stat-label">Industry Specializations</span>
            </div>
          </div>
        </div>
        <div className="hero-backdrop"></div>
      </section>
      
      {/* Industries Tabs Section */}
      <section id="industries-tabs" className="industries-tabs">
        <div className="container">
          <div className="tabs-header">
            <h2>Select Your Industry</h2>
            <p>See how we create custom-engineered growth systems for your specific market.</p>
          </div>
          
          <div className="tabs-navigation">
            {industries.map((industry, index) => (
              <button 
                key={industry.id}
                className={`tab-button ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                style={{'--tab-color': industry.color}}
              >
                <span className="tab-icon material-icons">{industry.icon}</span>
                <span className="tab-name">{industry.name}</span>
              </button>
            ))}
          </div>
          
          <div className="tabs-content">
            {industries.map((industry, index) => (
              <div 
                key={industry.id}
                className={`tab-panel ${activeTab === index ? 'active' : ''}`}
                style={{'--panel-color': industry.color}}
              >
                <div className="panel-layout">
                  <div className="panel-content">
                    <div className="panel-header">
                      <h3 className="panel-title">{industry.name}</h3>
                      <div className="panel-tagline">{industry.tagline}</div>
                    </div>
                    
                    <p className="panel-description">{industry.description}</p>
                    
                    <div className="panel-benefits">
                      <h4>How We Deliver Results:</h4>
                      <ul>
                        {industry.benefits.map((benefit, i) => (
                          <li key={i}>
                            <span className="check-icon material-icons">check_circle</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="panel-case">
                      <div className="case-label">SUCCESS STORY</div>
                      <p>{industry.case}</p>
                    </div>
                    
                    <div className="panel-cta">
                      <button className="btn btn-primary">
                        <span>Get Started</span>
                      </button>
                      <button className="btn btn-secondary">
                        <span>Learn More</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="panel-visual">
                    <div className="panel-image-container">
                      <img 
                        src={industry.image} 
                        alt={`${industry.name} Marketing`}
                        loading="lazy"
                        width="600"
                        height="400"
                      />
                      <div className="image-overlay" style={{'--overlay-color': industry.color}}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="process-header">
            <span className="process-overline">OUR METHODOLOGY</span>
            <h2>The WorkZen Growth System</h2>
            <p>Our systematic approach transforms your marketing from guesswork to a precision-engineered growth machine.</p>
          </div>
          
          <div className="process-steps">
            {workflowSteps.map((step) => (
              <div key={step.id} className="process-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <div className="step-icon">
                    <span className="material-icons">{step.icon}</span>
                  </div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="process-cta">
            <div className="cta-text">
              <h3>Ready to Dominate Your Industry?</h3>
              <p>Let's build your custom growth system with proven results.</p>
            </div>
            <button className="btn btn-primary btn-lg">
              <span>Schedule Strategy Session</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <h2>Client Success Stories</h2>
            <p>See how we've transformed businesses across multiple industries.</p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <span className="material-icons">format_quote</span>
                </div>
                <p className="quote-text">"WorkZen completely transformed our customer acquisition process. We're spending 40% less and getting 70% more qualified leads."</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">Michael Roberts</div>
                    <div className="author-position">CEO, TechSolutions</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <span className="material-icons">format_quote</span>
                </div>
                <p className="quote-text">"The systematic approach WorkZen brought to our marketing has been game-changing. They delivered a 112% ROI in the first quarter alone."</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">Sarah Johnson</div>
                    <div className="author-position">Marketing Director, HealthPlus</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card">
              <div className="testimonial-content">
                <div className="quote-icon">
                  <span className="material-icons">format_quote</span>
                </div>
                <p className="quote-text">"Their industry expertise is unmatched. WorkZen understood our real estate market challenges and created custom solutions that doubled our conversion rates."</p>
                <div className="testimonial-author">
                  <div className="author-info">
                    <div className="author-name">David Chen</div>
                    <div className="author-position">Founder, Prime Properties</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section id="contact" className="final-cta">
        <div className="container">
          <div className="cta-wrapper">
            <h2>Don't Just Compete In Your Industry. <span className="highlight">Dominate It.</span></h2>
            <p>Schedule your free strategy session to discover how our proven growth system can transform your business.</p>
            <button className="btn btn-primary btn-lg btn-rounded">
              <span>Get Your Custom Strategy</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustriesMain;
