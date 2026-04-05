import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../lib/utils";

const services = [
  {
    badge: "Branding",
    title: "Brand identity that stops the scroll.",
    description: "Logo, typography, colour systems, brand guidelines — crafted by AI intelligence and refined by human taste. Your brand, unforgettable.",
    buttonText: "See Branding Work",
    href: "#work",
    visual: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=1200", // Placeholder but premium
  },
  {
    badge: "Web Design",
    title: "Websites that convert. Automatically.",
    description: "Every layout is data-informed. Our AI studies top-performing sites then builds yours to outperform them all — from first pixel to final CTA.",
    buttonText: "See Web Work",
    href: "#work",
    visual: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200",
    reverse: true,
  },
  {
    badge: "Copywriting",
    title: "Copy that sounds like you. At scale.",
    description: "Brand voice, web copy, campaign messaging — written by AI trained on your tone, refined until it feels human. Because it should.",
    buttonText: "Learn More",
    href: "#contact",
    visual: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-body font-medium text-white mb-6 border border-white/10 uppercase tracking-widest inline-block">
            What We Do
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] max-w-2xl">
            Pro-grade branding. Zero compromise.
          </h2>
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-24">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={cn(
                "flex flex-col lg:flex-row items-center gap-12 lg:gap-20",
                service.reverse && "lg:flex-row-reverse"
              )}
            >
              {/* Text Side */}
              <div className="flex-1 text-left flex flex-col items-start max-w-xl">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white mb-6 leading-tight">
                  {service.title}
                </h3>
                <p className="text-white/60 font-body font-light text-base md:text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={service.href}
                  className="liquid-glass-strong rounded-full px-8 py-3.5 flex items-center gap-2 group transition-all hover:scale-105 border border-white/5"
                >
                  <span className="text-white font-body font-medium">{service.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Visual Side */}
              <div className="flex-1 w-full relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="liquid-glass rounded-[2rem] overflow-hidden aspect-[4/3] border border-white/10 group"
                >
                  <img
                    src={service.visual}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
