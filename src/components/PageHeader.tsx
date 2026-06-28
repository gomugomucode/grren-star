"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: React.ReactNode;
  subtitle: string;
  badge?: string;
}

export default function PageHeader({ title, subtitle, badge }: PageHeaderProps) {
  return (
    <div className="bg-white min-h-[40vh] flex flex-col justify-center relative overflow-hidden pt-28 pb-16 w-full border-b border-slate-100">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-slate-50 rounded-full blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
        {badge && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-sm font-semibold text-green-700 mb-8 uppercase tracking-widest shadow-sm"
          >
            {badge}
          </motion.div>
        )}
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight"
        >
          {title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
