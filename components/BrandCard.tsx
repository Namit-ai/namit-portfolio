"use client";

import { motion } from "framer-motion";
import { clientsData } from "./brands";

interface BrandCardProps {
  brand: {
    name: string;
    logo: string;
    category: string;
  };
  company: string;
  onHover: (client: typeof clientsData[0]) => void;
  onLeave: () => void;
}

export default function BrandCard({
  brand,
  company,
  onHover,
}: BrandCardProps) {
  const client = clientsData.find(
    (c) => c.name === brand.name && c.company === company
  );

  const handleClick = () => {
    if (client) {
      onHover(client);
    }
  };

  return (
    <motion.div
      className="group cursor-pointer h-32"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-cyan-500 transition-all duration-300 flex flex-col items-center justify-center h-full">
        <p className="text-4xl mb-2">{brand.logo}</p>

        <p className="text-sm font-semibold text-slate-100 text-center">
          {brand.name}
        </p>

        <p className="text-xs text-slate-400 mt-1">
          {brand.category}
        </p>
      </div>
    </motion.div>
  );
}
