import CommonHeader from "@/Components/CommonHeader/CommonHeader";
import Footer from "@/Components/Footer/Footer";
import SingleBlog from "@/Components/SingleBlog/SingleBlog";

//Blogs Json data
import blogs from '../../../data/blogs.json'




const blogdetailspage = ({params}) => {
    
    //Getting Single Blog Post
    const SingleBlogdata = blogs?.filter(blog => blog.title.replace(/ /g, "-") == params.blogdetailspage)
    
    const headdata = {
        t1: "Blog", 
        t2: 'Details', 
        para: SingleBlogdata[0].title
    };
    
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