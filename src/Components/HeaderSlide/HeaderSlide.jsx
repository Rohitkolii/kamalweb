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
            <h1>AppsoBytes.</h1>
            {/* <h1><span style={{color: '#0061ff'}}>A</span>ppso<span style={{color: '#0061ff'}}>B</span>ytes.</h1> */}
            <br />
            <p>At Appsobytes, we are a dynamic IT services company committed to helping startups and small businesses accelerate their growth through cutting-edge technology solutions. Our expertise lies in transforming visionary ideas into high-impact applications that drive efficiency, innovation, and success.</p>
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
              <h1>30+</h1>
              <p>Team</p>
            </div>
            <div style={{backgroundColor: 'white'}}>
              <h1>100%</h1>
              <p>On Time Project Delivered</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 style={{color: '#0061ff'}}>Grow Your Business Faster</h1>
          <p> We build impactful applications that help you scale efficiently.</p>
        </SwiperSlide>
        <SwiperSlide>
          <span style={{color: '#0061ff', fontSize: 60, fontWeight: 700}}>30+</span>
          <h1>Expert Team </h1>
          <p>specialized IT professionals dedicated to your success.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Enhanced Efficiency</h1>
          <p>Automate processes, improve productivity, and reduce costs.</p>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Reliable Support</h1>
          <p>Ongoing maintenance and support to ensure seamless operations.</p>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
