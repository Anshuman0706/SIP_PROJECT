import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logged Out Successfully");

    navigate("/login");
  };

  return (
    <div
      style={{
        maxWidth: "850px",
        margin: "40px auto",
        padding: "30px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "30px",
          color: "#1976d2",
        }}
      >
        My Profile
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "30px",
          borderRadius: "12px",
          boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <img
          src="https://ui-avatars.com/api/?name=User&background=1976d2&color=fff&size=150"
          alt="Profile"
          style={{
            borderRadius: "50%",
            marginBottom: "20px",
          }}
        />

        <h2>User</h2>

        <p
          style={{
            color: "gray",
            marginBottom: "25px",
          }}
        >
          Welcome to DescAI
        </p>

        <hr />

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginTop: "30px",
            gap: "20px",
          }}
        >
          <div>
            <h3>Account Status</h3>
            <p
              style={{
                color: "green",
                fontWeight: "bold",
              }}
            >
              Active
            </p>
          </div>

          <div>
            <h3>Authentication</h3>
            <p>
              {token ? "JWT Secured" : "Not Logged In"}
            </p>
          </div>

          <div>
            <h3>Role</h3>
            <p>User</p>
          </div>
        </div>

        <hr style={{ margin: "30px 0" }} />

        <h2>Project Features</h2>

        <ul
          style={{
            textAlign: "left",
            lineHeight: "35px",
            maxWidth: "500px",
            margin: "20px auto",
          }}
        >
          <li>JWT Authentication</li>
          <li>Google OAuth Login</li>
          <li>Forgot Password</li>
          <li>Product CRUD</li>
          <li>Product Search</li>
          <li>AI Description Generator</li>
          <li>Responsive UI</li>
        </ul>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "25px",
            padding: "12px 25px",
            background: "#355ee5",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;