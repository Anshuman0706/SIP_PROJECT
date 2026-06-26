import { useEffect, useState } from "react";
import axios from "axios";

import Hero from "../components/Hero";
import { Button, Input, Loader } from "../components/ui";

function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Hero />

      <div style={{ padding: "20px" }}>
        <h2>AI Product Description Generator</h2>

        <Input placeholder="Enter Product Name" />

        <br />
        <br />

        <Button text="Generate Description" />

        <br />
        <br />

        <Loader />

        <br />
        <br />

        <h2>Products from Backend</h2>

        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ₹{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;