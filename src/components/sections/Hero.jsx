import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col items-center justify-center p-4 pt-32 overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            x: [0, -70, 0],
            y: [0, 50, 0],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/5 dark:bg-indigo-400/5 rounded-full blur-[100px]"
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass p-10 rounded-3xl max-w-3xl w-full text-center relative z-10"
      >
        <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl font-normal mb-6 tracking-tight leading-tight">
          AetherForge
        </h1>
        <p className="text-xl sm:text-2xl opacity-75 mb-8 max-w-xl mx-auto font-light leading-relaxed">
          Forged in the Aether – Code Without Noise.
        </p>
        <p className="text-base sm:text-lg opacity-60 max-w-lg mx-auto font-normal">
          We build elegant, high-performance digital products with a strong focus on minimal interfaces and robust AI capabilities.
        </p>
        
        <div className="mt-10 flex flex-wrap gap-4 items-center justify-center">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            Explore Work
          </motion.a>
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-8 py-3 rounded-full border border-foreground/20 hover:bg-foreground/5 transition-colors font-medium"
          >
            Engage
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
