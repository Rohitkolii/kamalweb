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
{/* 
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
              <h1>30+</h1>
              <p>Team</p>
            </div>
            <div style={{backgroundColor: 'white'}}>
              <h1>100%</h1>
              <p>On Time Project Delivered</p>
            </div>
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <img src="images/headerslide/Growslide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/headerslide/ExpertTeam.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/headerslide/supportslide.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/headerslide/TailoredSolutions.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/headerslide/EnhancedEfficiency.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/headerslide/competitionslide.png" alt="" />
        </SwiperSlide>

      </Swiper>
      </div>
    </>
  );
}
