import Blog from "./blog";



const Bookmark = ({data})=>{

    


   return (

    <>
    
        <h2 className="text-3xl font-bold" >Bookmarked Blogs : {data.length}</h2>
        <ul  className="px-6 py-3 mt-8 bg-slate-200">
            {
                data.map( (bookmark, index)=>{
                    return (
                        <li className="text-xl font-medium bg-white text-left my-8 px-8 py-4" key={index}>
                        
                       {index+1} . {bookmark}
                        
                        </li>
                    )
                })
            }
        </ul>
    </>

   )
    
}


export default Bookmark;