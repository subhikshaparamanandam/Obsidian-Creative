import { motion } from "motion/react";
import { HLSVideo } from "./HLSVideo";

const stats = [
  { value: "150+", label: "Brands launched" },
  { value: "98%", label: "Client satisfaction" },
  { value: "4.1x", label: "More conversions" },
  { value: "7 days", label: "Average delivery" },
];

export const Stats = () => {
  return (
    <section className="relative py-24 bg-black overflow-hidden">
        {/* Background HLS Video */}
        <div className="absolute inset-0 z-0">
          <HLSVideo
            src="https://stream.mux.com/NcU3HlHeF7CUL86azTTzpy3Tlb00d6iF3BmCdFslMJYM.m3u8"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none h-[200px] top-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none h-[200px] bottom-0" />
        </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="liquid-glass rounded-[2.5rem] p-12 md:p-16 lg:p-20 border border-white/5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/50 font-body font-light text-sm uppercase tracking-widest">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
