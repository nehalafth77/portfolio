import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Server, Database, Wrench, Code2, Globe, Cpu, GitBranch, Layers } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: [
        { name: 'HTML5', level: 95, color: 'from-orange-500 to-amber-500' },
        { name: 'CSS3', level: 90, color: 'from-blue-500 to-cyan-500' },
        { name: 'JavaScript (ES6+)', level: 92, color: 'from-yellow-400 to-amber-500' },
        { name: 'React.js', level: 95, color: 'from-cyan-400 to-blue-500' },
        { name: 'Tailwind CSS', level: 90, color: 'from-teal-400 to-cyan-500' },
      ],
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 85, color: 'from-green-500 to-emerald-600' },
        { name: 'Express.js', level: 88, color: 'from-slate-400 to-slate-200' },
        { name: 'RESTful APIs', level: 90, color: 'from-indigo-500 to-blue-600' },
      ],
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: 85, color: 'from-emerald-500 to-green-600' },
        { name: 'Mongoose ORM', level: 88, color: 'from-red-500 to-rose-600' },
      ],
    },
    {
      title: 'Tools & Ecosystem',
      icon: Wrench,
      skills: [
        { name: 'Git', level: 92, color: 'from-orange-600 to-red-500' },
        { name: 'GitHub', level: 95, color: 'from-purple-500 to-indigo-600' },
        { name: 'Vite / Webpack', level: 88, color: 'from-yellow-500 to-purple-600' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-950/40 dark:bg-[#030712]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            My Tech Stack
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight"
          >
            Skills & <span className="text-blue-500">Technologies</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Modern tools and technologies I leverage to create full-stack web solutions.
          </p>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#3b82f6]" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIdx) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={catIdx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 border border-blue-900/40 hover:border-blue-500/50 shadow-xl"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-blue-600/20 text-blue-400 rounded-xl border border-blue-500/30">
                    <CategoryIcon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-semibold">
                        <span className="text-slate-700 dark:text-slate-200">{skill.name}</span>
                        <span className="text-blue-500 dark:text-blue-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 + skillIdx * 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_10px_rgba(59,130,246,0.5)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;
