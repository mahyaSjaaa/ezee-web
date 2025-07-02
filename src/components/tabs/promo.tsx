'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Promo () {
  return (
    <section>
      <div className="w-full flex justify-center pt-20" id='top'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="w-full lg:max-w-[800px] md:max-w-[700px] sm:max-w-[600px] max-w-[500px]"
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => {
            console.log('Swiper ready', swiper);
            if (swiper?.autoplay) swiper.autoplay.start();
          }}
        >
          <SwiperSlide>
            <div className="flex justify-center">
              <div className="w-full aspect-[16/7] bg-[url(/promo11.png)] bg-cover bg-center rounded-lg" />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <div className="flex justify-center">
              <div className="w-full aspect-[16/7] bg-[url(/oik.png)] bg-cover bg-center rounded-lg" />
            </div>
          </SwiperSlide> */}
          {/* Tambahkan slide lainnya */}
        </Swiper>
      </div>
    </section>
  );
}
