import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Loader2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { fetchProjects } from '../services/api';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const data = await fetchProjects();
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const categories = ['All', 'Full Stack', 'Frontend'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter || p.technologies?.includes(activeFilter));

  return (
    <section id="projects" className="py-20 relative z-10 bg-slate-950/40 dark:bg-[#030712]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-500 font-semibold tracking-wider text-sm uppercase px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20"
          >
            Portfolio Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight"
          >
            Featured <span className="text-blue-500">Projects</span>
          </motion.h2>
          <p className="text-slate-600 dark:text-slate-400 mt-3 text-base">
            Explore recent web applications engineered with modern MERN stack architecture.
          </p>
          <div className="w-20 h-1.5 bg-blue-500 mx-auto mt-4 rounded-full shadow-[0_0_12px_#3b82f6]" />
        </div>

        {/* Category Filters */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-12 flex-wrap gap-y-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${activeFilter === cat
                  ? 'bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.5)] border border-blue-400/40'
                  : 'glass-card text-slate-400 hover:text-white hover:border-blue-500/40'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 space-y-4">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            <p className="text-slate-400 text-sm">Fetching projects from database...</p>
          </div>
        ) : (
          /* Projects Grid */
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project._id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-2xl overflow-hidden border border-blue-900/40 hover:border-blue-500/60 shadow-xl flex flex-col group"
                >
                  {/* Project Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                  </div>

                  {/* Project Info */}
                  <div className="p-6 sm:p-8 flex flex-col justify-between flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mt-2.5">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.technologies?.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Links */}
                    <div className="flex items-center space-x-4 pt-4 border-t border-slate-800/80">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-slate-200/80 dark:bg-slate-900/60 hover:bg-blue-600/10 dark:hover:bg-blue-600/20 border border-slate-300 dark:border-slate-700 hover:border-blue-500 text-slate-800 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white text-sm font-semibold transition-all duration-300"
                      >
                        <GithubIcon className="w-4 h-4 mr-2 text-blue-400" />
                        Code Repository
                      </a>

                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all duration-300 border border-blue-400/30"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Projects;
