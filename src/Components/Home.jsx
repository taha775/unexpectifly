import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Categories from './Categories'
import BookingProcess from './BookingProcess'
import Destination from './Destination'
import WhyChooseUs from './whyChooseUs'

const Home = () => {
  return (
    <div className='text-black'>
        <Navbar/>
        <Hero/>
        <Categories/>
        <BookingProcess/>
        <Destination/>
        <WhyChooseUs/>
        </div>
  )
}

export default Home