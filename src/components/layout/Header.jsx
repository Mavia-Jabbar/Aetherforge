import { ThemeToggle } from "../ui/ThemeToggle";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 p-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="glass px-6 py-4 rounded-2xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-foreground flex items-center justify-center">
              <div className="w-3 h-3 rounded-sm bg-background rotate-45" />
            </div>
            <span className="font-bold text-lg tracking-tight">AetherForge</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium opacity-80">
            <a href="#about" className="hover:opacity-100 transition-opacity">Philosophy</a>
            <a href="#services" className="hover:opacity-100 transition-opacity">Expertise</a>
            <a href="#projects" className="hover:opacity-100 transition-opacity">Work</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity">Engage</a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <a href="#contact" className="hidden sm:inline-flex items-center justify-center text-sm font-medium px-4 py-2 bg-foreground text-background rounded-full hover:scale-105 transition-transform active:scale-95">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
