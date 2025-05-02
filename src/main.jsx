import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />
    <Footer />
  </React.StrictMode>,
)
