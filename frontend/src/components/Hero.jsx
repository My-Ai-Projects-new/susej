import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CountUp from 'react-countup'
import { Link } from 'react-router-dom'
import { Brain, Globe, Zap, Code, ChevronRight, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react'

// Import carousel images
import courseImage from '../images/course image.jpg'
import websiteMaintenanceImage from '../images/website-maintenance-image.webp'
import mobileAppImage from '../images/mobile app development image.jpg'
import appDevImage from '../images/app-development.avif'
import webDevImage from '../images/webdevelopement_image.png'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const carouselItems = [
    { image: courseImage, title: 'Premium Courses', description: 'Professional training in web development & AI' },
    { image: webDevImage, title: 'Web Development', description: 'Custom websites for your business growth' },
    { image: mobileAppImage, title: 'Mobile Apps', description: 'iOS & Android apps with modern design' },
    { image: appDevImage, title: 'AI Solutions', description: 'Smart automation with cutting-edge AI' },
    { image: websiteMaintenanceImage, title: 'Maintenance', description: '24/7 support & maintenance services' }
  ]

  const stats = [
    { number: 500, label: 'Happy Clients' },
    { number: 100, label: 'Projects Done' },
    { number: 15, label: 'Expert Team' },
    { number: 24, label: 'Hours Support' },
  ]

  const techs = [
    { name: 'React', icon: Code, color: 'text-green-500' },
    { name: 'Python', icon: Code, color: 'text-violet-600' },
    { name: 'Flask', icon: Globe, color: 'text-emerald-500' },
    { name: 'PostgreSQL', icon: Code, color: 'text-slate-600' },
    { name: 'OpenAI', icon: Brain, color: 'text-violet-500' },
    { name: 'Docker', icon: Code, color: 'text-green-600' },
  ]

  // Auto-scroll carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [carouselItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselItems.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scrolling Marquee */}
        <div className="w-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full mb-8 shadow-lg">
          <div className="whitespace-nowrap animate-marquee">
            <span className="inline-block px-4 text-lg font-semibold">
              🚀 School Management Software Launching Soon! 🚀 Contact: +91 9940671224 •
            </span>
            <span className="inline-block px-4 text-lg font-semibold">
              🚀 School Management Software Launching Soon! 🚀 Contact: +91 9940671224 •
            </span>
            <span className="inline-block px-4 text-lg font-semibold">
              🚀 School Management Software Launching Soon! 🚀 Contact: +91 9940671224 •
            </span>
          </div>
        </div>

        {/* Two Column Layout: Left Content + Right Carousel */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-space mb-6 leading-tight text-slate-900"
            >
              Grow Your Business with
              <br />
              <span className="gradient-text">Smart Digital Solutions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-slate-700 mb-10"
            >
              Premium web development, AI automation, and mobile apps tailored for your success in the digital era. Fast delivery, affordable pricing, and unmatched quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27d%20like%20a%20free%20demo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-green-500 to-violet-600 text-white rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-green-500/30 transition-all flex items-center justify-center gap-2"
              >
                Get Free Demo <ChevronRight size={20} />
              </a>
              <Link
                to="/services"
                className="px-8 py-4 bg-white border border-slate-200 text-slate-800 rounded-xl font-semibold text-lg hover:bg-slate-50 transition-all shadow-sm text-center"
              >
                Our Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Side: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                  >
                    <img
                      src={carouselItems[currentSlide].image}
                      alt={carouselItems[currentSlide].title}
                      className="w-full h-80 md:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {carouselItems[currentSlide].title}
                      </h3>
                      <p className="text-white/90 mb-4 text-sm md:text-base">
                        {carouselItems[currentSlide].description}
                      </p>
                      <a
                        href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27d%20like%20to%20enroll%20now!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-2 bg-gradient-to-r from-green-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/30 transition-all text-sm md:text-base"
                      >
                        Enroll Now
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-slate-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                >
                  <ChevronRightIcon size={24} />
                </button>
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center gap-3 mt-6">
                {carouselItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index ? 'bg-gradient-to-r from-green-500 to-violet-600 w-8' : 'bg-slate-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                <CountUp end={stat.number} suffix={stat.label === 'Hours Support' ? '/7' : '+'} duration={3} />
              </div>
              <div className="text-slate-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Technology Partners */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <p className="text-slate-600 mb-6 uppercase tracking-wider text-sm font-semibold text-center">Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-8">
            {techs.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                className="floating glass-card px-6 py-3 rounded-xl flex items-center gap-2 border border-slate-200"
                style={{ animationDelay: `${index * 0.5}s` }}
              >
                <tech.icon className={tech.color} size={24} />
                <span className="font-semibold text-slate-80">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
