import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiLinkedin } from 'react-icons/fi';
import { FaWhatsapp } from "react-icons/fa";
// import {adil_dp} from "../../public/adil_dp.jpeg"

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // You'll need to add the resume PDF to public folder
    link.download = 'Adil_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-300 dark:to-dark-200 pt-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-2"
            >
              <h2 className="text-sm sm:text-lg font-medium text-primary-600 dark:text-primary-400">
                Hello, I'm
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Mohd <span className="text-gradient">Adil</span>
              </h1>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Network Engineer Trainee
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed"
            >
              Building reliable, secure, and high-performance networks. Currently undergoing intensive CCIE Security training with expertise in routing & switching, firewall configuration, and network troubleshooting.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button
                onClick={downloadResume}
                className="btn-primary flex items-center justify-center gap-2"
              >
                <FiDownload size={20} />
                Download Resume
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FiMail size={20} />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="mailto:madilrq@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-dark-100 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FiMail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/14ilrq/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-dark-100 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://wa.me/918005186709"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-dark-100 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
              >
                <FaWhatsapp size={20} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Background */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-80 sm:h-96 lg:h-[500px]">
              {/* Animated Network Nodes */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-20"
              >
                <div className="w-full h-full relative">
                  {/* Network nodes */}
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-primary-500 rounded-full"
                      style={{
                        top: `${20 + (i % 4) * 20}%`,
                        left: `${20 + Math.floor(i / 4) * 60}%`,
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>

              {/* Central Profile Area */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }}
                  className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-gradient-to-br from-primary-500 to-purple-600 rounded-full flex items-center justify-center"
                >
                  <div className="">
                    <div className="text-center">
                      <img 
                        src="/adil_dp.jpeg" 
                        alt="Mohd Adil - Network Engineer" 
                        className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full object-cover mx-auto"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-6 right-6 sm:top-10 sm:right-10 p-2 sm:p-4 bg-white dark:bg-dark-100 rounded-lg shadow-lg pointer-events-none z-0"
              >
                <div className="text-lg sm:text-2xl">🌐</div>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute bottom-16 left-6 sm:bottom-20 sm:left-10 p-2 sm:p-4 bg-white dark:bg-dark-100 rounded-lg shadow-lg pointer-events-none z-0"
              >
                <div className="text-lg sm:text-2xl">🔒</div>
              </motion.div>

              <motion.div
                animate={{ y: [-5, 15, -5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 right-0 p-2 sm:p-4 bg-white dark:bg-dark-100 rounded-lg shadow-lg pointer-events-none z-0"
              >
                <div className="text-lg sm:text-2xl">⚡</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
