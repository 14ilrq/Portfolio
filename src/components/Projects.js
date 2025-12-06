import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiWifi, FiShield, FiMonitor, FiServer } from 'react-icons/fi';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Campus Network Simulation',
      description: 'Designed and implemented a comprehensive campus network simulation using Cisco Packet Tracer. Features include VLAN segmentation, inter-VLAN routing, DHCP configuration, and network security protocols.',
      image: '🏫',
      technologies: ['Cisco Packet Tracer', 'VLAN', 'OSPF', 'DHCP', 'Access Control'],
      category: 'Network Design',
      icon: FiWifi,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Multi-building network topology',
        'VLAN segmentation for departments',
        'Redundant links with STP',
        'Centralized DHCP server'
      ],
      github: 'https://github.com/adil/campus-network-simulation',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Network Security Dashboard',
      description: 'Developed a Python-based network monitoring dashboard with SNMP integration for real-time network performance tracking, security alerts, and automated reporting.',
      image: '🛡️',
      technologies: ['Python', 'SNMP', 'Flask', 'SQLite', 'Chart.js'],
      category: 'Security & Monitoring',
      icon: FiShield,
      color: 'from-red-500 to-pink-500',
      features: [
        'Real-time network monitoring',
        'Security threat detection',
        'Automated alert system',
        'Performance analytics'
      ],
      github: 'https://github.com/adil/network-security-dashboard',
      demo: '#',
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Cisco Router Configuration Lab',
      description: 'Comprehensive lab setup demonstrating static and dynamic routing configurations on Cisco routers. Includes RIP, OSPF, and EIGRP implementations with network troubleshooting scenarios.',
      image: '⚙️',
      technologies: ['Cisco IOS', 'GNS3', 'OSPF', 'EIGRP', 'BGP'],
      category: 'Routing & Switching',
      icon: FiServer,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Multi-protocol routing setup',
        'Network convergence testing',
        'Fault tolerance implementation',
        'Performance optimization'
      ],
      github: 'https://github.com/adil/cisco-routing-lab',
      demo: '#',
      status: 'Completed'
    },
    {
      id: 4,
      title: 'Network Performance Monitor',
      description: 'Automated network performance monitoring tool using Python and Bash scripting. Monitors bandwidth utilization, latency, packet loss, and generates detailed reports.',
      image: '📊',
      technologies: ['Python', 'Bash', 'Grafana', 'InfluxDB', 'SNMP'],
      category: 'Automation & Monitoring',
      icon: FiMonitor,
      color: 'from-purple-500 to-indigo-500',
      features: [
        'Automated performance testing',
        'Historical data analysis',
        'Custom alerting rules',
        'Visual reporting dashboard'
      ],
      github: 'https://github.com/adil/network-performance-monitor',
      demo: '#',
      status: 'Completed'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-200">
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
            Featured <span className="text-gradient">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mx-auto mb-6"
          />
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            Showcase of networking projects demonstrating practical skills in network design, 
            security implementation, and automation solutions.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="card p-6 group relative overflow-hidden"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  project.status === 'Completed' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Project Header */}
              <div className="flex items-start mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${project.color} mr-4 flex-shrink-0`}>
                  <project.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <span className="text-4xl">{project.image}</span>
                  </div>
                  <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                  Key Features:
                </h4>
                <ul className="space-y-1">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-dark-100 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <FiGithub size={16} />
                  <span className="text-sm font-medium">Code</span>
                </motion.a>
                <motion.a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
                >
                  <FiExternalLink size={16} />
                  <span className="text-sm font-medium">Demo</span>
                </motion.a>
              </div>

              {/* Hover Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 pointer-events-none rounded-xl`}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center mt-16"
        >
          <motion.div variants={itemVariants} className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Interested in My Work?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              These projects represent my hands-on experience in network engineering and security. 
              I'm always working on new challenges and learning emerging technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="https://github.com/adil"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary flex items-center justify-center gap-2"
              >
                <FiGithub size={20} />
                View All Projects
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
