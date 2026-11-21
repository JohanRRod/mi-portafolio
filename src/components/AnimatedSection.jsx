
import { motion } from "motion/react";

export default function AnimatedSection({
  children,
  className = "",
  id,
}) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.section>
  );
}
