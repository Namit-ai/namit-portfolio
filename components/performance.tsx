"use client";

import { motion } from "framer-motion";
import { TrendingUp, Zap, Target, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";

interface MetricCard {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
  trend?: string;
  color: string;
}

export default function Performance() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const metrics: MetricCard[] = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "194",
      label: "$/hour Margin",
      description: "Current average placement margin",
      trend: "+85% vs 2024",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: <Target className="w-8 h-8" />,
      value: "29",
      label: "Total Placements",
      description: "2024-2026 track record",
      trend: "100% accepted",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      value: "40",
      label: "% Faster",
      description: "Time-to-hire improvement",
      trend: "Process optimized",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "20",
      label: "Fortune 500s",
      description: "Brands supported via partnerships",
      trend: "Growing",
      color: "from-pink-500 to-pink-600",
    },
  ];

  const performanceData = [
    {
      period: "2024",
      margin: 105,
      placements: 15,
      label: "eTeam Foundation",
    },
    {
      period: "Q1-Q2 2025",
      margin: 33,
      placements: 3,
      label: "Strategic Transition",
    },
    {
      period: "Q2-Q3 2026",
      margin: 194,
      placements: 11,
      label: "Akraya Scale",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="performance"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-cyan-400 font-semibold text-sm tracking-widest uppercase mb-2">
            Performance Metrics
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            Placement Excellence
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Data-driven recruiting strategy optimized for quality, margin efficiency, 
            and sustainable growth across Fortune 500 partnerships.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -5 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-r ${metric.color} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}
              />

              <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-6 hover:border-slate-600 transition-all duration-300">
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${metric.color} p-2.5 mb-4 text-white shadow-lg`}
                >
                  {metric.icon}
                </div>

                <div className="mb-2">
                  <p className="text-4xl font-bold text-white">
                    {inView ? metric.value : "0"}
                  </p>
                </div>

                <p className="font-semibold text-slate-200 mb-2">{metric.label}</p>
                <p className="text-sm text-slate-400 mb-3">{metric.description}</p>

                {metric.trend && (
                  <p className="text-xs font-semibold text-cyan-400 inline-block bg-cyan-500/10 px-2 py-1 rounded">
                    {metric.trend}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-white">
            Margin Efficiency Evolution
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {performanceData.map((data, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 0.5 + idx * 0.1, duration: 0.6 }}
              >
                <div className="flex items-start">
                  <div className="flex flex-col items-center mr-6">
                    <motion.div
                      className="w-4 h-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    {idx < performanceData.length - 1 && (
                      <div className="w-0.5 h-20 bg-gradient-to-b from-slate-600 to-slate-700 mt-2" />
                    )}
                  </div>

                  <div>
                    <p className="text-sm text-slate-400 font-semibold">
                      {data.period}
                    </p>
                    <p className="text-sm text-slate-300 mb-4">{data.label}</p>

                    <div className="space-y-2">
                      <div>
                        <p className="text-2xl font-bold text-cyan-400">
                          ${data.margin}
                        </p>
                        <p className="text-xs text-slate-400">Per hour margin</p>
                      </div>
                      <div>
                        <p className="text-xl font-bold text-slate-100">
                          {data.placements}
                        </p>
                        <p className="text-xs text-slate-400">Placements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {[
            {
              title: "Quality > Quantity",
              description: "Strategic selection methodology focusing on high-value placements",
              icon: "🎯",
            },
            {
              title: "Speed Optimization",
              description: "40% reduction in time-to-hire through process automation",
              icon: "⚡",
            },
            {
              title: "Global Operations",
              description: "6 regions managed with multi-timezone expertise and coordination",
              icon: "🌍",
            },
          ].map((achievement, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300"
            >
              <p className="text-4xl mb-3">{achievement.icon}</p>
              <h4 className="text-lg font-bold text-white mb-2">
                {achievement.title}
              </h4>
              <p className="text-slate-400 text-sm">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
