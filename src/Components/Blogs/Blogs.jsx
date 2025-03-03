'use client'
import React, { useState, useEffect } from 'react';
import blogs from '../../data/blogs.json'
import Styles from './Blogs.module.css'
import Link from 'next/link';

import { MdKeyboardArrowRight } from "react-icons/md";


function App() {

  const [blogvalue, setBlogvalue] = useState(6)

  let feturedblog
  // feturedblog = blogs?.filter((blog)=> blog.id === 1);
  feturedblog = blogs?.filter((blog)=> blog.featured === true);
  // console.log(feturedblog[0].id);
  
  
  return (
    <div className={Styles.blogscontainer}>
      <div className={Styles.blogscontainerin}>
      {/* <h3 className='gtlighth3'>Stay informed with the latest insights, tips, and trends on our blog.</h3> */}
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
      </div>
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
        {
          blogs.length > blogvalue+6 ?          
          <button onClick={()=> setBlogvalue(blogs.length > (blogvalue + 6) && (blogvalue+6))} className={Styles.btn}>Show more <MdKeyboardArrowRight /></button>
          : 
          <button onClick={()=> setBlogvalue(6)} className={Styles.btn}>Show less <MdKeyboardArrowRight /></button>
          }
      </div>
    </div>
  );
}

export default App;
