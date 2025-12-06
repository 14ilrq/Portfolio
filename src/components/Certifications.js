import React from 'react';
import { motion } from 'framer-motion';
import { FiAward, FiCalendar, FiExternalLink, FiCheckCircle, FiClock } from 'react-icons/fi';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'CCIE Enterprise Infrastructure & Security',
      issuer: 'Cisco Systems',
      status: 'In Progress',
      date: 'July 2025 - Present',
      description: 'Intensive hands-on training in enterprise network design, implementation, and security architecture.',
      skills: ['Routing & Switching', 'Firewall Configuration', 'VPNs', 'Network Security'],
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
      credentialId: 'Training at Network Bulls',
      link: '#'
    },
    {
      id: 2,
      title: 'CCNA Training',
      issuer: 'Network Bulls',
      status: 'Completed',
      date: 'Completed 2025',
      description: 'Comprehensive training in Cisco networking technologies, routing protocols, and network troubleshooting.',
      skills: ['Cisco IOS', 'OSPF', 'EIGRP', 'Network Troubleshooting'],
      icon: '🌐',
      color: 'from-blue-500 to-cyan-500',
      credentialId: 'CCNA (200-301)',
      link: '#'
    },
    {
      id: 3,
      title: 'Networking Basics',
      issuer: 'Cisco Networking Academy',
      status: 'Certified',
      date: 'Completed 2025',
      description: 'Foundational certification covering core networking concepts, TCP/IP, and network fundamentals.',
      skills: ['TCP/IP', 'Network Fundamentals', 'OSI Model', 'Ethernet'],
      icon: '📡',
      color: 'from-green-500 to-emerald-500',
      credentialId: 'CNA-NB-2024',
      link: '#'
    },
    {
      id: 4,
      title: 'Network Administrator Diploma',
      issuer: 'E-Max India Network Academy',
      status: 'Completed',
      date: 'March 2022 - April 2023',
      description: 'Comprehensive diploma program covering network administration, server management, and IT infrastructure.',
      skills: ['Network Administration', 'Server Management', 'IT Infrastructure', 'System Maintenance'],
      icon: '🎓',
      color: 'from-purple-500 to-indigo-500',
      credentialId: 'EMAX-NA-2021',
      link: '#'
    }
  ];

  const upcomingCertifications = [
    {
      title: 'CompTIA Network+',
      target: 'Q2 2025',
      description: 'Industry-standard networking certification'
    },
    {
      title: 'AWS Cloud Practitioner',
      target: 'Q3 2025',
      description: 'Cloud computing fundamentals certification'
    },
    {
      title: 'CompTIA Security+',
      target: 'Q4 2025',
      description: 'Cybersecurity fundamentals certification'
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
    <section id="certifications" className="section-padding bg-gray-50 dark:bg-dark-300">
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
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Certifications & <span className="text-gradient">Training</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Professional certifications and continuous learning journey in network engineering, 
            security, and emerging technologies.
          </motion.p>
        </motion.div>

        {/* Current Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card p-6 relative overflow-hidden group"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4">
                <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Certified' || cert.status === 'Completed'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {cert.status === 'Certified' || cert.status === 'Completed' ? (
                    <FiCheckCircle size={12} />
                  ) : (
                    <FiClock size={12} />
                  )}
                  {cert.status}
                </div>
              </div>

              {/* Certification Header */}
              <div className="flex items-start mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${cert.color} mr-4 flex-shrink-0`}>
                  <span className="text-2xl">{cert.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {cert.issuer}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                    <FiCalendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {cert.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Key Skills:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Credential Info */}
              {/* <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium">ID:</span> {cert.credentialId}
                </div>
                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium"
                >
                  <FiExternalLink size={14} />
                  Verify
                </motion.a>
              </div> */}

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 pointer-events-none rounded-xl`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Upcoming Certifications */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="card p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Upcoming Certifications
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Planned certifications to further enhance my expertise in networking and security
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upcomingCertifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 bg-gray-50 dark:bg-dark-100 rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 transition-colors duration-300"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FiAward className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {cert.description}
                    </p>
                    {/* <div className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      Target: {cert.target}
                    </div> */}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16 text-center"
        >
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Continuous Learning Commitment
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              In the rapidly evolving field of network engineering and cybersecurity, 
              I believe in continuous learning and staying updated with the latest technologies. 
              Each certification represents not just knowledge gained, but a commitment to 
              excellence and professional growth in building secure, efficient network infrastructures.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
