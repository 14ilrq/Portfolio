import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiBriefcase, 
  FiCalendar, 
  FiMapPin, 
  FiCheck,
  FiBook,
  FiTrendingUp
} from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'CCIE Security Trainee',
      company: 'Network Bulls',
      location: 'Gurugram, India',
      period: 'July 2025 – Present',
      type: 'Professional Training',
      icon: FiBook,
      color: 'from-blue-500 to-cyan-500',
      responsibilities: [
        'Undergoing intensive hands-on training in CCIE Enterprise Infrastructure & Security',
        'Gaining expertise in routing & switching, firewall configuration, VPNs, and Cisco security architecture',
        'Building a solid foundation in enterprise network design, implementation, and real-time lab practice',
        'Enhancing troubleshooting skills, professional discipline, and real-world networking knowledge',
        'Passionate about becoming a certified Network & Security Engineer with continuous learning and growth'
      ]
    },
    {
      title: 'Network Support Engineer',
      company: 'Isourse Technologies',
      location: 'Faridabad, India',
      period: 'August 2024 – December 2024',
      type: 'Full-time',
      icon: FiBriefcase,
      color: 'from-green-500 to-emerald-500',
      responsibilities: [
        'Installed and configured software, hardware, and network devices as per client requirements',
        'Diagnosed and resolved technical issues during and after installation',
        'Performed regular updates and testing to ensure optimal system performance',
        'Provided technical support and maintained detailed network documentation',
        'Implemented network security protocols and monitored performance to prevent bottlenecks'
      ]
    },
    {
      title: 'Desktop Support Engineer',
      company: 'S.A. Digital',
      location: 'Prayagraj, India',
      period: 'May 2023 – August 2024',
      type: 'Full-time',
      icon: FiBriefcase,
      color: 'from-purple-500 to-indigo-500',
      responsibilities: [
        'Diagnosed and resolved hardware and software issues to ensure smooth system performance',
        'Installed and configured computers, peripherals, and system software',
        'Provided technical and user support, including basic training for staff',
        'Performed regular maintenance and hardware repairs to reduce downtime',
        'Assisted in network setup and performance monitoring for reliable connectivity'
      ]
    }
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Professional <span className="text-gradient">Experience</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A journey of continuous learning and growth in network engineering, 
            system administration, and cybersecurity with hands-on industry experience.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-purple-500 hidden md:block"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -5 }}
                className="relative"
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full border-4 border-white dark:border-dark-200 hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-16 card p-6 sm:p-8 group">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex items-start space-x-4 mb-4 sm:mb-0">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${exp.color} flex-shrink-0`}>
                        <exp.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-2">
                          {exp.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center">
                            <FiMapPin className="w-4 h-4 mr-1" />
                            {exp.location}
                          </div>
                          <div className="flex items-center">
                            <FiCalendar className="w-4 h-4 mr-1" />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        exp.type === 'Professional Training' 
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                      }`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
                      <FiTrendingUp className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                      Key Responsibilities & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.5 }}
                          className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                        >
                          <FiCheck className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-sm sm:text-base leading-relaxed">
                            {responsibility}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-xl pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Highlights */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={cardVariants} className="card p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Career Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Network Infrastructure',
                  description: 'Extensive experience in LAN/WAN configuration and network device management',
                  icon: '🌐'
                },
                {
                  title: 'Technical Support',
                  description: 'Proven track record in diagnosing and resolving complex technical issues',
                  icon: '🔧'
                },
                {
                  title: 'Security Implementation',
                  description: 'Hands-on experience with network security protocols and monitoring systems',
                  icon: '🔒'
                },
                {
                  title: 'System Administration',
                  description: 'Proficient in managing operating systems, user accounts, and system updates',
                  icon: '⚙️'
                },
                {
                  title: 'Client Relations',
                  description: 'Strong communication skills with experience in client requirement analysis',
                  icon: '🤝'
                },
                {
                  title: 'Continuous Learning',
                  description: 'Currently pursuing advanced CCIE certification to enhance expertise',
                  icon: '📚'
                }
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-dark-100 group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                >
                  <div className="text-3xl mb-3">{highlight.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
