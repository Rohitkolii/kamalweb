// 'use client'
// import { useEffect } from "react";
import CommonHeader from "@/Components/CommonHeader/CommonHeader";
import Footer from "@/Components/Footer/Footer";
import SingleBlog from "@/Components/SingleBlog/SingleBlog";

import blogs from '../../../data/blogs.json'



const headdata = {
    t1: "Blog", 
    t2: 'Details', 
    para: "newdata[0].title"
};

const blogdetailspage = ({params}) => {

const SingleBlogdata = blogs?.filter(blog => blog.title.replace(/ /g, "-") == params.blogdetailspage)
    
    return(
        <>
            {/* <h1>{params.blogdetailspage}</h1> */}
            <CommonHeader headdata={headdata} />
            <SingleBlog SingleBlogdata={SingleBlogdata} />
            <Footer />
        </>
    )
}

export default blogdetailspage;