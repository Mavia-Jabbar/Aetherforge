import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/layout/Header";
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Services } from "./components/sections/Services";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative font-sans selection:bg-foreground/20">
        <Header />
        
        {/* Main Content Sections */}
        <main className="flex flex-col">
          <Hero />
          <About />
          <Services />

          <section id="projects" className="min-h-screen border-t border-white/5 flex items-center justify-center">
            <div className="opacity-50 text-xl font-medium">Work / Projects Section (WIP)</div>
          </section>

          <section id="contact" className="min-h-screen border-t border-white/5 flex items-center justify-center">
            <div className="opacity-50 text-xl font-medium">Engage / Contact Form (WIP)</div>
          </section>
        </main>

        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
