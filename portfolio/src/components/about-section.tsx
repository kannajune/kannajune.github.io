"use client"

import { motion } from "framer-motion"
import { Code, Heart, Lightbulb, Brain, Cloud } from "lucide-react"

const focusAreas = [
  {
    icon: Code,
    title: "Architecture & Strategy",
    description: "Strategic technology planning, system design, and digital transformation leadership with a focus on scalable, enterprise-grade solutions."
  },
  {
    icon: Heart,
    title: "Product & Solutions",
    description: "End-to-end product delivery, stakeholder alignment, and business-driven technical solutions that create measurable outcomes."
  },
  {
    icon: Lightbulb,
    title: "Data Engineering",
    description: "Design and optimization of scalable data pipelines, analytics platforms, and data-driven workflows for high-volume enterprise workloads."
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Applying AI/ML to enhance product capabilities — from predictive analytics and intelligent automation to personalization and decision-support systems — driving innovation and competitive advantage."
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud Engineering",
    description: "Implementing modern DevOps practices, CI/CD pipelines, Kubernetes orchestration, and cloud-native deployments (AWS/Azure) to ensure scalability, resilience, and faster time-to-market."
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Main content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
          >
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                <span className="text-2xl mr-2">👋</span> Hey <span className="text-2xl">👋</span>
              </h2>
            </motion.div>

            {/* Main description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed"
            >
              <p>
                Technology leader and architect with 16+ years of experience driving digital transformation and
                product innovation across enterprise-scale platforms. I specialize in designing cloud-native
                architectures, leading cross-functional teams, and delivering strategic technology solutions that
                fuel business growth and operational excellence.
              </p>

              <p>
                Currently serving as <b>Chief Technology Officer at Catalys</b>, where I architect performance marketing
                platforms and data engineering solutions that power high-volume analytics workloads. I bring expertise
                in strategic planning, stakeholder management, and translating business requirements into scalable,
                modern technical architectures.
              </p>

              <p>
                A big part of my work is <b>building and leading the teams that ship</b> — I grew an engineering
                organization from a single person to 35, appointed and managed five tech leads, and owned technical
                hiring and compensation as it scaled. I lead from the front, staying hands-on in architecture, code
                review, and production debugging.
              </p>

              <p>
                With a proven track record in <b>end-to-end solutioning — from concept to deployment </b>— I combine strategic
                vision with hands-on technical excellence. As a certified AWS Solution Architect and DevOps Engineer,
              </p>
              <p>
                I bring deep expertise in <b> data engineering, microservices, and cloud-native systems </b> to drive innovation
                and measurable business impact.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Focus Areas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                      <area.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {area.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
