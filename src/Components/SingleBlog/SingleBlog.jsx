'use client'
import { useEffect } from 'react';
import Styles from './SingleBlog.module.css'

const SingleBlog = ({SingleBlogdata}) => {
    useEffect(()=> {
        console.log(SingleBlogdata[0].sections);
    },[])
    
    return (
        <>
        <section className={Styles.blogcon}>
            <div className={Styles.inblog}>
                {/* <h1 className='gtlight'>{SingleBlogdata[0].title}</h1>
                <p className='sublight'>{SingleBlogdata[0].desc}</p> */}

                {
                    SingleBlogdata[0]?.sections?.map((info)=> {
                        return<div className={Styles.blogdiv}>
                            <h3 className='gtlighth3'>{info.heading}</h3>
                            <p className='sublight'>{info.content}</p>

                            {
                            info?.keyarray ?
                            <ul>
                            {
                                info?.keyarray?.map((info)=>{
                                    return <li className='sublight'><span style={{fontWeight: 600}}>{info.key1}</span> : {info.key2}</li>
                                })
                            }
                            </ul> : ''
                            }


                            {
                            info?.array ?
                            <ul>
                            {
                                info?.array?.map((info)=>{
                                    return <li className='sublight'>{info}</li>
                                })
                            }
                            </ul> : ''
                            }

                            {
                                console.log(info.industries)
                            }
                        </div>
                    })
                }
            </div>
        </section>
        </>
    )
}

export default SingleBlog;