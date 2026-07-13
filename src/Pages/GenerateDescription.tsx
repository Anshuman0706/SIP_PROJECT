import { useState } from "react";
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
      alert("Please login first");
      return;
    }

    if (!name || !category) {
      alert("Product Name and Category are required");
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
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Failed to generate description"
      );
    } finally {
      setLoading(false);
    }
  };

  const copyDescription = () => {
    navigator.clipboard.writeText(description);

    alert("Description copied!");
  };

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        padding: "30px",
        border: "1px solid #ddd",
        borderRadius: "12px",
      }}
    >
      <h1>AI Product Description Generator</h1>

      <br />

      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
        }}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
        }}
      />

      <br />
      <br />

      <textarea
        rows={4}
        placeholder="Ingredients"
        value={ingredients}
        onChange={(e) =>
          setIngredients(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
        }}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Weight"
        value={weight}
        onChange={(e) =>
          setWeight(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
        }}
      />

      <br />
      <br />

      <select
        value={tone}
        onChange={(e) => setTone(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
        }}
      >
        <option>Professional</option>
        <option>Marketing</option>
        <option>SEO</option>
        <option>Friendly</option>
        <option>Premium</option>
      </select>

      <br />
      <br />

      <button
        onClick={handleGenerate}
        style={{
          padding: "12px 25px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {loading
          ? "Generating..."
          : "Generate Description"}
      </button>

      <br />
      <br />

      {description && (
        <>
          <hr />

          <h2>Generated Description</h2>

          <textarea
            value={description}
            readOnly
            rows={15}
            style={{
              width: "100%",
              padding: "15px",
              marginTop: "15px",
            }}
          />

          <br />
          <br />

          <button
            onClick={copyDescription}
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Copy Description
          </button>

          <button
            onClick={() => setDescription("")}
            style={{
              marginLeft: "15px",
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
          </>
      )}
    </div>
  );
}

export default GenerateDescription;