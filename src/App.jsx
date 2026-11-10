import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuickEstimator from './components/QuickEstimator'
import Services from './components/Services'
import Trades from './components/Trades'
import StandardsFaq from './components/StandardsFaq'
import HowItWorks from './components/HowItWorks'
import WhyUs from './components/WhyUs'
import Deliverables from './components/Deliverables'
import SectorsBanner from './components/SectorsBanner'
import QuoteForm from './components/QuoteForm'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <Hero />
      <QuickEstimator />
      <Services />
      <Trades />
      <StandardsFaq />
      <HowItWorks />
      <WhyUs />
      <Deliverables />
      <SectorsBanner />
      <QuoteForm />
      <Footer />
      <BackToTop />
    </div>
  )
}

