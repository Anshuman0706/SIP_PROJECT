import { useState } from "react";
import { toast } from "react-toastify";
import { forgotPassword } from "../api/auth";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    if (!email) {
      toast.warning("Please enter your email");
      return;
    }

    try {
      const res = await forgotPassword(email);

      toast.success(res.data.message);

      setEmail("");
    } catch (err: any) {
      toast.error(
        err.response?.data?.message ||
          "Failed to send reset link"
      );
    }
  };

  return (
    <div
      style={{
        maxWidth: "450px",
        margin: "60px auto",
        padding: "30px",
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#1976d2",
        }}
      >
        Forgot Password
      </h1>

      <p
        style={{
          textAlign: "center",
          color: "gray",
          marginBottom: "25px",
        }}
      >
        Enter your registered email to receive a password reset link.
      </p>

      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          marginBottom: "20px",
          boxSizing: "border-box",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          width: "100%",
          padding: "12px",
          background: "#1976d2",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "16px",
        }}
      >
        Send Reset Link
      </button>
    </div>
  );
}

export default ForgotPassword;