import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "../components/ui";
import { getProfile } from "../api/auth";

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await getProfile(token);
        setUser(res.data.user);
      } catch (error) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };

    fetchProfile();
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={{ padding: "30px" }}>
      <Toast message="Login Successful!" type="success" />

      <h1>Dashboard</h1>

      {user ? (
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            width: "350px",
            marginTop: "20px",
          }}
        >
          <h2>Welcome 👋</h2>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>User ID:</strong> {user._id}
          </p>

          <br />

          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
}

export default Dashboard;