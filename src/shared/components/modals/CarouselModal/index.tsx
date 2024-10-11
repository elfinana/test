'use client';

import ModalContainer from '@/shared/components/modals/ModalContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

interface CarouselModalProps {
  images: string[];
  onClose: () => void;
}

export default function CarouselModal({ images, onClose }: CarouselModalProps) {
  return (
    <ModalContainer>
      <div className="carousel-swiper h-[240px] w-full bg-[#eee]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="h-full w-full overflow-visible"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full">
                <Image layout="fill" objectFit="cover" src={image} alt="슬라이드 이미지" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex w-full flex-1 items-center justify-between px-20">
        <button className="text-14 font-medium text-[#8D939B]">오늘은 그만보기</button>
        <button onClick={onClose} className="text-16 font-bold text-textPrimary">
          닫기
        </button>
      </div>
    </ModalContainer>
  );
}
