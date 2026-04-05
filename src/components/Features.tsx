import { motion } from "motion/react";
import { Zap, Palette, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Days, Not Months",
    description: "From brief to launch faster than any traditional agency.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Obsessively Crafted",
    description: "Every typographic choice, every colour — intentional.",
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Built to Perform",
    description: "Layouts informed by real conversion data, every time.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Brand-Safe by Default",
    description: "Consistent identity across every touchpoint, guaranteed.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-body font-medium text-white mb-6 border border-white/10 uppercase tracking-widest inline-block">
            Why Obsidian
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9]">
            The difference is everything.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="liquid-glass rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all group"
            >
              <div className="liquid-glass-strong rounded-full w-10 h-10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-heading italic text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-white/60 font-body font-light text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
