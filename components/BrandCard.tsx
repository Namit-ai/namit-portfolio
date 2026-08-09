"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { clientsData } from "./brands";
import ClientTooltip from "./ClientTooltip";

interface BrandCardProps {
  brand: { name: string; logo: string; category: string };
  company: string;
}

export default function BrandCard({
  brand,
  company,
}: BrandCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const client = clientsData.find(
    (c) => c.name === brand.name && c.company === company
  );

  return (
    <motion.div
      className="group relative cursor-pointer h-32"
      whileHover={{ scale: 1.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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

      {/* Tooltip inside card - shows on hover */}
      {isHovered && client && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50">
          <ClientTooltip client={client} />
        </div>
      )}
    </motion.div>
  );
}
