import React, { useEffect, useState, useRef } from 'react';
import '../styles/home/homebanner.scss';

const HomeBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const [size, setSize] = useState({ columns: 0, rows: 0 });
  const wordsRef = useRef(null);
  const tickerRef1 = useRef(null);
  const tickerRef2 = useRef(null);
  const gridRef = useRef(null);
  
  const changingWords = [
    "Digital Success",
    "Brand Growth",
    "Higher Rankings",
    "Better Leads"
  ];
  
  const tickerItems1 = [
    "Boost your online presence with our digital marketing solutions",
    "Lead generation strategies that convert prospects into customers",
    "Custom web development tailored to your business needs"
  ];
  
  const tickerItems2 = [
    "SEO services to improve your search engine rankings",
    "Social media management for brand growth and engagement",
    "Content marketing strategies that drive conversions"
  ];

  useEffect(() => {
    // Show elements with animation
    setIsVisible(true);
    
    // Word rotation animation
    const wordInterval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % changingWords.length);
    }, 3000);
    
    // Setup ticker animations
    const setupTicker = (ticker, items) => {
      if (ticker && ticker.current) {
        // Clone items to ensure continuous scrolling
        const content = ticker.current;
        const clone = content.innerHTML;
        content.innerHTML = clone + clone;
        content.classList.add('animate');
      }
    };
    
    setupTicker(tickerRef1, tickerItems1);
    setupTicker(tickerRef2, tickerItems2);
    
    // Generate grid count
    generateGridCount();
    window.addEventListener("resize", generateGridCount);

    return () => {
      clearInterval(wordInterval);
      window.removeEventListener("resize", generateGridCount);
    };
  }, []);

  const generateGridCount = () => {
    const columns = Math.floor(document.body.clientWidth / 75);
    const rows = Math.floor(window.innerHeight / 75);

    setSize({
      columns,
      rows,
    });
  };

  const handleMouseLeave = (e) => {
    const id = `#${e.target.id}`;
    const element = document.querySelector(id);
    if (element) {
      element.style.backgroundColor = "rgba(255, 101, 0, 0)";
      element.style.transition = "background-color 1.5s";
    }
  };

  const handleMouseEnter = (e) => {
    const id = `#${e.target.id}`;
    const element = document.querySelector(id);
    if (element) {
      element.style.backgroundColor = "rgba(255, 101, 0, 0.3)";
      element.style.transition = "background-color 0.15s";
    }
  };

  return (
    <div className="home-banner">
      <div
        ref={gridRef}
        className="grid-background"
      >
        {[...Array(size.rows * size.columns)].map((_, i) => (
          <div
            key={i}
            id={`grid-cell-${i}`}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            className="grid-cell"
          />
        ))}
      </div>
      
      <div className="banner-content-wrapper">
        <div className="banner-content">
          <h1 className={`headline ${isVisible ? 'slide-in' : ''}`}>
            Drive Your Business Towards
            <div className="word-carousel" ref={wordsRef}>
              {changingWords.map((word, index) => (
                <span 
                  key={index} 
                  className={`carousel-word ${currentWord === index ? 'active' : ''}`}
                >
                  {word}
                </span>
              ))}
            </div>
          </h1>
          
          <p className={`description ${isVisible ? 'slide-in' : ''}`}>
            We help businesses grow through innovative strategies, 
            data-driven campaigns, and customized solutions.
          </p>
          
          <div className={`stats-row ${isVisible ? 'slide-in' : ''}`}>
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Industry Experience</span>
            </div>
          </div>
          
          <div className={`button-group ${isVisible ? 'slide-in' : ''}`}>
            <button className="btn btn-primary">
              <span>Get Started</span>
            </button>
            
            <button className="btn btn-secondary">
              <span>Our Services</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="ticker-strips-container">
        <div className="ticker-strip">
          <div className="ticker-content" ref={tickerRef1}>
            {tickerItems1.map((item, index) => (
              <div key={index} className="ticker-item">
                <span className="ticker-bullet"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
        
        <div className="ticker-strip">
          <div className="ticker-content" ref={tickerRef2}>
            {tickerItems2.map((item, index) => (
              <div key={index} className="ticker-item">
                <span className="ticker-bullet"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
