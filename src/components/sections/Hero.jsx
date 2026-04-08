import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100vh] w-full overflow-hidden">
      
      {/* Simple Animated Background Splashes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div
           animate={{ scale: [1, 1.2, 1], x: [0, 60, 0], y: [0, -40, 0], rotate: [0, 90, 0] }}
           transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
           className="absolute top-[10%] left-[10%] w-[30vh] h-[30vh] md:w-[30vw] md:h-[30vw] bg-blue-500/10 rounded-full blur-[120px]"
        />
        <motion.div
           animate={{ scale: [1, 1.5, 1], x: [0, -80, 0], y: [0, 60, 0], rotate: [0, -90, 0] }}
           transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
           className="absolute bottom-[10%] right-[10%] w-[40vh] h-[40vh] md:w-[40vw] md:h-[40vw] bg-cyan-500/10 rounded-full blur-[140px]"
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center p-6 pt-32 lg:pt-0 min-h-[100vh] max-w-[1400px] mx-auto gap-12 lg:gap-20">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left w-full"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-foreground/10 text-sm font-medium shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Forging the Digital Frontier
          </motion.div>

          <h1 className="font-heading text-6xl sm:text-7xl lg:text-8xl mb-6 tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/50">
            AetherForge
          </h1>
          
          <p className="font-subheading text-2xl sm:text-3xl opacity-90 mb-8 max-w-2xl mx-auto lg:mx-0 font-light text-blue-500 dark:text-blue-400">
            Code Without Noise.
          </p>

          <p className="text-lg sm:text-xl opacity-70 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed mb-10">
            We architect premium digital experiences. Merging striking aesthetics with uncompromising performance through a minimalist, glassy lens.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center lg:justify-start">
            <motion.a 
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#projects" 
              className="w-full sm:w-auto px-10 py-4 rounded-2xl bg-foreground text-background font-semibold hover:shadow-xl hover:shadow-foreground/10 transition-all text-lg"
            >
              Explore Work
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.02, translateY: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#contact" 
              className="w-full sm:w-auto px-10 py-4 rounded-2xl glass hover:bg-foreground/5 transition-all font-semibold flex items-center justify-center gap-2 text-lg border border-foreground/10"
            >
              Engage Us
            </motion.a>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-3 gap-4 border-t border-foreground/10 pt-8 max-w-lg mx-auto lg:mx-0">
            <div>
              <div className="font-heading text-3xl font-bold">10+</div>
              <div className="text-sm opacity-60">Global Clients</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold">40+</div>
              <div className="text-sm opacity-60">Projects Done</div>
            </div>
            <div>
              <div className="font-heading text-3xl font-bold">99%</div>
              <div className="text-sm opacity-60">Satisfaction</div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex-1 flex justify-center w-full relative z-10"
        >
          <div className="relative w-full max-w-2xl aspect-square">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-transparent rounded-[3rem] blur-3xl animate-pulse"></div>
            
            <motion.div
              animate={{ 
                y: [-15, 15, -15],
                rotate: [-2, 2, -2]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative w-full h-full p-4"
            >
              <div className="absolute inset-0 glass rounded-[3rem] border border-foreground/5 shadow-xl -z-10 rotate-3 transition-transform duration-500 hover:rotate-6"></div>
              <div className="absolute inset-0 glass rounded-[3rem] border border-foreground/5 shadow-lg -z-10 -rotate-3 transition-transform duration-500 hover:-rotate-6 bg-foreground/5"></div>
              
              <img 
                src="/download (2).png" 
                alt="AetherForge" 
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl mix-blend-multiply dark:mix-blend-screen"
              />
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

