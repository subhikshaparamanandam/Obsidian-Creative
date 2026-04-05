import { motion } from "motion/react";

const brands = ["Stripe", "Notion", "Linear", "Vercel", "Figma"];

export const Partners = () => {
  return (
    <section id="work" className="py-24 bg-black flex flex-col items-center">
      <div className="liquid-glass rounded-full px-4 py-1.5 text-[10px] uppercase font-bold text-white/80 tracking-widest border border-white/5 mb-12">
        Brands we draw inspiration from
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 px-6 max-w-6xl">
        {brands.map((brand, i) => (
          <motion.span
            key={brand}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-heading italic text-white/40 hover:text-white transition-colors cursor-default"
          >
            {brand}
          </motion.span>
        ))}
      </div>
    </section>
  );
};
