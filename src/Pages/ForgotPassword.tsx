import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { forgotPassword } from "../api/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email.trim()) {
      toast.warning("Please enter your email address");
      return;
    }

    try {
      setLoading(true);

      const res = await forgotPassword(email);

      toast.success(
        res.data.message ||
          "Password reset link sent successfully"
      );

      setEmail("");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Failed to send reset link"
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
            "1px solid rgba(22, 143, 140, 0.15)",
          boxShadow:
            "0 12px 35px rgba(11, 38, 56, 0.12)",
        }}
      >
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
              fontSize: "32px",
            }}
          >
            Forgot Password?
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667985",
              lineHeight: "1.6",
            }}
          >
            Enter your registered email address.
            We will send you a password reset link.
          </p>
        </div>

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
          placeholder="Enter your registered email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit();
            }
          }}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
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
            ? "Sending Reset Link..."
            : "Send Reset Link"}
        </button>

        <p
          style={{
            margin: "25px 0 0",
            textAlign: "center",
            color: "#667985",
          }}
        >
          Remember your password?{" "}

          <Link
            to="/login"
            style={{
              color: "#168f8c",
              textDecoration: "none",
              fontWeight: "700",
            }}
          >
            Back to Login
          </Link>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginBottom: "22px",
  color: "#173042",
  background: "#ffffff",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box" as const,
};

export default ForgotPassword;