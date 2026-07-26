import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const featureCard = {
    flex: "1",
    minWidth: "220px",
    maxWidth: "350px",
    width: "100%",
    background: "#ffffff",
    padding: "25px",
    borderRadius: "14px",
    boxShadow: "0 6px 18px rgba(0,0,0,.08)",
    textAlign: "center" as const,
    transition: "0.3s",
    margin: "0 auto",
  };

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* ================= HERO ================= */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px,8vw,70px)",
            marginBottom: "15px",
            lineHeight: "1.2",
            wordBreak: "break-word",
          }}
        >
          🤖 DescAI
        </h1>

        <h2
          style={{
            fontSize: "clamp(24px,5vw,38px)",
            marginBottom: "20px",
          }}
        >
          AI Product Description Generator
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.8",
            fontSize: "clamp(16px,2.5vw,20px)",
            padding: "0 15px",
          }}
        >
          Generate SEO-friendly, engaging and
          professional product descriptions in
          seconds using Artificial Intelligence.
          Save time, improve quality and boost
          your product sales with DescAI.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginTop: "40px",
          }}
        >
          <button
            onClick={() =>
              navigate("/generate-description")
            }
            style={{
              padding: "15px 30px",
              background: "white",
              color: "#1976d2",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              minWidth: "200px",
            }}
          >
            🚀 Generate Now
          </button>

          <button
            onClick={() =>
              navigate("/products")
            }
            style={{
              padding: "15px 30px",
              background: "transparent",
              color: "white",
              border: "2px solid white",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "16px",
              minWidth: "200px",
            }}
          >
            📦 View Products
          </button>
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: "50px",
            color: "#1976d2",
          }}
        >
          Why Choose DescAI?
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <div style={featureCard}>
            <h2>⚡ Fast</h2>

            <p>
              Generate product descriptions
              within seconds using AI.
            </p>
          </div>

          <div style={featureCard}>
            <h2>🎯 SEO Friendly</h2>

            <p>
              Optimized content for Amazon,
              Flipkart and Shopify.
            </p>
          </div>

          <div style={featureCard}>
            <h2>✨ Premium Quality</h2>

            <p>
              Professional descriptions written
              with AI assistance.
            </p>
          </div>

          <div style={featureCard}>
            <h2>📋 Copy Instantly</h2>

            <p>
              One-click copy and reuse your
              generated content.
            </p>
          </div>
        </div>
      </section>
            {/* ================= Statistics ================= */}

      <section
        style={{
          background: "#1976d2",
          color: "white",
          padding: "70px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              minWidth: "180px",
              flex: "1",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(40px,8vw,60px)",
                margin: 0,
              }}
            >
              500+
            </h1>

            <p>Descriptions Generated</p>
          </div>

          <div
            style={{
              minWidth: "180px",
              flex: "1",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(40px,8vw,60px)",
                margin: 0,
              }}
            >
              100+
            </h1>

            <p>Happy Users</p>
          </div>

          <div
            style={{
              minWidth: "180px",
              flex: "1",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(40px,8vw,60px)",
                margin: 0,
              }}
            >
              24/7
            </h1>

            <p>AI Availability</p>
          </div>

          <div
            style={{
              minWidth: "180px",
              flex: "1",
            }}
          >
            <h1
              style={{
                fontSize: "clamp(40px,8vw,60px)",
                margin: 0,
              }}
            >
              SEO
            </h1>

            <p>Optimized Content</p>
          </div>
        </div>
      </section>

      {/* ================= Features ================= */}

      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1976d2",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: "50px",
          }}
        >
          Powerful Features
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <div style={featureCard}>
            <h2>🤖 AI Generation</h2>

            <p>
              Generate professional product
              descriptions instantly.
            </p>
          </div>

          <div style={featureCard}>
            <h2>📦 Product Management</h2>

            <p>
              Complete Create, Read, Update and
              Delete functionality.
            </p>
          </div>

          <div style={featureCard}>
            <h2>🔒 Secure Login</h2>

            <p>
              JWT Authentication with Google
              OAuth integration.
            </p>
          </div>

          <div style={featureCard}>
            <h2>📱 Responsive</h2>

            <p>
              Works perfectly on mobile,
              tablet and desktop.
            </p>
          </div>

          <div style={featureCard}>
            <h2>🌙 Dark Mode</h2>

            <p>
              Switch between light and dark
              themes easily.
            </p>
          </div>

          <div style={featureCard}>
            <h2>⚡ Fast Performance</h2>

            <p>
              Built using React, Node.js,
              Express and MongoDB.
            </p>
          </div>
        </div>
      </section>

      {/* ================= How It Works ================= */}

      <section
        style={{
          background: "#ffffff",
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1976d2",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: "50px",
          }}
        >
          How It Works
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <div style={featureCard}>
            <h1>1️⃣</h1>

            <h3>Enter Product Details</h3>

            <p>
              Fill product name, category,
              ingredients and weight.
            </p>
          </div>

          <div style={featureCard}>
            <h1>2️⃣</h1>

            <h3>Select Tone</h3>

            <p>
              Choose Professional, Marketing,
              SEO or Premium style.
            </p>
          </div>

          <div style={featureCard}>
            <h1>3️⃣</h1>

            <h3>Generate AI Content</h3>

            <p>
              AI instantly creates a polished
              product description.
            </p>
          </div>

          <div style={featureCard}>
            <h1>4️⃣</h1>

            <h3>Copy & Use</h3>

            <p>
              Copy the generated content and
              use it anywhere.
            </p>
          </div>
        </div>
      </section>
            {/* ================= Technology ================= */}

      <section
        style={{
          padding: "70px 20px",
          background: "#f5f7fb",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#1976d2",
            fontSize: "clamp(30px,5vw,42px)",
            marginBottom: "50px",
          }}
        >
          Built With Modern Technologies
        </h2>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
          <div style={featureCard}>
            <h1>⚛️</h1>
            <h3>React</h3>
            <p>Modern frontend framework for responsive UI.</p>
          </div>

          <div style={featureCard}>
            <h1>🟢</h1>
            <h3>Node.js</h3>
            <p>Fast backend runtime for scalable APIs.</p>
          </div>

          <div style={featureCard}>
            <h1>🚀</h1>
            <h3>Express.js</h3>
            <p>REST API development with clean routing.</p>
          </div>

          <div style={featureCard}>
            <h1>🍃</h1>
            <h3>MongoDB</h3>
            <p>Flexible NoSQL database for storing products.</p>
          </div>

          <div style={featureCard}>
            <h1>🤖</h1>
            <h3>OpenAI</h3>
            <p>AI-powered product description generation.</p>
          </div>

          <div style={featureCard}>
            <h1>🔐</h1>
            <h3>JWT</h3>
            <p>Secure authentication and protected routes.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(30px,6vw,48px)",
            marginBottom: "20px",
          }}
        >
          Ready to Generate Amazing Product Descriptions?
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Join DescAI and create high-quality,
          SEO-friendly product descriptions in seconds.
        </p>

        <button
          onClick={() =>
            navigate("/generate-description")
          }
          style={{
            marginTop: "35px",
            padding: "16px 35px",
            border: "none",
            borderRadius: "8px",
            background: "white",
            color: "#1976d2",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "17px",
          }}
        >
          🚀 Start Generating
        </button>
      </section>

      {/* ================= Footer ================= */}

      <footer
        style={{
          background: "#0d47a1",
          color: "white",
          padding: "35px 20px",
          textAlign: "center",
        }}
      >
        <h2>🤖 DescAI</h2>

        <p>
          AI Product Description Generator
        </p>

        <p
          style={{
            marginTop: "20px",
            color: "#ddd",
          }}
        >
          © 2026 DescAI. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;