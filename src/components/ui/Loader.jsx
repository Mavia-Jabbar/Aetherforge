import { motion, animate } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.8,
      ease: "circOut",
      onUpdate(value) {
        setCount(Math.floor(value));
      }
    });
    
    return () => controls.stop();
  }, []);

  return (
    <motion.div
      key="global-loader"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.05,
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#010103]"
    >
      <div className="flex flex-col items-center gap-8">
        
        {/* Glow effect backplate */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="font-heading text-4xl sm:text-5xl uppercase tracking-widest text-white drop-shadow-[0_0_15px_rgba(34,211,238,0.4)] relative z-10"
          >
             AetherForge
          </motion.h1>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-64 h-[1px] bg-white/10 overflow-hidden relative opacity-80">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "0%" }}
            transition={{ duration: 1.8, ease: "circOut" }}
            className="absolute inset-0 bg-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
          />
        </div>

        {/* Loading text typography & Counter */}
        <div className="w-64 flex justify-between items-center -mt-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-sans text-[10px] tracking-[0.4em] uppercase text-cyan-100/40"
          >
            Initializing . . .
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[10px] tracking-widest text-cyan-400 opacity-90"
          >
            {count}%
          </motion.div>
        </div>
        
      </div>
    </motion.div>
  );
}
