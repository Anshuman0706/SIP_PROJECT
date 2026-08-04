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

  const [errorMessage, setErrorMessage] =
    useState("");

  const handleGenerate = async () => {
    const token = localStorage.getItem("token");

    setErrorMessage("");

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

      setErrorMessage("");

      toast.success(
        "Description generated successfully"
      );
    } catch (error: any) {
      const status = error.response?.status;

      let friendlyMessage =
        "Unable to generate the description right now. Please try again later.";

      if (status === 429) {
        friendlyMessage =
          "AI service limit reached. Please try again later.";
      }

      setErrorMessage(
        friendlyMessage
      );

      toast.error(
        "Description could not be generated.",
        {
          autoClose: 3000,
        }
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

    setErrorMessage("");

    toast.info(
      "Generated description cleared"
    );
  };

  return (
    <div className="generator-page">
      <div className="generator-wrapper">

        {/* Page Heading */}

        <div className="generator-heading">
          <h1>
            AI Product Description Generator
          </h1>

          <p>
            Create clear, professional and
            engaging product descriptions
            using artificial intelligence.
          </p>
        </div>

        {/* Error Message */}

        {errorMessage && (
          <div className="generator-error">
            <span className="error-title">
              Unable to Generate
            </span>

            <span>
              {errorMessage}
            </span>
          </div>
        )}

        {/* Main Card */}

        <div className="generator-card">
          <h2>
            Product Information
          </h2>

          {/* Product Name */}

          <label>
            Product Name
          </label>

          <input
            type="text"
            placeholder="Enter product name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          {/* Category */}

          <label>
            Product Category
          </label>

          <input
            type="text"
            placeholder="Enter product category"
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
          />

          {/* Ingredients */}

          <label>
            Key Ingredients
          </label>

          <textarea
            rows={4}
            placeholder="Enter ingredients or important features"
            value={ingredients}
            onChange={(e) =>
              setIngredients(
                e.target.value
              )
            }
          />

          {/* Weight */}

          <label>
            Product Weight
          </label>

          <input
            type="text"
            placeholder="Example: 500 g"
            value={weight}
            onChange={(e) =>
              setWeight(e.target.value)
            }
          />

          {/* Tone */}

          <label>
            Description Tone
          </label>

          <select
            value={tone}
            onChange={(e) =>
              setTone(e.target.value)
            }
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
              casualy
            </option>

            <option>
              Premium
            </option>
          </select>

          {/* Generate Button */}

          <button
            className="generate-button"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading
              ? "Generating Description..."
              : "Generate Description"}
          </button>
        </div>

        {/* Loading */}

        {loading && (
          <div className="loading-card">
            <div className="spinner" />

            <p>
              AI is creating your product
              description...
            </p>
          </div>
        )}

        {/* Generated Output */}

        {!loading && description && (
          <div className="output-card">
            <h2>
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
              className="output-textarea"
            />

            <p className="character-count">
              Characters:{" "}
              {description.length}
            </p>

            <div className="output-actions">

              <button
                className="action-button copy-button"
                onClick={handleCopy}
              >
                Copy Description
              </button>

              <button
                className="action-button regenerate-button"
                onClick={handleGenerate}
              >
                Regenerate
              </button>

              <button
                className="action-button clear-button"
                onClick={handleClear}
              >
                Clear
              </button>

            </div>
          </div>
        )}

      </div>

      <style>
        {`

          * {
            box-sizing: border-box;
          }

          .generator-page {
            min-height: 100vh;
            background: #eef8f7;
            padding: 50px 20px;
          }

          .generator-wrapper {
            width: 100%;
            max-width: 1050px;
            margin: 0 auto;
          }

          .generator-heading {
            text-align: center;
            margin-bottom: 35px;
          }

          .generator-heading h1 {
            margin: 0 0 12px;
            color: #0b2638;
            font-size: 38px;
          }

          .generator-heading p {
            max-width: 700px;
            margin: 0 auto;
            color: #667985;
            font-size: 17px;
            line-height: 1.7;
          }

          /* Small Error Box */

          .generator-error {
            width: 100%;
            max-width: 720px;
            margin: 0 auto 22px;
            padding: 13px 16px;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            gap: 7px;

            color: #7b2c2a;
            background: #fff4f3;

            border: 1px solid #efc1be;
            border-radius: 10px;

            font-size: 14px;
            font-weight: 600;
            line-height: 1.45;

            text-align: center;

            overflow-wrap: anywhere;
          }

          .error-title {
            color: #b63d38;
            font-weight: 800;
          }

          /* Main Card */

          .generator-card,
          .output-card {
            width: 100%;

            background: #ffffff;

            padding: 35px;

            border: 1px solid
              rgba(22, 143, 140, 0.15);

            border-radius: 16px;

            box-shadow:
              0 10px 30px
              rgba(11, 38, 56, 0.12);
          }

          .generator-card h2,
          .output-card h2 {
            margin-top: 0;
            margin-bottom: 25px;
            color: #0b2638;
          }

          .generator-card label {
            display: block;

            margin-bottom: 8px;

            color: #173042;

            font-weight: 700;
          }

          .generator-card input,
          .generator-card textarea,
          .generator-card select,
          .output-textarea {
            width: 100%;

            padding: 13px 14px;

            margin-bottom: 18px;

            color: #173042;

            background: #ffffff;

            border:
              1px solid #cbdcda;

            border-radius: 8px;

            outline: none;

            font-size: 16px;

            font-family: inherit;
          }

          .generator-card textarea,
          .output-textarea {
            resize: vertical;
          }

          .generator-card input:focus,
          .generator-card textarea:focus,
          .generator-card select:focus,
          .output-textarea:focus {
            border-color: #168f8c;

            box-shadow:
              0 0 0 3px
              rgba(22, 143, 140, 0.12);
          }

          .generate-button {
            width: 100%;

            margin-top: 10px;

            padding: 15px;

            color: #ffffff;

            background: #168f8c;

            border: none;

            border-radius: 9px;

            font-size: 17px;

            font-weight: 800;

            cursor: pointer;
          }

          .generate-button:disabled {
            background: #79bdbb;
            cursor: not-allowed;
          }

          /* Loading */

          .loading-card {
            margin-top: 25px;

            padding: 25px;

            background: #ffffff;

            border-radius: 14px;

            text-align: center;

            box-shadow:
              0 6px 20px
              rgba(11, 38, 56, 0.08);
          }

          .spinner {
            width: 42px;
            height: 42px;

            margin:
              0 auto 15px;

            border:
              5px solid #dce7e6;

            border-top:
              5px solid #168f8c;

            border-radius: 50%;

            animation:
              spin 1s linear infinite;
          }

          .loading-card p {
            margin: 0;
            color: #667985;
          }

          /* Output */

          .output-card {
            margin-top: 30px;
          }

          .output-textarea {
            background: #f7fcfb;
            line-height: 1.7;
          }

          .character-count {
            margin-top: 5px;

            color: #667985;

            text-align: right;
          }

          .output-actions {
            display: flex;

            flex-wrap: wrap;

            gap: 12px;

            margin-top: 20px;
          }

          .action-button {
            flex: 1;

            min-width: 170px;

            padding: 13px 18px;

            color: #ffffff;

            border: none;

            border-radius: 8px;

            font-size: 16px;

            font-weight: 700;

            cursor: pointer;
          }

          .copy-button {
            background: #168f8c;
          }

          .regenerate-button {
            background: #0b2638;
          }

          .clear-button {
            background: #d9534f;
          }

          @keyframes spin {
            from {
              transform:
                rotate(0deg);
            }

            to {
              transform:
                rotate(360deg);
            }
          }

          /* Mobile */

          @media (max-width: 600px) {

            .generator-page {
              padding:
                30px 12px;
            }

            .generator-heading {
              margin-bottom:
                25px;
            }

            .generator-heading h1 {
              font-size:
                28px;

              line-height:
                1.25;
            }

            .generator-heading p {
              font-size:
                15px;
            }

            .generator-error {
              padding:
                11px 12px;

              margin-bottom:
                18px;

              font-size:
                13px;

              line-height:
                1.4;
            }

            .generator-card,
            .output-card {
              padding:
                20px 15px;

              border-radius:
                12px;
            }

            .generator-card h2,
            .output-card h2 {
              font-size:
                22px;
            }

            .generator-card input,
            .generator-card textarea,
            .generator-card select,
            .output-textarea {
              font-size:
                15px;
            }

            .output-actions {
              flex-direction:
                column;
            }

            .action-button {
              width: 100%;

              min-width: 0;
            }
          }

        `}
      </style>
    </div>
  );
}

export default GenerateDescription;