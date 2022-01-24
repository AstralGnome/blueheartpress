import { BrowserRouter as Router, Link } from "react-router-dom";
import "../style/Navbar.css"

function Navbar () {
  return (
  <Router>
    <div>
      <h1>Welcome to Blue Heart Press</h1>
        <div className="Navbar"> 
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact/1234">Contact</Link>
        </div>
    </div>
  </Router>
  )
}
export default Navbar;