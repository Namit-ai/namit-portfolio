"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TimelineEvent {
  date: string;
  title: string;
  company: string;
  description: string;
  metrics: string[];
  icon: string;
}

export default function Timeline() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const events: TimelineEvent[] = [
    {
      date: "Apr 2025 - Present",
      title: "Senior Technical Recruiter",
      company: "Akraya Inc.",
      description: "Strategic placement optimization with focus on quality and margin efficiency",
      metrics: ["11 placements", "$194/hr margin", "85% improvement"],
      icon: "🚀",
    },
    {
      date: "Jan 2024 - Apr 2025",
      title: "Senior Technical Recruiter",
      company: "eTeam Global Services",
      description: "Full-lifecycle recruiting across 14+ technical verticals and Fortune 500 enterprises",
      metrics: ["18 placements", "$105/hr margin", "200+ interviews"],
      icon: "💼",
    },
    {
      date: "Earlier",
      title: "Recruiting Foundation",
      description: "Building expertise in technical recruiting, global sourcing, and talent operations",
      company: "Professional Growth",
      metrics: ["5+ years experience", "Multi-region expertise", "Certifications earned"],
      icon: "📈",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section
      id="timeline"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Career Journey
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Professional Timeline
          </h2>
          <p className="text-slate-400 text-lg">
            5+ years of specialized technical recruiting experience with continuous growth
          </p>
        </motion.div>

        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              className="group relative"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex items-start">
                <div className="flex flex-col items-center mr-6">
                  <motion.div
                    className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                    whileHover={{ scale: 1.3 }}
                  >
                    {event.icon}
                  </motion.div>
                  {idx < events.length - 1 && (
                    <motion.div
                      className="w-1 h-20 bg-gradient-to-b from-slate-600 to-slate-700 mt-2"
                      initial={{ height: 0 }}
                      animate={inView ? { height: 80 } : { height: 0 }}
                      transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
                    />
                  )}
                </div>

                <motion.div
                  className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 flex-1 hover:border-slate-600 hover:bg-slate-800/70 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <p className="text-cyan-400 font-semibold text-sm mb-1">
                    {event.date}
                  </p>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {event.title}
                  </h3>
                  <p className="text-slate-300 font-semibold mb-2">
                    {event.company}
                  </p>
                  <p className="text-slate-400 text-sm mb-4">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {event.metrics.map((metric, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
