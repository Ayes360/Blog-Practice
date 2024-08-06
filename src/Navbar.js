import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Blog Practice</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={
                    {
                        color: "white", 
                        backgroundColor: "#61dafb",
                        borderRadius: "4px",
                        padding:"10px 20px"
                    }
                }>New Blog</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;