"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ExternalLink, ArrowRight } from "lucide-react"

const codeSnippets = [
  {
    language: "TypeScript",
    code: `interface TechLeader {
  name: string
  title: 'Chief Technology Officer'
  experience: number
  specializations: string[]
  certifications: string[]
}

const cto: TechLeader = {
  name: 'Kannan Dharmalingam',
  title: 'Chief Technology Officer',
  experience: 16,
  specializations: [
    'Cloud-Native Architecture', 'Scalable Data Pipelines',
    'Distributed Systems', 'UI/UX Leadership',
    'Team Management', 'Strategic Planning'
  ],
  certifications: [
    'AWS Solution Architect Associate',
    'AWS DevOps Engineer Professional'
  ]
}`
  },
  {
    language: "Architecture",
    code: `// 🏗️ Enterprise Architecture & Leadership
// kubectl apply -f microservices/
// terraform plan -var-file="prod.tfvars"
// docker-compose -f docker-compose.prod.yml up
// npm run build:enterprise
// pytest --cov=src tests/
// git flow release start v2.0.0

export class CTOStrategy {
  async buildScalableArchitecture() {
    return this.designCloudNative()
              .implementMicroservices()
              .orchestrateWithKubernetes()
              .optimizePerformance()
  }
}`
  },
  {
    language: "Python",
    code: `class TechnologyLeader:
    def __init__(self):
        self.role = "Chief Technology Officer"
        self.experience_years = 16
        self.core_skills = [
            "React", "Angular", "Node.js", "Python",
            "Azure", "Kubernetes", "Data Pipelines",
            "Zustand", "React Query", "Tailwind CSS"
        ]
        self.leadership_areas = [
            "Architecture Design", "Team Management",
            "Strategic Planning", "Digital Strategy",
            "Process Enhancement", "Innovation"
        ]

    def lead_technology_transformation(self):
        return (self.assess_current_state()
                   .design_target_architecture()
                   .build_high_performance_teams()
                   .deliver_scalable_solutions())`
  }
]

export function HeroSection() {
  const [currentSnippet, setCurrentSnippet] = useState(0)
  const [displayedCode, setDisplayedCode] = useState("")
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet]
    let index = 0
    setDisplayedCode("")
    setIsTyping(true)

    const typeWriter = setInterval(() => {
      if (index < snippet.code.length) {
        setDisplayedCode(snippet.code.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeWriter)
        
        // Wait 3 seconds then switch to next snippet
        setTimeout(() => {
          setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length)
        }, 3000)
      }
    }, 30)

    return () => clearInterval(typeWriter)
  }, [currentSnippet])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-blue-600 dark:text-blue-400 font-medium"
              >
                Hi, I'm
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
              >
                Kannan Dharmalingam
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
              >
                Hands-on Engineering Leader — Enterprise AI Delivery & Team Building
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed"
            >
              Hands-on engineering leader with 16+ years building and scaling cloud-native
              platforms, AI systems, and the teams that ship them. At Sumeru I grew the web
              and mobile engineering org from a single person to 35, appointing five tech
              leads and owning hiring and compensation. Most of my delivery has been embedded
              with enterprise BFSI customers across India, SEA, and ANZ — most recently
              focused on production AI: LLM, RAG, and agentic systems.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400"
            >
              <div className="flex items-center">
                <span className="text-yellow-500 mr-1">✨</span>
                <span>16+ Years Experience</span>
              </div>
              <span>•</span>
              <div>3 Certifications</div>
            </motion.div>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {['AWS', 'JavaScript', 'Python', 'Kubernetes', 'React', 'ETL', 'Azure', 'Node.js'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get in touch
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => window.open('https://linkedin.com/in/kannajune', '_blank')}
                className="inline-flex items-center justify-center w-12 h-12 border border-gray-300 dark:border-gray-600 hover:border-blue-600 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-300"
                title="LinkedIn Profile"
              >
                <ExternalLink size={18} />
              </button>
            </motion.div>
          </motion.div>

          {/* Right side - Code snippet */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center px-4 py-3 bg-gray-800 dark:bg-gray-700">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-gray-400 text-sm font-medium">
                    {codeSnippets[currentSnippet].language}
                  </span>
                </div>
              </div>
              
              {/* Code content */}
              <div className="p-6 font-mono text-sm">
                <pre className="text-gray-300 whitespace-pre-wrap">
                  {displayedCode}
                  {isTyping && (
                    <span className="animate-pulse bg-blue-400 text-blue-400">|</span>
                  )}
                </pre>
              </div>
            </div>

            {/* Snippet indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {codeSnippets.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSnippet(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSnippet
                      ? "bg-blue-600"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span className="text-sm mb-2">Scroll down</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={24} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
