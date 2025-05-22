import { motion, useInView } from "framer-motion";
import type { MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

interface MotionDivProps extends MotionProps {
  children: ReactNode;
  className?: string;
}

const MotionDiv = ({ children, className = "", ...rest }: MotionDivProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
