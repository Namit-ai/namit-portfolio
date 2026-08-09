"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ClientTooltip from "./ClientTooltip";
import { clientsData } from "./brands";

interface BrandCardProps {
  brand: { name: string; logo: string; category: string };
  company: string;
  onHover: (client: any) => void;
}

export default function BrandCard({ brand, company, onHover }: BrandCardProps) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

  const client = clientsData.find(
    (c) => c.name === brand.name && c.company === company
  );

  const handleMouseEnter = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      x: rect.left + rect.width / 2,
      y: rect.top - 20,
    });
    setShowTooltip(true);
    onHover(client || null);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    onHover(null);
  };

  return (
    <>
      <motion.div
        className="group relative cursor-pointer"
        whileHover={{ scale: 1.08 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glow Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

        {/* Card */}
        <div className="relative bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4 hover:border-slate-600 transition-all duration-300 flex flex-col items-center justify-center h-32">
          <p className="text-4xl mb-2">{brand.logo}</p>
          <p className="text-sm font-semibold text-slate-100 text-center">
            {brand.name}
          </p>
          <p className="text-xs text-slate-400 mt-1">{brand.category}</p>
        </div>
      </motion.div>

      {/* Tooltip */}
      {showTooltip && client && (
        <ClientTooltip client={client} position={tooltipPos} />
      )}
    </>
  );
}
