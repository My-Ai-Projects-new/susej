import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CourseCards from '../components/CourseCards'
import { Calendar, CheckCircle, ChevronDown } from 'lucide-react'

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState('fullstack')
  const [openMonth, setOpenMonth] = useState(null)

  const fullStackCurriculum = [
    {
      month: 'Month 1',
      topics: [
        'Introduction to Programming',
        'Python Fundamentals',
        'Object Oriented Programming',
        'Data Structures',
        'HTML & CSS',
        'JavaScript Basics',
        'Git & GitHub'
      ]
    },
    {
      month: 'Month 2',
      topics: [
        'React.js Fundamentals',
        'State Management',
        'Flask Framework',
        'REST API Development',
        'PostgreSQL Database',
        'Authentication & Authorization'
      ]
    },
    {
      month: 'Month 3',
      topics: [
        'Advanced React Patterns',
        'Deployment & DevOps',
        'Mini Project',
        'Main Project',
        'Resume Building',
        'Interview Preparation',
        'Portfolio Development'
      ]
    }
  ]

  const aiCurriculum = [
    {
      month: 'Month 1',
      topics: [
        'Introduction to AI & ML',
        'Python for Data Science',
        'NumPy & Pandas',
        'Data Visualization',
        'Statistics Fundamentals',
        'Linear Algebra',
        'Git & GitHub'
      ]
    },
    {
      month: 'Month 2',
      topics: [
        'Machine Learning Algorithms',
        'Supervised Learning',
        'Unsupervised Learning',
        'Deep Learning Basics',
        'Neural Networks',
        'TensorFlow & PyTorch'
      ]
    },
    {
      month: 'Month 3',
      topics: [
        'NLP Fundamentals',
        'Generative AI & LLMs',
        'Prompt Engineering',
        'RAG Systems',
        'AI Agents',
        'Mini Project',
        'Main Project',
        'Resume Building',
        'Interview Preparation'
      ]
    }
  ]

  const curriculum = selectedCourse === 'fullstack' ? fullStackCurriculum : aiCurriculum

  return (
    <div className="pt-20">
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-slate-900">Premium <span className="gradient-text">Courses</span></h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">Industry-aligned training programs designed to launch your career in technology with hands-on projects and expert mentorship.</p>
        </div>
      </section>

      <CourseCards />

      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-slate-900">Course <span className="gradient-text">Curriculum</span></h2>
          </motion.div>

          {/* Course Toggle */}
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setSelectedCourse('fullstack')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedCourse === 'fullstack'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-500'
              }`}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setSelectedCourse('ai')}
              className={`px-8 py-3 rounded-xl font-semibold transition-all ${
                selectedCourse === 'ai'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-purple-500'
              }`}
            >
              Artificial Intelligence
            </button>
          </div>

          <div className="space-y-6">
            {curriculum.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenMonth(openMonth === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                      <Calendar size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-90">{item.month}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openMonth === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={28} className="text-accent" />
                  </motion.div>
                </button>

                {openMonth === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-8 pb-6"
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {item.topics.map((topic, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle size={20} className="text-accent flex-shrink-0" />
                          <span className="text-slate-70">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Courses
