"use client";
import { motion } from "framer-motion";

interface ClientTooltipProps {
  client: {
    name: string;
    company: string;
    roles: { title: string; skills: string[] }[];
  };
}

export default function ClientTooltip({ client }: ClientTooltipProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      {/* Tooltip Card */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 w-96 backdrop-blur-xl">
        {/* Header */}
        <div className="mb-4 pb-4 border-b border-slate-700/50">
          <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            {client.company}
          </p>
          <p className="text-white font-bold text-xl">{client.name}</p>
          <p className="text-slate-400 text-xs mt-2">
            {client.roles.length} recurring hiring focus areas
          </p>
        </div>

        {/* Roles - SCROLLABLE */}
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {client.roles.map((role, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <p className="text-sm font-semibold text-white">🔹 {role.title}</p>
              <div className="flex flex-wrap gap-1 mt-2">
                {role.skills.map((skill, skillIdx) => (
                  <span
                    key={skillIdx}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
