import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "User");
      } catch {
        setUserName("User");
      }
    }
  }, []);

  const cardStyle = {
    flex: "1",
    minWidth: "220px",
    background: "#fff",
    borderRadius: "12px",
    padding: "25px",
    textAlign: "center" as const,
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
  };

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
        padding: "35px",
      }}
    >
      {/* Welcome Banner */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          padding: "35px",
          borderRadius: "15px",
          marginBottom: "35px",
        }}
      >
        <h1>👋 Welcome, {userName}</h1>

        <p style={{ fontSize: "18px" }}>
          Manage your products and generate
          AI-powered product descriptions.
        </p>
      </div>

      {/* Stats */}

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={cardStyle}>
          <h2>📦 Products</h2>
          <h1>CRUD</h1>
          <p>Create, Update & Delete Products</p>
        </div>

        <div style={cardStyle}>
          <h2>🤖 AI</h2>
          <h1>Generate</h1>
          <p>Generate Product Descriptions</p>
        </div>

        <div style={cardStyle}>
          <h2>🔒 Security</h2>
          <h1>JWT</h1>
          <p>Protected Authentication</p>
        </div>

        <div style={cardStyle}>
          <h2>🌐 Login</h2>
          <h1>Google</h1>
          <p>OAuth Authentication</p>
        </div>
      </div>

      {/* Quick Actions */}

      <div
        style={{
          marginTop: "40px",
          background: "white",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
        }}
      >
        <h2>🚀 Quick Actions</h2>

        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => navigate("/products")}
            style={buttonStyle}
          >
            📦 Manage Products
          </button>

          <button
            onClick={() =>
              navigate("/generate-description")
            }
            style={buttonStyle}
          >
            🤖 Generate AI
          </button>

          <button
            onClick={() => navigate("/profile")}
            style={buttonStyle}
          >
            👤 View Profile
          </button>
        </div>
      </div>

      {/* Features */}

      <div
        style={{
          marginTop: "35px",
          background: "white",
          borderRadius: "12px",
          padding: "30px",
          boxShadow: "0 6px 18px rgba(0,0,0,.08)",
        }}
      >
        <h2>✨ Project Features</h2>

        <ul
          style={{
            lineHeight: "35px",
            fontSize: "17px",
          }}
        >
          <li>✅ JWT Authentication</li>
          <li>✅ Google OAuth Login</li>
          <li>✅ Forgot Password</li>
          <li>✅ Reset Password</li>
          <li>✅ Product CRUD</li>
          <li>✅ Product Search</li>
          <li>✅ AI Description Generator</li>
          <li>✅ Responsive UI</li>
          <li>✅ Protected Routes</li>
          <li>✅ Dark Mode</li>
        </ul>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "12px 20px",
  background: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "15px",
};

export default Dashboard;