import { Link } from "react-router-dom/cjs/react-router-dom.min";
const NotFound = () => {
    return ( 
        <div className="notfound">
            <h2>Sorry</h2>
            <p>This page cannot be found.</p>
            <Link to='/'>Go Back To Home...</Link>
        </div>
     );
}
 
export default NotFound;