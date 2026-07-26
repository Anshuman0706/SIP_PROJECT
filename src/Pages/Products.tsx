import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Products() {
  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [keyword, setKeyword] = useState("");

  const [editId, setEditId] = useState("");

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);
    } catch {
      toast.error("Failed to fetch products");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProduct = async () => {
    try {
      if (keyword.trim() === "") {
        fetchProducts();
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/api/products/search?keyword=${keyword}`
      );

      setProducts(res.data);
    } catch {
      toast.error("Search failed");
    }
  };

  const addProduct = async () => {
    if (!name || !category || !price) {
      toast.warning("Fill all fields");
      return;
    }

    try {
      await axios.post(
        "http://localhost:5000/api/products",
        {
          name,
          category,
          price,
        }
      );

      toast.success("Product Added");

      setName("");
      setCategory("");
      setPrice("");

      fetchProducts();
    } catch {
      toast.error("Failed to add product");
    }
  };

  const updateProduct = async () => {
    try {
      await axios.put(
        `http://localhost:5000/api/products/${editId}`,
        {
          name,
          category,
          price,
        }
      );

      toast.success("Product Updated");

      setEditId("");
      setName("");
      setCategory("");
      setPrice("");

      fetchProducts();
    } catch {
      toast.error("Failed to update");
    }
  };

  const deleteProduct = async (id: string) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await axios.delete(
        `http://localhost:5000/api/products/${id}`
      );

      toast.success("Product Deleted");

      fetchProducts();
    } catch {
      toast.error("Delete failed");
    }
  };

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1976d2",
        }}
      >
        Product Management
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "gray",
        }}
      >
        Total Products : {products.length}
      </p>

      <input
        placeholder="Search Product..."
        value={keyword}
        onChange={(e) =>
          setKeyword(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "10px",
        }}
      />

      <button
        onClick={searchProduct}
        style={{
          width: "100%",
          padding: "12px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      <hr />

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px",
        }}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "10px",
          borderRadius: "8px",
        }}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) =>
          setPrice(e.target.value)
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom: "15px",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={editId ? updateProduct : addProduct}
        style={{
          width: "100%",
          padding: "14px",
          background: editId ? "#ff9800" : "#4caf50",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        {editId ? "Update Product" : "Add Product"}
      </button>

      <hr />

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(280px,1fr))",
          gap: "20px",
        }}
      >
        {products.map((product: any) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "12px",
              padding: "20px",
              boxShadow:
                "0 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            <h2>{product.name}</h2>

            <p>
              <b>Category:</b> {product.category}
            </p>

            <p>
              <b>Price:</b> ₹{product.price}
            </p>

            <button
              onClick={() => {
                setEditId(product._id);
                setName(product.name);
                setCategory(product.category);
                setPrice(product.price);
              }}
              style={{
                background: "#2196f3",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Edit
            </button>

            <button
              onClick={() =>
                deleteProduct(product._id)
              }
              style={{
                marginLeft: "10px",
                background: "#f44336",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;