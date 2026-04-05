import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { HLSVideo } from "./HLSVideo";

export const ContactFooter = () => {
  return (
    <section id="contact" className="relative min-h-[800px] w-full bg-black overflow-hidden flex flex-col items-center justify-center pt-32 px-6">
      {/* Background HLS Video */}
      <div className="absolute inset-0 z-0">
        <HLSVideo
          src="https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none h-[300px] top-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none h-[300px] bottom-0" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center py-32">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-heading italic text-white tracking-tight leading-[0.8] mb-8">
          Your next brand starts here.
        </h2>
        
        <p className="text-white/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto mb-12">
          Book a free 30-minute strategy call. We'll map out exactly what your brand needs — no pitch, no pressure.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a
            href="mailto:hello@obsidiancreative.co"
            className="liquid-glass-strong rounded-full px-10 py-5 flex items-center gap-3 group transition-all hover:scale-105 border border-white/10"
          >
            <span className="text-white font-body font-medium text-lg">Book a Free Call</span>
            <ArrowUpRight className="w-6 h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#pricing"
            className="bg-white text-black font-body font-medium rounded-full px-10 py-5 text-lg hover:bg-white/90 transition-all active:scale-95"
          >
            View Pricing
          </a>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="relative z-10 w-full max-w-7xl mx-auto mt-20 pb-12 px-6">
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/40 text-xs font-body font-light">
            © 2026 Obsidian Creative. All rights reserved.
          </div>
          
          <div className="flex items-center gap-8">
            <a href="#privacy" className="text-white/40 hover:text-white/60 text-xs font-body font-light transition-colors">Privacy</a>
            <a href="#terms" className="text-white/40 hover:text-white/60 text-xs font-body font-light transition-colors">Terms</a>
            <a href="#contact" className="text-white/40 hover:text-white/60 text-xs font-body font-light transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};
