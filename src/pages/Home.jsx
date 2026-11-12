import React from 'react'
import Hero from '../components/Hero'
import QuickEstimator from '../components/QuickEstimator'
import Services from '../components/Services'
import Trades from '../components/Trades'
import StandardsFaq from '../components/StandardsFaq'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import Deliverables from '../components/Deliverables'
import SectorsBanner from '../components/SectorsBanner'
import QuoteForm from '../components/QuoteForm'

export default function Home() {
  return (
    <main>
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
    </main>
  )
}
