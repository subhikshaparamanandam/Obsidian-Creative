import { motion } from "motion/react";
import { Check } from "lucide-react";
import { cn } from "../lib/utils";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for early-stage brands",
    features: [
      "Brand identity (logo + guidelines)",
      "3-page website",
      "Mobile responsive",
      "7-day delivery",
    ],
  },
  {
    name: "Studio",
    price: "$5,500",
    description: "For growing brands that mean business",
    featured: true,
    features: [
      "Full brand identity system",
      "8-page website",
      "AI copywriting included",
      "Conversion optimisation",
      "10-day delivery",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For teams who want the full Obsidian experience",
    features: [
      "Complete brand overhaul",
      "Unlimited pages",
      "Ongoing AI optimisation",
      "Dedicated creative lead",
      "Priority delivery",
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 md:px-16 lg:px-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="liquid-glass rounded-full px-4 py-1 text-xs font-body font-medium text-white mb-6 border border-white/10 uppercase tracking-widest inline-block">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-6">
            Simple. Transparent. Powerful.
          </h2>
          <p className="text-white/60 font-body font-light text-base md:text-lg max-w-2xl mx-auto">
            No retainers. No surprises. Pick your plan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative liquid-glass rounded-[2rem] p-8 md:p-10 border flex flex-col items-start transition-all duration-500",
                plan.featured 
                  ? "border-white/20 bg-white/[0.02] shadow-[0_0_40px_rgba(255,255,255,0.05)] scale-105" 
                  : "border-white/5 hover:border-white/10"
              )}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black font-body font-bold text-[10px] uppercase px-4 py-1.5 rounded-full tracking-widest shadow-xl">
                  Most Popular
                </div>
              )}

              <div className="mb-10 w-full">
                <h3 className="text-xl md:text-2xl font-heading italic text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl md:text-5xl font-heading italic text-white">
                    {plan.price}
                  </span>
                </div>
                <p className="text-white/50 font-body font-light text-sm">
                  {plan.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 mb-10 grow w-full">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-white/70 font-body font-light text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className={cn(
                  "w-full py-4 rounded-full font-body font-medium text-sm text-center transition-all active:scale-95",
                  plan.featured
                    ? "bg-white text-black hover:bg-white/90"
                    : "liquid-glass-strong text-white border border-white/10 hover:border-white/20"
                )}
              >
                {plan.name === "Enterprise" ? "Book a Call" : "Get Started"}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
