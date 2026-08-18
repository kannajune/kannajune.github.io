"use client"

import { motion } from "framer-motion"
import { MapPin, Trophy, Code } from "lucide-react"

const experiences = [
  {
    title: "Chief Technology Officer",
    company: "Catalys",
    location: "Remote, India",
    period: "Oct 2024 - Present",
    description: "Leading complete engineering organization and technology strategy for a performance marketing platform. Driving architectural decisions, team building, and business alignment while overseeing SaaS development, data engineering, and microservices architecture.",
    achievements: [
      "Built and scaled engineering teams from ground up, establishing technical leadership structure and development processes across multiple product verticals",
      "Architected enterprise-grade microservices architecture using Azure Data Factory (ADF), FastAPI, and Python for scalable data processing and analytics",
      "Designed and implemented comprehensive SaaS development framework with multi-tenant architecture, authentication services, and API governance",
      "Established technology roadmap and KPI frameworks aligned with business objectives, driving measurable outcomes in product delivery and system performance",
      "Led digital transformation initiatives including Shopify app development, GraphQL API standardization, and modern frontend architecture with React",
      "Implemented robust CI/CD pipelines using Jenkins, Azure Functions, and build automation, reducing deployment time by 60% and improving system reliability",
      "Architected cloud-native data engineering solutions leveraging Python, FastAPI, and Azure services for high-volume data ingestion and real-time analytics",
      "Drove business strategy alignment through technology decisions, ensuring scalable architecture supports rapid business growth and market expansion",
      "Established engineering excellence practices including code quality standards, security protocols, and performance optimization across all development teams",
      "Led vendor partnerships and technology evaluations, making strategic decisions on technology stack and third-party integrations"
    ],
    technologies: ["Python", "FastAPI", "Azure Data Factory", "GraphQL", "Jenkins", "Azure Functions", "Microservices", "React", "SaaS Architecture", "Data Engineering", "Shopify Development", "Authentication Services", "CI/CD", "Team Leadership", "Business Strategy"]
  },
  {
    title: "Lead Consultant (Solutions Architect)",
    company: "Facctum",
    location: "Bengaluru, India",
    period: "Jan 2023 - Sep 2024",
    description: "Leading solutions architecture and full-stack development for AML domain products, managing teams and AWS infrastructure while driving strategic implementation plans and maintaining partner relationships.",
    achievements: [
      "Architected and developed highly scalable transaction monitoring and alert management applications for banking AML division",
      "Built comprehensive AML compliance solutions with advanced transaction screening and case management capabilities",
      "Established IT service delivery and governance frameworks aligned with business objectives, compliance mandates, and security requirements",
      "Implemented AWS cost optimization strategies and managed EKS clusters with on-premises cloud setup for enhanced performance",
      "Led cross-functional teams in full-stack development using Node.js, React, and modern workflow engines like Flowable and XState",
      "Designed enterprise API platforms and championed digital transformation initiatives across web and mobile applications",
      "Built complex consumer-facing digital products and internal systems in high-pressure environments ensuring robust performance"
    ],
    technologies: ["AWS", "EKS", "Node.js", "React", "Flowable", "XState", "PostgreSQL", "MongoDB", "AML Systems", "Team Management", "Solutions Architecture", "Full-Stack Development", "Enterprise APIs", "Cloud Infrastructure", "KAFKA", "RabbitMQ","AWS Lambda", "API Gateway", "CloudWatch", "Terraform", "Jenkins", "Grafana", "Prometheus", "ELK Stack", "CI/CD"]
  },
  {
    title: "Deputy Chief Technology Officer",
    company: "Sumeru Enterprise Tiger Business Solutions",
    location: "Bengaluru, India",
    period: "Jan 2016 - Jan 2023",
    description: "Joined as a senior engineer and built the web and mobile engineering organization from a single person to 35 over seven years — appointing and managing five tech leads and owning technical hiring, interview design, and compensation decisions. Progressed to Deputy CTO, leading from the front on architecture, code review, and production debugging while delivering enterprise-scale SaaS and mobile platforms.",
    achievements: [
      "Grew the web and mobile engineering organization from a single engineer to 35 people over seven years, building out front-end, mobile, and QA teams as the org scaled",
      "Appointed and managed five tech leads reporting directly to me, setting team structure, review cadence, and career development",
      "Owned technical hiring end to end as the team scaled — designed the interview process and question sets, ran the technical round personally, and made final compensation and headcount decisions",
      "Delivered for enterprise clients including Toyota, DBS Bank, TATA Capital, Amex, IDFC First Bank, Federal Bank, AU Bank, and Volkswagen, with delivery spanning India, South-East Asia, ANZ, and North Asia",
      "Led cross-functional development teams, driving architectural decisions for frontend and mobile platforms while consistently delivering secure, high-quality products",
      "Architected and built comprehensive frontend and mobile application frameworks, serving as key decision-maker for technology stack and implementation strategies",
      "Spearheaded migration of legacy Angular 1.5 system to Angular 14, significantly improving application performance, security, and maintainability for enterprise applications",
      "Pioneered conversion of legacy applications into SaaS model using React and Node.js, driving new revenue streams and improving scalability for multi-tenant systems",
      "Architected and developed dynamic form builder using Angular, improving operational efficiency for loan application processing and reducing form handling complexities",
      "Architected frontend solutions with React and Angular for financial applications, integrating with .NET backend services to deliver scalable enterprise features",
      "Architected React Native-based iOS and Android apps, enhancing performance and reducing app load times by 20% while leading test automation",
      "Migrated front-end technologies to React, achieving 30% performance boost while integrating with modern backend services and Azure cloud infrastructure",
      "Developed comprehensive reporting solutions for testing, mobile, and web applications using FusionCharts, D3.js, and Elasticsearch-backed Python reports",
      "Implemented performance testing frameworks using JMeter, ensuring optimal application performance across web and mobile platforms",
      "Integrated Twilio video calling capabilities into applications, enhancing real-time communication features for end users",
      "Implemented enterprise-grade security including VAPT fixes, vulnerability assessments, and Diffie-Hellman algorithm for client authentication",
      "Executed POCs using Node.js full-stack development and Azure Function Apps, demonstrating reduced infrastructure costs and enhanced scalability",
      "Served as SPOC for front-end development and mobile applications, delivering cohesive strategies for high-quality product development in the financial sector",
      "Received multiple performance awards for leading complex projects, driving architectural excellence, and delivering innovative solutions across industries"
    ],
    technologies: ["Angular", "React", "React Native", ".NET", "Node.js", "Azure", "Python", "Elasticsearch", "FusionCharts", "D3.js", "JMeter", "Twilio", "iOS Development", "Android Development", "SaaS Architecture", "Performance Testing", "VAPT", "Security"]
  },
  {
    title: "Technical Lead",
    company: "Tesark Technologies",
    location: "Bengaluru, India",
    period: "Aug 2013 - Dec 2015",
    description: "Led full-stack development projects and team management, progressing from Associate Software Engineer to Technical Lead. Developed diverse web applications including healthcare, education, and e-commerce platforms.",
    achievements: [
      "Architected and developed CEGHomes, a comprehensive hostel counseling application that streamlined room allocation and payment collection processes, serving over 4,500 attendees across three days with integrated online payment system",
      "Engineered a live hospital surgery conference application with real-time streaming capabilities for medical professionals",
      "Developed an online MCQs test portal with comprehensive assessment features for school students",
      "Designed and built an e-commerce platform specialized for clothing retail with complete shopping functionality",
      "Created a Point of Sale (POS) application tailored for juice bars and restaurants with inventory management",
      "Led technical mentoring programs for junior developers and established code quality improvement processes",
      "Managed client requirement analysis and coordinated with development teams for timely project delivery",
      "Implemented real-time communication features using WebSocket technologies for enhanced user experience"
    ],
    technologies: ["Ruby on Rails", "AngularJs", "JavaScript", "Node.js", "Socket.io", "AWS", "Digital Ocean", "Redis", "MySql", "WebRTC", "RESTful APIs"]
  },
  {
    title: "Independent Consultant",
    company: "SEO Media Website Promotions",
    location: "Remote",
    period: "Jun 2010 - Jul 2013",
    description: "Designed and developed static websites with a focus on user experience and SEO optimization to improve search rankings. Provided media promotion strategies and SEO consulting services.",
    achievements: [
      "Designed and developed static websites with focus on user experience and SEO optimization",
      "Advised clients on media promotion strategies and implemented SEO best practices to enhance online visibility",
      "Created web style guides to ensure design consistency across client projects",
      "Improved search rankings for multiple client websites through strategic SEO implementation",
      "Delivered end-to-end web development solutions for small and medium businesses"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Joomla", "Blogger", "SEO", "Web Design", "User Experience", "Digital Marketing", "Static Websites"]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-6" />
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My professional journey in software development, building innovative solutions 
            and growing with amazing teams.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex"
              >
                {/* Timeline indicator */}
                <div className="flex flex-col items-center mr-8">
                  <div className="flex items-center justify-center w-12 h-12 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-sm">
                    <div className="w-3 h-3 bg-blue-600 rounded-full" />
                  </div>
                  {index === 0 && (
                    <div className="mt-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded">
                      Present
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow">
                    {/* Header */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-600 dark:text-gray-400 text-sm mb-2">
                        <div className="flex items-center mb-1 sm:mb-0 sm:mr-4">
                          <span className="font-medium text-gray-900 dark:text-white">{exp.company}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{exp.location}</span>
                          <span className="mx-2">•</span>
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <Trophy className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          Achievements
                        </h4>
                      </div>
                      <ul className="space-y-1.5 ml-6">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm">
                            <span className="text-gray-400 mr-2">•</span>
                            <span className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex items-center mb-3">
                        <Code className="w-4 h-4 mr-2 text-gray-600 dark:text-gray-400" />
                        <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                          Technologies
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-1.5 ml-6">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
