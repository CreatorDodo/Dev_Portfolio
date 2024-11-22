import { Variants } from 'framer-motion';

export const fadeInStaggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // 첫 자식 요소 시작 전 지연
      staggerChildren: 0.3, // 자식 요소 간 지연
    },
  },
};

export const fadeInUpItem: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};
