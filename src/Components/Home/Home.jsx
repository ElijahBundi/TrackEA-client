import React from 'react'
import NavBar from '../Navbar/Navbar'
import About from './About'
import FromOurClients from './FromOurClients'
import GetInTouch from './GetInTouch'
import Products from './Products'
import ShouldYouStart from './ShouldYouStart'
import WhyChooseUs from './WhyChooseUs'

function Home() {
  return (
    <>
        <NavBar />
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