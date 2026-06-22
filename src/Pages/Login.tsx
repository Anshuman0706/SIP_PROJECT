import { Modal } from "../components/ui";

function Login() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Login Page</h1>

      <p>This is the Login page.</p>

      <Modal
        isOpen={true}
        title="Login"
        onClose={() => alert("Modal Closed")}
      >
        <p>Enter your login details here.</p>
      </Modal>
    </div>
  );
}

export default Login;