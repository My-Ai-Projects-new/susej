import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'

const CourseCards = () => {
  const courses = [
    {
      title: 'Full Stack Development',
      duration: '3 Months',
      features: ['Corporate SDLC', 'Agile', 'Jira', 'Python', 'React', 'Flask', 'PostgreSQL', 'REST APIs', 'Authentication', 'Deployment', 'GitHub', 'Mini Project', 'Real Time Project', 'Main Project', 'Certificate', 'Documentation', 'Hands-on Training'],
      color: 'from-indigo-600 to-purple-600',
      price: '₹7,500',
    },
    {
      title: 'Artificial Intelligence Fundamentals',
      duration: '3 Months',
      features: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Prompt Engineering', 'Generative AI', 'LLMs', 'RAG', 'AI Agents', 'Vector Database', 'Real Projects', 'Case Studies', 'Mini Project', 'Certificate', 'Career Guidance'],
      color: 'from-purple-600 to-indigo-600',
      price: '₹9,000',
    },
  ]

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Our <span className="gradient-text">Premium Courses</span></h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Industry-aligned training programs designed to launch your career in technology.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-3xl overflow-hidden shadow-xl border border-slate-100"
            >
              <div className={`p-8 bg-gradient-to-r ${course.color}`}>
                <h3 className="text-2xl font-bold mb-4 text-white">{course.title}</h3>
                <div className="text-4xl font-bold text-white">{course.price}</div>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-2 gap-2 mb-8">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-indigo-500 flex-shrink-0" />
                      <span className="text-slate-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27m%20interested%20in%20the%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all flex items-center justify-center gap-2 shadow-lg"
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
