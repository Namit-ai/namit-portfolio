"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import BrandCard from "./BrandCard";
import ClientTooltip from "./ClientTooltip";

export const clientsData = [
  // AKRAYA
  {
    name: "Adobe",
    company: "Akraya",
    roles: [
      { title: "Data Scientist", skills: ["AI/ML", "Langcharts", "Research"] },
      {
        title: "Product Marketing Manager",
        skills: ["SAAS", "GTM", "Product Strategy", "Launch"],
      },
      {
        title: "Content Marketing Manager",
        skills: [
          "Content Strategy",
          "Brand Marketing",
          "SEO",
          "Designing",
          "Landing Pages",
          "Branding",
        ],
      },
      {
        title: "Data Analyst",
        skills: ["Power BI", "Tableau", "Data analysis"],
      },
      {
        title: "Customer Success Architect",
        skills: ["AEM", "CJA"],
      },
      {
        title: "Program/Project Manager",
        skills: ["Product Launches", "Agile", "SDLC", "Enterprise clients"],
      },
    ],
  },
  {
    name: "Visa",
    company: "Akraya",
    roles: [
      {
        title: "Talent Acquisition Manager",
        skills: ["TA", "Workday", "High Volume Recruiting"],
      },
      {
        title: "Recruiter",
        skills: ["Early Careers", "End-to-End Recruitment", "Domain Specific"],
      },
      {
        title: "Java Developer",
        skills: ["Java/J2EE", "React", "Spring", "Microservices"],
      },
      {
        title: "HR Employment Assistant",
        skills: ["HR Operations", "IRS Filing", "Documentation", "Onboarding"],
      },
      {
        title: "Project/Program Manager",
        skills: [
          "Finance Background",
          "Point-of-Sale",
          "ATM Infrastructure",
          "Implementation",
          "Reporting",
        ],
      },
      {
        title: "Full Stack Engineer",
        skills: ["70% Backend", "30% Frontend", "Java", "React", "Spring"],
      },
      {
        title: "Employee Relations Partner",
        skills: [
          "Performance Management",
          "Coaching",
          "Employee Relations",
          "Employment Laws",
        ],
      },
    ],
  },
  {
    name: "Palo Alto Networks",
    company: "Akraya",
    roles: [
      {
        title: "Network Security Engineer",
        skills: ["NGFW (Firewalls)", "Network Security"],
      },
      {
        title: "Project/Program Manager",
        skills: ["NPI", "NSI", "Product Launches", "GTM"],
      },
      {
        title: "Sales Operations Analyst",
        skills: [
          "Sales Compensation",
          "Partner Compensation",
          "Incentive Plans",
          "SOX",
          "Salesforce (SFDC)",
        ],
      },
    ],
  },
  {
    name: "Anaplan",
    company: "Akraya",
    roles: [
      {
        title: "Coupa Admin",
        skills: ["Coupa", "PLM", "Administrator"],
      },
      {
        title: "Program Manager",
        skills: ["NPI", "NSI", "Product Launches", "GTM"],
      },
      {
        title: "Real Estate PM",
        skills: [
          "Real Estate",
          "Workplace Strategy",
          "Space Planning",
          "IT/AV Infrastructure",
          "Vendor Management",
        ],
      },
      {
        title: "Marketing Operations Manager – Global",
        skills: [
          "Content & Webinars",
          "Integrated Campaigns",
          "Event/Webinar Operations",
          "Global Campaign Content",
        ],
      },
    ],
  },
  {
    name: "eBay",
    company: "Akraya",
    roles: [
      {
        title: "Product Designer",
        skills: [
          "UI/UX Designing",
          "Buyer-Seller Ecosystem",
          "Ecommerce",
          "Android/iOS/Desktops",
        ],
      },
      {
        title: ".Net Developer",
        skills: [".Net", "C#", "Payment Integration"],
      },
      {
        title: "Business Analyst",
        skills: [
          "API Integration",
          "System Integration",
          "Genesys Cloud",
          "Data Reporting",
        ],
      },
      {
        title: "Seller Capital Program Manager",
        skills: [
          "Consultative Selling",
          "Seller Outreach",
          "Performance Tracking",
          "Coaching",
        ],
      },
    ],
  },
  {
    name: "Okta",
    company: "Akraya",
    roles: [
      {
        title: "Software Engineer",
        skills: ["Node.js", "OAuth", "IAM", "Authenticators"],
      },
      {
        title: "Product Marketing Manager",
        skills: ["SAAS", "GTM", "Product Strategy", "Launch"],
      },
      {
        title: "Business Data Analyst",
        skills: ["Data Analysis", "SQL", "Tableau", "Power BI"],
      },
    ],
  },

  // eTEAM
  {
    name: "Pinterest",
    company: "eTeam",
    roles: [
      {
        title: "Software Engineer",
        skills: ["Java", "REST API", "NoSQL", "JavaScript/TypeScript"],
      },
      {
        title: "Product Marketing Manager",
        skills: ["B2B", "GTM", "Product Strategy", "Launch"],
      },
      {
        title: "Data Engineer",
        skills: ["Data Engineering", "Presto", "Airflow", "Cloud"],
      },
      {
        title: "Data Analyst",
        skills: ["Data Analysis", "SQL", "Tableau", "Power BI", "Excel"],
      },
    ],
  },
  {
    name: "Okta",
    company: "eTeam",
    roles: [
      {
        title: "Software Engineer - Social IAM",
        skills: ["Node.js", "Social Plugin SDK", "OAuth", "IAM"],
      },
      {
        title: "Software Engineer - Golang",
        skills: ["Golang", "Authenticators", "OAuth", "Backend"],
      },
      {
        title: "Product Marketing Manager",
        skills: ["SAAS", "GTM", "Product Strategy", "Launch"],
      },
    ],
  },
  {
    name: "Visa",
    company: "eTeam",
    roles: [
      {
        title: "Talent Acquisition Manager",
        skills: ["TA", "Workday", "High Volume Recruiting"],
      },
      {
        title: "Backend Engineer",
        skills: ["Java", "Spring Boot", "Microservices", "Payment Systems"],
      },
      {
        title: "Business Analyst",
        skills: [
          "API Integration",
          "System Integration",
          "Data Analysis",
          "Reporting",
        ],
      },
      {
        title: "Project/Program Manager",
        skills: [
          "Finance Background",
          "Payment Infrastructure",
          "Implementation",
          "GTM",
        ],
      },
      {
        title: "Marketing Manager",
        skills: ["SAAS", "GTM", "Demand Generation", "Campaign Management"],
      },
    ],
  },
  {
    name: "Salesforce",
    company: "eTeam",
    roles: [
      {
        title: "Software Engineer",
        skills: ["Apex", "Lightning", "Salesforce Cloud", "Integrations"],
      },
      {
        title: "Salesforce Admin",
        skills: ["Salesforce Administration", "Customization", "Reporting"],
      },
      {
        title: "Product Marketing Manager",
        skills: ["SAAS", "GTM", "Product Strategy", "Launch"],
      },
    ],
  },
  {
    name: "Logitech",
    company: "eTeam",
    roles: [
      {
        title: "Partner Marketing Manager - Public Sector",
        skills: [
          "B2G Marketing",
          "Campaign Execution",
          "Partner Management",
          "Event Planning",
        ],
      },
      {
        title: "Global Campaign Manager",
        skills: [
          "Campaign Strategy",
          "Global Execution",
          "Content Creation",
          "Analytics",
        ],
      },
    ],
  },
  {
    name: "Zillow",
    company: "eTeam",
    roles: [
      {
        title: "Software Engineer",
        skills: ["Java", "AWS", "Spring", "Microservices"],
      },
      {
        title: "Sales Enablement Manager",
        skills: [
          "Sales Enablement",
          "Content Creation",
          "Real Estate Domain",
          "Training",
        ],
      },
      {
        title: "Accounting Manager",
        skills: ["CPA", "Revenue Recognition", "ASC 606", "Big 4 Experience"],
      },
      {
        title: "Director of SOX",
        skills: ["SOX Compliance", "Revenue Recognition", "Internal Controls"],
      },
    ],
  },
  {
    name: "Thales",
    company: "eTeam",
    roles: [
      {
        title: "System Engineer",
        skills: ["Linux", "Public Trust Clearance", "System Engineering"],
      },
      {
        title: "System Administrator",
        skills: ["Linux Administration", "Active Clearance", "Ticketing"],
      },
    ],
  },
];

