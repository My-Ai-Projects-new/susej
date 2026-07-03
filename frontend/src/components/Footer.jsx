import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react'
import susejLogo from '../images/susej_logo.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-pink-50 to-green-50 text-slate-900 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-0 mb-4">
              <img src={susejLogo} alt="SUSEJ SOLUTIONS" className="h-12 rounded-xl object-contain" />
              <h3 className="text-2xl font-bold font-space gradient-text">SUSEJ SOLUTIONS</h3>
            </div>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Building Smart Software. Powering Intelligent Businesses. Transforming careers through premium training programs.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/susejsolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-green-500 hover:text-white transition-colors shadow-sm">
                <Linkedin size={20} />
              </a>
              <a href="https://www.instagram.com/susejsolutions/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors shadow-sm">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61591307076606" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors shadow-sm">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-600 hover:text-green-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-slate-600 hover:text-green-600 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-green-600 transition-colors">Services</Link></li>
              <li><Link to="/courses" className="text-slate-600 hover:text-green-600 transition-colors">Courses</Link></li>
              <li><Link to="/internship" className="text-slate-600 hover:text-green-600 transition-colors">Internship</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-slate-600 hover:text-green-600 transition-colors">Web Development</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-green-600 transition-colors">AI Solutions</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-green-600 transition-colors">Mobile Apps</Link></li>
              <li><Link to="/services" className="text-slate-600 hover:text-green-600 transition-colors">E-commerce</Link></li>
              <li><Link to="/contact" className="text-slate-600 hover:text-green-600 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-slate-800">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span className="text-slate-600">Thambaram Mudichur, Chennai, Tamil Nadu, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-slate-600">+91 9940671224</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-green-500 flex-shrink-0" />
                <span className="text-slate-600">susejsolutions@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 text-center text-slate-500">
          <p>&copy; 2026 SUSEJ SOLUTIONS PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
