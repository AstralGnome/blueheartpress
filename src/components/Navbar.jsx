import { Link } from "react-router-dom";
import "../style/Navbar.scss"

function Navbar () {
  return (
    <div>
      <img src="https://github.com/AstralGnome/blueheartpress/blob/main/src/assets/Images/Banner.jpg" alt="important info"></img>
      <h1>Welcome to Blue Heart Press</h1>
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