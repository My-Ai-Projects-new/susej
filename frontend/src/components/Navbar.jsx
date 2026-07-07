
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import susejLogo from '../images/susej_logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isCareerOpen, setIsCareerOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)

    if (location.hash === '#our-projects') {
      setTimeout(() => {
        const element = document.getElementById('our-projects')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [location])

  const scrollToProducts = () => {
    setIsOpen(false)

    if (location.pathname === '/') {
      const element = document.getElementById('our-projects')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    } else {
      navigate('/#our-projects')
    }
  }

  const navItems = [
    { name: 'Home', path: '/', isAnchor: false },
    { name: 'About', path: '/about', isAnchor: false },
    { name: 'Services', path: '/services', isAnchor: false },
    { name: 'Our Products', path: '#our-projects', isAnchor: true },
    { name: 'Blog', path: '/blog', isAnchor: false },
    { name: 'Contact', path: '/contact', isAnchor: false },
  ]

  const careerItems = [
    { name: 'Internship', path: '/internship' },
    { name: 'Apply Job', path: '/careers' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl border-b border-slate-100' : 'bg-white/95 border-b border-slate-100'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <img src={susejLogo} alt="SUSEJ SOLUTIONS" className="h-20 object-contain" />
            <div>
              <div className="text-2xl font-extrabold tracking-tight text-slate-900">SUSEJ SOLUTIONS</div>
              <div className="text-xs text-slate-500 font-semibold -mt-1">Private Limited</div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6 ml-20 flex-1">
            {navItems.map((item) =>
              item.isAnchor ? (
                <button
                  key={item.name}
                  onClick={scrollToProducts}
                  className="text-slate-700 hover:text-blue-700 transition-colors font-semibold relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-slate-700 hover:text-blue-700 transition-colors font-semibold relative group whitespace-nowrap"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}

            <div className="relative group">
              <button
                onMouseEnter={() => setIsCareerOpen(true)}
                onMouseLeave={() => setIsCareerOpen(false)}
                className="flex items-center gap-1.5 text-slate-700 hover:text-blue-700 transition-colors font-semibold relative group"
              >
                Career <ChevronDown size={16} />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {isCareerOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onMouseEnter={() => setIsCareerOpen(true)}
                    onMouseLeave={() => setIsCareerOpen(false)}
                    className="absolute top-full left-0 mt-3 w-56 bg-white shadow-2xl border border-slate-100 rounded-lg overflow-hidden"
                  >
                    {careerItems.map((item) => (
                      <Link key={item.name} to={item.path} className="block px-5 py-3.5 text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition-all">
                        <div className="flex items-center gap-3 font-medium">
                          <ChevronRight size={18} />
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27d%20like%20a%20free%20quote" target="_blank" rel="noopener noreferrer" className="corporate-btn px-7 py-3 rounded-full font-semibold">
              Get Free Quote
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800 p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-slate-100 shadow-xl">
            <div className="px-5 py-6 space-y-4">
              {navItems.map((item) =>
                item.isAnchor ? (
                  <button key={item.name} onClick={scrollToProducts} className="block w-full text-left text-slate-700 hover:text-blue-700 py-2.5 text-lg font-semibold">
                    {item.name}
                  </button>
                ) : (
                  <Link key={item.name} to={item.path} onClick={() => setIsOpen(false)} className="block text-slate-700 hover:text-blue-700 py-2.5 text-lg font-semibold">
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
