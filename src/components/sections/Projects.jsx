import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Project Zero",
    category: "Web Infrastructure",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    description: "A comprehensive monolithic rebuild shifting legacy state to distributed edge nodes. Zero downtime, absolute performance."
  },
  {
    id: 2,
    title: "Nexus Dashboard",
    category: "SaaS Interface",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    description: "Designing the data interface for tomorrow. High density numeric data perfectly curated through meticulous typographic scale and glassy overlays."
  },
  {
    id: 3,
    title: "Aether AI",
    category: "Machine Learning Platform",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    description: "Built the front-facing dashboard for a state of the art LLM pipeline utilizing advanced canvas optimizations for native fluid simulation."
  },
  {
    id: 4,
    title: "Quantum App",
    category: "Mobile Experience",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800",
    description: "Native cross-platform mobile experience focusing on deeply integrated physical engine animations and haptic responses."
  }
];

export function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24 relative max-w-[1400px] mx-auto px-6 w-full z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="font-heading text-4xl md:text-5xl mb-4 text-foreground">Featured Work</h2>
        <p className="opacity-60 max-w-2xl text-lg">
          A showcase of our highest-fidelity architectures. Built to perform and designed to stun.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-card-${project.id}`}
            onClick={() => setSelectedId(project.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover="hover"
            className="group relative cursor-pointer block rounded-3xl overflow-hidden glass border border-foreground/5 shadow-sm"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <motion.img 
                layoutId={`project-image-${project.id}`}
                variants={{ hover: { scale: 1.05 } }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover filter brightness-90 saturate-150 transition-all duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full z-10">
                <motion.div variants={{ hover: { y: -5 } }} transition={{ duration: 0.4 }}>
                  <p className="text-cyan-400 font-sans text-xs uppercase tracking-widest mb-2 font-medium">
                    {project.category}
                  </p>
                  <motion.h3 layoutId={`project-title-${project.id}`} className="text-white font-heading text-3xl drop-shadow-md">
                    {project.title}
                  </motion.h3>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  variants={{ hover: { opacity: 1, x: 0 } }}
                  transition={{ duration: 0.4 }}
                  className="mt-4 flex items-center text-white/80 text-sm font-medium"
                >
                  View Case Study <span className="ml-2">→</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedId(null)}
            />

            <motion.div 
              layoutId={`project-card-${selectedProject.id}`}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass bg-background/50 rounded-[2rem] border border-foreground/10 z-10 flex flex-col shadow-2xl"
            >
              <div className="h-64 sm:h-96 w-full relative">
                 <motion.img 
                   layoutId={`project-image-${selectedProject.id}`}
                   src={selectedProject.image} 
                   alt={selectedProject.title}
                   className="w-full h-full object-cover filter saturate-150" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                 
                 <button onClick={() => setSelectedId(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full glass border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-20">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                 </button>
              </div>
              
              <div className="p-8 md:p-12 relative -mt-20 z-10">
                 <motion.p className="text-cyan-400 font-sans text-sm uppercase tracking-widest mb-3 font-medium">
                    {selectedProject.category}
                  </motion.p>
                  <motion.h3 layoutId={`project-title-${selectedProject.id}`} className="text-foreground font-heading text-4xl md:text-5xl mb-6">
                    {selectedProject.title}
                  </motion.h3>
                  
                  <div className="prose prose-invert max-w-none opacity-80 text-lg mb-12">
                    <p>{selectedProject.description}</p>
                    <p className="mt-4">
                      <strong>The Challenge:</strong> Building cutting-edge logic while enforcing strict 60fps design metrics requires specialized rendering paths and an obsessive commitment to minimal asset loading times.
                    </p>
                    <p className="mt-4">
                      <strong>The Architecture:</strong> Leveraged advanced state hooks mapped to GPU-accelerated motion layers to construct a physical momentum engine inside the client browser.
                    </p>
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="px-8 py-4 rounded-xl bg-foreground text-background font-bold text-lg hover:shadow-xl hover:scale-105 transition-all">
                      Visit Live Environment
                    </button>
                  </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
