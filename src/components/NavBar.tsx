import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    alert("Logged out successfully");
    navigate("/login");
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "0.3s",
  };

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "15px 30px",
        background: "#1976d2",
        color: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Link
        to="/"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        <h2
          style={{
            margin: 0,
          }}
        >
          🤖 DescAI
        </h2>
      </Link>

      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
          marginTop: "8px",
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
              backgroundColor: "#f44336",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
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