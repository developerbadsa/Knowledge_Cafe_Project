const Blog = ({ data }) => {
  const { cover, title, author, author_img, posted_date } = data;
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
          <div>
            <span> min read</span>
          </div>
        </div>
        <h2 className="text-4xl">{title}</h2>
      </div>
    </div>
  );
};

export default Blog;
