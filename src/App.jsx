import { ThemeProvider } from "./context/ThemeContext";
import { Header } from "./components/layout/Header";
import { ScrollToTop } from "./components/ui/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative font-sans selection:bg-foreground/20">
        <Header />
        
        {/* Main Content Sections */}
        <main className="flex flex-col">
          {/* Temporary spacer block to simulate long scrolling content for testing ScrollToTop */}
          <section className="min-h-[100vh] flex flex-col items-center justify-center p-4 pt-32">
            <div className="glass p-10 rounded-3xl max-w-2xl w-full text-center mt-20">
              <h1 className="text-4xl sm:text-5xl font-semibold mb-6 tracking-tight">AetherForge</h1>
              <p className="text-lg opacity-70 mb-8 max-w-lg mx-auto">
                Forged in the Aether – Code Without Noise. 
                We build elegant, high-performance digital products with a strong focus on modern web applications.
              </p>
            </div>
          </section>

          <section id="about" className="min-h-screen border-t border-white/5 flex items-center justify-center">
            <div className="opacity-50 text-xl font-medium">Philosophy Section (WIP)</div>
          </section>

          <section id="services" className="min-h-screen border-t border-white/5 flex items-center justify-center">
            <div className="opacity-50 text-xl font-medium">Expertise Section (WIP)</div>
          </section>

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
