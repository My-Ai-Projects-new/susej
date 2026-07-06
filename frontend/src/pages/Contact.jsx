import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import webDevImage from '../images/webdevelopement_image.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = encodeURIComponent(
      `Hi SUSEJ SOLUTIONS,

I would like to contact you.

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interested In: ${formData.course}

Message:
${formData.message}

Thanks!`
    )
    window.open(`https://wa.me/919940671224?text=${whatsappMessage}`, '_blank')
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={webDevImage} alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-emerald-900/70 to-slate-900/80"></div>
        </div>
        
        {/* Transparent Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[12rem] sm:text-[16rem] lg:text-[24rem] font-black text-white tracking-wider select-none"
          >
            CONTACT
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-white text-sm font-bold uppercase tracking-wider mb-6">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Transform Your Digital Presence?</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join hundreds of successful businesses. Let's discuss your project today and get a free demo before you pay.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-extrabold mb-8 text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="corporate-card border border-slate-100 rounded-2xl p-6 flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900">Address</h3>
                    <p className="text-slate-700">Thambaram Mudichur, Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="corporate-card border border-slate-100 rounded-2xl p-6 flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900">Phone / WhatsApp</h3>
                    <a href="https://wa.me/919940671224" className="text-slate-700 hover:text-blue-700 transition-all font-medium">+91 9940671224</a>
                  </div>
                </div>
                <div className="corporate-card border border-slate-100 rounded-2xl p-6 flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900">Email</h3>
                    <p className="text-slate-700">susejsolutions@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="corporate-card border border-slate-100 rounded-2xl p-8">
                <h2 className="text-2xl font-extrabold mb-6 text-slate-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Interested In</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                    >
                      <option value="">Select an option</option>
                      <option value="web-dev">Web Development</option>
                      <option value="ai">AI & LLM Solutions</option>
                      <option value="mobile">Mobile Apps</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="course">Training / Courses</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 transition-all resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-emerald-700 text-white rounded-xl font-bold text-lg hover:from-blue-700 hover:to-emerald-800 transition-all flex items-center justify-center gap-2 shadow-lg"
                  >
                    Send Message <Send size={20} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <span className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-blue-700 text-sm font-bold uppercase tracking-wider mb-4">
              Location
            </span>
            <h2 className="text-3xl font-extrabold mb-4 text-slate-900">Our Location</h2>
            <p className="text-xl text-slate-700">Thambaram Mudichur, Chennai, Tamil Nadu</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.768934619507!2d80.07342411482075!3d12.924892290887985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525dd5e9d966a7%3A0x16d0e53216f2c83a!2sMudichur%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1720000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
