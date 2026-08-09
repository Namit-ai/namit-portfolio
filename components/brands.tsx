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
  // ... (keep all your existing clientsData here)
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
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
