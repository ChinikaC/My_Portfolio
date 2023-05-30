import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()

    return (
        <div className="header">
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/MyProjects">My Projects</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
    );
    

};

export default Header;