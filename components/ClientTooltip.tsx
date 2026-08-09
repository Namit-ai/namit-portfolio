"use client";

import { motion } from "framer-motion";

interface ClientTooltipProps {
  client: {
    name: string;
    company: string;
    roles: {
      title: string;
      skills: string[];
    }[];
  };
}

export default function ClientTooltip({ client }: ClientTooltipProps) {
  return (
    <motion.div
      className="w-[430px] max-w-[90vw] rounded-2xl border border-cyan-500/30 bg-slate-900/95 backdrop-blur-xl shadow-2xl overflow-hidden pointer-events-auto"
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      {/* Header */}
      <div className="border-b border-slate-700 p-5">
        <p className="text-cyan-400 text-sm font-semibold">
          {client.company}
        </p>

        <h3 className="text-white text-xl font-bold mt-1">
          {client.name}
        </h3>

        <p className="text-slate-400 text-sm mt-1">
          {client.roles.length} recurring hiring focus areas
        </p>
      </div>

      {/* Scrollable Content */}
      <div className="max-h-[420px] overflow-y-auto p-5 space-y-5">
        {client.roles.map((role, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.04 }}
          >
            <h4 className="text-white font-semibold text-sm mb-2">
              🔹 {role.title}
            </h4>

            <div className="flex flex-wrap gap-2">
              {role.skills.map((skill, skillIdx) => (
                <span
                  key={skillIdx}
                  className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
