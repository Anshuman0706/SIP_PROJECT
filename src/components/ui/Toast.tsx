/**
 * Toast Component
 *
 * Props:
 * message
 * type
 */

type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning";
};

function Toast({ message, type = "success" }: ToastProps) {
  const color =
    type === "success"
      ? "green"
      : type === "error"
      ? "red"
      : "orange";

  return (
    <div
      style={{
        background: color,
        color: "white",
        padding: "10px",
        borderRadius: "6px",
        width: "220px",
      }}
    >
      {message}
    </div>
  );
}

export default Toast;