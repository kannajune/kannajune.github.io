"use client"

import { motion } from "framer-motion"
import {
  Server,
  Database,
  Shield,
  Zap,
  Cloud,
  Cpu,
  Monitor,
  MessageSquare,
  Sparkles,
  Workflow,
  BarChart3
} from "lucide-react"

const systemDesignAreas = [
  {
    icon: Server,
    title: "Microservices Architecture",
    description: "Led development of multiple enterprise platforms across banking AML/compliance, lending, debt collection, and performance marketing using Node.js and microservices architecture.",
    achievements: [
      "Implemented horizontal scaling with load balancing and sharding",
      "Managed high user loads ensuring system responsiveness",
      "Built modular architecture for independent deployability"
    ],
    technologies: ["Node.js", "Docker", "Kubernetes", "Load Balancing"]
  },
  {
    icon: Sparkles,
    title: "AI & LLM Systems",
    description: "Architecting production AI systems — retrieval-augmented generation (RAG), semantic search, and LLM integration into enterprise products.",
    achievements: [
      "Designed RAG pipelines with vector databases for grounded, context-aware responses",
      "Integrated LLMs via streaming APIs and structured outputs for reliable enterprise use",
      "Implemented guardrails, evaluation, and cost/latency controls for production reliability"
    ],
    technologies: ["LLM Integration", "RAG", "Vector DBs", "Semantic Search", "Prompt Engineering"]
  },
  {
    icon: Workflow,
    title: "Agentic Architecture",
    description: "Designing autonomous, multi-agent AI systems that reason, plan, call tools, and collaborate to execute complex workflows end-to-end.",
    achievements: [
      "Architected multi-agent orchestration with planner–executor patterns and shared memory",
      "Built tool-calling and MCP-based integrations connecting agents to enterprise systems",
      "Engineered human-in-the-loop guardrails, tracing, and evaluation for reliable autonomy"
    ],
    technologies: ["LangGraph", "MCP", "Multi-Agent", "Tool Calling", "Agentic RAG"]
  },
  {
    icon: Zap,
    title: "Caching Strategies",
    description: "Optimized application performance through strategic caching implementations and data access patterns.",
    achievements: [
      "Implemented cache-aside, read-through, and write-through strategies",
      "Reduced database load for frequently accessed product data",
      "Enhanced application performance and reduced load times"
    ],
    technologies: ["Redis", "Memcached", "Cache-Aside Pattern", "Performance Optimization"]
  },
  {
    icon: Database,
    title: "Data Management & Storage",
    description: "Designed scalable data storage solutions for growing applications with focus on performance and reliability.",
    achievements: [
      "Extensive experience with NoSQL databases for scalable storage",
      "Implemented efficient data querying strategies",
      "Managed data architecture for high-volume applications"
    ],
    technologies: ["MongoDB", "CosmosDB", "PostgreSQL", "Data Architecture"]
  },
  {
    icon: Monitor,
    title: "Monitoring & Observability",
    description: "Established comprehensive monitoring and observability frameworks for application health and performance insights.",
    achievements: [
      "Implemented data visualization with Grafana",
      "Set up metrics monitoring using Prometheus",
      "Configured log forwarding with Fluentd for comprehensive insights"
    ],
    technologies: ["Grafana", "Prometheus", "Fluentd", "CloudWatch", "Observability"]
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Applied enterprise-grade security practices to design robust and secure systems meeting compliance requirements.",
    achievements: [
      "Implemented web security best practices",
      "Designed secure transaction screening systems",
      "Ensured compliance with regulatory requirements"
    ],
    technologies: ["Security Best Practices", "Compliance", "Encryption", "Vulnerability Assessment"]
  },
  {
    icon: MessageSquare,
    title: "Message Queues & Communication",
    description: "Designed asynchronous communication patterns for microservices using enterprise message queue solutions.",
    achievements: [
      "Implemented Kafka (AWS MSK) for high-volume data processing",
      "Used RabbitMQ for decoupled microservices communication",
      "Enabled efficient processing of transaction screening data"
    ],
    technologies: ["Apache Kafka", "AWS MSK", "RabbitMQ", "Asynchronous Processing"]
  },
  {
    icon: Cloud,
    title: "Cloud Platforms & Infrastructure",
    description: "Architected cloud-native applications with focus on scalability, resilience, and cost optimization.",
    achievements: [
      "Extensive experience with AWS cloud services",
      "Implemented containerization with Docker and Kubernetes",
      "Built event-based architecture with serverless components"
    ],
    technologies: ["AWS", "Docker", "Kubernetes", "Lambda", "API Gateway", "EKS"]
  },
  {
    icon: BarChart3,
    title: "High-Scale SaaS Applications",
    description: "Designed and architected enterprise SaaS platforms handling massive user loads and transaction volumes.",
    achievements: [
      "Enterprise debt-collection SaaS supporting 50,000+ users",
      "Transaction Screening handles 300,000+ daily transactions",
      "Built scalable college management system for 5,000+ admissions"
    ],
    technologies: ["SaaS Architecture", "High Scalability", "Load Management", "Performance Tuning"]
  },
  {
    icon: Cpu,
    title: "IoT & Edge Architecture",
    description: "Designed end-to-end IoT platforms connecting edge devices to the cloud, with real-time telemetry, device management, and remote monitoring.",
    achievements: [
      "Built an IoT vending-machine platform with real-time device monitoring and control",
      "Implemented MQTT-based messaging for low-latency edge-to-cloud communication",
      "Integrated device firmware (C++) with a FastAPI cloud backend and admin dashboard"
    ],
    technologies: ["MQTT", "FastAPI", "C++", "Edge Computing"]
  }
]

