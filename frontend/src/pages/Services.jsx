import React from 'react'
import ServicesComponent from '../components/Services'

const Services = () => {
  return (
    <div className="pt-20">
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-slate-900">Our Premium <span className="gradient-text">Services</span></h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">Comprehensive digital solutions designed to scale your business and drive innovation in the digital era.</p>
        </div>
      </section>
      <ServicesComponent />
    </div>
  )
}

export default Services
