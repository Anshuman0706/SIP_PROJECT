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

    if (!name.trim() || !category.trim()) {
      toast.warning(
        "Product name and category are required"
      );
      return;
    }

    try {
      setLoading(true);

      const response = await generateDescription(
        {
          name,
          category,
          ingredients,
          weight,
          tone,
        },
        token
      );

      setDescription(
        response.data.description
      );

      toast.success(
        "Description generated successfully"
      );
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Failed to generate description"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!description) {
      toast.warning(
        "No description available to copy"
      );
      return;
    }

    try {
      await navigator.clipboard.writeText(
        description
      );

      toast.success(
        "Description copied successfully"
      );
    } catch {
      toast.error(
        "Failed to copy description"
      );
    }
  };

  const handleClear = () => {
    setDescription("");

    toast.info(
      "Generated description cleared"
    );
  };

  return (
    <div
      className="generator-page"
      style={{
        minHeight: "100vh",
        background: "#eef8f7",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        {/* Page Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <h1
            style={{
              color: "#0b2638",
              marginBottom: "12px",
              fontSize: "38px",
            }}
          >
            AI Product Description Generator
          </h1>

          <p
            style={{
              color: "#667985",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.7",
              fontSize: "17px",
            }}
          >
            Create clear, professional and engaging
            product descriptions using artificial
            intelligence.
          </p>
        </div>

        {/* Main Form Card */}

        <div
          style={{
            background: "#ffffff",
            padding: "35px",
            borderRadius: "16px",
            boxShadow:
              "0 10px 30px rgba(11, 38, 56, 0.12)",
            border:
              "1px solid rgba(22, 143, 140, 0.15)",
          }}
        >
          <h2
            style={{
              color: "#0b2638",
              marginTop: 0,
              marginBottom: "25px",
            }}
          >
            Product Information
          </h2>

          {/* Product Name */}

          <label style={labelStyle}>
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            style={inputStyle}
          />

          {/* Category */}

          <label style={labelStyle}>
            Product Category
          </label>

          <input
            type="text"
            placeholder="Enter product category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            style={inputStyle}
          />

          {/* Ingredients */}

          <label style={labelStyle}>
            Key Ingredients
          </label>

          <textarea
            rows={4}
            placeholder="Enter ingredients or important features"
            value={ingredients}
            onChange={(e) =>
              setIngredients(e.target.value)
            }
            style={textareaStyle}
          />

          {/* Weight */}

          <label style={labelStyle}>
            Product Weight
          </label>

          <input
            type="text"
            placeholder="Example: 500 g"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
            style={inputStyle}
          />

          {/* Tone */}

          <label style={labelStyle}>
            Description Tone
          </label>

          <select
            value={tone}
            onChange={(e) =>
              setTone(e.target.value)
            }
            style={inputStyle}
          >
            <option>Professional</option>
            <option>Marketing</option>
            <option>Casually</option>
            <option>Premium</option>
            <option>Traditional</option>
          </select>

          {/* Generate Button */}

          <button
            onClick={handleGenerate}
            disabled={loading}
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "10px",
              background: loading
                ? "#79bdbb"
                : "#168f8c",
              color: "#ffffff",
              border: "none",
              borderRadius: "9px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: loading
                ? "not-allowed"
                : "pointer",
            }}
          >
            {loading
              ? "Generating Description..."
              : "Generate Description"}
          </button>
        </div>

        {/* Loading */}

        {loading && (
          <div
            style={{
              background: "#ffffff",
              marginTop: "25px",
              padding: "25px",
              borderRadius: "14px",
              textAlign: "center",
              boxShadow:
                "0 6px 20px rgba(11, 38, 56, 0.08)",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                margin: "0 auto 15px",
                border:
                  "5px solid #dce7e6",
                borderTop:
                  "5px solid #168f8c",
                borderRadius: "50%",
                animation:
                  "spin 1s linear infinite",
              }}
            />

            <p
              style={{
                color: "#667985",
                margin: 0,
              }}
            >
              AI is creating your product
              description...
            </p>
          </div>
        )}

        {/* Generated Output */}

        {!loading && description && (
          <div
            style={{
              background: "#ffffff",
              marginTop: "30px",
              padding: "30px",
              borderRadius: "16px",
              boxShadow:
                "0 10px 30px rgba(11, 38, 56, 0.12)",
              border:
                "1px solid rgba(22, 143, 140, 0.18)",
              borderTop:
                "5px solid #168f8c",
            }}
          >
            {/* Output Heading */}

            <div
              style={{
                display: "flex",
                justifyContent:
                  "space-between",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
                marginBottom: "20px",
              }}
            >
              <div>
                <h2
                  style={{
                    color: "#0b2638",
                    margin:
                      "0 0 6px 0",
                    fontSize: "25px",
                  }}
                >
                  AI Generated Description
                </h2>

                <p
                  style={{
                    color: "#667985",
                    margin: 0,
                    fontSize: "14px",
                  }}
                >
                  Review and edit the description
                  before copying it.
                </p>
              </div>

              <span
                style={{
                  background: "#e4f6f4",
                  color: "#168f8c",
                  padding: "7px 12px",
                  borderRadius: "20px",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                AI Generated
              </span>
            </div>

            {/* Product Name Display */}

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "16px",
                padding: "12px 15px",
                background: "#eef8f7",
                borderRadius: "9px",
                border:
                  "1px solid #d5ebe8",
              }}
            >
              <span
                style={{
                  color: "#667985",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                Product:
              </span>

              <span
                style={{
                  color: "#168f8c",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                {name}
              </span>
            </div>

            {/* Editable Description */}

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows={11}
              style={{
                width: "100%",
                padding: "18px",
                background: "#f4fbfa",
                border:
                  "1px solid #c9e4e1",
                borderRadius: "10px",
                color: "#243b4a",
                fontSize: "16px",
                lineHeight: "1.8",
                outline: "none",
                resize: "vertical",
                boxSizing: "border-box",
              }}
            />

            {/* Action Buttons */}

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "22px",
              }}
            >
              <button
                onClick={handleCopy}
                style={{
                  ...actionButton,
                  background: "#168f8c",
                }}
              >
                Copy Description
              </button>

              <button
                onClick={handleGenerate}
                disabled={loading}
                style={{
                  ...actionButton,
                  background: "#173d52",
                }}
              >
                Regenerate
              </button>

              <button
                onClick={handleClear}
                style={{
                  ...actionButton,
                  background: "#d9534f",
                }}
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 600px) {
            .generator-page {
              padding: 30px 12px !important;
            }
          }
        `}
      </style>
    </div>
  );
}

const labelStyle = {
  color: "#173042",
  fontWeight: "bold",
  display: "block",
  marginBottom: "8px",
};

const inputStyle = {
  width: "100%",
  padding: "13px 14px",
  marginBottom: "18px",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  color: "#173042",
  fontSize: "16px",
  outline: "none",
  boxSizing: "border-box" as const,
};

const textareaStyle = {
  width: "100%",
  padding: "13px 14px",
  marginBottom: "18px",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  color: "#173042",
  fontSize: "16px",
  outline: "none",
  resize: "vertical" as const,
  boxSizing: "border-box" as const,
};

const actionButton = {
  flex: 1,
  minWidth: "160px",
  padding: "13px 18px",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  fontWeight: "bold" as const,
  cursor: "pointer",
};

export default GenerateDescription;