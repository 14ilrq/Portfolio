import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub, FiArrowUp, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: FiLinkedin,
      href: 'https://linkedin.com/in/14ilrq',
      label: 'LinkedIn',
      color: 'hover:text-blue-400'
    },
    {
      icon: FiMail,
      href: 'mailto:madilrq@gmail.com',
      label: 'Email',
      color: 'hover:text-red-400'
    }
  ];

  const contactInfo = [
    {
      icon: FiMail,
      text: 'madilrq@gmail.com',
      href: 'mailto:madilrq@gmail.com'
    },
    {
      icon: FiPhone,
      text: '+91 8005186709',
      href: 'tel:+918005186709'
    },
    {
      icon: FiMapPin,
      text: 'Gurugram, India',
      href: '#'
    }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark-300 dark:bg-dark-400 text-gray-300">
      {/* Main Footer Content */}
      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Mohd <span className="text-primary-400">Adil</span>
              </h3>
              <p className="text-primary-400 font-medium">Network Engineer Trainee</p>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Passionate about building secure, reliable, and high-performance network infrastructures. 
              Currently pursuing CCIE certification and always eager to learn new technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`p-3 bg-dark-200 dark:bg-dark-300 rounded-full text-gray-400 ${social.color} transition-all duration-300 hover:bg-dark-100 dark:hover:bg-dark-200`}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors duration-300 group"
                  >
                    <div className="p-2 bg-dark-200 dark:bg-dark-300 rounded-lg group-hover:bg-primary-600 transition-colors duration-300">
                      <info.icon size={16} className="group-hover:text-white" />
                    </div>
                    <span className="text-sm">{info.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Professional Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Expertise</h4>
            <ul className="space-y-2">
              {[
                'Network Configuration',
                'Security Implementation',
                'Routing & Switching',
                'System Administration',
                'Network Troubleshooting',
                'CCIE Training'
              ].map((skill, index) => (
                <li key={skill} className="flex items-center gap-2 text-gray-400 text-sm">
                  <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 dark:border-gray-600">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>© 2024 Mohd Adil. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <FiHeart className="text-red-400" size={16} />
              </motion.div>
              <span>and React</span>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-sm"
              >
                Network Engineer Trainee | CCIE Security
              </motion.div>

              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl"
                aria-label="Scroll to top"
              >
                <FiArrowUp size={16} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-40 h-40 border border-primary-400 rounded-full"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-32 h-32 border border-primary-400 rounded-full"
        />
      </div>
    </footer>
  );
};

export default Footer;
