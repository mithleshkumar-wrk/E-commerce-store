import React from 'react'
import Carousel from '../components/Carousel'
import Category from '../components/Category'
import MidBanner from '../components/MidBanner'
import Services from '../components/Services'

const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Carousel/>
      <Category/>
      <MidBanner/>
      <Services/>
    </div>
  )
}

export default Home