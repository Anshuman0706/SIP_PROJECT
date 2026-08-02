import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser, googleLogin } from "../api/auth";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  // If user is already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // Login function
  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      toast.warning("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await loginUser({
        email,
        password,
      });

      // Save token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Save user details
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      toast.success("Login successful");

      navigate("/dashboard");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Login failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 150px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "45px 20px",
        background:
          "linear-gradient(135deg, #eef8f7, #f7fcfb)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "430px",
          padding: "35px",
          background: "#ffffff",
          borderRadius: "16px",
          border:
            "1px solid rgba(22,143,140,0.15)",
          boxShadow:
            "0 12px 35px rgba(11,38,56,0.12)",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              margin: "0 0 10px",
              color: "#0b2638",
              fontSize: "34px",
            }}
          >
            Welcome Back
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667985",
              lineHeight: "1.6",
            }}
          >
            Login to continue using DescAI.
          </p>
        </div>

        {/* Email */}

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#173042",
            fontWeight: "600",
          }}
        >
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={inputStyle}
        />

        {/* Password */}

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#173042",
            fontWeight: "600",
          }}
        >
          Password
        </label>

        <div
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "8px",
          }}
        >
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter your password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            style={{
              ...inputStyle,
              marginBottom: 0,
            }}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            style={{
              padding: "0 14px",
              color: "#168f8c",
              background: "#eef8f7",
              border:
                "1px solid #cbdcda",
              borderRadius: "8px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {showPassword
              ? "Hide"
              : "Show"}
          </button>
        </div>

        {/* Forgot Password */}

        <div
          style={{
            textAlign: "right",
            marginBottom: "22px",
          }}
        >
          <Link
            to="/forgot-password"
            style={{
              color: "#168f8c",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
            }}
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            color: "white",
            background:
              loading
                ? "#7abfbd"
                : "#168f8c",
            border: "none",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "700",
            cursor:
              loading
                ? "not-allowed"
                : "pointer",
          }}
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>

        {/* Divider */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "25px 0",
            color: "#667985",
            fontSize: "14px",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#dce7e6",
            }}
          />

          OR

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "#dce7e6",
            }}
          />
        </div>

        {/* Google Login */}

        <button
          onClick={googleLogin}
          style={{
            width: "100%",
            padding: "13px",
            color: "#0b2638",
            background: "#ffffff",
            border:
              "1px solid #cbdcda",
            borderRadius: "8px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Continue with Google
        </button>

        {/* Register */}

        <p
          style={{
            margin:
              "25px 0 0",
            textAlign: "center",
            color: "#667985",
          }}
        >
          Don't have an account?{" "}

          <Link
            to="/register"
            style={{
              color: "#168f8c",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Create Account
          </Link>
        </p>
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
  fontSize: "15px",
  boxSizing: "border-box" as const,
  marginBottom: "18px",
};

export default Login;