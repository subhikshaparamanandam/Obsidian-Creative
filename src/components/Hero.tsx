import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import { BlurText } from "./BlurText";
import { cn } from "../lib/utils";

export const Hero = () => {
  return (
    <section id="hero" className="relative w-full min-h-[1000px] bg-black overflow-hidden flex flex-col items-center justify-start pt-[150px] md:pt-[250px] px-6">
      {/* Background Video */}
      <div className="absolute top-[20%] left-0 w-full h-auto z-0 pointer-events-none opacity-60">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-contain"
          poster="/images/hero_bg.jpeg"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/10 z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 z-[1] h-[400px] bg-gradient-to-b from-transparent to-black pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full px-4 py-1.5 flex items-center gap-2 mb-8 border border-white/10"
        >
          <span className="bg-white text-black text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">New</span>
          <span className="text-white/80 text-xs font-body tracking-wider italic">AI-powered branding & web, reimagined.</span>
        </motion.div>

        {/* Heading */}
        <BlurText
          text="The Brand Your Vision Deserves"
          className="text-white text-6xl md:text-8xl lg:text-[6.5rem] font-heading italic leading-[0.8] tracking-[-4px] text-center mb-8 px-4"
          delay={0.2}
        />

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto mb-12"
        >
          Bold identity. Seamless web. Built by AI, perfected by creatives. This is branding, at a level you've never seen.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#contact"
            className="liquid-glass-strong rounded-full px-8 py-4 flex items-center gap-2 group transition-all hover:scale-105"
          >
            <span className="text-white font-body font-medium">Book a Free Call</span>
            <ArrowUpRight className="w-5 h-5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#work"
            className="flex items-center gap-2 text-white/80 hover:text-white font-body font-medium transition-colors group"
          >
            <Play className="w-4 h-4 fill-white/20 group-hover:fill-white/40 transition-colors" />
            <span>See Our Work</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
