import { useState } from 'react';
import '../styles/layout/footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    console.log('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <footer className="site-footer">
      <div className="footer-accent"></div>
      <div className="footer-top">
        <div className="container">
          <div className="footer-subscribe-banner">
            <div className="subscribe-content">
              <h3>Join Our Newsletter</h3>
              <p>Get the latest updates, news and special offers directly to your inbox.</p>
            </div>
            <form onSubmit={handleSubmit} className="subscribe-form">
              <div className="input-wrapper">
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <span>Subscribe</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </form>
          </div>
          
          <div className="footer-main">
            <div className="footer-info">
              <a href="/" className="footer-logo">
                <img src="/logo.png" alt="WorkZen Logo" />
              </a>
              <ul className="contact-info">
                <li className="address">
                  <span>522 Glenwood Ave <br /> Williamsport, PA 17701, USA</span>
                </li>
                <li className="phone">
                  <a href="tel:(412)866-2284">(412) 866-2284</a>
                </li>
                <li className="email">
                  <a href="mailto:info@workzen360.com">info@workzen360.com</a>
                </li>
              </ul>
              
              <div className="social-links">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon">
                  <img src="/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                  <img src="/linkedin.svg" alt="LinkedIn" />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                  <img src="/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                  <img src="/twitter.svg" alt="Twitter" />
                </a>
              </div>
            </div>

            <div className="footer-nav">
              <div className="footer-nav-column">
                <h4>Discover</h4>
                <ul>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                  <li><a href="/blog">News & Blog</a></li>
                </ul>
              </div>

              <div className="footer-nav-column">
                <h4>Our Services</h4>
                <ul>
                  <li><a href="/services/lead-generation">Lead Generation</a></li>
                  <li><a href="/services/development">Development</a></li>
                  <li><a href="/services/digital-presence">Digital Presence</a></li>
                  <li><a href="/services/virtual-assistant">Virtual Assistant</a></li>
                  <li><a href="/services/seo">SEO</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <div className="footer-legal">
              <a href="/terms">Terms & Conditions</a>
              <a href="/privacy">Privacy Policy</a>
            </div>
            <div className="footer-copyright">
              <p>Copyright ©{new Date().getFullYear()} WorkZen. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;