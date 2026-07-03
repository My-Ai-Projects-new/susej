import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, ArrowRight, X } from 'lucide-react'

const Blog = () => {
  const [expandedBlog, setExpandedBlog] = useState(null)
  
  const blogs = [
    {
      id: 1,
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is transforming the way we build and deploy software applications.',
      content: 'Artificial intelligence is revolutionizing software development. From AI-powered code completion to automated testing, developers are now more productive than ever. Tools like GitHub Copilot and CodeLlama are changing the game, allowing developers to write code faster and with fewer bugs.',
      date: 'Dec 15, 2024',
      author: 'Tech Team',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop'
    },
    {
      id: 2,
      title: 'Full Stack Development Roadmap 2024',
      excerpt: 'A comprehensive guide to becoming a full stack developer with the latest technologies and best practices.',
      content: 'To become a full stack developer in 2024, you need to learn HTML, CSS, JavaScript, React, Node.js, Python, Flask, PostgreSQL, and much more. This roadmap will guide you through every step of the journey from beginner to professional developer.',
      date: 'Dec 10, 2024',
      author: 'Dev Team',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
      id: 3,
      title: 'Getting Started with Python for Machine Learning',
      excerpt: 'Learn the fundamentals of Python and how to apply them to machine learning projects.',
      content: 'Python is the perfect language for machine learning. Start with the basics of Python, then move on to libraries like NumPy, Pandas, Scikit-learn, TensorFlow, and PyTorch. You\'ll be building your first ML models in no time!',
      date: 'Dec 5, 2024',
      author: 'AI Team',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'
    },
    {
      id: 4,
      title: 'React Best Practices for 2024',
      excerpt: 'Essential best practices every React developer should follow for maintainable, high-performance apps.',
      content: 'Follow these React best practices: use functional components with hooks, implement proper state management, optimize performance with memo and useMemo, write clean and readable code, and always test your components thoroughly.',
      date: 'Nov 28, 2024',
      author: 'Frontend Team',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop'
    },
    {
      id: 5,
      title: 'Building REST APIs with Flask',
      excerpt: 'Step-by-step guide to building robust REST APIs with Flask and deploying them to production.',
      content: 'Flask is a lightweight Python framework perfect for building REST APIs. Learn how to set up routes, handle requests, work with databases, add authentication, and deploy your API to production platforms like Heroku or AWS.',
      date: 'Nov 20, 2024',
      author: 'Backend Team',
      image: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&h=600&fit=crop'
    },
    {
      id: 6,
      title: 'DevOps and CI/CD Explained',
      excerpt: 'Understanding DevOps principles, continuous integration, and delivery pipelines.',
      content: 'DevOps is all about collaboration between development and operations teams. Learn about CI/CD pipelines with tools like Jenkins, GitHub Actions, GitLab CI, and how to automate your deployment process for faster, more reliable releases.',
      date: 'Nov 15, 2024',
      author: 'DevOps Team',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop'
    }
  ]

  return (
    <div className="pt-20">
      <section className="py-24 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-slate-900">Our <span className="gradient-text">Blog</span></h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">Latest insights, tutorials, and updates on technology, AI, and software development.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl overflow-hidden"
              >
                <img src={blog.image} alt={blog.title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-600 mb-3">
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{blog.title}</h3>
                  <p className="text-slate-700 mb-4">{blog.excerpt}</p>
                  <button
                    onClick={() => setExpandedBlog(blog)}
                    className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Modal */}
      <AnimatePresence>
        {expandedBlog && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
            onClick={() => setExpandedBlog(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img src={expandedBlog.image} alt={expandedBlog.title} className="w-full h-64 object-cover" />
                <button
                  onClick={() => setExpandedBlog(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-slate-100 transition-all"
                >
                  <X size={24} />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{expandedBlog.author}</span>
                  </div>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-900">{expandedBlog.title}</h2>
                <p className="text-slate-700 leading-relaxed text-lg">{expandedBlog.content}</p>
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a
                    href={`https://wa.me/916385823899?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27m%20interested%20in%20this%20blog:%20${encodeURIComponent(expandedBlog.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/30 transition-all"
                  >
                    Get in Touch <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Blog
