import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, FileText, Award, Code, GitBranch, FileCode, User, MessageSquare } from 'lucide-react'

const Internship = () => {
  const benefits = [
    { icon: Briefcase, title: 'Industry Training', desc: 'Real-world industry experience with live projects' },
    { icon: FileText, title: 'Real Projects', desc: 'Work on actual client projects and build your portfolio' },
    { icon: Award, title: 'Internship Certificate', desc: 'Recognized certificate upon successful completion' },
    { icon: Code, title: 'Mini Project', desc: 'Build a comprehensive mini project from scratch' },
    { icon: FileCode, title: 'Main Project', desc: 'Develop enterprise-grade main project' },
    { icon: FileText, title: 'Documentation', desc: 'Learn professional project documentation' },
    { icon: User, title: 'Resume Building', desc: 'Professional resume and LinkedIn optimization' },
    { icon: GitBranch, title: 'GitHub Portfolio', desc: 'Build an impressive GitHub portfolio' },
    { icon: MessageSquare, title: 'Interview Preparation', desc: 'Mock interviews and placement guidance' },
    { icon: User, title: 'Mentorship', desc: '1-on-1 mentorship from industry experts' },
    { icon: Briefcase, title: 'Job Assistance', desc: 'Placement support and job referrals' },
  ]

  return (
    <div className="pt-20">
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-slate-900">Internship <span className="gradient-text">Program</span></h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">Kickstart your career with our comprehensive internship program featuring real projects, expert mentorship, and placement assistance.</p>
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
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4 text-slate-900">Internship <span className="gradient-text">Benefits</span></h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl p-6 shadow-sm border border-slate-200"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{benefit.title}</h3>
                <p className="text-slate-600 text-sm">{benefit.desc}</p>
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
              className="px-10 py-4 bg-gradient-to-r from-green-500 to-pink-500 text-white rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-green-500/30 transition-all"
            >
              Apply for Internship
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Internship
