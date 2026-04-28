import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiAward, FiTarget, FiTrendingUp } from 'react-icons/fi';

const About = () => {
  const stats = [
    { icon: FiUser, label: 'Years Experience', value: '2+' },
    { icon: FiAward, label: 'Education', value: 'BCA' },
    { icon: FiTarget, label: 'Hands on', value: 'Lab' },
    { icon: FiTrendingUp, label: 'Success Rate', value: '95%' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>
              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"
              />
            </div>

            <motion.div variants={itemVariants} className="space-y-4 text-gray-600 dark:text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm Mohd Adil, a passionate Network Engineer Trainee currently undergoing intensive 
                <strong className="text-primary-600 dark:text-primary-400"> CCIE Enterprise Infrastructure & Security</strong> training 
                at Network Bulls. With a strong foundation in computer applications and hands-on experience in network support, 
                I'm dedicated to building secure and efficient network infrastructures.
              </p>
              
              <p className="leading-relaxed">
                My journey in networking began with a Bachelor's degree in Computer Applications from Mangalayatan University, 
                where I achieved 82.08%. I further enhanced my skills with a Diploma in Network Administrator from E-Max India, 
                scoring 87%. This academic foundation, combined with practical experience at companies like Isourse Technologies 
                and S.A. Digital, has equipped me with comprehensive knowledge in network configuration, troubleshooting, and security.
              </p>

              <p className="leading-relaxed">
                Currently, I'm focused on mastering advanced networking concepts including routing & switching, 
                firewall configuration, VPNs, and Cisco security architecture. My goal is to become a certified 
                Network & Security Engineer, contributing to the design and implementation of robust enterprise networks.
              </p>
            </motion.div>

            {/* Key Highlights */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Key Highlights:</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  CCIE Security Trainee at Network Bulls (July 2025 - Present)
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  CCNP Enterprise Certified - Network Bulls
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  CCNA Training & Networking Basics Certified
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  Network Support Experience at Isource Technologies
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                  Desktop Support Specialist at S.A. Digital
                </li>
                
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="card p-6 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full">
                      <stat.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Progress */}
            <motion.div variants={itemVariants} className="card p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Core Competencies
              </h3>
              <div className="space-y-4">
                {[
                  { skill: 'Network Configuration', level: 85 },
                  { skill: 'Troubleshooting', level: 90 },
                  { skill: 'Security Implementation', level: 80 },
                  { skill: 'System Administration', level: 85 },
                ].map((item, index) => (
                  <div key={item.skill}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {item.skill}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {item.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-primary-600 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