const majorProjects = [
  {
    title: "AML System with Microservices",
    stack: "Node.js, React, Docker, Kubernetes",
    features: "Transaction screening, alert management, case manager solution",
    scale: "300,000+ daily transactions"
  },
  {
    title: "Debt-Collection SaaS Platform",
    stack: "Node.js, React, Microservices",
    features: "Debt collection management, user dashboard, reporting",
    scale: "50,000+ active users"
  },
  {
    title: "College Management System",
    stack: "Ruby on Rails, PostgreSQL",
    features: "Automated hostel counselling, admission management",
    scale: "5,000+ admissions in 3 days"
  },
  {
    title: "Live Streaming Application",
    stack: "Ruby on Rails, WebRTC",
    features: "Real-time streaming for medical conferences",
    scale: "Low latency, high availability"
  },
  {
    title: "IoT Vending Machine Platform",
    stack: "Python, FastAPI, Angular, MQTT, C++",
    features: "Device management, real-time monitoring, admin dashboard",
    scale: "Real-time edge-to-cloud telemetry"
  }
]

export function SystemDesignSection() {
  return (
    <section id="system-design" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            System Design & Architecture
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Comprehensive expertise designing scalable, resilient, high-performance systems —
            from high-scale SaaS and event-driven microservices to real-time IoT and
            production AI/LLM platforms.
          </p>
        </motion.div>

        {/* System Design Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {systemDesignAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mr-4">
                  <area.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {area.title}
                </h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                {area.description}
              </p>
              
              <div className="space-y-2 mb-4">
                {area.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-1">
                {area.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Major Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            High-Scale System Implementations
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {majorProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
              >
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h4>
                <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                  {project.stack}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {project.features}
                </p>
                <div className="flex items-center">
                  <BarChart3 className="w-4 h-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-600">
                    {project.scale}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* AWS Cost Optimization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              AWS Cost Optimization & Serverless Architecture
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Cost Optimization</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                  <li>• Implemented AWS reserved instances for cost savings</li>
                  <li>• Auto-scaling to optimize infrastructure expenses</li>
                  <li>• Reduced operational costs while maintaining high availability</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Serverless Architecture</h4>
                <ul className="space-y-1 text-gray-600 dark:text-gray-400 text-sm">
                  <li>• Leveraged AWS Lambda for serverless computing</li>
                  <li>• Event-based architecture with API Gateway</li>
                  <li>• Argo Events and CloudWatch integration</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
