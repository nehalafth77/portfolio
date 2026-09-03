import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Smartphone, Palette, Cpu, Zap, ArrowRight } from 'lucide-react';

const Services = () => {
  const servicesList = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building modern, reactive, single-page web applications using React.js, JavaScript (ES6+), and sleek state management.',
    },
    {
      icon: Layers,
      title: 'Full Stack Development',
      description: 'End-to-end MERN application development connecting robust Express backends and MongoDB databases with React interfaces.',
    },
    {
      icon: Smartphone,
      title: 'Responsive Web Design',
      description: 'Crafting fluid, mobile-first web layouts that adapt seamlessly across mobile phones, tablets, laptops, and 4K displays.',
    },
    {
      icon: Palette,
      title: 'UI/UX Implementation',
      description: 'Transforming Figma and Adobe XD prototypes into pixel-perfect React components with modern micro-animations.',
    },
    {
      icon: Cpu,
      title: 'REST API Development',
      description: 'Designing scalable Node.js + Express REST APIs, input validation, authentication workflows, and database integrations.',
    },
    {
      icon: Zap,
      title: 'Website Optimization',
      description: 'Enhancing web app speed, Core Web Vitals, code splitting, lazy loading, SEO metadata, and lighthouse scores.',
    },
  ];

  return (
    <section id="services" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            What I Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight"
          >
            Specialized <span className="text-blue-500">Services</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Delivering high-quality web solutions tailored to meet modern enterprise and user demands.
          </p>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#3b82f6]" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="glass-card rounded-2xl p-8 border border-blue-900/40 hover:border-blue-500/60 shadow-xl flex flex-col justify-between group transition-all duration-300"
              >
                <div>
                  {/* Service Icon Badge */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 mb-6">
                    <IconComp className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center text-blue-500 font-semibold text-sm group-hover:translate-x-1.5 transition-transform">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
