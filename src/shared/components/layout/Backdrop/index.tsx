import { motion } from 'framer-motion';

interface BackDropProps {
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function Backdrop({ onClick }: BackDropProps) {
  return (
    <motion.div
      onClick={onClick}
      className="fixed left-0 top-0 z-backdrop h-screen w-full max-w-[600px] bg-black-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    />
  );
}
