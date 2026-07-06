import React, { useState } from 'react'
import { motion } from 'framer-motion'
import CourseCards from '../components/CourseCards'
import { Calendar, CheckCircle, ChevronDown } from 'lucide-react'
import webDevImage from '../images/webdevelopement_image.png'

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
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={webDevImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-purple-900/70 to-slate-900/80"></div>
        </div>
        
        {/* Transparent Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[12rem] sm:text-[16rem] lg:text-[24rem] font-black text-white tracking-wider select-none"
          >
            COURSES
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-6">
            Courses
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Courses</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Industry-aligned training programs designed to launch your career in technology with hands-on projects and expert mentorship.
          </p>
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
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold uppercase tracking-wider mb-4">
              Curriculum
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Course <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Curriculum</span>
            </h2>
          </motion.div>

          {/* Course Toggle */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedCourse('fullstack')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedCourse === 'fullstack'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-500'
              }`}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setSelectedCourse('ai')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedCourse === 'ai'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-700 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-indigo-500'
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
                className="corporate-card rounded-2xl overflow-hidden border border-slate-100"
              >
                <button
                  onClick={() => setOpenMonth(openMonth === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${selectedCourse === 'fullstack' ? 'from-blue-600 to-indigo-700' : 'from-indigo-600 to-purple-700'} rounded-xl flex items-center justify-center`}>
                      <Calendar size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{item.month}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openMonth === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={28} className={`${selectedCourse === 'fullstack' ? 'text-blue-600' : 'text-indigo-600'}`} />
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
                      {item.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle size={20} className={`${selectedCourse === 'fullstack' ? 'text-blue-600' : 'text-indigo-600'} flex-shrink-0`} />
                          <span className="text-slate-700">{topic}</span>
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
