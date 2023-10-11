//using Link cause of not to be relog (not to touch server)
import { Link } from "react-router-dom/cjs/react-router-dom";

const NavBar = () => {
  return (
    
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default NavBar;
