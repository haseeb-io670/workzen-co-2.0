import React, { useEffect } from 'react';
import '../styles/home/homebanner.scss';

const HomeBanner = () => {
  useEffect(() => {
    // Animation for text elements on load
    const animatedElements = document.querySelectorAll('.animate-in');
    
    setTimeout(() => {
      animatedElements.forEach((element, index) => {
        setTimeout(() => {
          element.classList.add('visible');
        }, 200 * index);
      });
    }, 300);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h5 className="animate-in">Digital Marketing Agency</h5>
            <h1 className="animate-in">
              Transform Your <span className="highlight">Digital</span> Presence
            </h1>
            <p className="animate-in">
              We craft innovative digital strategies that elevate your brand, maximize conversions, 
              and deliver measurable results in today's competitive landscape.
            </p>
            
            <div className="hero-cta animate-in">
              <button className="btn btn-primary btn-lg btn-rounded btn-icon">
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
              </button>
              <button className="btn btn-secondary btn-lg btn-rounded">
                <span>Our Work</span>
              </button>
            </div>
            
            <div className="hero-credentials animate-in">
              <div className="clutch-badge">
                <img src="/agency/clutch.png" alt="Clutch Rating" />
                {/* <div className="rating">
                  <div className="stars">★★★★★</div>
                  <p>Top Rated Agency on Clutch</p>
                </div> */}
              </div>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="main-image animate-in">
              <img src="/agency/thumb-one.webp" alt="WorkZen Digital Marketing" />
            </div>
            
            <div className="decoration">
              {/* Elegant geometric decorations */}
              <div className="geometric-element geo-1"></div>
              <div className="geometric-element geo-2"></div>
              <div className="geometric-element geo-3"></div>
              <div className="wave-element wave-1"></div>
              <div className="wave-element wave-2"></div>
              <div className="glow-circle"></div>
              <div className="blur-circle"></div>
              
              {/* Abstract decorative lines */}
              <div className="abstract-line line-1"></div>
              <div className="abstract-line line-2"></div>
              <div className="abstract-line line-3"></div>
            </div>
            
            <div className="stat-card animate-in">
              <h3>97%</h3>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat-card animate-in">
              <h3>120+</h3>
              <p>Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="wave-bg"></div>
        <div className="particles"></div>
      </div>
    </section>
  );
};

export default HomeBanner;
