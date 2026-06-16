import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>My Website</h2>

      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;