"use client"

import { motion } from "framer-motion"
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiRuby,
  SiCplusplus,
  SiDotnet,
  SiReact,
  SiAngular,
  SiNextdotjs,
  SiNodedotjs,
  SiGraphql,
  SiAmazonwebservices,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiGrafana,
  SiElasticsearch,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiSonarqube
} from "react-icons/si"

// Comprehensive skills organized by domain
const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript", level: "Expert", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", level: "Expert", icon: SiTypescript, color: "#3178C6" },
      { name: "Python", level: "Expert", icon: SiPython, color: "#3776AB" },
      { name: "Ruby", level: "Expert", icon: SiRuby, color: "#CC342D" },
      { name: "C#", level: "Advanced", icon: SiDotnet, color: "#239120" },
      { name: "C++", level: "Advanced", icon: SiCplusplus, color: "#00599C" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    className: "mt-16",  // Add extra margin top for this section
    skills: [
      { name: "React", level: "Expert", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", level: "Expert", icon: SiAngular, color: "#DD0031" },
      { name: "Next.js", level: "Expert", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", level: "Expert", icon: SiNodedotjs, color: "#339933" },
      { name: "React Native", level: "Expert", icon: SiReact, color: "#61DAFB" },
      { name: "FastAPI", level: "Expert", icon: "⚡" },
      { name: "Express.js", level: "Expert", icon: "🚀" },
      { name: "Ruby on Rails", level: "Expert", icon: "🚂" },
      { name: "GraphQL", level: "Expert", icon: SiGraphql, color: "#E10098" }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: "Expert", icon: SiPostgresql, color: "#336791" },
      { name: "MongoDB", level: "Expert", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", level: "Expert", icon: SiRedis, color: "#DC382D" },
      { name: "Elasticsearch", level: "Advanced", icon: SiElasticsearch, color: "#005571" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "AWS", level: "Expert", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Azure", level: "Expert", icon: "☁️" },
      { name: "Kubernetes", level: "Expert", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", level: "Expert", icon: SiDocker, color: "#2496ED" },
      { name: "Terraform", level: "Expert", icon: SiTerraform, color: "#7B42BC" },
      { name: "CI/CD", level: "Expert", icon: "🔄" },
      { name: "Observability", level: "Expert", icon: SiGrafana, color: "#F46800" }
    ]
  },
  {
    title: "Data Engineering",
    skills: [
      { name: "Apache Kafka", level: "Expert", icon: SiApachekafka, color: "#231F20" },
      { name: "Apache Airflow", level: "Expert", icon: "🌪️" },
      { name: "Azure Data Factory", level: "Expert", icon: "🏭" },
      { name: "Prefect", level: "Expert", icon: "🌊" },
      { name: "Flowable", level: "Expert", icon: "🔀" },
      { name: "n8n", level: "Expert", icon: "🔗" }
    ]
  }
]

// Second row skills with more detailed layout
const detailedSkillCategories = [
  {
    title: "AI & Generative AI",
    skills: [
      { name: "Generative AI", level: "Expert", icon: "🤖" },
      { name: "AI Agents", level: "Expert", icon: "🧠" },
      { name: "LLM Integration", level: "Expert", icon: "💬" },
      { name: "RAG", level: "Expert", icon: "📚" },
      { name: "LangChain", level: "Expert", icon: "🦜" },
      { name: "LangGraph", level: "Expert", icon: "🕸️" },
      { name: "MCP", level: "Expert", icon: "🔌" },
      { name: "Prompt Engineering", level: "Expert", icon: "✍️" },
      { name: "Vector Databases", level: "Expert", icon: "🧮" },
      { name: "AI Orchestration", level: "Expert", icon: "🎼" }
    ]
  },
  {
    title: "Machine Learning & Data Science",
    skills: [
      { name: "Machine Learning", level: "Advanced", icon: "📊" },
      { name: "XGBoost", level: "Advanced", icon: "🌲" },
      { name: "scikit-learn", level: "Advanced", icon: "📈" },
      { name: "Pandas & NumPy", level: "Advanced", icon: "🐼" },
      { name: "Model Fine-tuning", level: "Advanced", icon: "🎛️" }
    ]
  },
  {
    title: "Engineering Leadership & Practices",
    skills: [
      { name: "System Architecture", level: "Expert", icon: "🏗️" },
      { name: "Design Patterns & OOP", level: "Expert", icon: "🧩" },
      { name: "Microservices", level: "Expert", icon: "🔗" },
      { name: "Event-Driven Architecture", level: "Expert", icon: "⚡" },
      { name: "DevOps", level: "Expert", icon: "♾️" },
      { name: "Agile & Scrum", level: "Expert", icon: "🏃" },
      { name: "TDD / BDD", level: "Expert", icon: "🔄" },
      { name: "Security & Compliance (VAPT)", level: "Expert", icon: "🛡️" },
      { name: "Code Quality (SonarQube)", level: "Expert", icon: SiSonarqube, color: "#4E9BCD" }
    ]
  }
]



export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technical depth spanning full-stack engineering, cloud architecture, scalable data
            platforms, and applied AI. 16+ years delivering enterprise-grade systems and leading
            engineering teams from architecture through production.
          </p>
        </motion.div>

        {/* Primary Skills Categories */}
        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-lg ${category.className || ''}`}
            >
              <h6 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 inline-flex items-center">
                <span className="mr-2">{category.title}</span>
              </h6>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-sm transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="mb-2">
                      {typeof skill.icon === 'string' ? (
                        <div className="text-2xl">{skill.icon}</div>
                      ) : (
                        <skill.icon size={24} style={{ color: skill.color }} />
                      )}
                    </div>
                    <h4 className="text-xs font-medium text-gray-900 dark:text-white text-center mb-1">
                      {skill.name}
                    </h4>
                    {/* Skill-level badges hidden for now — re-enable later.
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      skill.level === 'Expert'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : skill.level === 'Advanced'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {skill.level}
                    </span>
                    */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Skills Categories */}
        <div className="space-y-12 mt-16">
          {detailedSkillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 inline-flex items-center">
                <span className="mr-2">{category.title}</span>
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 rounded-lg hover:shadow-sm transition-shadow border border-gray-100 dark:border-gray-700"
                  >
                    <div className="mb-2">
                      {typeof skill.icon === 'string' ? (
                        <div className="text-2xl">{skill.icon}</div>
                      ) : (
                        <skill.icon size={24} style={{ color: skill.color }} />
                      )}
                    </div>
                    <h4 className="text-xs font-medium text-gray-900 dark:text-white text-center mb-1">
                      {skill.name}
                    </h4>
                    {/* Skill-level badges hidden for now — re-enable later.
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      skill.level === 'Expert'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : skill.level === 'Advanced'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {skill.level}
                    </span>
                    */}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Leadership Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Technology Leadership at Scale
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Proven expertise across the full technology stack
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                16+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                30+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Technologies Mastered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                100+
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Projects Delivered
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                35
              </div>
              <div className="text-gray-600 dark:text-gray-400">
                Team Members Led
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
