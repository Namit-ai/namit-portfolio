"use client";

import { motion } from "framer-motion";
import { clientsData } from "./brands";

interface BrandCardProps {
  brand: { name: string; logo: string; category: string };
  company: string;
  onHover: (client: typeof clientsData[0]) => void;
  onLeave: () => void;
}

export default function BrandCard({
  brand,
  company,
  onHover,
  onLeave,
}: BrandCardProps) {
  const client = clientsData.find(
    (c) => c.name === brand.name && c.company === company
  );

  const handleMouseEnter = () => {
    if (client) {
      onHover(client);
    }
  };

  return (
    <motion.div
      className="group relative cursor-pointer h-32"
      whileHover={{ scale: 1.08 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={onLeave}
    >
      {/* Glow Border */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

      {/* Card */}
      <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-all duration-300 flex flex-col items-center justify-center h-full">
        <p className="text-4xl mb-2">{brand.logo}</p>
        <p className="text-sm font-semibold text-slate-100 text-center line-clamp-1">
          {brand.name}
        </p>
        <p className="text-xs text-slate-400 mt-1">{brand.category}</p>
      </div>
    </motion.div>
  );
}
