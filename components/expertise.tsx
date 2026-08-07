"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ExpertiseDomain {
  title: string;
  icon: string;
  proficiency: number;
  description: string;
}

export default function Expertise() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const recruitingExpertise: ExpertiseDomain[] = [
    {
      title: "Technical Recruiting",
      icon: "💻",
      proficiency: 95,
      description: "Full-lifecycle technical talent acquisition",
    },
    {
      title: "Global Sourcing",
      icon: "🌍",
      proficiency: 90,
      description: "6 regions, multi-timezone coordination",
    },
    {
      title: "MSP/VMS Management",
      icon: "📋",
      proficiency: 95,
      description: "Vendor coordination & process optimization",
    },
    {
      title: "Candidate Experience",
      icon: "⭐",
      proficiency: 92,
      description: "End-to-end engagement optimization",
    },
    {
      title: "Stakeholder Management",
      icon: "🤝",
      proficiency: 93,
      description: "Cross-functional relationship building",
    },
    {
      title: "Talent Intelligence",
      icon: "🔍",
      proficiency: 88,
      description: "Market research & competitive analysis",
    },
  ];

  const operationsExpertise: ExpertiseDomain[] = [
    {
      title: "Recruitment Analytics",
      icon: "📊",
      proficiency: 85,
      description: "KPI tracking & performance metrics",
    },
    {
      title: "Process Improvement",
      icon: "⚙️",
      proficiency: 87,
      description: "Workflow optimization & automation",
    },
    {
      title: "Margin Analysis",
      icon: "💰",
      proficiency: 90,
      description: "ROI calculation & financial tracking",
    },
    {
      title: "Time-to-Hire",
      icon: "⏱️",
      proficiency: 88,
      description: "Speed optimization strategies",
    },
    {
      title: "Project Management",
      icon: "📅",
      proficiency: 86,
      description: "CAPM & PMI-ACP certified",
    },
    {
      title: "Data Visualization",
      icon: "📈",
      proficiency: 85,
      description: "Power BI dashboards & reporting",
    },
  ];

  const techStack = {
    "Sourcing & Research": [
      "LinkedIn Recruiter",
      "Boolean Search",
      "X-Ray Research",
      "GitHub",
      "Stack Overflow",
    ],
    "ATS Platforms": ["Workable", "Lever", "BreezyHR", "Greenhouse", "Taleo"],
    "VMS/AMS Systems": ["Fieldglass", "Beeline", "Master VMS", "Mavenlink"],
    "CRM & Outreach": ["HubSpot", "Outreach", "Salesforce", "Monday.com"],
    "Analytics Tools": ["Power BI", "Tableau", "Google Analytics", "Recruiting Metrics"],
    "Coordination": ["Google Suite", "Slack", "Calendly", "Zoom"],
  };

  const techVerticals = [
    {
      category: "Cloud & Infrastructure",
      skills: [
        "DevOps",
        "Cloud Engineering",
        "AWS",
        "Azure",
        "Kubernetes",
        "Infrastructure",
      ],
    },
    {
      category: "Data & AI/ML",
      skills: [
        "AI/ML Engineering",
        "Data Engineering",
        "Data Science",
        "Analytics",
      ],
    },
    {
      category: "Enterprise Systems",
      skills: ["Salesforce", "ERP", "Workday", "SAP", "Oracle", "NetSuite"],
    },
    {
      category: "Security & Product",
      skills: ["Cybersecurity", "Product Management", "SRE", "Architecture"],
    },
    {
      category: "Tech & Specialized",
      skills: ["Windchill", "HR Tech", "Marketing Tech", "Program Management"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="expertise"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Core Competencies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Expertise & Proficiency
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Specialized knowledge across recruiting domain, operations, and 14+ 
            technical verticals with proven execution.
          </p>
        </motion.div>

        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            Recruiting Domain
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {recruitingExpertise.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-3xl">{item.icon}</p>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                </div>

                <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.proficiency}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + idx * 0.05, duration: 1 }}
                  />
                </div>
                <p className="text-xs text-cyan-400 mt-2 font-semibold">
                  {item.proficiency}%
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Operations & Analytics
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {operationsExpertise.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-3xl">{item.icon}</p>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-400">{item.description}</p>
                  </div>
                </div>

                <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-600"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${item.proficiency}%` } : { width: 0 }}
                    transition={{ delay: 0.5 + idx * 0.05, duration: 1 }}
                  />
                </div>
                <p className="text-xs text-purple-400 mt-2 font-semibold">
                  {item.proficiency}%
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-white mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Technical Specializations (14+ Verticals)
          </motion.h3>

          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {techVerticals.map((vertical, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
              >
                <h4 className="font-bold text-white mb-4">{vertical.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {vertical.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-semibold rounded-full hover:bg-cyan-500/30 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-10">Recruiting Tech Stack</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, tools], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.7 + idx * 0.1, duration: 0.6 }}
              >
                <h4 className="font-bold text-slate-100 mb-4 text-sm uppercase tracking-wide">
                  {category}
                </h4>
                <ul className="space-y-2">
                  {tools.map((tool, toolIdx) => (
                    <motion.li
                      key={toolIdx}
                      className="flex items-center gap-2 text-slate-300 text-sm"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{
                        delay: 0.8 + idx * 0.1 + toolIdx * 0.05,
                        duration: 0.4,
                      }}
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full" />
                      {tool}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
