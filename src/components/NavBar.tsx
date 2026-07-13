import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "25px",
        padding: "15px",
        backgroundColor: "#1976d2",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Home
      </Link>

      <Link
        to="/products"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Products
      </Link>

      <Link
        to="/generate-description"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Generate AI
      </Link>

      <Link
        to="/dashboard"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Dashboard
      </Link>

      <Link
        to="/profile"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Profile
      </Link>

      <Link
        to="/about"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        About
      </Link>
      <Link
  to="/register"
  style={{
    color: "white",
    textDecoration: "none",
  }}
>
  Register
</Link>
      <Link
        to="/login"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        Login
      </Link>
    </nav>
  );
}

export default Navbar;