import React from 'react'
import Navbar from './Navbar'
import Section from './Section'
import Section2 from './Section2'
import Cards from './Cards'
import Footer from './Footer'
import Carousel from './Carousel'
function Home() {
  return (
    <div>
      <Navbar />
      <Section />
      <Cards />

      <Carousel />

      <Section2 />
      <Footer />
    </div>
  )
}

export default Home
