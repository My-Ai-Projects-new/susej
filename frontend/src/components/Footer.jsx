import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook, ArrowRight } from 'lucide-react'
import susejLogo from '../images/susej_logo.png'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-100 pt-24 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-6">
              <img src={susejLogo} alt="SUSEJ SOLUTIONS" className="h-16 object-contain" />
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-white">SUSEJ SOLUTIONS</h3>
                <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider">Private Limited</div>
              </div>
            </div>
            <p className="text-slate-400 mb-8 leading-relaxed text-lg">
              Building Smart Software. Powering Intelligent Businesses. Transforming careers through premium training programs and innovative technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/susejsolutions/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-blue-600 border border-slate-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-900/20">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/susejsolutions/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 border border-slate-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-purple-900/20">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591307076606" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800 hover:bg-blue-700 border border-slate-700 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-900/20">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>{item}</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Services</h4>
            <ul className="space-y-4">
              {['Web Development', 'AI Solutions', 'Mobile Apps', 'E-commerce', 'Payment Gateways'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/services" 
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>{item}</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Career */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Career</h4>
            <ul className="space-y-4">
              {['Internship', 'Apply Job'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Apply Job' ? '/careers' : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-white transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span>{item}</span>
                    <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold mb-6 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <span className="text-slate-400 text-sm">Thambaram Mudichur, Chennai, Tamil Nadu</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-blue-400" />
                </div>
                <a href="tel:+919940671224" className="text-slate-400 hover:text-white transition-colors text-sm whitespace-nowrap">+91 99406 71224</a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-600/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <a href="mailto:susejsolutions@gmail.com" className="text-slate-400 hover:text-white transition-colors text-sm">susejsolutions@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm font-medium">&copy; 2026 SUSEJ SOLUTIONS PRIVATE LIMITED. All rights reserved.</p>
          <div className="flex items-center gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
