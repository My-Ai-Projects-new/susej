import React from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Rocket, Bell } from 'lucide-react'

const NewsUpdates = () => {
  // Easy to update news data - or use Netlify CMS admin panel when deployed!
  const news = [
    {
      id: 1,
      title: 'School Management Software Launch',
      description: 'Our new school management software is launching soon! Streamline your school operations with our complete solution.',
      type: 'product',
      date: 'Coming Soon',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      title: 'New AI Features Added',
      description: 'We have added enhanced AI capabilities to all our products for better automation and efficiency.',
      type: 'update',
      icon: Bell,
      color: 'from-violet-500 to-purple-600'
    },
    {
      id: 3,
      title: 'New Training Programs',
      description: 'Check out our new internship and training programs in AI and Full Stack Development.',
      type: 'announcement',
      icon: Newspaper,
      color: 'from-green-500 to-emerald-600'
    }
  ]

  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
            Latest <span className="gradient-text">News & Updates</span>
          </h2>
          <p className="text-slate-700 text-lg">Stay updated with our latest products, features, and announcements.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className={`p-6 bg-gradient-to-r ${item.color}`}>
                <item.icon size={32} className="text-white mb-2" />
                <span className="text-white/90 text-sm font-medium">{item.date}</span>
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3 uppercase">
                  {item.type}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-700">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsUpdates
