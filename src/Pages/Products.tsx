import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  const [products, setProducts] = useState([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const fetchProducts = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/products"
    );

    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = async () => {
    if (!name || !category || !price) {
      alert("Fill all fields");
      return;
    }

    await axios.post(
      "http://localhost:5000/api/products",
      {
        name,
        category,
        price,
      }
    );

    setName("");
    setCategory("");
    setPrice("");

    fetchProducts();
  };

  const deleteProduct = async (id: string) => {
    await axios.delete(
      `http://localhost:5000/api/products/${id}`
    );

    fetchProducts();
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Product Management</h1>

      <input
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <br />
      <br />

      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addProduct}>
        Add Product
      </button>

      <hr />

      {products.map((product: any) => (
        <div
          key={product._id}
          style={{
            border: "1px solid gray",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px",
          }}
        >
          <h3>{product.name}</h3>

          <p>
            Category: {product.category}
          </p>

          <p>
            Price: ₹{product.price}
          </p>

          <button
            onClick={() => deleteProduct(product._id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;