import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, GraduationCap, Users } from 'lucide-react';

const Stats = () => {
  const statsData = [
    {
      icon: User,
      number: '1+',
      label: 'Years of Experience',
    },
    {
      icon: Code,
      number: '5+',
      label: 'Projects Completed',
    },
    {
      icon: GraduationCap,
      number: '8+',
      label: 'Technologies Mastered',
    },
    {
      icon: Users,
      number: '10+',
      label: 'Happy Clients',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {statsData.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 flex items-center space-x-5 border border-blue-900/40 hover:border-blue-500/60 shadow-xl cursor-default group"
            >
              {/* Blue Outline Icon Badge */}
              <div className="w-14 h-14 rounded-xl bg-blue-600/15 border border-blue-500/40 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,99,235,0.6)] transition-all duration-300 shrink-0">
                <IconComponent className="w-7 h-7" />
              </div>

              {/* Number and Description */}
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                  {stat.number}
                </span>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Stats;
