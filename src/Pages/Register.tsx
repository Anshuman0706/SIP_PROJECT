import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../api/auth";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      toast.warning("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      toast.warning(
        "Password must contain at least 6 characters"
      );
      return;
    }

    try {
      setLoading(true);

      await registerUser({
        name,
        email,
        password,
      });

      toast.success(
        "Account created successfully"
      );

      navigate("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Registration failed"
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
          maxWidth: "440px",
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
            Create Account
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667985",
              lineHeight: "1.6",
            }}
          >
            Create your DescAI account and start
            generating better product descriptions.
          </p>
        </div>

        {/* Full Name */}

        <label
          style={{
            display: "block",
            marginBottom: "8px",
            color: "#173042",
            fontWeight: "600",
          }}
        >
          Full Name
        </label>

        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          style={inputStyle}
        />

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
            placeholder="Create a password"
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

        <p
          style={{
            margin:
              "0 0 22px",
            color: "#667985",
            fontSize: "13px",
          }}
        >
          Password must contain at least
          6 characters.
        </p>

        {/* Register Button */}

        <button
          onClick={handleRegister}
          disabled={loading}
          style={{
            width: "100%",
            padding: "13px",
            color: "#ffffff",
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
            ? "Creating Account..."
            : "Create Account"}
        </button>

        {/* Login Link */}

        <p
          style={{
            margin:
              "25px 0 0",
            textAlign: "center",
            color: "#667985",
          }}
        >
          Already have an account?{" "}

          <Link
            to="/login"
            style={{
              color: "#168f8c",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Login
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

export default Register;