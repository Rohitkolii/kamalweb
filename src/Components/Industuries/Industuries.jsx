import React from 'react'
import Styles from './Industuries.module.css'

import { IoRestaurant } from "react-icons/io5";
import { GiHealthNormal } from "react-icons/gi";
import { MdOutlineComputer } from "react-icons/md";
import { RiCreativeCommonsNcFill } from "react-icons/ri";
import { FaPhotoVideo } from "react-icons/fa";
import { TiSocialAtCircular } from "react-icons/ti";
import { FaBookOpenReader } from "react-icons/fa6";
import { FaAvianex } from "react-icons/fa";
import { MdRealEstateAgent } from "react-icons/md";
import { TbBrightnessAutoFilled } from "react-icons/tb";
import { MdAgriculture } from "react-icons/md";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

import Link from 'next/link';




const Industuries = () => {
  return (
    <>
        <div className={Styles.industuries}>
            <div className={Styles.innerindusturies}>
                <div className={Styles.row1}>
                    <h1 className='gtlight'>A versatile vision tailored <br /> for diverse industries.</h1>
                </div>
                <div className={Styles.row2}>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><RiCreativeCommonsNcFill /></div>
                        <p>Finance</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><IoRestaurant /></div>
                        <p>Restaurant</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><GiHealthNormal /></div>
                        <p>Healthcare</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><MdOutlineComputer /></div>
                        <p>e-Commerce</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><FaPhotoVideo /></div>
                        <p>Entertainment</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><FaBookOpenReader /></div>
                        <p>Education</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><TiSocialAtCircular /></div>
                        <p>Social Media</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><FaAvianex /></div>
                        <p>Aviation</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><MdAgriculture /></div>
                        <p>Agriculture</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><MdRealEstateAgent /></div>
                        <p>Real Estate</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><MdOutlineHealthAndSafety /></div>
                        <p>Insurance</p>
                    </div>
                    <div className={Styles.industurycard}>
                        <div className={Styles.overlayer}></div>
                        <div className={Styles.industurysvg}><TbBrightnessAutoFilled /></div>
                        <p>Automotive</p>
                    </div>
                </div>

                <Link href="/" className={Styles.morearrow}>
                    More <MdOutlineKeyboardArrowRight />
                </Link>
            </div>
        </div>
    </>
  )
}

export default Industuries