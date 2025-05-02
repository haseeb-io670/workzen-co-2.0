import React, { useRef, useState, useEffect } from 'react';
import '../styles/home/homecontact.scss';

const HomeContact = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    // Show success message
    alert('Your message has been sent. We will contact you soon!');
  };

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

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-pattern-bg"></div>
      
      <div className="contact-container">
        <div className={`contact-content ${isInView ? 'in-view' : ''}`}>
          <div className="contact-header">
            <div className="section-tag">Get In Touch</div>
            <h2 className="section-title">
              Let's <span className="highlight">Connect</span> and Discuss Your Needs
            </h2>
            <p className="section-subtitle">
              Have a question or ready to take your business to the next level? We're here to help.
            </p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-form-wrapper">
              <div className="form-header">
                <h3>Leave A Message</h3>
              </div>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    placeholder=" " 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Your Name*</label>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      placeholder=" " 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                    <label htmlFor="email">Email Address*</label>
                  </div>
                  
                  <div className="form-group">
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      placeholder=" " 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    placeholder=" " 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="subject">Subject*</label>
                </div>
                
                <div className="form-group textarea-group">
                  <textarea 
                    id="message"
                    name="message" 
                    placeholder=" " 
                    required 
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Your Message*</label>
                </div>
                
                <button type="submit" className="btn btn-primary btn-rounded">
                  <span>Send Message</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            </div>
            
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <img src="/phone.png" alt="Phone" />
                </div>
                <div className="info-content">
                  <h4>Phone</h4>
                  <p>(412) 866-2284</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <img src="/mail.png" alt="Email" />
                </div>
                <div className="info-content">
                  <h4>Mail Address</h4>
                  <p>Info@workzen360.com</p>
                  <p>support@workzen360.com</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <img src="/location.png" alt="Location" />
                </div>
                <div className="info-content">
                  <h4>Our Location</h4>
                  <p>522 Glenwood Ave<br />Williamsport, PA 17701, USA</p>
                </div>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <img src="/time.png" alt="Office Hours" />
                </div>
                <div className="info-content">
                  <h4>Office Hour</h4>
                  <p>Mon - Fri 09:00 - 05:00</p>
                  <p>Saturday 09:00 - 02:00</p>
                </div>
              </div>
              
              <div className="book-call-btn">
                <button className="btn btn-primary btn-lg btn-rounded">
                  <span>Book A Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="contact-floating-elements">
        <div className="floating-element fe-1"></div>
        <div className="floating-element fe-2"></div>
      </div>
    </section>
  );
};

export default HomeContact;
