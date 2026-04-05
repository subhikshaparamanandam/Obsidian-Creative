import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Obsidian rebuilt our entire brand in a week. The quality blew our agency-of-record out of the water — at a fraction of the cost.",
    name: "Sarah Okafor",
    role: "CEO, Luminary Health",
  },
  {
    quote: "Our website conversions went up 4x in the first month. The design just works — beautifully and commercially.",
    name: "Marcus Tan",
    role: "Head of Growth, Arcline",
  },
  {
    quote: "They didn't just design our site. They understood our brand at a level that took our old agency two years to reach. In days.",
    name: "Elena Vasquez",
    role: "Brand Director, Helix",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-body font-medium text-white mb-6 border border-white/10 uppercase tracking-widest inline-block">
            What They Say
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]">
            Don't take our word for it.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-2xl p-8 border border-white/5 flex flex-col justify-between hover:border-white/20 transition-all group"
            >
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 font-body font-light text-base md:text-sm italic leading-relaxed mb-8">
                  "{t.quote}"
                </p>
              </div>
              <div>
                <div className="text-white font-body font-medium text-sm mb-0.5">
                    {t.name}
                </div>
                <div className="text-white/50 font-body font-light text-xs uppercase tracking-widest">
                    {t.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
