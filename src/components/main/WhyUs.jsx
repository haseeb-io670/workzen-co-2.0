import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import '../styles/main/whyus.scss';

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const coreStrengths = [
    {
      id: 1,
      title: "Data-Driven Decisions",
      description: "We leverage analytics and metrics to make informed decisions that drive real business growth. Every campaign is measured, monitored, and optimized for maximum ROI.",
      icon: "data-analytics",
      color: "#FF6B35"
    },
    {
      id: 2,
      title: "Creative Solutions",
      description: "Our creative team pushes boundaries to develop innovative solutions that capture attention and drive engagement in today's crowded digital landscape.",
      icon: "creative-idea",
      color: "#1D7EC2"
    },
    {
      id: 3,
      title: "Strategic Approach",
      description: "We take a holistic view of your business goals, developing comprehensive strategies that align every digital touchpoint with your overall objectives.",
      icon: "strategic-plan",
      color: "#7A3B69"
    }
  ];
  
  // Custom hook for media queries
  const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false);
  
    useEffect(() => {
      const media = window.matchMedia(query);
      if (media.matches !== matches) {
        setMatches(media.matches);
      }
      
      const listener = () => setMatches(media.matches);
      media.addEventListener("change", listener);
      
      return () => media.removeEventListener("change", listener);
    }, [matches, query]);
  
    return matches;
  };
  
  const isDesktop = useMediaQuery('(min-width: 992px)');
  const isTablet = useMediaQuery('(min-width: 768px)');
  const isMobile = useMediaQuery('(max-width: 576px)');
  
  const styles = {
    container: {
      width: '100%',
      maxWidth: '100%',
      overflowX: 'hidden',
      background: 'linear-gradient(135deg, #fcfcfc 0%, #f9f9f9 100%)',
      fontFamily: 'var(--font-primary)',
    },
    content: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 30px',
    },
    sectionHeader: {
      textAlign: 'center',
      marginBottom: '60px',
    },
    heading: {
      fontSize: '2.8rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: 'var(--color-dark)',
      fontFamily: 'var(--font-secondary)',
    },
    paragraph: {
      fontSize: '1.2rem',
      color: 'rgba(30, 30, 30, 0.7)',
      maxWidth: '600px',
      margin: '0 auto',
    },
    gradientText: {
      background: 'linear-gradient(120deg, var(--color-primary), #1D7EC2, #7A3B69)',
      backgroundSize: '200% auto',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      display: 'inline-block',
    },
    heroSection: {
      display: 'grid',
      gridTemplateColumns: isDesktop ? '1fr 1fr' : '1fr',
      gap: '40px',
      padding: '100px 0 60px',
      alignItems: isDesktop ? 'center' : 'flex-start',
    },
    heroText: {
      margin: '0',
    },
    heroTitle: {
      fontSize: isDesktop ? '4rem' : '3rem',
      fontWeight: '800',
      marginBottom: '30px',
      lineHeight: '1.1',
      color: 'var(--color-dark)',
      fontFamily: 'var(--font-secondary)',
    },
    heroParagraph: {
      fontSize: '1.3rem',
      lineHeight: '1.6',
      color: 'rgba(30, 30, 30, 0.7)',
      maxWidth: isDesktop ? '90%' : '100%',
    },
    heroVisual: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    heroImage: {
      width: '100%',
      maxWidth: '500px',
      height: 'auto',
      filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))',
      animation: 'float 8s ease-in-out infinite',
    },
    strengthsSection: {
      padding: '80px 0',
      position: 'relative',
    },
    strengthsCards: {
      display: 'grid',
      gridTemplateColumns: isDesktop ? '1fr 1fr 1fr' : isTablet ? '1fr 1fr' : '1fr',
      gap: '30px',
    },
    strengthCard: {
      background: 'white',
      borderRadius: '20px',
      padding: '40px',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.05)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      cursor: 'pointer',
    },
    cardIcon: {
      width: '80px',
      height: '80px',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '25px',
    },
    cardImage: {
      width: '45px',
      height: '45px',
      objectFit: 'contain',
    },
    cardTitle: {
      fontSize: '1.6rem',
      fontWeight: '700',
      marginBottom: '15px',
      color: 'var(--color-dark)',
      fontFamily: 'var(--font-secondary)',
    },
    cardDescription: {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: 'rgba(30, 30, 30, 0.7)',
    },
    ctaSection: {
      margin: '80px 0',
      padding: isMobile ? '50px 30px' : '70px',
      background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark, #15304D))',
      borderRadius: '30px',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
    },
    ctaContent: {
      position: 'relative',
      textAlign: 'center',
      maxWidth: '800px',
      margin: '0 auto',
    },
    ctaHeading: {
      fontSize: isMobile ? '2.2rem' : '2.5rem',
      fontWeight: '800',
      marginBottom: '20px',
      fontFamily: 'var(--font-secondary)',
    },
    ctaHighlight: {
      position: 'relative',
      color: 'white',
    },
    ctaHighlightUnderline: {
      position: 'absolute',
      bottom: '5px',
      left: '0',
      width: '100%',
      height: '8px',
      background: 'rgba(255, 255, 255, 0.3)',
      zIndex: '-1',
      borderRadius: '4px',
    },
    ctaParagraph: {
      fontSize: '1.2rem',
      marginBottom: '40px',
      opacity: '0.9',
    },
    ctaButtons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: isMobile ? 'center' : 'flex-start',
    },
    btnPrimary: {
      padding: '15px 35px',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      background: 'white',
      color: 'var(--color-secondary)',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
    },
    btnSecondary: {
      padding: '15px 35px',
      borderRadius: '50px',
      fontSize: '1.1rem',
      fontWeight: '600',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      display: 'inline-block',
      background: 'transparent',
      color: 'white',
      border: '2px solid rgba(255, 255, 255, 0.3)',
    },
    decoElement1: {
      position: 'absolute',
      top: '30px',
      right: '10%',
      width: '60px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '10px',
      transform: 'rotate(45deg)',
    },
    decoElement2: {
      position: 'absolute',
      bottom: '40px',
      left: '15%',
      width: '40px',
      height: '40px',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '10px',
    },
    decoElement3: {
      position: 'absolute',
      top: '50%',
      left: '10%',
      width: '20px',
      height: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%',
    }
  };

  // Add keyframe animations
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes float {
        0% { transform: translateY(0); }
        50% { transform: translateY(-15px); }
        100% { transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay: 0.4 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const floatAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Hero Section */}
        <div style={styles.heroSection}>
          <motion.div 
            style={styles.heroText}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <h1 style={styles.heroTitle}>
              We Don't Just <span style={styles.gradientText}>Promise</span> Results.<br />
              We <span style={styles.gradientText}>Deliver</span> Them.
            </h1>
            <p style={styles.heroParagraph}>
              At WorkZen, we combine data-driven strategies with creative innovation 
              to deliver exceptional outcomes for our clients.
            </p>
          </motion.div>
          <motion.div 
            style={styles.heroVisual}
            initial="hidden"
            animate="visible"
            variants={fadeInRight}
          >
            <motion.img 
              src="/svg/why-us-hero.svg" 
              alt="Why Choose WorkZen" 
              style={styles.heroImage}
              animate={floatAnimation}
            />
          </motion.div>
        </div>

        {/* Core Strengths Section */}
        <div style={styles.strengthsSection}>
          <motion.div 
            style={styles.sectionHeader}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 style={styles.heading}>
              Our Core <span style={styles.gradientText}>Strengths</span>
            </h2>
            <p style={styles.paragraph}>What makes our approach uniquely effective</p>
          </motion.div>
          
          <motion.div 
            style={styles.strengthsCards}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {coreStrengths.map((strength) => (
              <motion.div 
                key={strength.id}
                style={{
                  ...styles.strengthCard,
                  borderTop: `5px solid ${strength.color}`
                }}
                variants={cardVariant}
                whileHover={{ 
                  y: -10, 
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' 
                }}
              >
                <div style={{
                  ...styles.cardIcon,
                  background: `${strength.color}10`,
                }}>
                  <img 
                    src={`/svg/${strength.icon}.svg`} 
                    alt={strength.title} 
                    style={styles.cardImage}
                  />
                </div>
                <h3 style={styles.cardTitle}>{strength.title}</h3>
                <p style={styles.cardDescription}>{strength.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div 
          style={styles.ctaSection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
        >
          <div style={styles.ctaContent}>
            <h2 style={styles.ctaHeading}>
              Ready to Transform Your <span style={styles.ctaHighlight}>Digital Presence<div style={styles.ctaHighlightUnderline}></div></span>?
            </h2>
            <p style={styles.ctaParagraph}>
              Let's discuss how we can help you achieve your business goals with tailored digital marketing solutions.
            </p>
            <div style={styles.ctaButtons}>
              <motion.a 
                href="/contact" 
                style={styles.btnPrimary}
                whileHover={{ y: -5, boxShadow: '0 15px 30px rgba(0, 0, 0, 0.15)' }}
              >
                Schedule a Consultation
              </motion.a>
              <motion.a 
                href="/services" 
                style={styles.btnSecondary}
                whileHover={{ 
                  y: -5, 
                  borderColor: 'white',
                  background: 'rgba(255, 255, 255, 0.1)' 
                }}
              >
                Explore Our Services
              </motion.a>
            </div>
          </div>
          <motion.div 
            style={styles.decoElement1}
            animate={floatAnimation}
          ></motion.div>
          <motion.div 
            style={styles.decoElement2}
            animate={{
              ...floatAnimation,
              transition: {
                ...floatAnimation.transition,
                delay: 0.5
              }
            }}
          ></motion.div>
          <motion.div 
            style={styles.decoElement3}
            animate={{
              ...floatAnimation,
              transition: {
                ...floatAnimation.transition,
                delay: 1
              }
            }}
          ></motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhyUs;
