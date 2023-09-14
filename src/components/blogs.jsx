import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";

const Blogs = ({handleBookmark, handleMarkBtn})=>{

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{

        fetch('blogs.json')
        .then(res=>res.json())
        .then(blogDatas=>setBlogs(blogDatas))

    },[])

    
    return (
        <>
        
       {
         blogs.map(blog=><Blog key={blog.id} data={blog} handleMarkBtn={handleMarkBtn} handleBookmark={handleBookmark}></Blog>)
       }
    

        </>
    )
}

export default Blogs;