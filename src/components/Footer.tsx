import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#071c2a",
        color: "white",
        padding: "35px 20px 20px",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "25px",
        }}
      >
        {/* Website Information */}

        <div
          style={{
            maxWidth: "500px",
          }}
        >
          <h2
            style={{
              margin: "0 0 10px",
              fontSize: "27px",
            }}
          >
            Desc
            <span
              style={{
                color: "#25b8b5",
              }}
            >
              AI
            </span>
          </h2>

          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.7)",
              lineHeight: "1.6",
            }}
          >
            An AI-powered platform that helps businesses create
            clear and professional product descriptions quickly.
          </p>
        </div>

        {/* Footer Links */}

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <Link
            to="/"
            style={linkStyle}
          >
            Home
          </Link>

          <Link
            to="/about"
            style={linkStyle}
          >
            About
          </Link>

          <Link
            to="/products"
            style={linkStyle}
          >
            Products
          </Link>

          <Link
            to="/generate-description"
            style={linkStyle}
          >
            Generate AI
          </Link>
        </div>
      </div>

      {/* Bottom Line */}

      <div
        style={{
          maxWidth: "1150px",
          margin: "25px auto 0",
          paddingTop: "18px",
          borderTop:
            "1px solid rgba(255,255,255,0.15)",
          textAlign: "center",
          color: "rgba(255,255,255,0.5)",
          fontSize: "14px",
        }}
      >
        © 2026 DescAI. All rights reserved.
      </div>
    </footer>
  );
}

const linkStyle = {
  color: "rgba(255,255,255,0.72)",
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "600",
};

export default Footer;