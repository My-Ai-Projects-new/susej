import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, TrendingUp } from 'lucide-react'
import webDevImage from '../images/webdevelopement_image.png'

const About = () => {
  const values = [
    { icon: Target, title: 'Excellence', desc: 'Striving for the highest quality in everything we do.', color: 'from-blue-600 to-indigo-700', bg: 'bg-blue-50', text: 'text-blue-600' },
    { icon: Eye, title: 'Innovation', desc: 'Embracing cutting-edge technologies and creative solutions.', color: 'from-indigo-600 to-purple-700', bg: 'bg-indigo-50', text: 'text-indigo-600' },
    { icon: Heart, title: 'Integrity', desc: 'Building trust through transparency and honesty.', color: 'from-emerald-600 to-teal-700', bg: 'bg-emerald-50', text: 'text-emerald-600' },
    { icon: TrendingUp, title: 'Growth', desc: 'Committed to your success and continuous improvement.', color: 'from-purple-600 to-violet-700', bg: 'bg-purple-50', text: 'text-purple-600' },
  ]

  const industries = [
    'Education', 'Healthcare', 'Retail', 'Manufacturing', 'Finance', 'Government', 'Startups'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={webDevImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>
        </div>
        
        {/* Transparent Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[12rem] sm:text-[16rem] lg:text-[24rem] font-black text-white tracking-wider select-none"
          >
            ABOUT
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">SUSEJ SOLUTIONS</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We are a premium software development and training company dedicated to transforming ideas into intelligent digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & CEO */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">Our Story</h2>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Founded with a vision to bridge the gap between academia and industry, SUSEJ SOLUTIONS has emerged as a leader in software development and corporate training. We combine technical excellence with strategic business thinking to deliver solutions that drive real results.
              </p>
              <p className="text-slate-700 leading-relaxed text-lg">
                Our team of experts brings years of experience in building enterprise-grade applications, AI solutions, and training programs that have transformed the careers of hundreds of professionals and the businesses of numerous organizations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="corporate-card rounded-2xl p-8 shadow-xl border border-slate-100"
            >
              <h3 className="text-2xl font-extrabold mb-6 text-slate-900">CEO Message</h3>
              <p className="text-slate-700 italic mb-4 text-lg">
                "At SUSEJ SOLUTIONS, we believe in the power of technology to transform lives and businesses. Our mission is to make premium education and cutting-edge software solutions accessible to everyone."
              </p>
              <div className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">- Founder & CEO</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold uppercase tracking-wider mb-4">
              Core Values
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Values</span></h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="corporate-card rounded-2xl p-8 text-center border border-slate-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{value.title}</h3>
                <p className="text-slate-700">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-bold uppercase tracking-wider mb-4">
              Industries
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">Serve</span></h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="corporate-card rounded-2xl p-6 text-center cursor-pointer border border-slate-100"
              >
                <div className="font-bold text-slate-800">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
