import { useState } from 'react'
import './App.css'
import Header from './components/layout/header'
import Footer from './components/layout/footer'
import router from './routes/index';
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <RouterProvider router={router}>

    <div className="app">
      <Header />
      
      <main className="main-content">
        <section className="hero">
          <div className="container">
            <h1>Elevate Your Digital Presence</h1>
            <p>WorkZen provides cutting-edge digital marketing solutions to help your business grow in the digital landscape. From SEO to social media, we've got you covered.</p>
            <a href="#contact" className="cta-button">Get Started</a>
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="services">
              <div className="service-card">
                <div className="service-icon">📈</div>
                <h3 className="service-title">SEO Optimization</h3>
                <p>Boost your website's visibility in search engines and drive more organic traffic.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📱</div>
                <h3 className="service-title">Social Media Marketing</h3>
                <p>Engage with your audience and build your brand across all social platforms.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3 className="service-title">Content Strategy</h3>
                <p>Create compelling content that resonates with your target audience and drives conversions.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section" style={{ backgroundColor: 'var(--color-secondary-light)', color: 'white' }}>
          <div className="container">
            <h2 className="section-title" style={{ color: 'white' }}>About WorkZen</h2>
            <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              WorkZen is a premier digital marketing agency dedicated to helping businesses of all sizes succeed in the digital world. 
              With our team of experienced professionals, we deliver data-driven strategies and creative solutions that drive real results.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">Get in Touch</h2>
            <p style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>Ready to take your digital marketing to the next level? Contact us today!</p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <a href="mailto:info@workzen.co" className="cta-button">Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </RouterProvider>
  )
}

export default App
