"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"

interface Certification {
  name: string
  issuer: string
  focus: string
  date?: string
  url?: string
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    focus: "Designing distributed, resilient, cost-optimized systems on AWS",
  },
  {
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    focus: "CI/CD, infrastructure as code, and operational excellence at scale",
  },
  {
    name: "SystemsExpert — Systems Design",
    issuer: "AlgoExpert",
    focus: "Passed the systems design assessment — distributed systems & scalability",
    date: "Jul 2024",
    url: "https://certificate.algoexpert.io/SystemsExpert%20Certificate%20SE-9a3aa1c7ba",
  },
]

export function CertificationsSection() {
  return (
    <section
      id="certifications"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Industry-recognized credentials validating cloud architecture, DevOps, and systems design expertise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                    <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {cert.issuer}
                  </span>
                </div>
                {cert.date && (
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    {cert.date}
                  </span>
                )}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {cert.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 flex-1">
                {cert.focus}
              </p>
              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  Verify
                  <ExternalLink size={14} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
