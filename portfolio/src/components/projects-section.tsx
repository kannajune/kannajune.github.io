"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Calendar, Star } from "lucide-react"

const projects = [
  {
    title: "ENSOURCE & ENCreditable Platform",
    description: "Designed and architected full-stack products for financial services with React, Node.js, and MongoDB, delivering scalable, secure, and high-performing solutions aligned with market demands.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Financial Systems", "SaaS Architecture"],
    features: [
      "Scalable financial services platform",
      "Secure transaction processing",
      "High-performance architecture",
      "Market-aligned solutions",
      "Enterprise-grade security"
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2020-Present",
    status: "Featured"
  },
  {
    title: "Legacy System Migration (Angular 1.5 to 14)",
    description: "Spearheaded the migration of a legacy Angular 1.5 system to Angular 14, ensuring seamless transition and modernization of the tech stack with significant performance improvements.",
    image: "/api/placeholder/600/400",
    technologies: ["Angular", "TypeScript", "System Migration", "Performance Optimization"],
    features: [
      "Seamless legacy system migration",
      "Modernized tech stack",
      "Improved application performance",
      "Enhanced security features",
      "Better maintainability"
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
    status: "Featured"
  },
  {
    title: "React Native iOS Applications",
    description: "Architected and implemented React Native-based iOS apps, enhancing product performance and reducing app load times by 20%, while leading test automation initiatives.",
    image: "/api/placeholder/600/400",
    technologies: ["React Native", "iOS", "Test Automation", "Performance Optimization"],
    features: [
      "20% reduction in app load times",
      "Enhanced product performance",
      "Comprehensive test automation",
      "Cross-platform mobile development"
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2019-2021",
    status: "Featured"
  },
  {
    title: "Facctum Transaction Screening & Alerts",
    description: "Directed full-stack development of transaction screening and alerts management system with React, ensuring high-performing, scalable SaaS architecture to meet client demands.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "SaaS", "Financial Technology", "Enterprise Applications"],
    features: [
      "High-performing SaaS architecture",
      "Scalable transaction screening",
      "Real-time alerts management",
      "Enterprise-grade security",
      "Client-focused solutions"
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2012-2015",
    status: "Enterprise"
  },
  {
    title: "Dynamic Form Builder (Angular)",
    description: "Developed an internal dynamic form builder using Angular, improving operational efficiency for loan application processing by reducing form handling complexities—maintained for legacy support.",
    image: "/api/placeholder/600/400",
    technologies: ["Angular", "Form Builder", "Operational Efficiency", "Legacy Systems"],
    features: [
      "Dynamic form generation",
      "Improved operational efficiency",
      "Reduced form handling complexity",
      "Legacy system support",
      "Loan application processing"
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2018",
    status: "Internal Tool"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Major Technology Initiatives
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of enterprise-level projects and technology transformations I've led,
            demonstrating expertise in cloud-native architectures, scalable systems, and team leadership.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-lg font-semibold">
                    {project.title}
                  </div>
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "Featured" 
                      ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  }`}>
                    {project.status === "Featured" && <Star className="w-3 h-3 inline mr-1" />}
                    {project.status}
                  </span>
                </div>

                {/* Year Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-black/20 text-white rounded-full text-xs font-medium flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </span>
                </div>

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:border-gray-400 dark:hover:border-gray-500 transition-colors flex items-center justify-center"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white font-medium rounded-lg transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
