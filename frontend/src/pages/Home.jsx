import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CourseCards from '../components/CourseCards'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'


const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">
              Client <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-slate-600 text-lg">Don't just take our word for it - here's what our clients have to say.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Rahul Sharma', role: 'Business Owner', quote: 'SUSEJ SOLUTIONS transformed our business online. Excellent work! The new website has doubled our leads in just one month.', rating: 5 },
              { name: 'Priya Nair', role: 'E-commerce Entrepreneur', quote: 'Professional team, delivered on time. Highly recommend! Our new online store is fast, secure, and beautiful.', rating: 5 },
              { name: 'Arun Kumar', role: 'Startup Founder', quote: 'Best AI automation solution for my business. Worth every rupee! We saved hundreds of hours of manual work.', rating: 5 },
            ].map((testimonial, idx) => (
              <div key={idx} className="glass-card border border-slate-100 rounded-3xl p-8 shadow-sm">
                <div className="text-yellow-400 mb-4">
                  {'★'.repeat(testimonial.rating)}
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-slate-500 text-sm">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CourseCards />
      <FAQ />
    </>
  )
}

export default Home
