/**
 * Button Component
 *
 * Props:
 * text - Button label
 * variant - primary | secondary
 * onClick - Click handler
 */

type ButtonProps = {
  text: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

function Button({ text, variant = "primary", onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 20px",
        background: variant === "primary" ? "#2563eb" : "#6b7280",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      {text}
    </button>
  );
}

export default Button;