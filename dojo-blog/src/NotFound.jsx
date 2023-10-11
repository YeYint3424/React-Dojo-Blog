import { Link } from "react-router-dom/cjs/react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Page Not Found (404 error.).....</h1>
      <Link to="/">Go Back To Home Page</Link>
    </div>
  );
};

export default NotFound;
