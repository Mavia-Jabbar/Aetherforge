import { GlassCard } from "../ui/GlassCard";

export function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <GlassCard>
          <div className="flex flex-col gap-6">
            <h2 className="font-heading text-3xl sm:text-4xl tracking-tight">Our Philosophy</h2>
            
            <div className="space-y-6 text-lg sm:text-xl opacity-80 leading-relaxed font-light">
              <p>
                Born in the quiet upper layers of the digital realm, AetherForge was created to cut through the noise of bloated code and flashy designs. 
              </p>
              <p>
                We believe great software should feel weightless, intelligent, and beautiful — like glass forged in the aether. 
              </p>
              <p>
                Our mission is to deliver exceptional digital products that combine technical excellence with timeless minimal aesthetics. We create code that works invisibly in the background while delivering exceptional user experiences.
              </p>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
