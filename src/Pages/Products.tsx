import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function Products() {
  const API_URL =
    "https://descai-backend.onrender.com";

  const [products, setProducts] = useState<any[]>([]);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const [keyword, setKeyword] = useState("");
  const [editId, setEditId] = useState("");

  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/products`,
        config
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to fetch products"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchProduct = async () => {
    if (keyword.trim() === "") {
      fetchProducts();
      return;
    }

    try {
      setLoading(true);

      const res = await axios.get(
        `${API_URL}/api/products/search?keyword=${encodeURIComponent(
          keyword
        )}`,
        config
      );

      setProducts(res.data);
    } catch (error) {
      console.log(error);

      toast.error(
        "Product search failed"
      );
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setName("");
    setCategory("");
    setPrice("");
    setEditId("");
  };

  const addProduct = async () => {
    if (
      !name.trim() ||
      !category.trim() ||
      !price
    ) {
      toast.warning(
        "Please fill all product fields"
      );

      return;
    }

    try {
      await axios.post(
        `${API_URL}/api/products`,
        {
          name,
          category,
          price,
        },
        config
      );

      toast.success(
        "Product added successfully"
      );

      clearForm();

      fetchProducts();
    } catch (error) {
      console.log(error);

      toast.error(
        "Failed to add product"
      );
    }
  };

  const updateProduct = async () => {
    if (
      !name.trim() ||
      !category.trim() ||
      !price
    ) {
      toast.warning(
        "Please fill all product fields"
      );

      return;
    }

    try {
      await axios.put(
        `${API_URL}/api/products/${editId}`,
        {
          name,
          category,
          price,
        },
        config
      );

      toast.success(
        "Product updated successfully"
      );

      clearForm();

      fetchProducts();
    } catch (error) {
      console.log(error);

      toast.error(
        "Product update failed"
      );
    }
  };

  const startEdit = (
    product: any
  ) => {
    setEditId(product._id);

    setName(product.name || "");

    setCategory(
      product.category || ""
    );

    setPrice(
      String(product.price || "")
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteProduct = async (
    id: string
  ) => {
    const confirmed =
      window.confirm(
        "Are you sure you want to delete this product?"
      );

    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(
        `${API_URL}/api/products/${id}`,
        config
      );

      toast.success(
        "Product deleted successfully"
      );

      fetchProducts();
    } catch (error) {
      console.log(error);

      toast.error(
        "Product delete failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef8f7",
        padding: "45px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "1180px",
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
          <p
            style={{
              margin: "0 0 8px",
              color: "#168f8c",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "1px",
              textTransform:
                "uppercase",
            }}
          >
            DescAI Product Center
          </p>

          <h1
            style={{
              margin: "0 0 12px",
              color: "#0b2638",
              fontSize:
                "clamp(32px, 5vw, 45px)",
            }}
          >
            Product Management
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto",
              color: "#667985",
              lineHeight: "1.7",
              fontSize: "16px",
            }}
          >
            Add, search, update, and
            manage all your products
            from one place.
          </p>
        </div>

        {/* Search Section */}

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            padding: "20px",
            background: "#ffffff",
            border:
              "1px solid #dce7e6",
            borderRadius: "15px",
            boxShadow:
              "0 7px 20px rgba(11, 38, 56, 0.08)",
            marginBottom: "25px",
          }}
        >
          <input
            type="text"
            placeholder="Search by product name..."
            value={keyword}
            onChange={(e) =>
              setKeyword(
                e.target.value
              )
            }
            onKeyDown={(e) => {
              if (
                e.key === "Enter"
              ) {
                searchProduct();
              }
            }}
            style={{
              flex: "1 1 300px",
              padding: "13px",
              color: "#173042",
              border:
                "1px solid #cbdcda",
              borderRadius: "8px",
              outline: "none",
              fontSize: "16px",
            }}
          />

          <button
            onClick={searchProduct}
            style={{
              padding:
                "13px 25px",
              color: "#ffffff",
              background:
                "#168f8c",
              border: "none",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Search
          </button>

          <button
            onClick={() => {
              setKeyword("");

              fetchProducts();
            }}
            style={{
              padding:
                "13px 25px",
              color: "#0b2638",
              background:
                "#ffffff",
              border:
                "1px solid #168f8c",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            Clear
          </button>
        </div>

        {/* Product Form */}

        <div
          style={{
            padding: "30px",
            background: "#ffffff",
            border:
              "1px solid #dce7e6",
            borderRadius: "15px",
            boxShadow:
              "0 7px 20px rgba(11, 38, 56, 0.08)",
            marginBottom: "30px",
          }}
        >
          <h2
            style={{
              margin:
                "0 0 8px",
              color:
                "#0b2638",
            }}
          >
            {editId
              ? "Update Product"
              : "Add New Product"}
          </h2>

          <p
            style={{
              margin:
                "0 0 22px",
              color:
                "#667985",
            }}
          >
            {editId
              ? "Edit the selected product details."
              : "Enter product information below."}
          </p>

          <div
            style={{
              display:
                "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(220px, 1fr))",
              gap:
                "15px",
            }}
          >
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) =>
                setName(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value
                )
              }
              style={inputStyle}
            />

            <input
              type="number"
              placeholder="Price"
              value={price}
              min="0"
              onChange={(e) =>
                setPrice(
                  e.target.value
                )
              }
              style={inputStyle}
            />
          </div>

          <div
            style={{
              display:
                "flex",
              flexWrap:
                "wrap",
              gap:
                "12px",
              marginTop:
                "18px",
            }}
          >
            <button
              onClick={
                editId
                  ? updateProduct
                  : addProduct
              }
              style={{
                padding:
                  "13px 25px",
                color:
                  "#ffffff",
                background:
                  "#168f8c",
                border:
                  "none",
                borderRadius:
                  "8px",
                fontSize:
                  "16px",
                fontWeight:
                  "700",
                cursor:
                  "pointer",
              }}
            >
              {editId
                ? "Update Product"
                : "Add Product"}
            </button>

            {editId && (
              <button
                onClick={
                  clearForm
                }
                style={{
                  padding:
                    "13px 25px",
                  color:
                    "#0b2638",
                  background:
                    "#ffffff",
                  border:
                    "1px solid #168f8c",
                  borderRadius:
                    "8px",
                  fontSize:
                    "16px",
                  fontWeight:
                    "700",
                  cursor:
                    "pointer",
                }}
              >
                Cancel Edit
              </button>
            )}
          </div>
        </div>

        {/* Product List */}

        <div
          style={{
            display:
              "flex",
            alignItems:
              "center",
            justifyContent:
              "space-between",
            flexWrap:
              "wrap",
            gap:
              "12px",
            marginBottom:
              "20px",
          }}
        >
          <div>
            <h2
              style={{
                margin:
                  "0 0 5px",
                color:
                  "#0b2638",
              }}
            >
              Your Products
            </h2>

            <p
              style={{
                margin: "0",
                color:
                  "#667985",
              }}
            >
              Total products:{" "}
              {products.length}
            </p>
          </div>
        </div>

        {loading && (
          <div
            style={{
              padding:
                "40px",
              background:
                "#ffffff",
              borderRadius:
                "14px",
              textAlign:
                "center",
              color:
                "#168f8c",
              fontWeight:
                "700",
            }}
          >
            Loading products...
          </div>
        )}

        {!loading &&
          products.length === 0 && (
            <div
              style={{
                padding:
                  "45px",
                background:
                  "#ffffff",
                border:
                  "1px solid #dce7e6",
                borderRadius:
                  "14px",
                textAlign:
                  "center",
              }}
            >
              <h3
                style={{
                  margin:
                    "0 0 10px",
                  color:
                    "#0b2638",
                }}
              >
                No products found
              </h3>

              <p
                style={{
                  margin: "0",
                  color:
                    "#667985",
                }}
              >
                Add your first product
                using the form above.
              </p>
            </div>
          )}

        {!loading &&
          products.length > 0 && (
            <div
              style={{
                display:
                  "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(260px, 1fr))",
                gap:
                  "20px",
              }}
            >
              {products.map(
                (product: any) => (
                  <div
                    key={
                      product._id
                    }
                    style={{
                      padding:
                        "25px",
                      background:
                        "#ffffff",
                      border:
                        "1px solid #dce7e6",
                      borderRadius:
                        "15px",
                      boxShadow:
                        "0 6px 18px rgba(11, 38, 56, 0.07)",
                    }}
                  >
                    <h3
                      style={{
                        margin:
                          "0 0 15px",
                        color:
                          "#0b2638",
                        fontSize:
                          "22px",
                      }}
                    >
                      {
                        product.name
                      }
                    </h3>

                    <div
                      style={{
                        padding:
                          "12px",
                        background:
                          "#f7fcfb",
                        borderRadius:
                          "8px",
                        marginBottom:
                          "10px",
                      }}
                    >
                      <span
                        style={{
                          color:
                            "#667985",
                        }}
                      >
                        Category
                      </span>

                      <p
                        style={{
                          margin:
                            "5px 0 0",
                          color:
                            "#173042",
                          fontWeight:
                            "700",
                        }}
                      >
                        {
                          product.category
                        }
                      </p>
                    </div>

                    <div
                      style={{
                        padding:
                          "12px",
                        background:
                          "#f7fcfb",
                        borderRadius:
                          "8px",
                      }}
                    >
                      <span
                        style={{
                          color:
                            "#667985",
                        }}
                      >
                        Price
                      </span>

                      <p
                        style={{
                          margin:
                            "5px 0 0",
                          color:
                            "#168f8c",
                          fontSize:
                            "20px",
                          fontWeight:
                            "800",
                        }}
                      >
                        ₹
                        {
                          product.price
                        }
                      </p>
                    </div>

                    <div
                      style={{
                        display:
                          "flex",
                        gap:
                          "10px",
                        marginTop:
                          "20px",
                      }}
                    >
                      <button
                        onClick={() =>
                          startEdit(
                            product
                          )
                        }
                        style={{
                          flex: 1,
                          padding:
                            "11px",
                          color:
                            "#ffffff",
                          background:
                            "#168f8c",
                          border:
                            "none",
                          borderRadius:
                            "8px",
                          fontWeight:
                            "700",
                          cursor:
                            "pointer",
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteProduct(
                            product._id
                          )
                        }
                        style={{
                          flex: 1,
                          padding:
                            "11px",
                          color:
                            "#ffffff",
                          background:
                            "#d9534f",
                          border:
                            "none",
                          borderRadius:
                            "8px",
                          fontWeight:
                            "700",
                          cursor:
                            "pointer",
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
          )}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px",
  color: "#173042",
  background: "#ffffff",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  outline: "none",
  fontSize: "16px",
  boxSizing: "border-box" as const,
};

export default Products;