import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'framer-motion';
import { fadeInStaggerContainer, fadeInUpItem } from '@/utils/fadeIn.ts';

interface FadeInProps {
  children: ReactNode;
  immediate?: boolean; // 즉시 표시 여부
}

function FadeInContainer({ children, immediate = true }: FadeInProps) {
  return (
    <motion.div variants={fadeInStaggerContainer} initial="hidden" animate={immediate ? 'visible' : 'hidden'}>
      {children}
    </motion.div>
  );
}

function FadeInSection({ children, immediate = false }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.2, // 20%만 보여도 트리거
    margin: '0px 0px -100px 0px', // 뷰포트 하단 여백 추가
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUpItem}
      initial="hidden"
      animate={immediate || isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

export { FadeInContainer, FadeInSection };
