import { useState } from "react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../api/auth";

function ResetPassword() {
  const { token } = useParams();

  const navigate = useNavigate();

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const handleReset = async () => {
    if (
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      toast.warning(
        "Please fill both password fields"
      );

      return;
    }

    if (password.length < 6) {
      toast.warning(
        "Password must contain at least 6 characters"
      );

      return;
    }

    if (password !== confirmPassword) {
      toast.error(
        "Passwords do not match"
      );

      return;
    }

    if (!token) {
      toast.error(
        "Invalid or missing reset token"
      );

      return;
    }

    try {
      setLoading(true);

      await resetPassword(
        token,
        password
      );

      toast.success(
        "Password reset successfully"
      );

      navigate("/login");
    } catch (error: any) {
      toast.error(
        error.response?.data?.message ||
          "Password reset failed"
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
            Reset Password
          </h1>

          <p
            style={{
              margin: 0,
              color: "#667985",
              lineHeight: "1.6",
            }}
          >
            Create a new password for your
            DescAI account.
          </p>
        </div>

        <label
          style={labelStyle}
        >
          New Password
        </label>

        <div
          style={passwordBoxStyle}
        >
          <input
            type={
              showPassword
                ? "text"
                : "password"
            }
            placeholder="Enter new password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            style={passwordInputStyle}
          />

          <button
            type="button"
            onClick={() =>
              setShowPassword(
                !showPassword
              )
            }
            style={showButtonStyle}
          >
            {showPassword
              ? "Hide"
              : "Show"}
          </button>
        </div>

        <label
          style={labelStyle}
        >
          Confirm New Password
        </label>

        <input
          type={
            showPassword
              ? "text"
              : "password"
          }
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) =>
            setConfirmPassword(
              e.target.value
            )
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleReset();
            }
          }}
          style={inputStyle}
        />

        <p
          style={{
            margin: "0 0 22px",
            color: "#667985",
            fontSize: "13px",
          }}
        >
          Your password must contain at least
          6 characters.
        </p>

        <button
          onClick={handleReset}
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
            ? "Resetting Password..."
            : "Reset Password"}
        </button>

        <p
          style={{
            margin: "25px 0 0",
            textAlign: "center",
            color: "#667985",
          }}
        >
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

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  color: "#173042",
  fontWeight: "600",
};

const inputStyle = {
  width: "100%",
  padding: "13px",
  marginBottom: "18px",
  color: "#173042",
  background: "#ffffff",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box" as const,
};

const passwordBoxStyle = {
  display: "flex",
  gap: "8px",
  marginBottom: "18px",
};

const passwordInputStyle = {
  width: "100%",
  padding: "13px",
  color: "#173042",
  background: "#ffffff",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  outline: "none",
  fontSize: "15px",
  boxSizing: "border-box" as const,
};

const showButtonStyle = {
  padding: "0 14px",
  color: "#168f8c",
  background: "#eef8f7",
  border: "1px solid #cbdcda",
  borderRadius: "8px",
  fontWeight: "600",
  cursor: "pointer",
};

export default ResetPassword;