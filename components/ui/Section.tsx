"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  fullWidth?: boolean;
}

export default function Section({ children, id, className = "", fullWidth = false }: SectionProps) {
  return (
    <motion.section 
      id={id} 
      className={`py-16 md:py-24 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={`mx-auto px-6 ${fullWidth ? 'w-full' : 'max-w-6xl'}`}>
        {children}
      </div>
    </motion.section>
  );
}
