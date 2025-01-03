import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Categories from './Categories'

const Home = () => {
  return (
    <div className='text-black'>
        <Navbar/>
        <Hero/>
        <Categories/>
        </div>
  )
}

export default Home