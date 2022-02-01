import { Link } from "react-router-dom";
import "../style/Navbar.scss"

function Navbar () {
  return (
    <div className="BGI">
        <div className="Navbar"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/profile">Profile</Link>
        </div>
    </div>
  )
}
export default Navbar;