import { useState } from 'react'
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index';
import Header from './components/layout/header.jsx'
import Footer from './components/layout/footer.jsx'

function App() {
  return (
    <>
      <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App
