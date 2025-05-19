import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiDatabase, FiMail, FiClipboard, FiUsers } from 'react-icons/fi';
import '../styles/main/virtualassistant.scss';

const VirtualAssistant = () => {
  const [activeService, setActiveService] = useState('appointmentScheduling');
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  
  const services = [
    {
      id: 'appointmentScheduling',
      icon: <FiCalendar size={24} />,
      title: "Appointment Scheduling",
      description: "Professional management of your calendar, coordinating appointments, and sending reminders to ensure you never miss an important meeting or event.",
      features: [
        "Calendar organization and management",
        "Meeting scheduling and coordination",
        "Appointment reminders and follow-ups",
        "Time zone management for global meetings",
        "Rescheduling and cancellation handling"
      ],
      benefits: [
        "Never miss important meetings or appointments",
        "Save time on administrative scheduling tasks",
        "Professional communication with clients",
        "Optimized calendar to maximize productivity"
      ]
    },
    {
      id: 'crmManagement',
      icon: <FiDatabase size={24} />,
      title: "CRM Management",
      description: "Comprehensive management of your customer relationship system including data entry, contact management, lead tracking, and generating reports on customer interactions.",
      features: [
        "Contact and lead information management",
        "Data entry and database maintenance",
        "Customer interaction tracking and notes",
        "Pipeline management and reporting",
        "Integration with existing CRM systems"
      ],
      benefits: [
        "Always updated customer data and records",
        "Improved customer relationship management",
        "Better sales pipeline visibility",
        "Data-driven decision making support"
      ]
    },
    {
      id: 'calendarManagement',
      icon: <FiMail size={24} />,
      title: "Calendar Management",
      description: "Organization of your professional schedule, planning meetings, avoiding scheduling conflicts, and prioritizing your time effectively.",
      features: [
        "Strategic scheduling based on priorities",
        "Meeting and event planning",
        "Schedule conflict resolution",
        "Travel time allocation between meetings",
        "Regular schedule reviews and optimizations"
      ],
      benefits: [
        "Optimized time allocation for maximum productivity",
        "Reduced scheduling conflicts and overlaps",
        "Better work-life balance management",
        "Strategic planning for important events"
      ]
    },
    {
      id: 'administrativeSupport',
      icon: <FiClipboard size={24} />,
      title: "Administrative Support",
      description: "General office tasks including email management, document preparation, data entry, travel arrangements, and other clerical duties to keep your operations running smoothly.",
      features: [
        "Email inbox management and organization",
        "Document creation and formatting",
        "Data entry and record keeping",
        "Travel booking and itinerary management",
        "File organization and document management"
      ],
      benefits: [
        "More time to focus on core business activities",
        "Professional administration without full-time staff",
        "Improved organization and efficiency",
        "Seamless handling of routine tasks"
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
    <section className="va-section" ref={sectionRef}>
      <div className="va-pattern-bg"></div>
      
      <div className="va-container">
        <div className={`va-content ${isInView ? 'in-view' : ''}`}>
          <div className="va-header">
            <motion.div 
              className="section-tag"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Virtual Assistant Services
            </motion.div>
            
            <motion.h1 
              className="section-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Streamline Your Operations With <br/><span className="highlight">Virtual Assistant</span> Solutions
            </motion.h1>
            
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our Virtual Assistant solutions help businesses streamline operations, save time, and focus on core activities by handling administrative tasks efficiently.
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
                <button className="btn btn-primary btn-rounded">
                  <span>Get Started With {activeServiceData.title}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
                
                <button className="btn btn-secondary btn-rounded">
                  <span>Learn More</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
        
        <div className="process-section">
          <motion.h2
            className="process-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            How We Work
          </motion.h2>
          
          <div className="process-steps">
            {[
              {
                title: "Client Onboarding",
                description: "We start by understanding your unique needs and goals. This involves an initial consultation to tailor our services specifically to your requirements."
              },
              {
                title: "Assistant Matching",
                description: "Based on your specific needs, we match you with a skilled virtual assistant experienced in your industry to ensure seamless collaboration."
              },
              {
                title: "Task Delegation",
                description: "We establish clear communication channels and define task priorities to ensure your virtual assistant can effectively manage and execute your tasks."
              },
              {
                title: "Quality Assurance",
                description: "Our team conducts regular reviews of the tasks completed to ensure they meet our high standards and your expectations."
              },
              {
                title: "Feedback & Improvement",
                description: "We value your feedback and continuously seek to improve our services. Regular check-ins ensure we adapt to your evolving needs."
              },
              {
                title: "Ongoing Support",
                description: "Our support doesn't end after task completion. We're here to assist you continuously, ensuring your operations run smoothly."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="process-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="process-number">{index + 1}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="cta-section">
          <div className="cta-content">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              Start optimizing your business operations today with our Virtual Assistant services.
            </motion.p>
          </div>
          <motion.div
            className="cta-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <button className="btn btn-primary btn-lg btn-rounded">
              <span>Start a Project</span>
            </button>
            <button className="btn btn-secondary btn-lg btn-rounded">
              <span>Book a Call</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VirtualAssistant;
