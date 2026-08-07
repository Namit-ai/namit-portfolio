"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Brand {
  name: string;
  logo: string;
  company: string;
  category: string;
}

export default function Brands() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const akrayaBrands: Brand[] = [
    { name: "Adobe", logo: "🎨", company: "Akraya", category: "SaaS" },
    { name: "Visa", logo: "💳", company: "Akraya", category: "FinTech" },
    { name: "Palo Alto Networks", logo: "🔒", company: "Akraya", category: "Cybersecurity" },
    { name: "Anaplan", logo: "📊", company: "Akraya", category: "Analytics" },
    { name: "eBay", logo: "🛍️", company: "Akraya", category: "E-commerce" },
    { name: "PG&E", logo: "⚡", company: "Akraya", category: "Energy" },
  ];

  const eTeamBrands: Brand[] = [
    { name: "Pinterest", logo: "📌", company: "eTeam", category: "Social" },
    { name: "Okta", logo: "🔐", company: "eTeam", category: "Identity" },
    { name: "Morgan Stanley", logo: "📈", company: "eTeam", category: "Finance" },
    { name: "Visa", logo: "💳", company: "eTeam", category: "FinTech" },
    { name: "Salesforce", logo: "☁️", company: "eTeam", category: "Enterprise" },
    { name: "Logitech", logo: "🖱️", company: "eTeam", category: "Hardware" },
    { name: "Equinix", logo: "🏢", company: "eTeam", category: "Data Center" },
    { name: "Avanade", logo: "💼", company: "eTeam", category: "Consulting" },
    { name: "Zillow", logo: "🏠", company: "eTeam", category: "Real Estate" },
    { name: "Genpact", logo: "🚀", company: "eTeam", category: "BPO" },
    { name: "TriNet", logo: "👥", company: "eTeam", category: "HR Tech" },
    { name: "Thales", logo: "🛡️", company: "eTeam", category: "Defense" },
    { name: "RCCL", logo: "🚢", company: "eTeam", category: "Cruise" },
  ];

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
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
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
            Through strategic staffing partnerships at Akraya and eTeam, I've supported 
            hiring initiatives for 20+ enterprise organizations across diverse sectors.
          </p>
        </motion.div>

        <div className="mb-16">
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
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-all duration-300 flex flex-col items-center justify-center h-32">
                  <p className="text-4xl mb-2">{brand.logo}</p>
                  <p className="text-sm font-semibold text-slate-100 text-center">
                    {brand.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{brand.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {eTeamBrands.map((brand, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group relative"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-all duration-300 flex flex-col items-center justify-center h-32">
                  <p className="text-4xl mb-2">{brand.logo}</p>
                  <p className="text-sm font-semibold text-slate-100 text-center">
                    {brand.name}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">{brand.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
