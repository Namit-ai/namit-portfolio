"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BrandCard from "./BrandCard";

export const clientsData = [
  {
    name: "Adobe",
    company: "Akraya",
    roles: [
      { title: "Data Scientist", skills: ["AI/ML", "LangChain", "Research"] },
      { title: "Product Marketing", skills: ["SaaS", "GTM", "Product Strategy", "Launch"] },
      { title: "Content Marketing", skills: ["Content Strategy", "Brand Marketing", "SEO", "Designing", "Landing Pages", "Branding Content"] },
      { title: "Data Analyst", skills: ["Power BI", "Tableau", "Data Analysis"] },
      { title: "Customer Success Architect", skills: ["AEM", "CJA"] },
      { title: "Program/Project Manager", skills: ["Product Launches", "Agile", "SDLC", "Enterprise clients"] },
    ],
  },
  {
    name: "Visa",
    company: "Akraya",
    roles: [
      { title: "Talent Acquision Manager", skills: ["TA", "Workday", "High Volume Recruiting"] },
      { title: "Recruiter", skills: ["Early Careers", "End-to-End Recruitment", "Domain Specific client Experience"] },
      { title: "Java Developer", skills: ["Java/J2EE", "React", "Spring", "Microservices"] },
      { title: "HR Employment Assitant", skills: ["HR Operations", "IRS Filling", "Documentation", "Onboarding"] },
      { title: "Project/Program Manager", skills: ["Finance Background", "Point-of-Sale", "ATM infrastructure", "Implementation", "Reporting"] },
    ],
  },
  {
    name: "Palo Alto Networks",
    company: "Akraya",
    roles: [
      { title: "Network Security Engineer", skills: ["NGFW (Firewalls)", "Network security"] },
      { title: "Project/Program Manager", skills: ["NPI", "NSI", "Product Launches", "GTM"] },
      { title: "Sales Operations Analyst", skills: ["Sales compensation", "Partner compensation/relations", "Incentive Plan", "Sox", "Salesforce (SFDC)"] },
      { title: "Employee Relations Partner", skills: ["Performance Management", "Coaching", "Employee Relations", "Employment laws"] },
      { title: "Full Stack Engineer", skills: ["70% Backend", "30% Frontend", "Java", "react", "spring"] },
    ],
  },
  {
    name: "Anaplan",
    company: "Akraya",
    roles: [
      { title: "Coupa Admin", skills: ["Coupa", "PLM", "Administrator"] },
      { title: "Program Manager", skills: ["NPI", "NSI", "Product Launches", "GTM"] },
      { title: "Real Estate PM", skills: ["Real estate", "workplace strategy", "Space Planning", "IT/AV infrastructure", "and vendor management"] },
      { title: "Marketing Operations Manager – Global Content & Webinars", skills: ["Integrated campaigns", "end to end event/webinar operations", "global campaign content"] },
    ],
  },
  {
    name: "eBay",
    company: "Akraya",
    roles: [
      { title: "Product Designer", skills: ["UI/UX Designing", "Buyer-seller ecosystem", "Ecommerce", "Android/iOS/Desktops"] },
      { title: "UX Writing & Content", skills: ["UX Writing", "Content Design", "Content Strategy", "Microcopy", "Voice & Tone", "Information Architecture", "Content Audits"] },
      { title: "Visual & Interaction Design", skills: ["Visual Design", "UI Design", "Interaction Design", "Design Systems", "Typography", "Layout", "Color Theory", "Visual Hierarchy", "Prototyping", "Figma", "Adobe Creative Suite"] },
      { title: "Motion Design", skills: ["Motion Design", "Animation", "Interaction Animation", "Micro-Interactions", "Transitions", "Rive"] },
    ],
  },
  {
    name: "Okta",
    company: "Akraya",
    roles: [
      { title: "Software Engineer Social IAM", skills: ["Node.JS (Heavy Backend)", "Social Plugin SDK", "IAM"] },
      { title: "Software Engineer", skills: ["Golang", "Authenticators", "Oauth"] },
      { title: "Product Marketing", skills: ["SaaS", "GTM", "Product Strategy", "Launch"] },
      { title: "Business Data Analyst", skills: ["Data Analysis", "Visualisation", "SQL", "Tableau", "Power BI", "Salesforce", "Excel"] },
      { title: "Global Campaign Manager, Okta Platform", skills: ["marketing campaigns", "launch", "B2B demand generation", "cybersecurity or Identity and Access Management (IAM) SaaS industry"] },
      { title: "Partner Marketing Manager - Public Sector", skills: ["B2G Marketing (Expert)", "Campaign Execution (Advanced)", "Partner Management (Advanced)", "Event Planning (Advanced)", "Data Analysis (Intermediate)"] },
      { title: "Software Engineer, Subscription Management", skills: ["Node.js (primary focus)", "payment systems (Stripe)", "subscription management"] },
      { title: "UX Program Management", skills: ["UX Program Management", "Design Operations", "Program Management", "Cross-Functional Collaboration", "Design Planning", "Roadmaps", "Workflow Management", "Agile", "Scrum", "Stakeholder Management", "Project Coordination", "Risk Management"] },
    ],
  },
  {
    name: "Netflix",
    company: "Akraya",
    roles: [
      { title: "Product Designer", skills: ["0 to 1", "TV/Mobile/Web", "IP/Entertainment Background"] },
      { title: "AI Content Evaluator", skills: ["Localization", "AI Content", "LLM"] },
      { title: "Marketing Manager", skills: ["Strategy + Operations", "Integrated Marketing campaigns", "Media channels", "Airtable"] },
    ],
  },
  {
    name: "Airbnb",
    company: "Akraya",
    roles: [
      { title: "Data Scientist/Products Analytics", skills: ["Visualization", "Marketplace Background", "SQL"] },
      { title: "Enablement Program Manager", skills: ["Enablement Tooling", "Strategy", "User adoption"] },
    ],
  },
  {
    name: "Pinterest",
    company: "eTeam",
    roles: [
      { title: "Data Engineer", skills: ["Data Engineering", "Presto", "Airflow", "Cloud", "Social Media Industry"] },
      { title: "Data Analyst", skills: ["Data Analysis", "Visualisation", "SQL", "Tableau", "Power BI", "Salesforce", "Excel"] },
      { title: "Adminitrative Assistant", skills: ["Calendar Management", "C-suite", "Travel Management"] },
      { title: "Marketing Manager", skills: ["SaaS", "GTM", "Demand Generation", "Launch", "Campaign Management"] },
      { title: "ABX Marketing Manager", skills: ["GTM", "MarTech", "ABM campaign", "Marketing", "Salesforce"] },
      { title: "Localization Project Manager", skills: ["Localization", "content", "Project management", "B2B SAAS Backround"] },
    ],
  },
  {
    name: "Okta",
    company: "eTeam",
    roles: [
      { title: "Software Engineer Social IAM", skills: ["Node.JS (Heavy Backend)", "Social Plugin SDK", "IAM"] },
      { title: "Software Engineer", skills: ["Golang", "Authenticators", "Oauth"] },
      { title: "Product Marketing", skills: ["SaaS", "GTM", "Product Strategy", "Launch"] },
      { title: "Business Data Analyst", skills: ["Data Analysis", "Visualisation", "SQL", "Tableau", "Power BI", "Salesforce", "Excel"] },
      { title: "Global Campaign Manager, Okta Platform", skills: ["marketing campaigns", "launch", "B2B demand generation", "cybersecurity or Identity and Access Management (IAM) SaaS industry"] },
      { title: "Partner Marketing Manager - Public Sector", skills: ["B2G Marketing (Expert)", "Campaign Execution (Advanced)", "Partner Management (Advanced)", "Event Planning (Advanced)", "Data Analysis (Intermediate)"] },
      { title: "Software Engineer, Subscription Management", skills: ["Node.js (primary focus)", "payment systems (Stripe)", "subscription management"] },
      { title: "UX Program Management", skills: ["UX Program Management", "Design Operations", "Program Management", "Cross-Functional Collaboration", "Design Planning", "Roadmaps", "Workflow Management", "Agile", "Scrum", "Stakeholder Management", "Project Coordination", "Risk Management"] },
    ],
  },
  {
    name: "Salesforce",
    company: "eTeam",
    roles: [
      { title: "Salesforce Lightning Developer", skills: ["Salesforce", "Lightning Web Components (LWC)", "JavaScript", "HTML", "and CSS"] },
      { title: "Salesforce Consultants", skills: ["Salesforce Marketing Cloud", "Sales cloud", "Service Cloud", "Commerce Cloud"] },
    ],
  },
  {
    name: "Trinet",
    company: "eTeam",
    roles: [
      { title: "Python Developer", skills: ["Python", "numpy", "pandas", "Visualization"] },
      { title: "Payroll Admin/Manager", skills: ["Payroll", "compensation", "Administration"] },
      { title: "HRBP", skills: ["HR", "Strategy Planning", "Performance tracking", "Coaching"] },
    ],
  },
  {
    name: "Visa",
    company: "eTeam",
    roles: [
      { title: "Talent Acquision Manager", skills: ["TA", "Workday", "High Volume Recruiting"] },
      { title: "Recruiter", skills: ["Early Careers", "End-to-End Recruitment", "Domain Specific client Experience"] },
      { title: "Java Developer", skills: ["Java/J2EE", "React", "Spring", "Microservices"] },
      { title: "HR Employment Assitant", skills: ["HR Operations", "IRS Filling", "Documentation", "Onboarding"] },
      { title: "Project/Program Manager", skills: ["Finance Background", "Point-of-Sale", "ATM infrastructure", "Implementation", "Reporting"] },
    ],
  },
  {
    name: "Zillow",
    company: "eTeam",
    roles: [
      { title: "Software Engineer", skills: ["Java", "AWS Step Functions", "EC2", "Spring"] },
      { title: "Sales Enablement", skills: ["Sales enablement", "pitches", "Material", "Real estate Sales"] },
      { title: "Director of SOX", skills: ["SOX compliance", "ASC-606", "CPA"] },
      { title: "Accounting Manager", skills: ["CPA", "Big  4 experience", "Revenue Recognition", "ASC 606"] },
      { title: "Data Annotation", skills: ["NLP", "LLM", "Annotations"] },
    ],
  },
  {
    name: "Thales",
    company: "eTeam",
    roles: [
      { title: "System Engineer", skills: ["Linux", "Public Trust clearance", "System engineering"] },
      { title: "System Admin", skills: ["Linux", "Ticketing", "Active Clearance"] },
    ],
  },
  {
    name: "Logitech",
    company: "eTeam",
    roles: [
      { title: "Partner Marketing Manager - Public Sector", skills: ["B2G Marketing", "Campaign Execution", "Partner Management", "Event Planning", "Data Analysis"] },
      { title: "Global Campaign Manager, Okta Platform", skills: ["marketing campaigns", "launch", "B2B demand generation", "Tech industry"] },
    ],
  },
];

