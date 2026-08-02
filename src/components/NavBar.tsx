import { Link, useLocation, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  const getLinkStyle = (path: string) => {
    const active = location.pathname === path;

    return {
      color: active ? "#25b8b5" : "#dce7e6",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: active ? "700" : "600",
      padding: "10px 3px",
      borderBottom: active
        ? "2px solid #25b8b5"
        : "2px solid transparent",
      whiteSpace: "nowrap" as const,
    };
  };

  return (
    <nav
      style={{
        width: "100%",
        background:
          "linear-gradient(135deg, #0b2638, #173d52)",
        boxShadow:
          "0 4px 15px rgba(11, 38, 56, 0.22)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          minHeight: "72px",
          margin: "0 auto",
          padding: "0 25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "25px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontSize: "29px",
            fontWeight: "800",
            whiteSpace: "nowrap",
          }}
        >
          Desc
          <span style={{ color: "#25b8b5" }}>
            AI
          </span>
        </Link>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            flexWrap: "wrap",
            gap: "18px",
          }}
        >
          <Link to="/" style={getLinkStyle("/")}>
            Home
          </Link>

          {token && (
            <>
              <Link
                to="/dashboard"
                style={getLinkStyle("/dashboard")}
              >
                Dashboard
              </Link>

              <Link
                to="/products"
                style={getLinkStyle("/products")}
              >
                Products
              </Link>

              <Link
                to="/generate-description"
                style={getLinkStyle(
                  "/generate-description"
                )}
              >
                Generate AI
              </Link>

              <Link
                to="/profile"
                style={getLinkStyle("/profile")}
              >
                Profile
              </Link>
            </>
          )}

          <Link
            to="/about"
            style={getLinkStyle("/about")}
          >
            About
          </Link>

          {!token && (
            <Link
              to="/register"
              style={getLinkStyle("/register")}
            >
              Register
            </Link>
          )}

          {token ? (
            <button
              type="button"
              onClick={handleLogout}
              style={{
                padding: "10px 19px",
                color: "#ffffff",
                background: "#168f8c",
                border: "1px solid #25b8b5",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              style={{
                padding: "10px 19px",
                color: "#ffffff",
                background: "#168f8c",
                border: "1px solid #25b8b5",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;