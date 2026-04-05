import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";
import { cn } from "../lib/utils";

interface BlurTextProps {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "word" | "letter";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  onAnimationComplete?: () => void;
}

export const BlurText = ({
  text,
  delay = 0,
  className,
  animateBy = "word",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  onAnimationComplete,
}: BlurTextProps) => {
  const elements = animateBy === "word" ? text.split(" ") : text.split("");
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { amount: threshold as any, margin: rootMargin as any, once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: delay,
      },
    },
  };

  const itemVariants: any = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: direction === "bottom" ? 50 : -50,
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      onAnimationComplete={onAnimationComplete}
      className={cn("flex flex-wrap", className)}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="inline-block mr-[0.25em]"
        >
          {el === "" ? "\u00A0" : el}
        </motion.span>
      ))}
    </motion.div>
  );
};
