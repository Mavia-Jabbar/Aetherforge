import { motion, useScroll, useAnimationControls } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const { scrollY } = useScroll();
  const controls = useAnimationControls();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latestVal) => {
      if (latestVal > 300) {
        setIsVisible(true);
        controls.start("visible");
      } else {
        setIsVisible(false);
        controls.start("hidden");
      }
    });
  }, [scrollY, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20, pointerEvents: "none" },
        visible: { opacity: 1, y: 0, pointerEvents: "auto" }
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 p-4 rounded-full glass hover:bg-white/10 dark:hover:bg-white/10 transition-colors hidden sm:flex items-center justify-center text-foreground"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </motion.button>
  );
}
