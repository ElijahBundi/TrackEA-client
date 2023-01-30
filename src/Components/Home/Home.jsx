import React from 'react'
import About from './About'
import FromOurClients from './FromOurClients'
import GetInTouch from './GetInTouch'
import Hero from './Hero'
import Products from './Products'
import ShouldYouStart from './ShouldYouStart'
import WhyChooseUs from './WhyChooseUs'

function Home() {
  return (
    <>
        <Hero />
        <About />
        <Products />
        <WhyChooseUs />
        <ShouldYouStart />
        <FromOurClients />
        <GetInTouch />
    </>
  )
}

export default Home