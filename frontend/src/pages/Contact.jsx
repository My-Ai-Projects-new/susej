import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'

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
    window.open(`https://wa.me/916385823899?text=${whatsappMessage}`, '_blank')
    setFormData({ name: '', email: '', phone: '', course: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="pt-20">
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-space mb-6 text-slate-900">Ready to <span className="gradient-text">Transform Your Digital Presence?</span></h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">Join hundreds of successful businesses. Let's discuss your project today and get a free demo before you pay.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold font-space mb-8 text-slate-900">Contact Information</h2>
              <div className="space-y-6">
                <div className="glass-card border border-slate-200 rounded-2xl p-6 flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-800">Address</h3>
                    <p className="text-slate-600">Thambaram Mudichur, Chennai, Tamil Nadu, India</p>
                  </div>
                </div>
                <div className="glass-card border border-slate-200 rounded-2xl p-6 flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-800">Phone / WhatsApp</h3>
                    <a href="https://wa.me/919940671224" className="text-slate-600 hover:text-indigo-600 transition-colors">+91 9940671224</a>
                  </div>
                </div>
                <div className="glass-card border border-slate-200 rounded-2xl p-6 flex items-start gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1 text-slate-800">Email</h3>
                    <p className="text-slate-600">susejsolutions@gmail.com</p>
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
              <div className="glass-card border border-slate-200 rounded-3xl p-8 shadow-sm">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-slate-700">Interested In</label>
                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
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
                    <label className="block text-sm font-medium mb-2 text-slate-700">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-indigo-800 transition-all flex items-center justify-center gap-2 shadow-lg"
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
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold font-space mb-4 text-slate-900">Our Location</h2>
            <p className="text-xl text-slate-600">Thambaram Mudichur, Chennai, Tamil Nadu</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200"
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
