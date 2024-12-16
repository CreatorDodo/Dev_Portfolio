import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInStaggerContainer, fadeInUpItem } from '@/utils/fadeIn.ts';

interface FadeInProps {
  children: ReactNode;
}

function FadeInContainer({ children }: FadeInProps) {
  return (
    <motion.div variants={fadeInStaggerContainer} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
}

function FadeInSection({ children }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
    margin: '200px 0px 200px 0px',
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpItem}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export { FadeInContainer, FadeInSection };
