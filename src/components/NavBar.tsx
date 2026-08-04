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
      color: active ? "#35d6d1" : "#e4eeee",
      textDecoration: "none",
      fontSize: "15px",
      fontWeight: active ? "800" : "600",
      padding: "12px 4px",
      borderBottom: active
        ? "3px solid #35d6d1"
        : "3px solid transparent",
      whiteSpace: "nowrap" as const,
      transition: "all 0.25s ease",
    };
  };

  return (
    <nav
      style={{
        width: "100%",
        background:
          "linear-gradient(135deg, #071d2d 0%, #10354b 55%, #16465a 100%)",
        boxShadow: "0 5px 20px rgba(0, 0, 0, 0.28)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1320px",
          minHeight: "82px",
          margin: "0 auto",
          padding: "0 38px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "35px",
        }}
      >
        {/* Big DescAI Brand */}
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "36px",
              fontWeight: "900",
              letterSpacing: "-1.8px",
              color: "#ffffff",
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.25)",
            }}
          >
            Desc
          </span>

          <span
            style={{
              fontSize: "36px",
              fontWeight: "900",
              letterSpacing: "-1.8px",
              color: "#32d5cf",
              textShadow: "0 0 15px rgba(50, 213, 207, 0.35)",
            }}
          >
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
            gap: "22px",
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
                style={getLinkStyle("/generate-description")}
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

          <Link to="/about" style={getLinkStyle("/about")}>
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
                padding: "12px 23px",
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, #159f9b, #28c7c1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "800",
                cursor: "pointer",
                whiteSpace: "nowrap",
                boxShadow:
                  "0 5px 15px rgba(20, 190, 182, 0.22)",
              }}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              style={{
                padding: "12px 23px",
                color: "#ffffff",
                background:
                  "linear-gradient(135deg, #159f9b, #28c7c1)",
                border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: "10px",
                fontSize: "15px",
                fontWeight: "800",
                textDecoration: "none",
                whiteSpace: "nowrap",
                boxShadow:
                  "0 5px 15px rgba(20, 190, 182, 0.22)",
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