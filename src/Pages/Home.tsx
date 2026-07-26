import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const featureCard = {
    flex: "1",
    minWidth: "250px",
    background: "#fff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    textAlign: "center" as const,
  };

  return (
    <div
      style={{
        background: "#f5f7fb",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          🤖 DescAI
        </h1>

        <h2
          style={{
            fontSize: "30px",
            marginBottom: "20px",
          }}
        >
          AI Product Description Generator
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "35px",
          }}
        >
          Create high-quality, SEO-friendly,
          engaging product descriptions within
          seconds using Artificial Intelligence.
          Increase your sales with professional
          product content generated instantly.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() =>
              navigate("/generate-description")
            }
            style={{
              padding: "15px 30px",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "17px",
              background: "white",
              color: "#1976d2",
              fontWeight: "bold",
            }}
          >
            🚀 Generate Now
          </button>

          <button
            onClick={() => navigate("/products")}
            style={{
              padding: "15px 30px",
              border: "2px solid white",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "17px",
              background: "transparent",
              color: "white",
            }}
          >
            📦 View Products
          </button>
        </div>
      </section>

      {/* Why DescAI */}

      <section
        style={{
          padding: "70px 40px",
          textAlign: "center",
        }}
      >
        <h1>Why Choose DescAI?</h1>

        <p
          style={{
            color: "gray",
            fontSize: "18px",
            maxWidth: "900px",
            margin: "20px auto",
            lineHeight: "30px",
          }}
        >
          DescAI helps businesses, sellers,
          startups and e-commerce owners generate
          professional product descriptions with
          AI. Save hours of manual writing and
          improve your product listings instantly.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            marginTop: "50px",
          }}
        >
          <div style={featureCard}>
            <h2>🤖 AI Powered</h2>

            <p>
              Generate professional product
              descriptions using AI.
            </p>
          </div>

          <div style={featureCard}>
            <h2>🔍 SEO Optimized</h2>

            <p>
              Improve product visibility with
              SEO-friendly descriptions.
            </p>
          </div>

          <div style={featureCard}>
            <h2>⚡ Instant Results</h2>

            <p>
              Generate descriptions within
              seconds.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Statistics */}

      <section
        style={{
          background: "#1976d2",
          color: "white",
          padding: "60px 20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            textAlign: "center",
            gap: "30px",
          }}
        >
          <div>
            <h1>10+</h1>
            <p>Powerful Features</p>
          </div>

          <div>
            <h1>100%</h1>
            <p>Responsive Design</p>
          </div>

          <div>
            <h1>AI</h1>
            <p>Powered Generation</p>
          </div>

          <div>
            <h1>24/7</h1>
            <p>Available Anytime</p>
          </div>
        </div>
      </section>
            {/* Features */}

      <section
        style={{
          padding: "70px 40px",
          background: "#ffffff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          🚀 Powerful Features
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          <div style={featureCard}>
            <h2>📦 Product Management</h2>

            <p>
              Create, Update, Delete and Search
              products easily.
            </p>
          </div>

          <div style={featureCard}>
            <h2>🤖 AI Generator</h2>

            <p>
              Generate professional product
              descriptions instantly.
            </p>
          </div>

          <div style={featureCard}>
            <h2>🔒 Secure Login</h2>

            <p>
              JWT Authentication with Google
              OAuth support.
            </p>
          </div>

          <div style={featureCard}>
            <h2>📱 Responsive</h2>

            <p>
              Optimized for Desktop, Tablet and
              Mobile devices.
            </p>
          </div>

          <div style={featureCard}>
            <h2>📋 Copy Description</h2>

            <p>
              Copy generated descriptions with
              just one click.
            </p>
          </div>

          <div style={featureCard}>
            <h2>⚡ Fast Performance</h2>

            <p>
              AI generates descriptions within
              seconds.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}

      <section
        style={{
          padding: "70px 30px",
          background: "#f5f7fb",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          ⚙️ How DescAI Works
        </h1>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {[
            {
              icon: "📝",
              title: "Register",
              text: "Create your DescAI account."
            },
            {
              icon: "🔑",
              title: "Login",
              text: "Secure authentication using JWT."
            },
            {
              icon: "📦",
              title: "Add Product",
              text: "Enter product details."
            },
            {
              icon: "🤖",
              title: "Generate",
              text: "AI creates optimized descriptions."
            },
            {
              icon: "📋",
              title: "Copy",
              text: "Copy & use anywhere."
            }
          ].map((step, index) => (
            <div
              key={index}
              style={featureCard}
            >
              <h1>{step.icon}</h1>

              <h2>{step.title}</h2>

              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}

      <section
        style={{
          padding: "70px 30px",
          background: "#ffffff",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          💻 Technology Stack
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(180px,1fr))",
            gap: "20px",
          }}
        >
          {[
            "⚛ React",
            "🟢 Node.js",
            "🚂 Express",
            "🍃 MongoDB",
            "🔐 JWT",
            "🌍 Google OAuth",
            "🤖 OpenAI API",
            "📡 Axios",
          ].map((tech, index) => (
            <div
              key={index}
              style={{
                background: "#1976d2",
                color: "white",
                padding: "20px",
                borderRadius: "10px",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {tech}
            </div>
          ))}
        </div>
      </section>
            {/* Benefits */}

      <section
        style={{
          padding: "70px 30px",
          background: "#f5f7fb",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          ⭐ Why Businesses Love DescAI
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(250px,1fr))",
            gap: "25px",
          }}
        >
          {[
            "⏳ Saves Hours of Manual Writing",
            "🚀 Increases Product Sales",
            "🔍 SEO Optimized Content",
            "🤖 AI Powered Descriptions",
            "📈 Better Product Visibility",
            "💼 Professional Writing Style",
            "📋 One Click Copy",
            "🔒 Secure Authentication",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                background: "#fff",
                padding: "25px",
                borderRadius: "12px",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,.08)",
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Call To Action */}

      <section
        style={{
          background:
            "linear-gradient(135deg,#1976d2,#42a5f5)",
          color: "white",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          🚀 Ready to Generate Amazing Product Descriptions?
        </h1>

        <p
          style={{
            maxWidth: "800px",
            margin: "auto",
            fontSize: "20px",
            lineHeight: "35px",
          }}
        >
          Join DescAI today and let Artificial
          Intelligence create professional,
          engaging and SEO-friendly product
          descriptions for your business.
        </p>

        <button
          onClick={() =>
            navigate("/generate-description")
          }
          style={{
            marginTop: "35px",
            padding: "16px 35px",
            fontSize: "18px",
            border: "none",
            borderRadius: "8px",
            background: "white",
            color: "#1976d2",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          🤖 Start Generating
        </button>
      </section>

      {/* Footer Info */}

      <section
        style={{
          background: "#0d1117",
          color: "white",
          textAlign: "center",
          padding: "50px 20px",
        }}
      >
        <h2>DescAI</h2>

        <p
          style={{
            color: "#bbb",
            marginTop: "15px",
            fontSize: "17px",
          }}
        >
          AI Powered Product Description Generator
        </p>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            color: "#ccc",
          }}
        >
          <span>⚛ React</span>
          <span>🟢 Node.js</span>
          <span>🚂 Express</span>
          <span>🍃 MongoDB</span>
          <span>🤖 OpenAI</span>
        </div>

        <p
          style={{
            marginTop: "30px",
            color: "#888",
          }}
        >
          © 2026 DescAI | Built with ❤️ using
          MERN Stack
        </p>
      </section>
    </div>
  );
}

export default Home;