import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const user = localStorage.getItem("user");

    if (user) {
      try {
        const parsedUser = JSON.parse(user);

        setUserName(parsedUser.name || "User");
        setUserEmail(parsedUser.email || "");
      } catch {
        setUserName("User");
      }
    }

    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products"
        );

        setProductCount(res.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, [navigate]);

  const cardStyle = {
    flex: "1 1 220px",
    background: "#ffffff",
    borderRadius: "15px",
    padding: "25px",
    textAlign: "center" as const,
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  };

  return (
    <div
      style={{
        background: "#f4f6fb",
        minHeight: "100vh",
        padding: "30px",
      }}
    >
      {/* Welcome */}

      <div
        style={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          padding: "35px",
          borderRadius: "15px",
        }}
      >
        <h1>👋 Welcome, {userName}</h1>

        <p
          style={{
            opacity: 0.9,
            fontSize: "17px",
            marginBottom: "10px",
          }}
        >
          📧 {userEmail}
        </p>

        <p style={{ fontSize: "18px" }}>
          Manage your products and generate
          AI-powered product descriptions.
        </p>
      </div>

      {/* Statistics */}

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "35px",
        }}
      >
        <div style={cardStyle}>
          <h2>📦 Products</h2>

          <h1>{productCount}</h1>

          <p>Total Products</p>
        </div>

        <div style={cardStyle}>
          <h2>🤖 AI</h2>

          <h1>AI</h1>

          <p>Generate Smart Descriptions</p>
        </div>

        <div style={cardStyle}>
          <h2>🔒 Security</h2>

          <h1>Secure</h1>

          <p>JWT Protected Routes</p>
        </div>

        <div style={cardStyle}>
          <h2>🌐 Login</h2>

          <h1>OAuth</h1>

          <p>Google Sign In</p>
        </div>
      </div>

      {/* Quick Actions */}

      <div
        style={{
          background: "white",
          marginTop: "40px",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
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
            style={buttonStyle}
            onClick={() => navigate("/products")}
          >
            📦 Manage Products
          </button>

          <button
            style={buttonStyle}
            onClick={() =>
              navigate("/generate-description")
            }
          >
            🤖 Generate AI
          </button>

          <button
            style={buttonStyle}
            onClick={() => navigate("/profile")}
          >
            👤 View Profile
          </button>
        </div>
      </div>

      {/* Features */}

      <div
        style={{
          background: "white",
          marginTop: "35px",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,.08)",
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
          <li>✅ Product CRUD Operations</li>
          <li>✅ Product Search</li>
          <li>✅ AI Description Generator</li>
          <li>✅ Protected Dashboard</li>
          <li>✅ Responsive Design</li>
          <li>✅ Dark Mode</li>
        </ul>
      </div>
    </div>
  );
}

const buttonStyle = {
  padding: "14px 22px",
  background: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer",
  fontSize: "16px",
  fontWeight: "bold" as const,
};

export default Dashboard;