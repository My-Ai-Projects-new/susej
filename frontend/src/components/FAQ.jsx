import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer premium web development, AI & LLM solutions, mobile apps, e-commerce, custom software, and more!',
  },
  {
    question: 'Do you offer free demos?',
    answer: 'Yes! We offer free demos before you make any payment. Contact us to schedule yours!',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary by scope, but most are delivered in 2-12 weeks. We always adhere to strict deadlines!',
  },
  {
    question: 'What about post-delivery support?',
    answer: 'We provide dedicated 24/7 support and maintenance services to keep your solutions running smoothly.',
  },
  {
    question: 'Do you also offer internship programs?',
    answer: 'Yes! We offer comprehensive internship programs in Full Stack Development and AI with real-world projects and mentorship!',
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="text-slate-600 text-lg">Find answers to common questions about our services.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
              >
                <span className="text-lg font-semibold text-slate-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} className="text-indigo-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5"
                  >
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
