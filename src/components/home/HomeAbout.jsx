import React, { useEffect, useRef, useState } from 'react';
import '../styles/home/homeabout.scss';

const HomeAbout = () => {
  const [activeTab, setActiveTab] = useState('vision');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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
  
  const tabContent = {
    vision: {
      title: "Our Vision",
      content: "We envision a digital landscape where businesses can thrive through authentic connections and innovative strategies. Our forward-thinking approach combines data-driven insights with creative solutions to build lasting digital success stories.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>
      )
    },
    mission: {
      title: "Our Mission",
      content: "To empower businesses by crafting digital experiences that convert, engage, and inspire. We deliver measurable results through strategic marketing, compelling design, and cutting-edge technology, helping our clients stay ahead in an ever-evolving digital world.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      )
    },
    values: {
      title: "Our Values",
      content: "Innovation, integrity, and excellence are the core values that drive us. We believe in transparent communication, continuous learning, and fostering genuine relationships with our clients. Our collaborative spirit and determination to exceed expectations set us apart in the industry.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    }
  };
  
  const features = [
    {
      title: "Strategic Thinking",
      description: "We create data-driven marketing strategies tailored to your unique business goals and audience needs."
    },
    {
      title: "Creative Excellence",
      description: "Our award-winning creative team delivers visually stunning designs that captivate and convert."
    },
    {
      title: "Technical Expertise",
      description: "We leverage cutting-edge technology to build robust, scalable digital solutions that drive results."
    }
  ];

  return (
    <section className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-content ${isInView ? 'in-view' : ''}`}>
          <div className="about-header">
            <div className="section-tag appear-element">About Us</div>
            <h2 className="section-title slide-in-element">
              We're Not Just Another <br /><span className="highlight">Digital Agency</span>
            </h2>
          </div>
          
          <div className="about-grid">
            <div className="about-text slide-in-element delay-1">
              <p className="lead-text">
                WorkZen brings together strategy, creativity, and technology to help businesses thrive in the digital age. Since 2015, we've been transforming brands through innovative digital solutions.
              </p>
              
              <div className="about-tabs">
                {Object.entries(tabContent).map(([key, { title, icon }]) => (
                  <button 
                    key={key}
                    className={`tab-button ${activeTab === key ? 'active' : ''}`}
                    onClick={() => setActiveTab(key)}
                  >
                    <span className="tab-icon">{icon}</span>
                    {title}
                  </button>
                ))}
              </div>
              
              <div className="tab-content fade-in-element">
                <h3>{tabContent[activeTab].title}</h3>
                <p>{tabContent[activeTab].content}</p>
              </div>
            </div>
            
            <div className="about-visual slide-in-element delay-2">
              <div className="visual-container">
                <div className="video-container">
                  <div className="video-thumbnail">
                    <img src="/agency/thumb-two.webp" alt="About WorkZen" />
                  </div>
                </div>
                
                <div className="experience-badge">
                  <span className="years">8+</span>
                  <span className="text">Years of<br />Experience</span>
                </div>
                
                <div className="decorative-element elem-1"></div>
                <div className="decorative-element elem-2"></div>
                <div className="decorative-element elem-3"></div>
              </div>
            </div>
          </div>
          
          <div className="core-features slide-in-element delay-3">
            <h3>What Sets Us Apart</h3>
            <div className="features-grid">
              {features.map((feature, index) => (
                <div className="feature-card" key={index}>
                  <div className="feature-number">0{index + 1}</div>
                  <div className="feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        
          
        </div>
      </div>
      
      <div className="about-background">
        <div className="bg-pattern"></div>
        <div className="bg-gradient"></div>
      </div>
    </section>
  );
};

export default HomeAbout;
