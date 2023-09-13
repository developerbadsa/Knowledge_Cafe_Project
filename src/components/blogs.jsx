import { useEffect } from "react";
import { useState } from "react";
import Blog from "./blog";

const Blogs = ({handleBookmark})=>{

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{

        fetch('blogs.json')
        .then(res=>res.json())
        .then(blogDatas=>setBlogs(blogDatas))

    },[])

    
    return (
        <>
        
       {
         blogs.map(blog=><Blog key={blog.id} data={blog} handleBookmark={handleBookmark}></Blog>)
       }
    

        </>
    )
}

export default Blogs;