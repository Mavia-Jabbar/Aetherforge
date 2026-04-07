import { GlassCard } from "../ui/GlassCard";
import { Cloud, Code2, Cpu, Smartphone } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Full-Scale SaaS",
      description: "Building resilient, subscription-based platforms from bare-metal ideas to production. Clean backend logic powered by Node.js and scalable cloud databases.",
      icon: <Code2 size={24} className="opacity-70" />
    },
    {
      title: "AI Integrations",
      description: "Seamlessly weaving intelligent features into modern applications. Designing AI-native interfaces that feel deeply integrated and natural to use.",
      icon: <Cpu size={24} className="opacity-70" />
    },
    {
      title: "Mobile Experiences",
      description: "Native-feeling apps for iOS and Android tailored with React Native and Flutter. High-performance, uncrowded layouts for your fingers to breathe.",
      icon: <Smartphone size={24} className="opacity-70" />
    },
    {
      title: "Cloud Solutions",
      description: "Modern, serverless architectures and real-time synchronizations utilizing Firebase, Supabase, and custom micro-services.",
      icon: <Cloud size={24} className="opacity-70" />
    }
  ];

  return (
    <section id="services" className="py-32 px-6 relative z-10 border-t border-glass-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-heading text-4xl sm:text-5xl tracking-tight mb-4">Our Expertise</h2>
          <p className="text-lg opacity-60 font-light max-w-2xl mx-auto">
            We launch complete applications and provide end-to-end software alchemy—without the unnecessary complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="flex items-start gap-6">
                <div className="p-4 rounded-2xl bg-foreground/5 dark:bg-white/5 border border-glass-border">
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-heading text-2xl mb-3">{service.title}</h3>
                  <p className="opacity-70 font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
