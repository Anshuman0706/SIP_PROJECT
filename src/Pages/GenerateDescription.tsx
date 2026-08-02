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
            Create clear, professional and
            engaging product descriptions
            using artificial intelligence.
          </p>
        </div>

        {/* Main Card */}

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

          <label
            style={{
              color: "#173042",
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
            }}
          >
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

          <label
            style={{
              color: "#173042",
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
            }}
          >
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

          <label
            style={{
              color: "#173042",
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
            }}
          >
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

          <label
            style={{
              color: "#173042",
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
            }}
          >
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

          <label
            style={{
              color: "#173042",
              fontWeight: "bold",
              display: "block",
              marginBottom: "8px",
            }}
          >
            Description Tone
          </label>

          <select
            value={tone}
            onChange={(e) =>
              setTone(e.target.value)
            }
            style={inputStyle}
          >
            <option>
              Professional
            </option>

            <option>
              Marketing
            </option>

            <option>
              SEO
            </option>

            <option>
              Friendly
            </option>

            <option>
              Premium
            </option>
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
                margin:
                  "0 auto 15px",
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
              }}
            >
              Generated Description
            </h2>

            <textarea
              value={description}
              onChange={(e) =>
                setDescription(
                  e.target.value
                )
              }
              rows={12}
              style={{
                ...textareaStyle,
                background:
                  "#f7fcfb",
                lineHeight: "1.7",
              }}
            />

            <p
              style={{
                color: "#667985",
                textAlign: "right",
                marginTop: "5px",
              }}
            >
              Characters:{" "}
              {description.length}
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginTop: "20px",
              }}
            >
              <button
                onClick={handleCopy}
                style={{
                  ...actionButton,
                  background:
                    "#168f8c",
                }}
              >
                Copy Description
              </button>

              <button
                onClick={handleGenerate}
                style={{
                  ...actionButton,
                  background:
                    "#0b2638",
                }}
              >
                Regenerate
              </button>

              <button
                onClick={handleClear}
                style={{
                  ...actionButton,
                  background:
                    "#d9534f",
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
            .generator-action-button {
              width: 100%;
            }
          }
        `}
      </style>
    </div>
  );
}

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
  minWidth: "170px",
  padding: "13px 18px",
  color: "#ffffff",
  border: "none",
  borderRadius: "8px",
  fontSize: "16px",
  fontWeight: "bold" as const,
  cursor: "pointer",
};

export default GenerateDescription;