import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle, ChevronDown } from 'lucide-react'
import webDevImage from '../images/webdevelopement_image.png'
import appDevImage from '../images/app-development.avif'
import industryTrainingImage from '../images/industry training image.jpg'
import realtimeProjectsImage from '../images/realtime projects_image.jpg'
import internshipCertificateImage from '../images/internship image.jpg'
import miniProjectImage from '../images/mini project.jpg'
import mainProjectImage from '../images/mainprojecrimage.jpg'
import documentationImage from '../images/documentation_image.jpg'
import resumeBuildingImage from '../images/resume _image.avif'
import githubPortfolioImage from '../images/github image.jpg'
import interviewPreparationImage from '../images/interview preparation image.jpg'

const Internship = () => {
  const [selectedTrack, setSelectedTrack] = useState('fullstack')
  const [openMonth, setOpenMonth] = useState(null)

  const benefits = [
    {
      image: industryTrainingImage,
      title: 'Industry Training',
      description: 'Real-world industry experience with live projects',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      image: realtimeProjectsImage,
      title: 'Real Projects',
      description: 'Work on actual client projects and build your portfolio',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      image: internshipCertificateImage,
      title: 'Internship Certificate',
      description: 'Recognized certificate upon successful completion',
      color: 'from-emerald-600 to-teal-700'
    },
    {
      image: miniProjectImage,
      title: 'Mini Project',
      description: 'Build a comprehensive mini project from scratch',
      color: 'from-violet-600 to-fuchsia-700'
    },
    {
      image: mainProjectImage,
      title: 'Main Project',
      description: 'Develop enterprise-grade main project',
      color: 'from-cyan-600 to-blue-700'
    },
    {
      image: documentationImage,
      title: 'Documentation',
      description: 'Learn professional project documentation',
      color: 'from-orange-600 to-red-700'
    },
    {
      image: resumeBuildingImage,
      title: 'Resume Building',
      description: 'Professional resume and LinkedIn optimization',
      color: 'from-emerald-600 to-green-700'
    },
    {
      image: githubPortfolioImage,
      title: 'GitHub Portfolio',
      description: 'Build an impressive GitHub portfolio',
      color: 'from-indigo-600 to-purple-700'
    },
    {
      image: interviewPreparationImage,
      title: 'Interview Preparation',
      description: 'Mock interviews and interview guidance',
      color: 'from-blue-600 to-cyan-700'
    },
  ]

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

  const curriculum = selectedTrack === 'fullstack' ? fullStackCurriculum : aiCurriculum

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={webDevImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-violet-900/70 to-slate-900/80"></div>
        </div>
        
        {/* Transparent Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[12rem] sm:text-[16rem] lg:text-[24rem] font-black text-white tracking-wider select-none"
          >
            INTERNSHIP
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-6">
            Internship
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Program</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Kickstart your career with our comprehensive internship program featuring real projects and expert mentorship.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold uppercase tracking-wider mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
              Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Benefits</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="corporate-card rounded-2xl overflow-hidden shadow-xl border border-slate-100"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-extrabold mb-2 text-slate-900">{benefit.title}</h3>
                  <p className="text-slate-700">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
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
              Internship <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Curriculum</span>
            </h2>
          </motion.div>

          {/* Track Toggle */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button
              onClick={() => setSelectedTrack('fullstack')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedTrack === 'fullstack'
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg'
                  : 'bg-white border border-slate-200 text-slate-700 hover:border-blue-500'
              }`}
            >
              Full Stack Development
            </button>
            <button
              onClick={() => setSelectedTrack('ai')}
              className={`px-8 py-3 rounded-xl font-bold transition-all ${
                selectedTrack === 'ai'
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
                className="corporate-card rounded-2xl overflow-hidden border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpenMonth(openMonth === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${selectedTrack === 'fullstack' ? 'from-blue-600 to-indigo-700' : 'from-indigo-600 to-purple-700'} rounded-xl flex items-center justify-center`}>
                      <Calendar size={24} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-slate-900">{item.month}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openMonth === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown size={28} className={`${selectedTrack === 'fullstack' ? 'text-blue-600' : 'text-indigo-600'}`} />
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
                          <CheckCircle size={20} className={`${selectedTrack === 'fullstack' ? 'text-blue-600' : 'text-indigo-600'} flex-shrink-0`} />
                          <span className="text-slate-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <a
              href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%20want%20to%20apply%20for%20internship"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-600 to-emerald-700 text-white rounded-full font-bold text-lg hover:from-blue-700 hover:to-emerald-800 transition-all shadow-lg"
            >
              Apply for Internship <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Internship
