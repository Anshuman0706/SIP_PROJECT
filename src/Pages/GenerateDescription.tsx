import { useState } from "react";
import { toast } from "react-toastify";
import { generateDescription } from "../api/ai";

function GenerateDescription() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [weight, setWeight] = useState("");
  const [tone, setTone] = useState("Professional");

  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first");
      return;
    }

    if (!name || !category) {
      toast.warning("Product Name and Category are required");
      return;
    }

    try {
      setLoading(true);

      const res = await generateDescription(
        {
          name,
          category,
          ingredients,
          weight,
          tone,
        },
        token
      );

      setDescription(res.data.description);
      toast.success("Description Generated Successfully");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Failed to generate description"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyDescription = () => {
    navigator.clipboard.writeText(description);
    toast.success("Copied to Clipboard");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1976d2",
        }}
      >
        🤖 AI Product Description Generator
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Generate professional product descriptions using AI.
      </p>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={inputStyle}
      />

      <textarea
        rows={4}
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        style={textareaStyle}
      />

      <input
        placeholder="Weight"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        style={inputStyle}
      />

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        style={inputStyle}
      >
        <option>Professional</option>
        <option>Marketing</option>
        <option>SEO</option>
        <option>Friendly</option>
        <option>Premium</option>
      </select>

      <button
        onClick={handleGenerate}
        disabled={loading}
        style={{
          width: "100%",
          padding: "15px",
          background: loading ? "#90caf9" : "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: loading ? "not-allowed" : "pointer",
          fontSize: "17px",
        }}
      >
        {loading
          ? "⏳ Generating..."
          : "🚀 Generate Description"}
      </button>

      {loading && (
        <div
          style={{
            textAlign: "center",
            marginTop: "25px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              margin: "0 auto",
              border: "5px solid #ddd",
              borderTop: "5px solid #1976d2",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />

          <p style={{ marginTop: "15px" }}>
            AI is generating your description...
          </p>
        </div>
      )}

      {!loading && !description && (
        <div
          style={{
            textAlign: "center",
            marginTop: "30px",
            color: "#777",
            border: "1px dashed #ccc",
            padding: "25px",
            borderRadius: "10px",
          }}
        >
          No description generated yet.
        </div>
      )}

      {description && (
        <div
          style={{
            marginTop: "30px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "20px",
            background: "#fafafa",
          }}
        >
          <h2>Generated Description</h2>

          <textarea
            value={description}
            readOnly
            rows={12}
            style={textareaStyle}
          />

          <p
            style={{
              textAlign: "right",
              color: "#666",
              marginBottom: "15px",
            }}
          >
            Characters: {description.length}
          </p>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button
              onClick={copyDescription}
              style={greenButton}
            >
              📋 Copy
            </button>

            <button
              onClick={() => setDescription("")}
              style={redButton}
            >
              🗑 Clear
            </button>

            <button
              onClick={handleGenerate}
              style={blueButton}
            >
              🔄 Regenerate
            </button>
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes spin {
            from {transform: rotate(0deg);}
            to {transform: rotate(360deg);}
          }
        `}
      </style>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box" as const,
};

const textareaStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box" as const,
};

const blueButton = {
  flex: 1,
  minWidth: "150px",
  padding: "12px",
  background: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const greenButton = {
  ...blueButton,
  background: "#4CAF50",
};

const redButton = {
  ...blueButton,
  background: "#f44336",
};

export default GenerateDescription;