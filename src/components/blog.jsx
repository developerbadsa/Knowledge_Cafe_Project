

const Blog = ({ data, handleBookmark }) => {
  const { cover, title, author, author_img, posted_date, reading_time, hashtags} = data;

  

  return (
    <div>
      
      <div className="my-20 border p-10">
        <img
          className=" mb-8 w-full"
          src={cover}
          alt={`Cover picture of the title ${title}`}
        />
        <div className="flex justify-between mb-4">
          <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
              <h3 className="text-2xl">{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span>{reading_time} min read</span>
            <button onClick={()=>handleBookmark(title)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="15"
                height="15"
                viewBox="0 0 50 50"
              >
                <path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"></path>
              </svg>
            </button>
          </div>
        </div>
        <h2 className="text-4xl mt-6 font-bold">{title}</h2>
        <p className="text-left mt-5">
          Has Tags
        </p>
        <div className="text-left mt-2 "><button className="underline text-blue-500" >Mark as Read</button></div>
      </div>
    </div>
  );
};

export default Blog;
