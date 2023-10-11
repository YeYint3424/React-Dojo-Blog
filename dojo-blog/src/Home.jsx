import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
  const { data: blogs, isPending } = useFetch("http://localhost:8000/blogs");
  //  const [name, setName] = useState("mario");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      {isPending && <h3>Loading...</h3>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
      {/* <button onClick={() => setName("Ye Yint")}>Change Name</button> */}
      {/* <BlogList blogs={blogs.filter(blog=> blog.author === 'mario')} title="Mario's Blogs!"/> */}
    </div>
  );
};

export default Home;
