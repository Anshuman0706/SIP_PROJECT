import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Profile Page</h1>

      <p>This page is protected.</p>

      <p>Only logged-in users can access it.</p>
    </div>
  );
}

export default Profile;