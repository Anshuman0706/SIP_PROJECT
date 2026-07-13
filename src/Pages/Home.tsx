import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  const searchProducts = async () => {
    if (search.trim() === "") {
      fetchProducts();
      return;
    }

    const res = await axios.get(
      `http://localhost:5000/api/products/search?keyword=${search}`
    );

    setProducts(res.data);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={searchProducts}>Search</button>

      <hr />

      {products.map((product: any) => (
        <div
          key={product._id}
          style={{
            border: "1px solid #ccc",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;