import Blog from "./blog";



const Bookmark = ({data})=>{


   return (

    <div className="px-8 py-8 mx-2 mt-14  bg-slate-200">
    
       <div className="text-left">
            <h2 className="text-3xl font-bold" >Bookmarked Blogs : {data.length}</h2>
       </div>
        <ul  className="ml-6">
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
    </div>

   )
    
}


export default Bookmark;