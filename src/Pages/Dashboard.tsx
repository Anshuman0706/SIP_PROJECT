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
      <h1>Dashboard</h1>

      <Toast message="Welcome to Dashboard!" type="success" />

      <br />
      <br />

      {user && (
        <>
          <h3>User Details</h3>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>

          <button onClick={logout}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default Dashboard;