import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon, MailIcon } from './SocialIcons';
import profileImg from '../assets/profile.png';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com', label: 'GitHub' },
    { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
    { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: MailIcon, href: 'mailto:chandni.chauhan@example.com', label: 'Email' },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden flex flex-col justify-between">
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 starry-bg opacity-70 pointer-events-none" />

      {/* Subtle Atmospheric Blue Neon Glow Orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none ambient-glow-circle" />
      <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Mountain & Pine Tree Silhouette SVG Background Layer at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none opacity-40 dark:opacity-75 z-0">
        <svg
          viewBox="0 0 1440 320"
          className="w-full h-auto min-w-[1000px] preserve-3d"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Distant Mountain Peak Silhouette */}
          <path
            d="M0 240L120 210L240 250L360 170L480 230L600 150L720 220L840 180L960 260L1080 190L1200 240L1320 180L1440 230V320H0V240Z"
            fill="#030712"
            opacity="0.9"
          />
          {/* Midground Ridge */}
          <path
            d="M0 280L180 230L340 270L520 210L700 260L880 200L1060 250L1240 210L1440 270V320H0V280Z"
            fill="#080e21"
          />
          {/* Foreground Trees & Jagged Horizon */}
          <path
            d="M-20 290 L10 270 L20 290 L40 265 L60 290 L100 255 L130 290 L200 245 L250 290 L320 260 L380 295 L460 240 L520 290 L600 250 L680 300 L760 235 L840 295 L920 245 L1000 290 L1080 230 L1160 295 L1240 250 L1320 290 L1400 260 L1460 300 V320 H-20 Z"
            fill="#020617"
          />
        </svg>
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE: Typography & CTA Controls */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Small text greeting */}
            <span className="text-slate-400 dark:text-slate-300 text-lg sm:text-xl font-medium tracking-wide">
              Hello, I'm
            </span>

            {/* Main Name Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
              <span className="text-blue-500 dark:text-blue-400">Nehala</span>{' '}
              <span className="text-slate-900 dark:text-white">Fathima</span>
            </h1>

            {/* Subheading Role */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
              Frontend Developer
            </h2>

            {/* Brief professional description */}
            <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-xl font-normal leading-relaxed">
              I build responsive, user-friendly, and performant web applications that deliver exceptional user experiences.
            </p>

            {/* Social Media Buttons */}
            <div className="flex items-center space-x-3 pt-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.12, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 rounded-full bg-slate-200/80 dark:bg-slate-900/80 border border-slate-300 dark:border-slate-800/80 flex items-center justify-center text-slate-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:border-blue-500/50 shadow-md backdrop-blur-md transition-colors"
                  >
                    <IconComponent className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              {/* Primary CTA */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(37,99,235,0.5)] transition-all duration-300 flex items-center justify-center border border-blue-400/30 group"
              >
                Hire Me
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3.5 bg-slate-900/40 dark:bg-slate-950/40 hover:bg-blue-600/10 text-slate-900 dark:text-white font-semibold rounded-xl border-2 border-blue-600/80 hover:border-blue-500 shadow-lg backdrop-blur-md transition-all duration-300 flex items-center justify-center group"
              >
                Contact Me
                <ChevronRight className="w-5 h-5 ml-1 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Profile Portrait with Glowing Blue Ring Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] flex items-center justify-center">

              {/* Electric Blue Neon Circular Ring Halo (Matching Reference Screenshot) */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/80 shadow-[0_0_40px_rgba(37,99,235,0.7),inset_0_0_20px_rgba(59,130,246,0.5)] animate-pulse" />

              {/* Secondary Subtle Ambient Glow */}
              <div className="absolute -inset-4 rounded-full bg-blue-600/15 blur-2xl pointer-events-none" />

              {/* Profile Image Container with Soft Gradient Masking */}
              <div className="relative w-[92%] h-[92%] rounded-full overflow-hidden flex items-end justify-center z-10">
                <img
                  src="https://res.cloudinary.com/zqgmlaym/image/upload/f_auto,q_auto/nehala"
                  alt="Chandni Chauhan - Frontend Developer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/assets/profile.png';
                  }}
                />

                {/* Bottom Smooth Blend Gradient into Atmosphere */}
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-[#040817] via-[#040817]/60 to-transparent pointer-events-none" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
