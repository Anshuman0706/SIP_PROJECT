import { Toast } from "../components/ui";

function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Page</h1>

      <p>This is the 1st Dashboard page.</p>

      <br />

      <Toast
        message="Welcome to Dashboard!"
        type="success"
      />
    </div>
  );
}

export default Dashboard;