import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Clock, IndianRupee } from 'lucide-react'
import webDevImage from '../images/webdevelopement_image.png'
import appDevImage from '../images/app-development.avif'
import mobileAppImage from '../images/mobile app development image.jpg'
import websiteMaintenanceImage from '../images/website-maintenance-image.webp'
import ecomImage from '../images/E Commerce Website_image.jpg'
import llmImage from '../images/llm developement image.png'
import paymentImage from '../images/paymentgateway_image.jpg'

const services = [
  {
    image: webDevImage,
    title: 'Web Design & Development',
    description: 'Custom, responsive, and SEO-optimized websites built for maximum conversion and user engagement.',
    features: [
      'Modern UI/UX Design',
      'Full Responsive Layout',
      'SEO-friendly Code',
      'Lightning Fast Speed',
    ],
    price: '₹20,000+',
    deliveryTime: '10-14 Days',
    color: 'from-blue-600 to-indigo-700',
    textColor: 'text-blue-600',
  },
  {
    image: llmImage,
    title: 'Gen AI & LLM Solutions',
    description: 'Harness the power of Generative AI with custom LLM and RAG integrations for intelligent automation.',
    features: [
      'Custom RAG Chatbots',
      'LLM Fine-tuning (GPT, Llama)',
      'AI Agentic Workflows',
      'AI-Powered Automation',
    ],
    price: '₹50,000+',
    deliveryTime: '20-30 Days',
    color: 'from-indigo-600 to-purple-700',
    textColor: 'text-indigo-600',
  },
  {
    image: websiteMaintenanceImage,
    title: 'Software Development',
    description: 'Robust and scalable custom software solutions tailored to your specific business requirements.',
    features: [
      'Custom Admin Panels',
      'ERP/CRM Solutions',
      'SaaS Product Development',
      'API Integrations',
    ],
    price: '₹30,000+',
    deliveryTime: '15-25 Days',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-600',
  },
  {
    image: ecomImage,
    title: 'E-commerce Development',
    description: 'Feature-rich online stores with secure payment gateways and seamless shopping experience.',
    features: [
      'Product Management',
      'Inventory Control',
      'Multi-payment Integration',
      'Order Tracking',
    ],
    price: '₹20,000+',
    deliveryTime: '10-14 Days',
    color: 'from-violet-600 to-fuchsia-700',
    textColor: 'text-violet-600',
  },
  {
    image: mobileAppImage,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps for iOS and Android with intuitive user interfaces.',
    features: [
      'React Native/Flutter',
      'User-friendly Interface',
      'Push Notifications',
      'API Integration',
    ],
    price: '₹30,000+',
    deliveryTime: '25-40 Days',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-600',
  },
  {
    image: paymentImage,
    title: 'Payment Gateway Integration',
    description: 'Seamless and secure payment gateway setups with support for multiple payment methods.',
    features: [
      'Razorpay/Stripe Setup',
      'Subscription Models',
      'Auto-invoicing',
      'Multi-currency Support',
    ],
    price: '₹3,000+',
    deliveryTime: '1-2 Days',
    color: 'from-orange-600 to-red-700',
    textColor: 'text-orange-600',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-28 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-24"
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Our Expertise
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-slate-900">
            Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Digital Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end technology services designed to accelerate your business growth and drive meaningful digital transformation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="corporate-card bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="w-full h-64 sm:h-72 overflow-hidden relative bg-slate-100 flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>

              <div className="p-8">
                {/* Title & Description */}
                <h3 className="text-2xl font-extrabold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-7 leading-relaxed">{service.description}</p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} className={service.textColor} />
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-slate-700">
                        <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></span>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Delivery */}
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mb-7">
                  <div className="flex items-center gap-2">
                    <IndianRupee size={16} className={service.textColor} />
                    <div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Starting From</p>
                      <p className={`text-2xl font-extrabold ${service.textColor}`}>{service.price}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={16} className={service.textColor} />
                    <div className="text-right">
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Delivery Time</p>
                      <p className="font-bold text-slate-800">{service.deliveryTime}</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 bg-gradient-to-r ${service.color} text-white rounded-xl font-bold hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl`}
                >
                  Get Started <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
