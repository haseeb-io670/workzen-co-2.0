import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import '../styles/main/development.scss';
import { FiMonitor, FiShoppingCart, FiLink, FiSettings, FiUsers, FiFileText, FiCheckCircle, FiMessageCircle, FiRefreshCw, FiHeadphones } from 'react-icons/fi';

const Development = () => {
  const [activeTab, setActiveTab] = useState('website');
  const [isTyping, setIsTyping] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [codeReveal, setCodeReveal] = useState(0);
  const containerRef = useRef(null);
  const servicesRef = useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const typingTextRef = useRef("const WorkZen = {\n  buildWebsite: function(requirements) {\n    return amazingSolution(requirements);\n  }\n}");

  // Services data
  const services = [
    {
      id: 'website',
      title: 'Website / Landing Pages',
      icon: <FiMonitor size={24} />,
      description: 'Custom-designed, responsive websites and landing pages that convert visitors into customers. Our websites are built with SEO best practices and optimized for performance.',
      features: [
        'Responsive design for all devices',
        'Custom UI/UX design',
        'SEO optimization',
        'Fast loading speeds',
        'Analytics integration'
      ],
      codePreview: 
'<!DOCTYPE html>\n' +
'<html lang="en">\n' +
'<head>\n' +
'  <meta charset="UTF-8">\n' +
'  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
'  <title>Your Amazing Website</title>\n' +
'  <link rel="stylesheet" href="styles.css">\n' +
'</head>\n' +
'<body>\n' +
'  <header>\n' +
'    <!-- Navigation -->\n' +
'  </header>\n' +
'  <main>\n' +
'    <!-- Your content -->\n' +
'  </main>\n' +
'  <footer>\n' +
'    <!-- Footer content -->\n' +
'  </footer>\n' +
'  <script src="scripts.js"></script>\n' +
'</body>\n' +
'</html>'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Store',
      icon: <FiShoppingCart size={24} />,
      description: 'Fully functional e-commerce solutions with secure payment gateways, inventory management, and user-friendly interfaces to showcase your products effectively.',
      features: [
        'Product catalog management',
        'Secure payment processing',
        'Inventory tracking',
        'Customer accounts',
        'Order management system'
      ],
      codePreview: 
'// E-commerce product component\n' +
'function Product({ name, price, image, onAddToCart }) {\n' +
'  return (\n' +
'    <div className="product-card">\n' +
'      <img src={image} alt={name} />\n' +
'      <h3>{name}</h3>\n' +
'      <p className="price">$price</p>\n' +
'      <button\n' +
'        onClick={() => onAddToCart({ name, price })}\n' +
'      >\n' +
'        Add to Cart\n' +
'      </button>\n' +
'    </div>\n' +
'  );\n' +
'}'
    },
    {
      id: 'integrations',
      title: 'Integrations (Payment Platforms/APIs)',
      icon: <FiLink size={24} />,
      description: 'Seamless integration of payment gateways, third-party services, and custom APIs to enhance your website\'s functionality and provide a better user experience.',
      features: [
        'Payment gateway integration',
        'Third-party API connections',
        'Custom API development',
        'Webhook implementations',
        'Authentication systems'
      ],
      codePreview: 
'// Payment gateway integration example\n' +
'async function processPayment(paymentDetails) {\n' +
'  try {\n' +
'    const response = await fetch(\'https://api.payment.com/v1/charges\', {\n' +
'      method: \'POST\',\n' +
'      headers: {\n' +
'        \'Authorization\': \'Bearer \' + API_KEY,\n' +
'        \'Content-Type\': \'application/json\'\n' +
'      },\n' +
'      body: JSON.stringify({\n' +
'        amount: paymentDetails.amount,\n' +
'        currency: \'usd\',\n' +
'        source: paymentDetails.tokenId,\n' +
'        description: \'Payment for Order #\' + paymentDetails.orderId\n' +
'      })\n' +
'    });\n' +
'    \n' +
'    return await response.json();\n' +
'  } catch (error) {\n' +
'    console.error(\'Payment failed:\', error);\n' +
'    throw error;\n' +
'  }\n' +
'}'
    },
    {
      id: 'cms',
      title: 'CMS and Admin Panel',
      icon: <FiSettings size={24} />,
      description: 'User-friendly content management systems and custom admin panels that give you complete control over your website\'s content and functionality.',
      features: [
        'Intuitive dashboard',
        'User role management',
        'Content editing tools',
        'Media library',
        'Custom reporting'
      ],
      codePreview: 
'// Admin panel route configuration\n' +
'const adminRoutes = [\n' +
'  {\n' +
'    path: \'/admin/dashboard\',\n' +
'    component: Dashboard,\n' +
'    exact: true,\n' +
'    permissions: [\'admin\', \'editor\']\n' +
'  },\n' +
'  {\n' +
'    path: \'/admin/users\',\n' +
'    component: UserManagement,\n' +
'    exact: true,\n' +
'    permissions: [\'admin\']\n' +
'  },\n' +
'  {\n' +
'    path: \'/admin/content\',\n' +
'    component: ContentEditor,\n' +
'    exact: false,\n' +
'    permissions: [\'admin\', \'editor\', \'contributor\']\n' +
'  },\n' +
'  {\n' +
'    path: \'/admin/settings\',\n' +
'    component: Settings,\n' +
'    exact: true,\n' +
'    permissions: [\'admin\']\n' +
'  }\n' +
'];'
    }
  ];

  // Process steps
  const processSteps = [
    {
      title: 'Client Onboarding',
      description: 'We start by understanding your unique needs and goals. This involves an initial consultation to tailor our services specifically to your requirements.',
      icon: <FiUsers />
    },
    {
      title: 'Assistant Matching',
      description: 'Based on your specific needs, we match you with a skilled virtual assistant experienced in your industry to ensure seamless collaboration.',
      icon: <FiFileText />
    },
    {
      title: 'Task Delegation',
      description: 'We establish clear communication channels and define task priorities to ensure your virtual assistant can effectively manage and execute your tasks.',
      icon: <FiCheckCircle />
    },
    {
      title: 'Quality Assurance',
      description: 'Our team conducts regular reviews of the tasks completed to ensure they meet our high standards and your expectations.',
      icon: <FiMessageCircle />
    },
    {
      title: 'Feedback & Improvement',
      description: 'We value your feedback and continuously seek to improve our services. Regular check-ins ensure we adapt to your evolving needs.',
      icon: <FiRefreshCw />
    },
    {
      title: 'Ongoing Support',
      description: 'Our support doesn\'t end after task completion. We\'re here to assist you continuously, ensuring your operations run smoothly.',
      icon: <FiHeadphones />
    }
  ];

  // Typing effect for code in hero section
  useEffect(() => {
    let currentIndex = 0;
    const text = typingTextRef.current;
    setIsTyping(true);
    
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 50);
    
    return () => clearInterval(typingInterval);
  }, []);

  // Code reveal effect
  useEffect(() => {
    if (isServicesInView) {
      const codeInterval = setInterval(() => {
        setCodeReveal(prev => {
          const newValue = prev + 1;
          if (newValue >= 100) {
            clearInterval(codeInterval);
            return 100;
          }
          return newValue;
        });
      }, 20);
      
      return () => clearInterval(codeInterval);
    }
  }, [isServicesInView]);
  
  // Get current service data
  const currentService = services.find(s => s.id === activeTab);

  return (
    <div className="development-page" ref={containerRef}>
      {/* Background Elements */}
      <div className="dev-bg-elements">
        <div className="dev-grid-lines"></div>
        <div className="dev-floating-elements">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className={'dev-floating-el dev-el-' + (i + 1)}
            >
              {i % 2 === 0 ? (
                <div className="dev-code-snippet">
                  <span>{'{'+'code: ' + (i * 8)+'}'}</span>
                </div>
              ) : (
                <div className="dev-shape"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Hero Section */}
      <section className="dev-hero">
        <div className="dev-container">
          <div className="dev-hero-grid">
            <motion.div 
              className="dev-hero-content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="dev-eyebrow">CUSTOM CODE FOR YOUR BUSINESS</div>
              <h1 className="dev-title">
                Development <span className="dev-title-highlight">Services</span>
              </h1>
              <p className="dev-subtitle">
                Our development team creates custom solutions that align with your business needs and drive growth through technology.
              </p>
              <div className="dev-hero-cta">
                <button className="btn btn-primary">Start a Project</button>
                <button className="btn btn-secondary">Learn More</button>
              </div>
            </motion.div>
            
            <motion.div 
              className="dev-hero-visual"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="dev-code-editor">
                <div className="dev-code-header">
                  <div className="dev-code-dots">
                    <div className="dev-dot red"></div>
                    <div className="dev-dot yellow"></div>
                    <div className="dev-dot green"></div>
                  </div>
                  <div className="dev-code-title">workzen.js</div>
                </div>
                <div className="dev-code-body">
                  <pre className="dev-code-content">
                    <code>
                      {typedText}<span className={'dev-cursor ' + (isTyping ? 'active' : '')}>|</span>
                    </code>
                  </pre>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="dev-hero-divider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48V0h1200v120z" className="dev-divider-fill"></path>
          </svg>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="dev-services" ref={servicesRef}>
        <div className="dev-container">
          <motion.div
            className="dev-section-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Our Development Services</h2>
            <div className="dev-header-bar">
              <span className="dev-header-progress" style={{ width: codeReveal + '%' }}></span>
            </div>
          </motion.div>
          
          <div className="dev-services-container">
            <div className="dev-services-tabs">
              {services.map((service, index) => (
                <motion.div 
                  key={service.id}
                  className={'dev-tab ' + (activeTab === service.id ? 'active' : '')}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isServicesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  onClick={() => setActiveTab(service.id)}
                >
                  <div className="dev-tab-icon">
                    {service.icon}
                  </div>
                  <div className="dev-tab-content">
                    <h3>{service.title}</h3>
                    <div className="dev-tab-indicator">
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="dev-service-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="dev-details-content">
                  <div className="dev-service-description">
                    <motion.h3 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {currentService.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      {currentService.description}
                    </motion.p>
                    
                    <motion.div
                      className="dev-service-features"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <h4>Key Features</h4>
                      <ul>
                        {currentService.features.map((feature, index) => (
                          <motion.li 
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                          >
                            <span className="dev-feature-icon">
                              <svg viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </span>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="dev-code-preview"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="dev-preview-header">
                      <div className="dev-preview-dots">
                        <div className="dev-dot red"></div>
                        <div className="dev-dot yellow"></div>
                        <div className="dev-dot green"></div>
                      </div>
                      <div className="dev-preview-title">
                        {activeTab === 'website' ? 'index.html' : 
                         activeTab === 'ecommerce' ? 'product.jsx' :
                         activeTab === 'integrations' ? 'payment.js' : 'admin.js'}
                      </div>
                    </div>
                    <div className="dev-preview-body">
                      <pre className="dev-preview-code">
                        <code>
                          {currentService.codePreview}
                        </code>
                      </pre>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="dev-process">
        <div className="dev-container">
          <div className="dev-section-header">
            <h2>How We Work</h2>
            <div className="dev-header-bar">
              <span className="dev-header-progress" style={{ width: "100%" }}></span>
            </div>
          </div>
          
          <div className="dev-process-flow">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="dev-process-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="dev-step-number">{index + 1}</div>
                <div className="dev-step-content">
                  <div className="dev-step-icon">
                    {step.icon}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="dev-step-connector">
                    <svg width="40" height="40" viewBox="0 0 40 40">
                      <path d="M20 0 L20 40" stroke="currentColor" strokeDasharray="4 4" />
                      <path d="M10 30 L20 40 L30 30" stroke="currentColor" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="dev-cta">
        <div className="dev-container">
          <motion.div 
            className="dev-cta-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="dev-cta-content">
              <h2>Ready to Work With Us?</h2>
              <p>Let's build something amazing together.</p>
              <div className="dev-cta-buttons">
                <a href="#" className="btn btn-primary">Start a Project</a>
                <a href="#" className="btn btn-secondary">Contact Us</a>
              </div>
            </div>
            
            <div className="dev-cta-decoration">
              <div className="dev-decoration code-brackets">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="dev-decoration code-curly">
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 2L3 6v9a5 5 0 0 0 5 5h10"></path>
                  <path d="M21 22v-3a5 5 0 0 0-5-5H9"></path>
                </svg>
              </div>
              <div className="dev-decoration dot-pattern">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Development;