const akrayaBrands = [
  { name: "Adobe", logo: "🎨", category: "SaaS" },
  { name: "Visa", logo: "💳", category: "FinTech" },
  { name: "Palo Alto Networks", logo: "🔒", category: "Cybersecurity" },
  { name: "Anaplan", logo: "📊", category: "Analytics" },
  { name: "eBay", logo: "🛍️", category: "E-commerce" },
  { name: "Okta", logo: "🔐", category: "Identity" },
];

const eTeamBrands = [
  { name: "Pinterest", logo: "📌", category: "Social" },
  { name: "Okta", logo: "🔐", category: "Identity" },
  { name: "Visa", logo: "💳", category: "FinTech" },
  { name: "Salesforce", logo: "☁️", category: "Enterprise" },
  { name: "Logitech", logo: "🖱️", category: "Hardware" },
  { name: "Zillow", logo: "🏠", category: "Real Estate" },
  { name: "Thales", logo: "🛡️", category: "Defense" },
];

export default function Brands() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [hoveredClient, setHoveredClient] = useState<typeof clientsData[0] | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="brands"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background Gradients */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Enterprise Partnerships
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Fortune 500 Brands Supported
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto">
            Hover over any brand to explore recurring hiring expertise and
            specialized roles across global markets.
          </p>
        </motion.div>

        {/* Akraya Section */}
        <div className="mb-20">
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
            Akraya Inc. (Current)
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {akrayaBrands.map((brand, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BrandCard
                  brand={brand}
                  company="Akraya"
                  onHover={setHoveredClient}
                  onLeave={() => setHoveredClient(null)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* eTeam Section */}
        <div>
          <motion.h3
            className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <span className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full" />
            eTeam Global Services (2024-2025)
          </motion.h3>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {eTeamBrands.map((brand, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BrandCard
                  brand={brand}
                  company="eTeam"
                  onHover={setHoveredClient}
                  onLeave={() => setHoveredClient(null)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Tooltip on Hover */}
      {hoveredClient && <ClientTooltip client={hoveredClient} />}
    </section>
  );
}
