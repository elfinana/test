'use client';

import { motion } from 'framer-motion';

export default function CarouselModal() {
  const modalVariants = {
    hidden: { x: '-50%', y: '100vh', opacity: 0 }, // 시작 위치: 화면 아래쪽
    visible: { x: '-50%', y: '0', opacity: 1, transition: { duration: 0.5, stiffness: 100 } },
    exit: { x: '-50%', y: '100vh', opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      variants={modalVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="z-modal layout-center fixed bottom-0 h-[300px] w-full rounded-t-16 bg-white"
    ></motion.div>
  );
}
