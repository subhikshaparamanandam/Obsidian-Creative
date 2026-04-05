import { motion } from "motion/react";
import { ArrowUpRight, Zap, Target, Palette, Rocket } from "lucide-react";
import { HLSVideo } from "./HLSVideo";

const steps = [
  { name: "Discovery", icon: <Target className="w-5 h-5" /> },
  { name: "Brand Strategy", icon: <Zap className="w-5 h-5" /> },
  { name: "Design & Build", icon: <Palette className="w-5 h-5" /> },
  { name: "Launch", icon: <Rocket className="w-5 h-5" /> },
];

export const Process = () => {
  return (
    <section id="process" className="relative min-h-[700px] w-full bg-black overflow-hidden py-32 flex flex-col items-center justify-center">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <HLSVideo
          src="https://stream.mux.com/9JXDljEVWYwWu01PUkAemafDugK89o01BR6zqJ3aS9u00A.m3u8"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/20 to-black pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 flex flex-col items-center">
        <div className="liquid-glass rounded-full px-4 py-1 text-xs font-body font-medium text-white mb-6 border border-white/10">
          How It Works
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white text-center mb-6 tracking-tight leading-[0.9]">
          You dream it. We craft it.
        </h2>

        <p className="max-w-2xl text-center text-white/60 font-body font-light text-base md:text-lg mb-16">
          Share your vision. Our AI builds the blueprint—brand identity, web design, copywriting, and launch. All in days, not quarters.
        </p>

        {/* Step Indicators */}
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-white/10 z-0" />
            
          {steps.map((step, i) => (
            <motion.div
              key={step.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 liquid-glass rounded-2xl p-6 flex flex-col items-center border border-white/5 group hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-full liquid-glass-strong flex items-center justify-center mb-4 text-white">
                {step.icon}
              </div>
              <span className="text-white font-body font-medium text-sm">{step.name}</span>
            </motion.div>
          ))}
        </div>

        <a
          href="#contact"
          className="liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-2 group transition-all hover:scale-105"
        >
          <span className="text-white font-body font-medium">Book a Free Call</span>
          <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
