//import next image
import Image from 'next/image';

//import swiper components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = ({ clients }) => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      slidesOffsetBefore={60}
      grabCursor={true}
      className='testimonialSlider '>
      {clients.map((client, idx) => {
        //destruct clients data
        const { name, image, message } = client;

        return (
          <SwiperSlide key={idx}>
            <div className=' bg-white h-[360px] max-w-[600px] drop-shadow-primary rounded-[10px] px-[20px] pt-[60px] pb-[40px] flex flex-col justify-between'>
              {/* message */}
              <p className='font-light leading-[30px]'>{message}</p>

              {/* image and name */}

              <div className=' flex items-center gap-x-5'>
                <Image
                  src={image}
                  alt='testimonial person picture'
                  width={60}
                  height={60}
                />
                <span className=' font-semibold'>{name}</span>
              </div>
            </div>
            r
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
