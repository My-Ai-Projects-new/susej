import React from 'react'
import { motion } from 'framer-motion'
import { Code, Bot, ShoppingCart, Smartphone, Server, Palette, CheckCircle, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Design & Development',
    description: 'Custom, responsive, and SEO-optimized websites built for conversion.',
    features: [
      'Modern UI/UX Design',
      'Full Responsive Layout',
      'SEO-friendly Code',
      'Fast Loading Speed',
    ],
    price: '₹20,000+',
    deliveryTime: '10-14 Days',
    color: 'from-green-500 to-violet-600',
  },
  {
    icon: Bot,
    title: 'Gen AI & LLM Solutions',
    description: 'Harness the power of Generative AI with custom LLM and RAG integrations.',
    features: [
      'Custom RAG Chatbots',
      'LLM Fine-tuning (GPT, Llama)',
      'AI Agentic Workflows',
      'AI-Powered Automation',
    ],
    price: '₹50,000+',
    deliveryTime: '20-30 Days',
    color: 'from-violet-600 to-green-500',
  },
  {
    icon: Palette,
    title: 'Software Development',
    description: 'Robust and scalable custom software tailored to your specific needs.',
    features: [
      'Custom Admin Panels',
      'ERP/CRM Solutions',
      'SaaS Product Development',
      'API Integrations',
    ],
    price: '₹30,000+',
    deliveryTime: '15-25 Days',
    color: 'from-green-600 to-violet-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Development',
    description: 'Feature-rich online stores with secure payment gateways.',
    features: [
      'Product Management',
      'Inventory Control',
      'Multi-payment Integration',
      'Order Tracking',
    ],
    price: '₹20,000+',
    deliveryTime: '10-14 Days',
    color: 'from-violet-500 to-green-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform apps for iOS and Android.',
    features: [
      'React Native/Flutter',
      'User-friendly Interface',
      'Push Notifications',
      'API Integration',
    ],
    price: '₹30,000+',
    deliveryTime: '25-40 Days',
    color: 'from-green-500 to-violet-600',
  },
  {
    icon: Server,
    title: 'Payment Gateway Integration',
    description: 'Seamless and secure payment gateway setups for your platform.',
    features: [
      'Razorpay/Stripe Setup',
      'Subscription Models',
      'Auto-invoicing',
      'Multi-currency Support',
    ],
    price: '₹3,000+',
    deliveryTime: '1-2 Days',
    color: 'from-violet-600 to-green-500',
  },
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
            Our <span className="gradient-text">Premium Services</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital solutions designed to scale your business and automate your workflows.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl overflow-hidden shadow-xl border border-slate-200"
            >
              <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <CheckCircle size={20} className="text-green-500" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-700">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-200 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Starting From</p>
                    <p className="text-3xl font-bold gradient-text">{service.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 uppercase tracking-wider">Delivery Time</p>
                    <p className="font-semibold text-slate-800">{service.deliveryTime}</p>
                  </div>
                </div>

                <a
                  href="https://wa.me/919940671224?text=Hi%20SUSEJ%20SOLUTIONS%2C%20I%27m%20interested%20in%20your%20services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-violet-600 text-white rounded-xl font-semibold hover:from-green-600 hover:to-violet-700 transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  Book Service <ArrowRight size={18} />
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
