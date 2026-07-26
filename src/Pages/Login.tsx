import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, googleLogin } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleLogin = async () => {
    if (!email || !password) {
      toast.warning("Please enter email and password");
      return;
    }

    try {
      const res = await loginUser({
        email,
        password,
      });

      // Save JWT Token
      localStorage.setItem("token", res.data.token);

      // Save User Details
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login Successful!");

      navigate("/dashboard");
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Login Failed"
      );
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        maxWidth: "400px",
        margin: "50px auto",
        textAlign: "center",
        border: "1px solid #ddd",
        borderRadius: "12px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        background: "#fff",
      }}
    >
      <h1
        style={{
          color: "#1976d2",
          marginBottom: "25px",
        }}
      >
        Login
      </h1>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={inputStyle}
      />

      <div
        style={{
          display: "flex",
          marginBottom: "10px",
        }}
      >
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            ...inputStyle,
            marginBottom: 0,
            flex: 1,
          }}
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            marginLeft: "8px",
            padding: "12px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>

      <div
        style={{
          textAlign: "right",
          marginBottom: "20px",
        }}
      >
        <Link
          to="/forgot-password"
          style={{
            textDecoration: "none",
            color: "#1976d2",
          }}
        >
          Forgot Password?
        </Link>
      </div>

      <button
        onClick={handleLogin}
        style={buttonStyle}
      >
        Login
      </button>

      <br />
      <br />

      <button
        onClick={googleLogin}
        style={{
          ...buttonStyle,
          background: "#db4437",
        }}
      >
        Continue with Google
      </button>

      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link
          to="/register"
          style={{
            color: "#1976d2",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Register
        </Link>
      </p>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  boxSizing: "border-box" as const,
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  background: "#1976d2",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  fontSize: "16px",
};

export default Login;