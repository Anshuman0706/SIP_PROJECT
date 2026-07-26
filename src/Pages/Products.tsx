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
        "http://localhost:5000/api/products",
        config
      );

      setProducts(res.data);

    } catch {

      toast.error("Failed to fetch products");

    } finally {

      setLoading(false);

    }
  };


  useEffect(() => {
    fetchProducts();
  }, []);



  const searchProduct = async () => {

    try {

      if(keyword.trim()===""){
        fetchProducts();
        return;
      }

      const res = await axios.get(
        `http://localhost:5000/api/products/search?keyword=${keyword}`,
        config
      );

      setProducts(res.data);

    } catch {

      toast.error("Search failed");

    }

  };



  const addProduct = async () => {

    if(!name || !category || !price){
      toast.warning("Fill all fields");
      return;
    }


    try {

      await axios.post(
        "http://localhost:5000/api/products",
        {
          name,
          category,
          price
        },
        config
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
          price
        },
        config
      );


      toast.success("Product Updated");

      setEditId("");
      setName("");
      setCategory("");
      setPrice("");

      fetchProducts();


    } catch {

      toast.error("Update failed");

    }

  };





  const deleteProduct = async(id:string)=>{

    if(!window.confirm("Delete this product?"))
      return;


    try{

      await axios.delete(
        `http://localhost:5000/api/products/${id}`,
        config
      );


      toast.success("Product Deleted");

      fetchProducts();


    }catch{

      toast.error("Delete failed");

    }

  };



  return (

    <div
      style={{
        maxWidth:"1100px",
        margin:"30px auto",
        padding:"20px"
      }}
    >


      <h1
        style={{
          textAlign:"center",
          color:"#1976d2"
        }}
      >
        Product Management
      </h1>


      <p style={{textAlign:"center"}}>
        Total Products : {products.length}
      </p>


      {
        loading &&
        <h3 style={{textAlign:"center"}}>
          Loading...
        </h3>
      }



      <input
        placeholder="Search Product..."
        value={keyword}
        onChange={(e)=>setKeyword(e.target.value)}
        style={{
          width:"100%",
          padding:"12px",
          marginBottom:"10px"
        }}
      />


      <button
        onClick={searchProduct}
        style={{
          width:"100%",
          padding:"12px",
          background:"#1976d2",
          color:"white",
          border:"none"
        }}
      >
        Search
      </button>



      <hr/>


      <input
        placeholder="Product Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{
          width:"100%",
          padding:"12px",
          marginBottom:"10px"
        }}
      />


      <input
        placeholder="Category"
        value={category}
        onChange={(e)=>setCategory(e.target.value)}
        style={{
          width:"100%",
          padding:"12px",
          marginBottom:"10px"
        }}
      />


      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e)=>setPrice(e.target.value)}
        style={{
          width:"100%",
          padding:"12px",
          marginBottom:"10px"
        }}
      />



      <button
        onClick={editId ? updateProduct : addProduct}
        style={{
          width:"100%",
          padding:"14px",
          background:editId?"#ff9800":"#4caf50",
          color:"white",
          border:"none"
        }}
      >
        {editId?"Update Product":"Add Product"}
      </button>



      <hr/>


      {
        products.length===0 && !loading &&
        <h3 style={{textAlign:"center"}}>
          No products found
        </h3>
      }



      <div
        style={{
          display:"grid",
          gridTemplateColumns:
          "repeat(auto-fit,minmax(280px,1fr))",
          gap:"20px"
        }}
      >


      {
        products.map((product:any)=>(

          <div
            key={product._id}
            style={{
              border:"1px solid #ddd",
              padding:"20px",
              borderRadius:"12px"
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
              onClick={()=>{

                setEditId(product._id);
                setName(product.name);
                setCategory(product.category);
                setPrice(product.price);

              }}
              style={{
                background:"#2196f3",
                color:"white",
                padding:"10px",
                border:"none"
              }}
            >
              Edit
            </button>



            <button
              onClick={()=>deleteProduct(product._id)}
              style={{
                marginLeft:"10px",
                background:"#f44336",
                color:"white",
                padding:"10px",
                border:"none"
              }}
            >
              Delete
            </button>


          </div>

        ))
      }


      </div>


    </div>

  );

}


export default Products;