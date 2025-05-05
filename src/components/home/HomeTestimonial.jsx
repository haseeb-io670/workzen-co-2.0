import React, { useState, useEffect, useRef } from 'react';
import '../styles/home/hometestimonial.scss';

const HomeTestimonial = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  // Testimonial data based on WorkZen.co
  const testimonials = [
    {
      id: 1,
      name: "Christine Vanhyning",
      position: "Realtor In California",
      image: "/testimonial/christine.webp",
      quote: "Hi Bryan, I hope you are doing well. Your work has surpassed my expectations and I am thoroughly impressed and i am truly grateful. The instagram property post looks amazing! I love it. I trust you opinion.",
      rating: 5,
      color: "#FF6B6B"
    },
    {
      id: 2,
      name: "Abdiel Danastor",
      position: "Realtor In Massachusetts",
      image: "/testimonial/abdiel-danastor.webp",
      quote: "I hired Steve, and I really appreciate his dedication and focus. I have no complaints about Steve's calls. The first time I spoke to him, I asked him to make at least two calls per day, and he's handling plenty of conversations, which is absolutely brilliant.",
      rating: 5,
      color: "#4ECDC4"
    },
    {
      id: 3,
      name: "Teresa Barthol",
      position: "Realtor In Washington DC",
      image: "/testimonial/teresa-barthol.webp",
      quote: "I love working with Lily. She's been very very helpful and keeping me updated with what she's doing every day and making suggestions on what to do next and how we can improve our content. Well, She's very creative.",
      rating: 5,
      color: "#FFD166"
    },
    {
      id: 4,
      name: "Robert Johnson",
      position: "EXP Realty",
      image: "/testimonial/robert-johnson.webp",
      quote: "Our customer engagement metrics improved by 40% after bringing on WorkZen's virtual assistants. Their social media management and email marketing expertise made all the difference.",
      rating: 5,
      color: "#6A0572"
    },
    {
      id: 5,
      name: "O'Ranti J Robinson",
      position: "EXP Realty",
      image: "/testimonial/oranti-jrobinson.webp",
      quote: "Bryan has been a game-changer for my social media! His creativity and ability to engage my audience have led to a noticeable boost in interactions and followers. I trust him completely to handle everything, and I highly recommend him!",
      rating: 5,
      color: "#1A936F"
    },
    {
      id: 6,
      name: "Dominic Hall",
      position: "MLO | STALLION LOANS, Inc.",
      image: "/testimonial/dominic-hall.webp",
      quote: "Bryan from Workzen has been a game-changer—his social media expertise has increased my leads and boosted my brand visibility and I highly recommend her for top-notch social media management.",
      rating: 5,
      color: "#3D5A80"
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
  
  // Handle card interaction
  const handleCardHover = (id) => {
    setActiveCard(id);
  };
  
  // Render star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span 
        key={index} 
        className={`star ${index < rating ? 'filled' : ''}`}
      >
        <span className="material-icons">
          {index < rating ? 'star' : 'star_outline'}
        </span>
      </span>
    ));
  };
  
  return (
    <section className="testimonials-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <div className="section-title-wrapper">
            <h2 className="section-overline">Client Voices</h2>
            <h3 className="section-title">What Our Clients Say</h3>
            <p className="section-subtitle">Discover how we've transformed businesses with results that speak for themselves.</p>
          </div>
        </div>
        
        {/* Client Statistics */}
        <div className="client-statistics">
          <div className="stat-item">
            <div className="stat-value">94<span>%</span></div>
            <div className="stat-label">Client Retention</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">150<span>+</span></div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">4.9<span>/5</span></div>
            <div className="stat-label">Average Rating</div>
          </div>
        </div>
        
        {/* 3D Testimonial Cards */}
        <div className="testimonial-cards">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={`testimonial-card ${activeCard === testimonial.id ? 'active' : ''}`}
              onMouseEnter={() => handleCardHover(testimonial.id)}
              onMouseLeave={() => handleCardHover(null)}
              style={{
                '--card-color': testimonial.color,
              }}
            >
              <div className="card-inner">
                <div className="card-front">
                  <div className="profile-image" style={{ backgroundColor: testimonial.color }}>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      loading="lazy"
                      width="120"
                      height="120"
                    />
                  </div>
                  <h3 className="client-name">{testimonial.name}</h3>
                  <p className="client-position">{testimonial.position}</p>
                </div>
                <div className="card-back">
                  <div className="quote-icon">
                    <span className="material-icons">format_quote</span>
                  </div>
                  <blockquote>
                    <p>{testimonial.quote}</p>
                  </blockquote>
                  <div className="testimonial-rating">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Animated Trust Banner */}
        <div className="trust-banner">
          <div className="trust-banner-inner">
            <div className="trust-item">
              <span className="material-icons">verified</span>
              <span>Trusted by Industry Leaders</span>
            </div>
            <div className="trust-item">
              <span className="material-icons">workspace_premium</span>
              <span>Award-Winning Service</span>
            </div>
            <div className="trust-item">
              <span className="material-icons">handshake</span>
              <span>Reliable Partnership</span>
            </div>
            <div className="trust-item">
              <span className="material-icons">verified</span>
              <span>Trusted by Industry Leaders</span>
            </div>
          </div>
        </div>
        
     
      </div>
      
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
        <div className="shape shape-4"></div>
      </div>
    </section>
  );
};

export default HomeTestimonial;
