import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import { Clock, ArrowRight } from 'lucide-react'
import schoolManagementImage from '../images/school-management-software-service_image.png'


const Home = () => {
  const testimonials = [
    { name: 'Rahul Sharma', role: 'Business Owner', quote: 'SUSEJ SOLUTIONS transformed our business online. Excellent work! The new website has doubled our leads in just one month.', rating: 5 },
    { name: 'Priya Nair', role: 'E-commerce Entrepreneur', quote: 'Professional team, delivered on time. Highly recommend! Our new online store is fast, secure, and beautiful.', rating: 5 },
    { name: 'Arun Kumar', role: 'Startup Founder', quote: 'Best AI automation solution for my business. Worth every rupee! We saved hundreds of hours of manual work.', rating: 5 },
  ]

  return (
    <>
      <Hero />
      <Services />
      {/* Our Projects Section */}
      <section id="our-projects" className="py-24 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-blue-300 text-sm font-bold uppercase tracking-wider mb-4">
              Our Projects
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
              Products We're Building
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Innovative solutions designed to transform your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="corporate-card bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-orange-600 text-white rounded-full text-sm font-bold mb-6 w-fit">
                    <Clock size={16} />
                    Launching Soon
                  </div>
                  <h3 className="text-3xl md:text-4xl font-extrabold mb-4">
                    School Management System
                  </h3>
                  <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                    A comprehensive platform to manage schools, students, teachers, and administrative tasks efficiently. Streamline admissions, attendance, exams, and more in one place.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Student Management</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Attendance Tracking</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Exam Management</span>
                    <span className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">Fee Management</span>
                  </div>
                  <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-indigo-800 transition-all shadow-lg">
                    Get Notified <ArrowRight size={20} />
                  </button>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 flex items-center justify-center p-8 md:p-12 overflow-hidden">
                  <div className="text-center">
                    <img 
                      src={schoolManagementImage} 
                      alt="School Management System" 
                      className="max-w-full max-h-80 object-contain mb-4 transition-transform duration-500 hover:scale-105"
                    />
                    <p className="text-slate-300 text-sm uppercase tracking-widest font-semibold">Coming Q4 2026</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold uppercase tracking-wider mb-4">
              Client Feedback
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear directly from our satisfied clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="corporate-card bg-white rounded-2xl p-8 border border-slate-100 shadow-xl"
              >
                <div className="text-yellow-500 mb-6 flex gap-1">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="text-slate-700 italic mb-8 leading-relaxed text-lg">"{testimonial.quote}"</p>
                <div className="font-extrabold text-slate-900 text-xl">{testimonial.name}</div>
                <div className="text-slate-500 font-medium">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </>
  )
}

export default Home
