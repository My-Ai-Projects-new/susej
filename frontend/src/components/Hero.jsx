import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { Brain, Globe, Zap, Code, ChevronRight, ChevronLeft, ArrowRight, Target, Users, TrendingUp, CheckCircle, Shield, Zap as ZapIcon, Rocket, Palette, Smartphone, ShoppingCart, Monitor, Cpu } from 'lucide-react'

// Import carousel images
import websiteMaintenanceImage from '../images/website-maintenance-image.webp'
import mobileAppImage from '../images/mobile app development image.jpg'
import appDevImage from '../images/app-development.avif'
import webDevImage from '../images/webdevelopement_image.png'
import ecomImage from '../images/E Commerce Website_image.jpg'
import llmImage from '../images/llm developement image.png'
import paymentImage from '../images/paymentgateway_image.jpg'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    { image: webDevImage, title: 'Web Development', description: 'Custom websites for your business growth' },
    { image: ecomImage, title: 'E-Commerce Development', description: 'Feature-rich online stores with secure payment gateways' },
    { image: llmImage, title: 'Gen AI & LLM Solutions', description: 'Smart automation with cutting-edge AI' },
    { image: mobileAppImage, title: 'Mobile App Development', description: 'iOS & Android apps with modern design' },
    { image: paymentImage, title: 'Payment Gateway Integration', description: 'Seamless & secure payment solutions' },
    { image: websiteMaintenanceImage, title: 'Website Maintenance', description: '24/7 support & maintenance services' }
  ]

  const stats = [
    { number: 500, label: 'Happy Clients', icon: Users },
    { number: 100, label: 'Projects Delivered', icon: Target },
    { number: 15, label: 'Expert Team', icon: Brain },
    { number: 24, label: 'Hours Support', icon: TrendingUp },
  ]

  const techs = [
    { name: 'React', icon: Code, color: 'text-blue-600' },
    { name: 'Python', icon: Code, color: 'text-indigo-600' },
    { name: 'Flask', icon: Globe, color: 'text-emerald-600' },
    { name: 'PostgreSQL', icon: Code, color: 'text-slate-700' },
    { name: 'OpenAI', icon: Brain, color: 'text-violet-600' },
    { name: 'Docker', icon: Code, color: 'text-cyan-600' },
  ]

  const whatYouGet = [
    'FREE Domain',
    'FREE SSL Certificate',
    'Responsive Design',
    'SEO Friendly',
    'Speed Optimized',
    'Dedicated Support',
    'Clean & Modern Code',
    'Easy to Manage',
  ]

  const whyChooseUs = [
    { icon: Palette, title: 'Custom & Creative Design', desc: 'Stand out with modern & creative designs' },
    { icon: ZapIcon, title: 'Lightning Fast Performance', desc: 'Optimized for best performance' },
    { icon: Target, title: 'Conversion Focused Approach', desc: 'Designed to convert visitors to customers' },
    { icon: Shield, title: '1 Year Free Maintenance', desc: 'Free support for 1 year' },
    { icon: Users, title: '24/7 Expert Support', desc: 'Expert support anytime you need' },
    { icon: Globe, title: 'Affordable Pricing', desc: 'Best pricing in the market' },
  ]

  const serviceCategories = [
    { icon: ShoppingCart, title: 'E-Commerce Solutions', desc: 'Sell products seamlessly', color: 'from-violet-600 to-purple-700' },
    { icon: Monitor, title: 'CMS Websites', desc: 'Easy to manage & update', color: 'from-blue-600 to-indigo-700' },
    { icon: Monitor, title: 'Landing Pages', desc: 'High converting & effective', color: 'from-emerald-600 to-teal-700' },
    { icon: ZapIcon, title: 'Website Speed', desc: 'Optimized for best performance', color: 'from-orange-600 to-red-700' },
    { icon: Smartphone, title: 'Mobile Friendly', desc: 'Perfect view on every device', color: 'from-purple-600 to-violet-700' },
  ]

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={webDevImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-indigo-900/75 to-slate-900/85"></div>
      </div>

      {/* Transparent Background Text for visual effect */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="text-[12rem] sm:text-[16rem] lg:text-[24rem] font-black text-white tracking-wider select-none"
        >
          SUSEJ
        </motion.h1>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center md:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight text-white"
            >
              Transform Your Vision into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Digital Reality</span>
              <br />
              Launch Your Brand & Showcase Your Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed flex items-center justify-center md:justify-start gap-4"
            >
              <span className="text-white font-bold">Custom Design</span>
              <span className="text-indigo-400">|</span>
              <span className="text-white font-bold">Blazing Fast</span>
              <span className="text-indigo-400">|</span>
              <span className="text-white font-bold">SEO Optimized</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start"
            >
              <a
                href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27d%20like%20to%20discuss%20my%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-extrabold flex items-center justify-center gap-2 hover:from-blue-700 hover:to-indigo-800 transition-all shadow-xl hover:scale-105"
              >
                Get Started <ArrowRight size={20} />
              </a>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white/20 transition-all rounded-full text-lg font-bold flex items-center justify-center gap-2"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-white/20 bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    <img
                      src={carouselItems[currentSlide].image}
                      alt={carouselItems[currentSlide].title}
                      className="w-full h-72 sm:h-80 md:h-[32rem] object-cover object-left"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-2">
                        {carouselItems[currentSlide].title}
                      </h3>
                      <p className="text-white/90 mb-4 text-sm md:text-base">
                        {carouselItems[currentSlide].description}
                      </p>
                      <a
                        href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27m%20interested%20in%20this%20blog%3A%20${encodeURIComponent(carouselItems[currentSlide].title)}"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-white text-blue-700 rounded-full font-bold hover:bg-blue-50 transition-all shadow-lg"
                      >
                        Learn More
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 text-slate-700 p-2 rounded-full shadow-xl transition-all hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-blue-50 text-slate-700 p-2 rounded-full shadow-xl transition-all hover:scale-110"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      currentSlide === index ? 'bg-gradient-to-r from-blue-400 to-emerald-400 w-10' : 'bg-white/40 w-4'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Why Choose Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="corporate-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center">
                    <item.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-extrabold text-white">{item.title}</h3>
                </div>
                <p className="text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center corporate-card p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
              <div className={`${index === 0 ? 'text-blue-400' : index === 1 ? 'text-indigo-400' : index === 2 ? 'text-emerald-400' : 'text-violet-400'} mb-3`}>
                <stat.icon size={36} className="mx-auto" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <CountUp end={stat.number} suffix={stat.label === 'Hours Support' ? '/7' : '+'} duration={3} />
              </div>
              <div className="text-white/80 font-medium text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Service Categories */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="grid md:grid-cols-5 gap-6 mb-16"
        >
          {serviceCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="corporate-card bg-gradient-to-br from-white/15 to-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl text-center"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <item.icon size={32} className="text-white" />
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-white/70">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="text-center"
        >
          <p className="text-white/70 mb-8 uppercase tracking-widest text-sm font-extrabold">Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}
                className="corporate-card bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 shadow-md flex items-center gap-3"
              >
                <tech.icon className={tech.color.replace('600', '400')} size={28} />
                <span className="font-extrabold text-white text-lg">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
