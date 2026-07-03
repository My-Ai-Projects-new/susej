import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Business Owner',
    content: 'SUSEJ SOLUTIONS transformed our business online. Excellent work! The new software has doubled our efficiency in just one month.',
    rating: 5
  },
  {
    name: 'Priya Nair',
    role: 'Tech Lead',
    content: 'Professional team, delivered on time. Highly recommend! Our new application is fast, secure, and beautiful.',
    rating: 5
  },
  {
    name: 'Arun Kumar',
    role: 'Startup Founder',
    content: 'Best AI automation solution for my business. Worth every rupee! We saved hundreds of hours of manual work.',
    rating: 5
  },
  {
    name: 'Divya Patel',
    role: 'Student',
    content: 'The full stack development course completely changed my career. Got placed in a top MNC within 3 months!',
    rating: 5
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-space mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Hear what our clients and students have to say about us.</p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-2xl p-8 h-full"
              >
                <Quote className="text-accent mb-4" size={32} />
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="font-semibold text-lg">{testimonial.name}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
