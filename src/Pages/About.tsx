function About() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f8f8",
        padding: "70px 20px",
        color: "#183b4e",
      }}
    >
      {/* About Header */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
          padding: "60px 25px",
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, #234b5d, #5ba99d)",
          color: "white",
          boxShadow: "0 10px 30px rgba(24, 59, 78, 0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(38px, 7vw, 60px)",
            marginBottom: "20px",
          }}
        >
          About DescAI
        </h1>

        <p
          style={{
            maxWidth: "750px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          DescAI is an AI-powered web application designed
          to help businesses, sellers, and product creators
          generate professional and engaging product
          descriptions quickly.
        </p>
      </section>

      {/* Main Content */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "50px auto 0",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {/* Our Purpose */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow:
              "0 6px 20px rgba(24, 59, 78, 0.1)",
          }}
        >
          <h2
            style={{
              color: "#2f7f78",
              marginTop: 0,
            }}
          >
            Our Purpose
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#4b626d",
            }}
          >
            Writing high-quality product descriptions can
            take time and effort. DescAI simplifies this
            process by using Artificial Intelligence to
            create clear, attractive, and e-commerce-ready
            content within seconds.
          </p>
        </div>

        {/* How DescAI Works */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow:
              "0 6px 20px rgba(24, 59, 78, 0.1)",
          }}
        >
          <h2
            style={{
              color: "#2f7f78",
              marginTop: 0,
            }}
          >
            How DescAI Works
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#4b626d",
            }}
          >
            Users enter product information such as the
            product name, ingredients, weight, and key
            features. They can then choose a preferred tone,
            including premium, traditional, or health-focused,
            and generate a customized product description.
          </p>
        </div>

        {/* Key Benefits */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow:
              "0 6px 20px rgba(24, 59, 78, 0.1)",
          }}
        >
          <h2
            style={{
              color: "#2f7f78",
              marginTop: 0,
            }}
          >
            Key Benefits
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#4b626d",
            }}
          >
            DescAI helps users save time, maintain content
            quality, create engaging product listings, and
            prepare descriptions that are suitable for
            e-commerce platforms and online stores.
          </p>
        </div>

        {/* Technology */}
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "16px",
            boxShadow:
              "0 6px 20px rgba(24, 59, 78, 0.1)",
          }}
        >
          <h2
            style={{
              color: "#2f7f78",
              marginTop: 0,
            }}
          >
            Technology Used
          </h2>

          <p
            style={{
              lineHeight: "1.8",
              color: "#4b626d",
            }}
          >
            DescAI is built using React and Vite for the
            frontend, Node.js and Express.js for the backend,
            MongoDB Atlas for database management, and AI
            technology for generating product descriptions.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        style={{
          maxWidth: "1000px",
          margin: "40px auto 0",
          padding: "40px 30px",
          textAlign: "center",
          borderRadius: "18px",
          background: "#e3f1ef",
          border: "1px solid #b9d9d4",
        }}
      >
        <h2
          style={{
            color: "#234b5d",
            marginTop: 0,
            fontSize: "32px",
          }}
        >
          Our Mission
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            color: "#4b626d",
            lineHeight: "1.8",
            fontSize: "17px",
          }}
        >
          Our mission is to make professional product-content
          creation faster, simpler, and more accessible by
          combining easy-to-use web technology with the power
          of Artificial Intelligence.
        </p>
      </section>
    </div>
  );
}

export default About;