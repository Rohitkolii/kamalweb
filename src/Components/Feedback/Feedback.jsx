
import Styles from './Feedback.module.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FcFeedback } from "react-icons/fc";
import { FaStar } from "react-icons/fa";



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
                {/* <p>WHAT OUR CLIENTs SAY</p> */}
                <h3 className='gtlight'>Hear It from Those Who Know Us Best</h3>
                {/* <h3 className='gt'>Hear It from Those <br /> Who Know Us Best</h3> */}
                <p className='sublight'>Great people make great companies, and we specialize in building the best. Our success stories show why clients trust us with their recruitment needs.</p>
            </div>



            <div className={Styles.reviews}>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    }}
                    // pagination={{
                    // clickable: true,
                    // }}

                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     Sarah J.</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'> "Working with this company was a seamless experience from start to finish! They were able to take my vague idea and turn it into a fully functional app that exceeded my expectations. The team was incredibly communicative and responsive, which made the whole process so much easier. Highly recommend them for anyone looking for professional app and web development!"</p>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     Mark T.</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'>"Overall, the company did a great job with the website design and development. There were a few minor delays in the project timeline, but the final result was excellent. The team was open to feedback and made sure the website met all of our needs. Would definitely consider using them for future projects."</p>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     Priya K.</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'>"The website they built was decent, but there were a few bugs after launch that needed fixing. Customer service was responsive and quick to address the issues, but it did take longer than expected to get everything working smoothly. A little more attention to detail would have made the experience perfect."</p>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     James H.</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'>"I’ve been working with several web development companies, but none of them have been as professional and efficient as this team. They delivered our web app ahead of schedule and it’s worked flawlessly since day one. Their attention to detail and commitment to quality were evident throughout the entire project. A fantastic partner for any tech development needs!"</p>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     Emily L.</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'> "Great experience overall! The web development team was skilled, and they had a great understanding of the latest design trends. My website looks modern and is easy to navigate. The only downside was a slight communication gap early on, but after that, everything went smoothly. I’m really happy with the results!"</p>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     David B.</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'>"Our company had been struggling with a complicated web application, and these developers saved the day! They quickly identified issues and provided clean, effective solutions. The app is now running smoothly, and their customer support has been fantastic. I couldn’t be more satisfied with their service!"</p>
                            </div>
                    </SwiperSlide>
                    
                    <SwiperSlide >
                            <div className={Styles.feedbox}>
                                {/* <FcFeedback /> */}
                                <p className={Styles.feedname}>
                                    {/* <img src="images/img2.jpg" alt="" /> */}
                                     Rajesh Chauhan</p>
                                     <div><FaStar /><FaStar /><FaStar /><FaStar /></div>
                                <p className='sublight'>"The team helped us build an e-commerce website, and we’re very happy with how it turned out. The design is sleek and user-friendly, and the development process was mostly smooth. I did wish they had given us more updates during the middle stages, but overall, it was a great partnership."</p>
                            </div>
                    </SwiperSlide>
                    
                </Swiper>
               
            </div>
        </section>
    </>
  )
}

export default Feedback