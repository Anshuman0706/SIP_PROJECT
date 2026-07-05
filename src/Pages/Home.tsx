import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import { Button, Input } from "../components/ui";

function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSubmit = async () => {
    if (!name || !category || !price) {
      alert("Please fill all fields");
      return;
    }

    try {
      if (editingId) {
        await axios.put(`http://localhost:5000/api/products/${editingId}`, {
          name,
          category,
          price: Number(price),
        });
        alert("Product updated successfully");
      } else {
        await axios.post("http://localhost:5000/api/products", {
          name,
          category,
          price: Number(price),
        });
        alert("Product added successfully");
      }

      setName("");
      setCategory("");
      setPrice("");
      setEditingId(null);
      fetchProducts();
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  const handleEdit = (product: any) => {
    setName(product.name);
    setCategory(product.category);
    setPrice(product.price.toString());
    setEditingId(product._id);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      alert("Product deleted successfully");
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      <Hero />

      <div style={{ padding: "20px" }}>
        <h2>Product CRUD Manager</h2>

        <div style={{ maxWidth: "400px", marginBottom: "20px" }}>
          <div style={{ marginBottom: "10px" }}>
            <Input
              placeholder="Enter product name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <Input
              placeholder="Enter category"
              value={category}
              onChange={(e: any) => setCategory(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <Input
              placeholder="Enter price"
              value={price}
              onChange={(e: any) => setPrice(e.target.value)}
            />
          </div>

          <Button
            text={editingId ? "Update Product" : "Add Product"}
            onClick={handleSubmit}
          />
        </div>

        <h2>Products from Backend</h2>

        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "12px",
                borderRadius: "8px",
              }}
            >
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price}</p>

              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => handleEdit(product)}>Edit</button>
                <button onClick={() => handleDelete(product._id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Home;