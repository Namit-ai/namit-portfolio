"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Clock } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface Certification {
  title: string;
  issuer: string;
  status: "earned" | "in-progress";
  progress?: number;
  icon: React.ReactNode;
  description: string;
  color: string;
}

export default function Certifications() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certifications: Certification[] = [
    {
      title: "CAPM",
      issuer: "Project Management Institute",
      status: "earned",
      icon: <Award className="w-6 h-6" />,
      description: "Certified Associate Project Manager",
      color: "from-emerald-500 to-teal-600",
    },
    {
      title: "PMI-ACP",
      issuer: "Project Management Institute",
      status: "earned",
      icon: <Award className="w-6 h-6" />,
      description: "Agile Certified Practitioner",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Power BI Certified",
      issuer: "Microsoft",
      status: "earned",
      icon: <Award className="w-6 h-6" />,
      description: "Data Visualization & Analytics",
      color: "from-yellow-500 to-orange-600",
    },
    {
      title: "Six Sigma Green Belt",
      issuer: "Process Improvement",
      status: "in-progress",
      progress: 65,
      icon: <Clock className="w-6 h-6" />,
      description: "In Progress - 65% Complete",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="certifications"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Professional Development
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Certifications & Credentials
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in project 
            management, agile methodologies, and data analytics.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${cert.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} p-2.5 text-white shadow-lg`}
                  >
                    {cert.icon}
                  </div>

                  {cert.status === "earned" ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full">
                      <CheckCircle className="w-3 h-3" />
                      Earned
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 bg-amber-500/20 text-amber-400 text-xs font-semibold rounded-full">
                      <Clock className="w-3 h-3" />
                      In Progress
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-bold text-white mb-1">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 text-sm font-semibold mb-2">
                  {cert.issuer}
                </p>
                <p className="text-slate-400 text-sm mb-4">{cert.description}</p>

                {cert.status === "in-progress" && (
                  <div className="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${cert.color}`}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${cert.progress}%` } : { width: 0 }}
                      transition={{ delay: 0.5, duration: 1.5 }}
                    />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold text-white mb-6">
            Additional Credentials & Assessments
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Project Management Assessment",
                description: "Verified professional competency in PM methodologies",
                status: "Verified",
              },
              {
                title: "Technical Interview Mastery",
                description: "Advanced Boolean search and sourcing strategies",
                status: "Completed",
              },
              {
                title: "VMS/AMS Platform Expertise",
                description: "Fieldglass, Beeline, and Master VMS optimization",
                status: "Certified",
              },
            ].map((cred, idx) => (
              <motion.div
                key={idx}
                className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-300"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
              >
                <p className="font-semibold text-slate-100 mb-2">{cred.title}</p>
                <p className="text-sm text-slate-400 mb-3">{cred.description}</p>
                <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
                  {cred.status}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
