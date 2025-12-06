import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiWifi, 
  FiShield, 
  FiServer, 
  FiMonitor, 
  FiTerminal, 
  FiCloud,
  FiSettings,
  FiLock
} from 'react-icons/fi';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Networking Fundamentals',
      icon: FiWifi,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'TCP/IP Protocol Suite', level: 90 },
        { name: 'LAN/WAN Configuration', level: 85 },
        { name: 'Routing & Switching', level: 88 },
        { name: 'VLAN Configuration', level: 82 },
      ]
    },
    {
      title: 'Network Security',
      icon: FiShield,
      color: 'from-red-500 to-pink-500',
      skills: [
        { name: 'Firewall Configuration', level: 80 },
        { name: 'VPN Implementation', level: 75 },
        { name: 'Network Monitoring', level: 85 },
        { name: 'Security Protocols', level: 78 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FiSettings,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Cisco Packet Tracer', level: 90 },
        { name: 'Wireshark', level: 85 },
        { name: 'GNS3', level: 80 },
        { name: 'Network Simulators', level: 88 },
      ]
    },
    {
      title: 'System Administration',
      icon: FiServer,
      color: 'from-purple-500 to-indigo-500',
      skills: [
        { name: 'Desktop Support', level: 82 },
        { name: 'Windows Server', level: 85 },
        { name: 'User Management', level: 88 },
        { name: 'System Updates', level: 90 },
      ]
    },
    {
      title: 'Scripting & Automation',
      icon: FiTerminal,
      color: 'from-orange-500 to-yellow-500',
      skills: [
        { name: 'Bash Scripting', level: 75 },
        { name: 'Python for Networks', level: 70 },
        { name: 'Network Automation', level: 68 },
        { name: 'Configuration Scripts', level: 72 },
      ]
    },
    {
      title: 'Cloud & Modern Tech',
      icon: FiCloud,
      color: 'from-teal-500 to-blue-500',
      skills: [
        { name: 'Cloud Networking', level: 70 },
        { name: 'AWS Basics', level: 65 },
        { name: 'Network Virtualization', level: 72 },
        { name: 'SDN Concepts', level: 68 },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-300">
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
            Technical <span className="text-gradient">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Comprehensive expertise in network engineering, security implementation, 
            and system administration with hands-on experience in industry-standard tools.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card p-6 group"
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-100 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ 
                          duration: 1.2, 
                          delay: categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full relative overflow-hidden`}
                      >
                        <motion.div
                          animate={{
                            x: ['-100%', '100%'],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                            delay: categoryIndex * 0.2,
                          }}
                          className="absolute inset-0 bg-white/30 w-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 rounded-xl pointer-events-none"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="mt-16"
        >
          <motion.div variants={itemVariants} className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Professional Competencies
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: FiMonitor, title: 'Network Monitoring', desc: 'Real-time network performance analysis' },
                { icon: FiLock, title: 'Security Implementation', desc: 'Enterprise-grade security protocols' },
                { icon: FiSettings, title: 'Configuration Management', desc: 'Automated network configuration' },
                { icon: FiShield, title: 'Troubleshooting', desc: 'Advanced problem resolution' },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-gray-50 dark:bg-dark-100 group hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full group-hover:bg-primary-200 dark:group-hover:bg-primary-800/50 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.desc}
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

export default Skills;
