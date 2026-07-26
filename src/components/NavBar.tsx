import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const navigate = useNavigate();

  const [mobile, setMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const resize = () => {
      setMobile(window.innerWidth <= 768);

      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", resize);

    return () => window.removeEventListener("resize", resize);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    fontWeight: "bold",
    display: "block",
  };

  return (
    <nav
      style={{
        background: "#1976d2",
        color: "white",
        padding: "15px 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          🤖 DescAI
        </Link>

        {mobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              color: "white",
              border: "none",
              fontSize: "30px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}
      </div>

      <div
        style={{
          display:
            mobile
              ? menuOpen
                ? "flex"
                : "none"
              : "flex",

          flexDirection: mobile ? "column" : "row",

          justifyContent: mobile ? "flex-start" : "center",

          alignItems: "center",

          gap: "15px",

          marginTop: mobile ? "15px" : "10px",
        }}
      >
        <Link to="/" style={linkStyle}>
          🏠 Home
        </Link>

        <Link to="/dashboard" style={linkStyle}>
          📊 Dashboard
        </Link>

        <Link to="/products" style={linkStyle}>
          📦 Products
        </Link>

        <Link
          to="/generate-description"
          style={linkStyle}
        >
          🤖 Generate AI
        </Link>

        <Link to="/profile" style={linkStyle}>
          👤 Profile
        </Link>

        <Link to="/about" style={linkStyle}>
          ℹ️ About
        </Link>

        {!token ? (
          <>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>

            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </>
        ) : (
          <button
            onClick={logout}
            style={{
              background: "#f44336",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;