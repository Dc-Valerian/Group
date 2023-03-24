import React from 'react'
import Header from '../Header/Header'
import Build from './Build/Build'
import Hero from './Hero/Hero'
import Better from "./Better/Better"
import Footer from './Footer/Footer'
import LastCom from './LastCom/LastCom'

const Homescreen = () => {
  return (
    <div>
        <Header />
        <Hero />
        <Better/>
        <Build />
        <LastCom/>
        <Footer />
    </div>
  )
}

export default Homescreen