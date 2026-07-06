import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import webDevImage from '../images/webdevelopement_image.png'
import appDevImage from '../images/app-development.avif'

const CourseCards = () => {
  const courses = [
    {
      image: webDevImage,
      title: 'Full Stack Development',
      duration: '3 Months',
      features: ['Corporate SDLC', 'Agile', 'Jira', 'Python', 'React', 'Flask', 'PostgreSQL', 'REST APIs', 'Authentication', 'Deployment', 'GitHub', 'Mini Project', 'Real Time Project', 'Main Project', 'Certificate', 'Documentation', 'Hands-on Training'],
      color: 'from-blue-600 to-indigo-700',
      price: '₹7,500',
    },
    {
      image: appDevImage,
      title: 'Artificial Intelligence Fundamentals',
      duration: '3 Months',
      features: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Prompt Engineering', 'Generative AI', 'LLMs', 'RAG', 'AI Agents', 'Vector Database', 'Real Projects', 'Case Studies', 'Mini Project', 'Certificate', 'Career Guidance'],
      color: 'from-indigo-600 to-purple-700',
      price: '₹9,000',
    },
  ]

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold uppercase tracking-wider mb-4">
            Courses
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">Our <span className="gradient-text">Premium Courses</span></h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">Industry-aligned training programs designed to launch your career in technology.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="corporate-card rounded-2xl overflow-hidden shadow-xl border border-slate-100"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-extrabold mb-4 text-slate-900">{course.title}</h3>
                <div className="text-4xl font-extrabold gradient-text mb-8">{course.price}</div>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-blue-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27m%20interested%20in%20the%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 bg-gradient-to-r ${course.color} text-white rounded-xl font-bold hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg`}
                >
                  Enroll Now <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CourseCards
