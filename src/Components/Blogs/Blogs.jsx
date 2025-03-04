'use client'
import React, { useState, useEffect } from 'react';
import blogs from '../../data/blogs.json'
import Styles from './Blogs.module.css'
import Link from 'next/link';

import { MdKeyboardArrowRight } from "react-icons/md";


function App() {

  const [blogvalue, setBlogvalue] = useState(6)

  //Getting Sinle Featured Blog
  let feturedblog
  feturedblog = blogs?.filter((blog)=> blog.featured === true);
  // console.log(feturedblog[0].id);
  
  const showBlogButton = () => {
    if(blogs){
      if(blogs.length > blogvalue){
        return <button onClick={()=> setBlogvalue(blogs.length > blogvalue && (blogvalue+6))} className={Styles.btn}>Show more <MdKeyboardArrowRight /></button>
      }else if(blogs.length < blogvalue){
        if(blogs.length > 6){
          return <button onClick={()=> setBlogvalue(6)} className={Styles.btn}>Show less <MdKeyboardArrowRight /></button>
        }
      }
      else{
        return null
      }
    }
  }
  
  return (
    <div className={Styles.blogscontainer}>
      <div className={Styles.blogscontainerin}>
      {/* It will show featured blog Post if there will be any data contain featured : true */}
      {feturedblog[0] && <>
      <h3 className='gtlighth3'>Featured Blog</h3>
      <div className={Styles.feturedblog}>
        <div>
          <img src={feturedblog[0].img ? feturedblog[0].img : "images/notfound.jpg"} alt="" />
        </div>

        <div>
            <p>{feturedblog[0].title}</p>
            <p className='sublight'>{feturedblog[0].sections[0].content.substring(0,300)}</p>
            <p>#Category</p>
            <Link className={Styles.btn} href={`blogs/${feturedblog[0].title.replace(/ /g, "-")}`}>Read More <MdKeyboardArrowRight /></Link>
        </div>
      </div></>}

      {/* Multiple Blogs Posts  */}
      <h3 className='gtlighth3'>Recent Blogs</h3>
      <div className={Styles.bloggrid}>
          {
            blogs?.slice(0,blogvalue).map((blog, i) => <Link href={`blogs/${blog.title.replace(/ /g, "-")}`} key={i} className={Styles.blogcard}>
            <img src={blog.img ? blog.img : "images/notfound.jpg"} alt="" />
            <p>{blog.title}</p>
            <p>{blog.sections[0].content.substring(0,90)}...</p>
          </Link>)
          }
        </div>

        {/* Show more" buuton if posts are more than 6 else "Show less" button */}
        {
          showBlogButton()
          }
      </div>
    </div>
  );
}

export default App;
