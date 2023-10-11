import { useParams , useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
const BlogDetail = () => {
  const { id } = useParams();
  const { data:blog , isPending} = useFetch('http://localhost:8000/blogs/'+ id);
  const history = useHistory()
    const handleDelete = () =>{
        fetch('http://localhost:8000/blogs/'+ blog.id,{
            method : 'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
  return (
    <div className="blog-details">
      {isPending && <h2>Loading...</h2>}
      {blog && (
        <article>
            <h2>{blog.title}</h2>
            <h5>Written by {blog.author}</h5>
            <p>{blog.body}</p>
            <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetail;
