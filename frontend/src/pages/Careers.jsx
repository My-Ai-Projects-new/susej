import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Briefcase, Mail, Phone, User, FileText, MessageSquare, Send, Upload } from 'lucide-react'

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobRole: '',
    resumeLink: '',
    message: '',
  })
  const [selectedFile, setSelectedFile] = useState(null)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Build WhatsApp message
    const message = `
*New Job Application Received!*

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Phone:* ${formData.phone}
💼 *Job Role:* ${formData.jobRole}
📄 *Resume Link:* ${formData.resumeLink || 'Not provided'}
${selectedFile ? `📁 *Uploaded File:* ${selectedFile.name} (${(selectedFile.size / 1024 / 1024).toFixed(2)} MB)` : ''}
💬 *Message:* ${formData.message || 'Not provided'}
    `.trim()

    // Encode for WhatsApp URL
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919940671224?text=${encodedMessage}`

    // Open WhatsApp in a tiny popup window
    window.open(whatsappUrl, '_blank', 'width=1,height=1,left=9999,top=9999,toolbar=no,location=no,status=no,menubar=no')
    
    // Show success message immediately
    setShowSuccess(true)
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>
        
        {/* Transparent Background Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="text-[10rem] sm:text-[14rem] lg:text-[20rem] font-black text-white tracking-wider select-none"
          >
            CAREERS
          </motion.h1>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-white">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Career</span> With Us
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join a dynamic team of innovators and help shape the future of technology.
          </p>
        </div>
      </section>

      {/* Apply Form Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="corporate-card bg-white rounded-3xl p-8 md:p-12 border border-slate-100 shadow-xl">
              {showSuccess ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                  >
                    <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
                    Thank You For Your Application!
                  </h2>
                  <p className="text-xl text-slate-600 mb-8">
                    Our team will reach you soon!
                  </p>
                  <button
                    onClick={() => {
                      setShowSuccess(false)
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        jobRole: '',
                        resumeLink: '',
                        message: '',
                      })
                      setSelectedFile(null)
                    }}
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold hover:opacity-95 transition-all"
                  >
                    Submit Another Application
                  </button>
                </div>
              ) : (
                <>
                  <div className="text-center mb-12">
                    <Briefcase size={48} className="mx-auto text-blue-600 mb-4" />
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
                      Apply For A Position
                    </h2>
                    <p className="text-slate-600 text-lg">
                      Fill out the form below and our team will get back to you soon!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label htmlFor="name" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <User size={16} /> Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="Enter your full name"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <Mail size={16} /> Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <Phone size={16} /> Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="+91 98765 43210"
                        />
                      </div>

                      {/* Job Role */}
                      <div className="space-y-2">
                        <label htmlFor="jobRole" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                          <Briefcase size={16} /> Job Role Applying For
                        </label>
                        <select
                          id="jobRole"
                          name="jobRole"
                          value={formData.jobRole}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        >
                          <option value="">Select a role</option>
                          <option value="Frontend Developer">Frontend Developer</option>
                          <option value="Backend Developer">Backend Developer</option>
                          <option value="Full Stack Developer">Full Stack Developer</option>
                          <option value="Mobile App Developer">Mobile App Developer</option>
                          <option value="UI/UX Designer">UI/UX Designer</option>
                          <option value="AI/ML Engineer">AI/ML Engineer</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* File Upload */}
                    <div className="space-y-2">
                      <label htmlFor="resumeFile" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <Upload size={16} /> Upload Resume/CV (From Folder)
                      </label>
                      <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-slate-300 rounded-xl bg-slate-50 hover:bg-slate-100 cursor-pointer transition-all group">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload size={32} className="text-slate-400 group-hover:text-blue-500 mb-2" />
                          <p className="text-sm text-slate-500 group-hover:text-blue-600">
                            <span className="font-bold">Click to upload</span> or drag and drop
                          </p>
                          <p className="text-xs text-slate-400 mt-1">PDF, DOC, DOCX (Max 10MB)</p>
                        </div>
                        <input
                          id="resumeFile"
                          type="file"
                          className="hidden"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileChange}
                        />
                      </label>
                      {selectedFile && (
                        <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 border border-blue-200 rounded-xl">
                          <FileText size={20} className="text-blue-600" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-slate-800 truncate">{selectedFile.name}</p>
                            <p className="text-xs text-slate-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setSelectedFile(null)}
                            className="text-slate-400 hover:text-red-500 transition-colors"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Resume Link */}
                    <div className="space-y-2">
                      <label htmlFor="resumeLink" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <FileText size={16} /> Or add Resume/CV Link (Google Drive, Dropbox, etc.)
                      </label>
                      <input
                        type="url"
                        id="resumeLink"
                        name="resumeLink"
                        value={formData.resumeLink}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="https://drive.google.com/..."
                      />
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="flex items-center gap-2 text-sm font-bold text-slate-700">
                        <MessageSquare size={16} /> Additional Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                        placeholder="Tell us about yourself, your experience, or anything else we should know..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                    >
                      Send Application <Send size={18} />
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Careers
