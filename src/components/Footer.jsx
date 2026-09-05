import React from 'react';
import { ArrowUp } from 'lucide-react';
import { GithubIcon, FaWhatsappIcon, LinkedinIcon, MailIcon } from './SocialIcons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [

  ];

  const socialLinks = [
    { icon: GithubIcon, href: 'https://github.com/nehalafth77', label: 'GitHub' },
    { icon: FaWhatsappIcon, href: 'https://wa.me/918590618822', label: 'Whatsapp' },
    { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/nehala-fathima-n-7035a7350/', label: 'LinkedIn' },
    { icon: MailIcon, href: 'mailto:nehalafathima05@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/60 items-center">

          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="text-3xl font-extrabold tracking-tight inline-block">
              <span className="text-white">Nehala</span>
              <span className="text-blue-500 font-black">.</span>
            </a>
            <p className="text-sm max-w-sm text-slate-400 leading-relaxed">
              Full-Stack MERN Developer specializing in crafting intuitive, responsive, and performant web applications.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-blue-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Media & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-between md:justify-end space-x-4">
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/50 transition-all hover:scale-110"
                  >
                    <IconComponent className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <button
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)] transition-all hover:scale-110"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Copyright Banner */}
        <div className="pt-8 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Nehala Fathima. Built with MERN Stack (React, Tailwind CSS, Node.js, Express & MongoDB).</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
