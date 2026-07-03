import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import susejLogo from '../images/susej_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Courses', path: '/courses' },
    { name: 'Internship', path: '/internship' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-card shadow-lg border-b border-slate-200' : 'glass-card'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={susejLogo} alt="SUSEJ SOLUTIONS" className="h-20 object-contain" />
            <div>
              <div className="text-2xl font-bold font-space gradient-text">SUSEJ SOLUTIONS</div>
              <div className="text-xs text-slate-500 font-medium -mt-1">Private Limited</div>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-slate-700 hover:text-green-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27d%20like%20a%20free%20quote"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-violet-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-green-500/30 transition-all"
            >
              Get Free Quote
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card border-t border-slate-200"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-700 hover:text-green-600 transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27d%20like%20a%20free%20quote"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block text-center py-3 bg-gradient-to-r from-green-500 to-violet-600 text-white rounded-xl font-semibold"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
