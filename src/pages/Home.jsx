import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeAbout from '../components/home/HomeAbout'
import HomeServices from '../components/home/HomeServices'
import HomeIndustries from '../components/home/HomeIndustries'
import HomeContact from '../components/home/HomeContact'
import HomeTestimonials from '../components/home/HomeTestimonial'
function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeIndustries />
      <HomeTestimonials />
      <HomeContact />
    </>
  )
}

export default Home