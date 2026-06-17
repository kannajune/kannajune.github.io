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
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiAmazonwebservices,
  SiKubernetes,
  SiDocker,
  SiTerraform,
  SiJenkins,
  SiGrafana,
  SiPrometheus,
  SiElasticsearch,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGit,
  SiGithub,
  SiGitlab,
  SiLinux,
  SiJira,
  SiPostman,
  SiJest,
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
      { name: "C++", level: "Advanced", icon: SiCplusplus, color: "#00599C" },
      { name: "C#", level: "Advanced", icon: SiDotnet, color: "#239120" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    className: "mt-16",  // Add extra margin top for this section
    skills: [
      { name: "React", level: "Expert", icon: SiReact, color: "#61DAFB" },
      { name: "Angular", level: "Expert", icon: SiAngular, color: "#DD0031" },
      { name: "Ruby on Rails", level: "Expert", icon: "🚂" },
      { name: "FastAPI", level: "Expert", icon: "⚡" },
      { name: "React Native", level: "Expert", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", level: "Expert", icon: SiNextdotjs, color: "#000000" },
      { name: "Node.js", level: "Expert", icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", level: "Expert", icon: "🚀" },
      { name: "GraphQL", level: "Expert", icon: SiGraphql, color: "#E10098" },
      { name: "HTML5", level: "Expert", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", level: "Expert", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind CSS", level: "Expert", icon: SiTailwindcss, color: "#06B6D4" }
    ]
  },
  {
    title: "Database Systems",
    skills: [
      { name: "MongoDB", level: "Expert", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", level: "Expert", icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", level: "Advanced", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", level: "Expert", icon: SiRedis, color: "#DC382D" },
      { name: "Elasticsearch", level: "Advanced", icon: SiElasticsearch, color: "#005571" },
      { name: "Milvus", level: "Expert", icon: "🧠" }
    ]
  },
  {
    title: "Cloud & Infrastructure",
    skills: [
      { name: "Azure", level: "Expert", icon: "☁️" },
      { name: "AWS", level: "Expert", icon: SiAmazonwebservices, color: "#FF9900" },
      { name: "Kubernetes", level: "Expert", icon: SiKubernetes, color: "#326CE5" },
      { name: "Docker", level: "Expert", icon: SiDocker, color: "#2496ED" },
      { name: "Terraform", level: "Expert", icon: SiTerraform, color: "#7B42BC" },
      { name: "Jenkins", level: "Expert", icon: SiJenkins, color: "#D33833" },
      { name: "Grafana", level: "Expert", icon: SiGrafana, color: "#F46800" },
      { name: "Prometheus", level: "Advanced", icon: SiPrometheus, color: "#E6522C" },
      { name: "ELK Stack", level: "Advanced", icon: SiElasticsearch, color: "#005571" },
      { name: "CI/CD", level: "Expert", icon: "🔄" }
    ]
  },
  {
    title: "Data Engineering & ETL",
    skills: [
      { name: "Apache Kafka", level: "Expert", icon: SiApachekafka, color: "#231F20" },
      { name: "Prefect", level: "Expert", icon: "🌊" },
      { name: "Azure Data Factory", level: "Expert", icon: "🏭" },
      { name: "Apache Airflow", level: "Expert", icon: "🌪️" },
      { name: "Flowable", level: "Expert", icon: "🔀" },
      { name: "n8n", level: "Expert", icon: "🔗" }
    ]
  }
]

// Second row skills with more detailed layout
const detailedSkillCategories = [
  {
    title: "Development & Project Tools",
    skills: [
      { name: "Visual Studio", level: "Expert", icon: "💻" },
      { name: "Visual Studio Code", level: "Expert", icon: "🔵" },
      { name: "PyCharm", level: "Intermediate", icon: "🐍" },
      { name: "Git", level: "Expert", icon: SiGit, color: "#F05032" },
      { name: "GitHub", level: "Expert", icon: SiGithub, color: "#181717" },
      { name: "GitLab", level: "Advanced", icon: SiGitlab, color: "#FC6D26" },
      { name: "Linux", level: "Advanced", icon: SiLinux, color: "#FCC624" },
      { name: "PowerShell", level: "Advanced", icon: "💙" },
      { name: "Jira", level: "Expert", icon: SiJira, color: "#0052CC" },
      { name: "Postman", level: "Expert", icon: SiPostman, color: "#FF6C37" }
    ]
  },
  {
    title: "Testing & Quality Assurance",
    skills: [
      { name: "TDD", level: "Expert", icon: "🔄" },
      { name: "BDD", level: "Expert", icon: "📝" },
      { name: "SonarQube", level: "Expert", icon: SiSonarqube, color: "#4E9BCD" },
      { name: "Jest", level: "Expert", icon: SiJest, color: "#C21325" },
      { name: "PEP8", level: "Expert", icon: SiPython, color: "#3776AB" },
      { name: "Code Reviews", level: "Expert", icon: "👁️" },
      { name: "VAPT Assessment", level: "Expert", icon: "🛡️" },
      { name: "Security Testing", level: "Advanced", icon: "🔒" }
    ]
  },
  {
    title: "AI & Generative AI",
    skills: [
      { name: "Generative AI", level: "Expert", icon: "🤖" },
      { name: "AI Agents", level: "Expert", icon: "🧠" },
      { name: "Machine Learning", level: "Advanced", icon: "📊" },
      { name: "LLM Integration", level: "Expert", icon: "💬" },
      { name: "Vector Databases", level: "Expert", icon: "🧮" },
      { name: "AI Orchestration", level: "Expert", icon: "🎼" }
    ]
  },
  {
    title: "Methodologies",
    skills: [
      { name: "Agile", level: "Expert", icon: "🏃" },
      { name: "Scrum", level: "Expert", icon: "🏈" },
      { name: "Kanban", level: "Expert", icon: "📋" },
      { name: "DevOps", level: "Expert", icon: "♾️" },
      { name: "Microservices", level: "Expert", icon: "🧩" },
      { name: "SOLID Principles", level: "Expert", icon: "🏗️" }
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
            Comprehensive technical expertise spanning full-stack development, cloud infrastructure,
            DevOps practices, and modern frameworks. 16+ years of hands-on experience with enterprise-grade
            technologies and cutting-edge tools.
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
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      skill.level === 'Expert'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : skill.level === 'Advanced'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {skill.level}
                    </span>
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
                    <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                      skill.level === 'Expert'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        : skill.level === 'Advanced'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                    }`}>
                      {skill.level}
                    </span>
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
                15+
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
                50+
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