const akrayaBrands = [
  { name: "Netflix", logo: "🎬", category: "Entertainment" },
  { name: "Airbnb", logo: "🏡", category: "Marketplace" },
  { name: "Adobe", logo: "🎨", category: "SaaS" },
  { name: "Visa", logo: "💳", category: "FinTech" },
  { name: "eBay", logo: "🛍️", category: "E-commerce" },
  { name: "Palo Alto Networks", logo: "🔒", category: "Cybersecurity" },
  { name: "Okta", logo: "🔐", category: "Identity" },
  { name: "Anaplan", logo: "📊", category: "Analytics" },
];

const eTeamBrands = [
  { name: "Pinterest", logo: "📌", category: "Social" },
  { name: "Salesforce", logo: "☁️", category: "Enterprise" },
  { name: "Visa", logo: "💳", category: "FinTech" },
  { name: "Okta", logo: "🔐", category: "Identity" },
  { name: "Zillow", logo: "🏠", category: "Real Estate" },
  { name: "Logitech", logo: "🖱️", category: "Hardware" },
  { name: "Thales", logo: "🛡️", category: "Defense" },
];

export default function Brands() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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
      id="clients"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-visible"
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
            Fortune 500 Clients Supported
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-visible"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {akrayaBrands.map((brand, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BrandCard
                  brand={brand}
                  company="Akraya"
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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-visible"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {eTeamBrands.map((brand, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <BrandCard
                  brand={brand}
                  company="eTeam"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
