'use client';

import Backdrop from '@/shared/components/layout/Backdrop';
import usePreventScroll from '@/shared/hooks/usePreventScroll';
import { ReactNode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export default function ModalPortal({ children, isOpen, onClose }: ModalProps) {
  usePreventScroll(isOpen);

  const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const portalElement = document.getElementById('portal-root');
      setModalRoot(portalElement);
    }
  }, []);

  if (!isOpen || !modalRoot) return null;

  return ReactDOM.createPortal(
    <div>
      <Backdrop onClick={handleBackdropClick} />
      {children}
    </div>,
    modalRoot
  );
}
