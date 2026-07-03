import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Server, Database, Brain, Globe } from 'lucide-react'

const techCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    techs: ['React', 'Tailwind', 'JavaScript', 'HTML', 'CSS']
  },
  {
    title: 'Backend',
    icon: Server,
    techs: ['Python', 'Flask', 'REST API']
  },
  {
    title: 'Database',
    icon: Database,
    techs: ['PostgreSQL', 'SQLite']
  },
  {
    title: 'AI',
    icon: Brain,
    techs: ['OpenAI', 'LLMs', 'Prompt Engineering', 'RAG', 'AI Agents']
  },
  {
    title: 'Deployment',
    icon: Globe,
    techs: ['Linux', 'Docker', 'Nginx', 'Google Cloud', 'Azure']
  }
]

const TechStack = () => {
  return (
    <section id="techstack" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Our <span className="gradient-text">Tech Stack</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Powered by cutting-edge technologies for modern solutions.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mb-6">
                <category.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.techs.map((tech, i) => (
                  <span key={i} className="px-4 py-2 bg-white/10 rounded-full text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
