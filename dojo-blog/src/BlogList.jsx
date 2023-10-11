import { Link } from "react-router-dom/cjs/react-router-dom";

const BlogList = (props) => {
  const blogs = props.blogs;
  const title = props.title;
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/detail/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            {/* <button onClick={()=>props.handleDelete(blog.id)}>Delete</button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
