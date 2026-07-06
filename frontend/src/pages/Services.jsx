import React from 'react'
import { motion } from 'framer-motion'
import ServicesComponent from '../components/Services'
import webDevImage from '../images/webdevelopement_image.png'

const Services = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={webDevImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-cyan-900/70 to-slate-900/80"></div>
        </div>
        
        {/* Transparent Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[12rem] sm:text-[16rem] lg:text-[24rem] font-black text-white tracking-wider select-none"
          >
            SERVICES
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-6">
            Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            Our Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Services</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to scale your business and drive innovation in the digital era.
          </p>
        </div>
      </section>

      <ServicesComponent />
    </div>
  )
}

export default Services
