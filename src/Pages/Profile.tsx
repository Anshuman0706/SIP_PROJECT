import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Profile() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("User");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    // Agar user login nahi hai
    if (!token) {
      navigate("/login");
      return;
    }

    // LocalStorage se user details lena
    if (user) {
      try {
        const parsedUser = JSON.parse(user);

        setUserName(parsedUser.name || "User");
        setUserEmail(parsedUser.email || "");
      } catch {
        setUserName("User");
        setUserEmail("");
      }
    }
  }, [navigate]);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    toast.success("Logged out successfully");

    navigate("/login");
  };

  // Change password page
  const handleChangePassword = () => {
    navigate("/forgot-password");
  };

  // User name ka first letter
  const userInitial = userName
    ? userName.charAt(0).toUpperCase()
    : "U";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#eef8f7",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "950px",
          margin: "0 auto",
        }}
      >
        {/* Page Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          <h1
            style={{
              color: "#0b2638",
              fontSize: "42px",
              margin: "0 0 10px",
            }}
          >
            My Profile
          </h1>

          <p
            style={{
              color: "#667985",
              fontSize: "17px",
              margin: 0,
            }}
          >
            Manage your account information and security
          </p>
        </div>

        {/* Main Profile Card */}

        <div
          style={{
            background: "#ffffff",
            borderRadius: "18px",
            overflow: "hidden",
            boxShadow:
              "0 10px 30px rgba(11, 38, 56, 0.12)",
          }}
        >
          {/* Profile Header */}

          <div
            style={{
              background:
                "linear-gradient(135deg, #0b2638, #173d52)",
              padding: "45px 25px",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            {/* User Avatar */}

            <div
              style={{
                width: "115px",
                height: "115px",
                margin: "0 auto 18px",
                borderRadius: "50%",
                background: "#168f8c",
                border: "5px solid #25b8b5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "48px",
                fontWeight: "bold",
                color: "#ffffff",
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.25)",
              }}
            >
              {userInitial}
            </div>

            <h2
              style={{
                margin: "0 0 8px",
                fontSize: "30px",
              }}
            >
              {userName}
            </h2>

            <p
              style={{
                margin: 0,
                color: "#dce7e6",
                fontSize: "17px",
                wordBreak: "break-word",
              }}
            >
              {userEmail || "Email not available"}
            </p>
          </div>

          {/* Profile Details */}

          <div
            style={{
              padding: "40px",
            }}
          >
            <h2
              style={{
                color: "#0b2638",
                margin: "0 0 25px",
              }}
            >
              Account Information
            </h2>

            {/* Full Name */}

            <div
              style={{
                padding: "20px",
                marginBottom: "18px",
                background: "#f7fcfb",
                border: "1px solid #dce7e6",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  margin: "0 0 7px",
                  color: "#667985",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                FULL NAME
              </p>

              <h3
                style={{
                  margin: 0,
                  color: "#173042",
                  fontSize: "20px",
                }}
              >
                {userName}
              </h3>
            </div>

            {/* Email */}

            <div
              style={{
                padding: "20px",
                marginBottom: "18px",
                background: "#f7fcfb",
                border: "1px solid #dce7e6",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  margin: "0 0 7px",
                  color: "#667985",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                EMAIL ADDRESS
              </p>

              <h3
                style={{
                  margin: 0,
                  color: "#173042",
                  fontSize: "20px",
                  wordBreak: "break-word",
                }}
              >
                {userEmail || "Email not available"}
              </h3>
            </div>

            {/* Password */}

            <div
              style={{
                padding: "20px",
                marginBottom: "35px",
                background: "#f7fcfb",
                border: "1px solid #dce7e6",
                borderRadius: "12px",
              }}
            >
              <p
                style={{
                  margin: "0 0 7px",
                  color: "#667985",
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                PASSWORD
              </p>

              <h3
                style={{
                  margin: "0 0 10px",
                  color: "#173042",
                  fontSize: "22px",
                  letterSpacing: "4px",
                }}
              >
                ••••••••
              </h3>

              <p
                style={{
                  margin: "0 0 18px",
                  color: "#667985",
                  fontSize: "14px",
                }}
              >
                Your password is securely protected.
              </p>

              <button
                onClick={handleChangePassword}
                style={{
                  padding: "11px 22px",
                  background: "#168f8c",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "15px",
                  fontWeight: "bold",
                }}
              >
                Change Password
              </button>
            </div>

            {/* Account Status */}

            <h2
              style={{
                color: "#0b2638",
                margin: "0 0 20px",
              }}
            >
              Account Status
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(180px, 1fr))",
                gap: "18px",
              }}
            >
              {/* Account */}

              <div
                style={{
                  padding: "22px",
                  background: "#eef8f7",
                  border:
                    "1px solid rgba(22, 143, 140, 0.2)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#0b2638",
                  }}
                >
                  Account
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#198754",
                    fontWeight: "bold",
                  }}
                >
                  Active
                </p>
              </div>

              {/* Security */}

              <div
                style={{
                  padding: "22px",
                  background: "#eef8f7",
                  border:
                    "1px solid rgba(22, 143, 140, 0.2)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#0b2638",
                  }}
                >
                  Security
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#168f8c",
                    fontWeight: "bold",
                  }}
                >
                  JWT Protected
                </p>
              </div>

              {/* Role */}

              <div
                style={{
                  padding: "22px",
                  background: "#eef8f7",
                  border:
                    "1px solid rgba(22, 143, 140, 0.2)",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    margin: "0 0 10px",
                    color: "#0b2638",
                  }}
                >
                  Role
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#173042",
                    fontWeight: "bold",
                  }}
                >
                  User
                </p>
              </div>
            </div>

            {/* Logout */}

            <div
              style={{
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              <button
                onClick={handleLogout}
                style={{
                  padding: "14px 42px",
                  background: "#0b2638",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "9px",
                  cursor: "pointer",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;