import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");
  const [productCount, setProductCount] = useState(0);
  const [loading, setLoading] = useState(true);

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
        setUserEmail("");
      }
    }

    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "https://descai-backend.onrender.com/api/products",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProductCount(res.data.length);
      } catch (error) {
        console.log("Product fetch error:", error);
        setProductCount(0);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const dashboardStyle = {
    minHeight: "100vh",
    background: "#eef8f7",
    padding: "45px 20px",
  };

  const containerStyle = {
    maxWidth: "1180px",
    margin: "0 auto",
  };

  const bannerStyle = {
    padding: "42px",
    color: "#ffffff",
    background:
      "linear-gradient(135deg, #0b2638, #173d52)",
    borderRadius: "18px",
    boxShadow:
      "0 12px 30px rgba(11, 38, 56, 0.18)",
  };

  const cardStyle = {
    padding: "27px",
    background: "#ffffff",
    border: "1px solid #dce7e6",
    borderRadius: "15px",
    boxShadow:
      "0 7px 20px rgba(11, 38, 56, 0.08)",
    textAlign: "center" as const,
  };

  const sectionStyle = {
    marginTop: "30px",
    padding: "30px",
    background: "#ffffff",
    border: "1px solid #dce7e6",
    borderRadius: "15px",
    boxShadow:
      "0 7px 20px rgba(11, 38, 56, 0.08)",
  };

  const actionButtonStyle = {
    flex: "1 1 200px",
    padding: "14px 20px",
    color: "#ffffff",
    background: "#168f8c",
    border: "none",
    borderRadius: "9px",
    fontSize: "16px",
    fontWeight: "700",
    cursor: "pointer",
  };

  return (
    <div style={dashboardStyle}>
      <div style={containerStyle}>

        {/* Welcome Section */}

        <section style={bannerStyle}>
          <p
            style={{
              margin: "0 0 8px",
              color: "#25b8b5",
              fontSize: "15px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            DescAI Dashboard
          </p>

          <h1
            style={{
              margin: "0 0 12px",
              fontSize: "clamp(32px, 5vw, 46px)",
            }}
          >
            Welcome back, {userName}
          </h1>

          {userEmail && (
            <p
              style={{
                margin: "0 0 12px",
                color: "#dce7e6",
                fontSize: "16px",
              }}
            >
              {userEmail}
            </p>
          )}

          <p
            style={{
              maxWidth: "720px",
              margin: "0",
              color: "rgba(255, 255, 255, 0.80)",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Manage your products and create
            professional AI-powered product
            descriptions from one dashboard.
          </p>
        </section>

        {/* Statistics */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div style={cardStyle}>
            <p
              style={{
                margin: "0 0 10px",
                color: "#667985",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Total Products
            </p>

            <h2
              style={{
                margin: "0",
                color: "#168f8c",
                fontSize: "42px",
              }}
            >
              {loading ? "..." : productCount}
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: "#667985",
              }}
            >
              Products in your collection
            </p>
          </div>

          <div style={cardStyle}>
            <p
              style={{
                margin: "0 0 10px",
                color: "#667985",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              AI Generator
            </p>

            <h2
              style={{
                margin: "0",
                color: "#168f8c",
                fontSize: "32px",
              }}
            >
              Ready
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: "#667985",
              }}
            >
              Generate product descriptions
            </p>
          </div>

          <div style={cardStyle}>
            <p
              style={{
                margin: "0 0 10px",
                color: "#667985",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Account Security
            </p>

            <h2
              style={{
                margin: "0",
                color: "#168f8c",
                fontSize: "32px",
              }}
            >
              Secure
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: "#667985",
              }}
            >
              Protected with JWT
            </p>
          </div>

          <div style={cardStyle}>
            <p
              style={{
                margin: "0 0 10px",
                color: "#667985",
                fontSize: "15px",
                fontWeight: "600",
              }}
            >
              Account Status
            </p>

            <h2
              style={{
                margin: "0",
                color: "#168f8c",
                fontSize: "32px",
              }}
            >
              Active
            </h2>

            <p
              style={{
                margin: "10px 0 0",
                color: "#667985",
              }}
            >
              Your account is ready
            </p>
          </div>
        </section>

        {/* Quick Actions */}

        <section style={sectionStyle}>
          <h2
            style={{
              margin: "0 0 8px",
              color: "#0b2638",
              fontSize: "27px",
            }}
          >
            Quick Actions
          </h2>

          <p
            style={{
              margin: "0 0 22px",
              color: "#667985",
              lineHeight: "1.6",
            }}
          >
            Select an option to continue working
            with DescAI.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "14px",
            }}
          >
            <button
              style={actionButtonStyle}
              onClick={() =>
                navigate("/products")
              }
            >
              Manage Products
            </button>

            <button
              style={actionButtonStyle}
              onClick={() =>
                navigate(
                  "/generate-description"
                )
              }
            >
              Generate Description
            </button>

            <button
              style={actionButtonStyle}
              onClick={() =>
                navigate("/profile")
              }
            >
              View Profile
            </button>
          </div>
        </section>

        {/* Features */}

        <section style={sectionStyle}>
          <h2
            style={{
              margin: "0 0 20px",
              color: "#0b2638",
              fontSize: "27px",
            }}
          >
            Available Features
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "16px",
            }}
          >
            <div style={featureStyle}>
              AI Product Description Generator
            </div>

            <div style={featureStyle}>
              Product Add, Edit and Delete
            </div>

            <div style={featureStyle}>
              Product Search
            </div>

            <div style={featureStyle}>
              JWT Authentication
            </div>

            <div style={featureStyle}>
              Google OAuth Login
            </div>

            <div style={featureStyle}>
              Forgot and Reset Password
            </div>

            <div style={featureStyle}>
              Protected User Dashboard
            </div>

            <div style={featureStyle}>
              Responsive User Interface
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

const featureStyle = {
  padding: "17px",
  color: "#173042",
  background: "#f7fcfb",
  border: "1px solid #dce7e6",
  borderRadius: "10px",
  fontSize: "15px",
  fontWeight: "600",
};

export default Dashboard;