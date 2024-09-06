
import Styles from './Feedback.module.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Feedback = () => {
  return (
    <>
        <section className={Styles.Feedback}>
            <div className={Styles.col1}>
                <p>WHAT OUR CLIENTs SAY</p>
                <h3>Hear It from Those <br /> Who Know Us Best</h3>
                <p className='subp'>Great people make great companies, and we specialize in building the best. Our success stories show why clients trust us with their recruitment needs.</p>
            </div>



            <div className={Styles.reviews}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    }}
                    pagination={{
                    clickable: true,
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                                <p style={{color: '#0061ff', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, margin: "10px 0px"}}> <img src="images/img2.jpg" alt="" style={{width: 40, height: 40,  borderRadius: '50%'}} /> myName021</p>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={Styles.feedbox}>
                                <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                                <p style={{color: '#0061ff', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, margin: "10px 0px"}}> <img src="images/img2.jpg" alt="" style={{width: 40, height: 40,  borderRadius: '50%'}} /> myName021</p>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={Styles.feedbox}>
                                <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                                <p style={{color: '#0061ff', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, margin: "10px 0px"}}> <img src="images/img2.jpg" alt="" style={{width: 40, height: 40,  borderRadius: '50%'}} /> myName021</p>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={Styles.feedbox}>
                                <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                                <p style={{color: '#0061ff', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, margin: "10px 0px"}}> <img src="images/img2.jpg" alt="" style={{width: 40, height: 40,  borderRadius: '50%'}} /> myName021</p>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                            <div className={Styles.feedbox}>
                                <p className='subp'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, ad ipsam. Magni accusamus eos quam quaerat! Fugiat aspernatur eveniet velit minus quisquam eligendi voluptatem nesciunt.</p>
                                <p style={{color: '#0061ff', fontSize: 14, display: 'flex', alignItems: 'center', gap: 10, margin: "10px 0px"}}> <img src="images/img2.jpg" alt="" style={{width: 40, height: 40,  borderRadius: '50%'}} /> myName021</p>
                            </div>
                    </SwiperSlide>
                </Swiper>
               
            </div>
        </section>
    </>
  )
}

export default Feedback