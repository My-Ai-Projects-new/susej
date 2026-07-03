import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, TrendingUp } from 'lucide-react'

const About = () => {
  const values = [
    { icon: Target, title: 'Excellence', desc: 'Striving for the highest quality in everything we do.' },
    { icon: Eye, title: 'Innovation', desc: 'Embracing cutting-edge technologies and creative solutions.' },
    { icon: Heart, title: 'Integrity', desc: 'Building trust through transparency and honesty.' },
    { icon: TrendingUp, title: 'Growth', desc: 'Committed to your success and continuous improvement.' },
  ]

  const industries = [
    'Education', 'Healthcare', 'Retail', 'Manufacturing', 'Finance', 'Government', 'Startups'
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-slate-900">
              About <span className="gradient-text">SUSEJ SOLUTIONS</span>
            </h1>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              We are a premium software development and training company dedicated to transforming ideas into intelligent digital solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story & CEO */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-space mb-6 text-slate-900">Our Story</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between academia and industry, SUSEJ SOLUTIONS has emerged as a leader in software development and corporate training. We combine technical excellence with strategic business thinking to deliver solutions that drive real results.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Our team of experts brings years of experience in building enterprise-grade applications, AI solutions, and training programs that have transformed the careers of hundreds of professionals and the businesses of numerous organizations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass-card rounded-3xl p-8 shadow-lg border border-slate-200"
            >
              <h3 className="text-2xl font-bold mb-6 text-slate-900">CEO Message</h3>
              <p className="text-slate-700 italic mb-4">
                "At SUSEJ SOLUTIONS, we believe in the power of technology to transform lives and businesses. Our mission is to make premium education and cutting-edge software solutions accessible to everyone."
              </p>
              <div className="font-semibold text-lg gradient-text">- Founder & CEO</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-slate-900">Our Core <span className="gradient-text">Values</span></h2>
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
                className="glass-card rounded-2xl p-8 text-center shadow-sm border border-slate-200"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-slate-900">Industries We <span className="gradient-text">Serve</span></h2>
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
                className="glass-card rounded-2xl p-6 text-center cursor-pointer border border-slate-200"
              >
                <div className="font-semibold text-slate-800">{industry}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
