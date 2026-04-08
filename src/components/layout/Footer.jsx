export function Footer() {
  return (
    <footer className="w-full border-t border-foreground/5 py-12 px-6 relative z-10 glass">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="font-heading text-2xl text-foreground drop-shadow-sm mb-2 tracking-wide">
            AetherForge<span className="text-cyan-500 text-3xl leading-none">.</span>
          </div>
          <div className="opacity-50 text-sm max-w-sm">
            Architecting the future of digital presence. <br />
            © {new Date().getFullYear()} AetherForge. All rights reserved.
          </div>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0 font-medium tracking-wide">
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-cyan-400 hover:-translate-y-1 transition-all">Twitter</a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-cyan-400 hover:-translate-y-1 transition-all">LinkedIn</a>
          <a href="#" className="opacity-60 hover:opacity-100 hover:text-cyan-400 hover:-translate-y-1 transition-all">GitHub</a>
        </div>
        
      </div>
    </footer>
  );
}
