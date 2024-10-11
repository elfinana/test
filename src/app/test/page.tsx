'use client';

import CarouselModal from '@/shared/components/modals/CarouselModal';
import ModalPortal from '@/shared/components/modals/ModalPortal';
import { useState } from 'react';

const DUMMY_SLIDE = ['/images/test/slide01.jpg', '/images/test/slide02.jpg', '/images/test/slide03.jpg'];
export default function TestPage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className="w-full">
      <button onClick={handleOpenModal}>모달오픈</button>
      <ModalPortal isOpen={isOpen} onClose={handleCloseModal}>
        <CarouselModal images={DUMMY_SLIDE} onClose={handleCloseModal} />
      </ModalPortal>
    </div>
  );
}
