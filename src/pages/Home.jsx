import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeAbout from '../components/home/HomeAbout'
import HomeServices from '../components/home/HomeServices'
import HomeContact from '../components/home/HomeContact'

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeAbout />
      <HomeServices />
      <HomeContact />
    </>
  )
}

export default Home