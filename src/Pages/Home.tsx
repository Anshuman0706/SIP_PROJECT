import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* HERO SECTION */}

      <section
        style={{
          background:
            "linear-gradient(135deg, #0b2638, #173d52)",
          color: "white",
          padding: "75px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "auto",
          }}
        >
          <p
            style={{
              color: "#25b8b5",
              fontSize: "16px",
              fontWeight: "bold",
              letterSpacing: "1px",
              marginBottom: "15px",
            }}
          >
            AI-POWERED E-COMMERCE TOOL
          </p>

          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              lineHeight: "1.15",
              margin: "0 auto 18px",
              maxWidth: "760px",
            }}
          >
            Create Better Product Descriptions with{" "}
            <span
              style={{
                color: "#25b8b5",
              }}
            >
              AI
            </span>
          </h1>

          <p
            style={{
              maxWidth: "650px",
              margin: "0 auto",
              color: "rgba(255,255,255,0.82)",
              fontSize: "17px",
              lineHeight: "1.7",
            }}
          >
            Generate clear, professional, and engaging product
            descriptions for your online store in just a few
            seconds.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "15px",
              flexWrap: "wrap",
              marginTop: "30px",
            }}
          >
            <Link
              to="/generate-description"
              style={{
                padding: "14px 24px",
                background: "#25b8b5",
                color: "#0b2638",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Generate Description
            </Link>

            <Link
              to="/about"
              style={{
                padding: "14px 24px",
                background: "transparent",
                color: "white",
                border: "1px solid #25b8b5",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}

      <section
        style={{
          background: "#f7fcfb",
          padding: "65px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0b2638",
            fontSize: "34px",
            marginTop: 0,
            marginBottom: "12px",
          }}
        >
          Everything You Need
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#667985",
            maxWidth: "650px",
            margin: "0 auto 40px",
            lineHeight: "1.7",
          }}
        >
          DescAI helps you create better product content quickly
          and manage your products from one place.
        </p>

        <div
          style={{
            maxWidth: "1100px",
            margin: "auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          <FeatureCard
            title="AI Description"
            text="Generate professional product descriptions using AI."
          />

          <FeatureCard
            title="Product Management"
            text="Add, edit, search, and manage your products easily."
          />

          <FeatureCard
            title="Secure Account"
            text="Your account is protected with secure authentication."
          />

          <FeatureCard
            title="Easy to Use"
            text="A clean and simple interface designed for everyone."
          />
        </div>
      </section>

      {/* HOW IT WORKS */}

      <section
        style={{
          background: "white",
          padding: "65px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#0b2638",
            fontSize: "34px",
            marginTop: 0,
          }}
        >
          How DescAI Works
        </h2>

        <div
          style={{
            maxWidth: "1000px",
            margin: "40px auto 0",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "25px",
          }}
        >
          <StepCard
            number="01"
            title="Enter Details"
            text="Add your product name, category, ingredients, and weight."
          />

          <StepCard
            number="02"
            title="Choose a Tone"
            text="Select the writing style that matches your product."
          />

          <StepCard
            number="03"
            title="Generate"
            text="Get a ready-to-use product description in seconds."
          />
        </div>
      </section>

      {/* CTA SECTION */}

      <section
        style={{
          background: "#0b2638",
          color: "white",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "34px",
            marginTop: 0,
            marginBottom: "15px",
          }}
        >
          Ready to Create Better Product Content?
        </h2>

        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            marginBottom: "28px",
          }}
        >
          Start generating professional product descriptions today.
        </p>

        <Link
          to="/generate-description"
          style={{
            display: "inline-block",
            padding: "14px 25px",
            background: "#25b8b5",
            color: "#0b2638",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}


/* FEATURE CARD */

function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "14px",
        border: "1px solid #dce7e6",
        boxShadow:
          "0 6px 18px rgba(11,38,56,0.08)",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          color: "#0b2638",
          marginTop: 0,
          marginBottom: "12px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#667985",
          lineHeight: "1.6",
          marginBottom: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}


/* STEP CARD */

function StepCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      style={{
        padding: "25px",
        textAlign: "center",
        borderRadius: "14px",
        background: "#eef8f7",
      }}
    >
      <h2
        style={{
          color: "#168f8c",
          fontSize: "35px",
          margin: "0 0 12px",
        }}
      >
        {number}
      </h2>

      <h3
        style={{
          color: "#0b2638",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          color: "#667985",
          lineHeight: "1.6",
          marginBottom: 0,
        }}
      >
        {text}
      </p>
    </div>
  );
}

export default Home;