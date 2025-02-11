import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './HeaderSlide.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Navbar from '../Navbar/Navbar';

export default function HeaderSlide() {
  return (
    <>
    <div className='HeaderCon'>
        <Navbar />
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <h1>AppsoBytes</h1>
            <br />
            <p className='subp'>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p>
          {/* <img src="https://swiperjs.com/demos/images/nature-1.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          <div className='grid-head'>
            <div style={{backgroundColor: 'white'}}>
              <h1>21+</h1>
              <p>Project Delivered</p>
            </div>
            <div style={{backgroundColor: '#0061ff'}}>
              <h1>46+</h1>
              <p>Worldwide Client</p>
            </div>
            <div style={{backgroundColor: '#5CB338'}}>
              <h1>21+</h1>
              <p>Team</p>
            </div>
            <div style={{backgroundColor: 'white'}}>
              <h1>100%</h1>
              <p>On Time Project Delivered</p>
            </div>
          </div>
          {/* <img src="https://swiperjs.com/demos/images/nature-2.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-3.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-4.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-5.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-6.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-7.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-8.jpg" /> */}
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src="https://swiperjs.com/demos/images/nature-9.jpg" /> */}
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
