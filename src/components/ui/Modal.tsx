/**
 * Modal Component
 *
 * Props:
 * isOpen
 * title
 * children
 * onClose
 */

type ModalProps = {
  isOpen: boolean;
  title: string;
  children: React.ReactNode;
  onClose: () => void;
};

function Modal({ isOpen, title, children, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          width: "300px",
        }}
      >
        <h3>{title}</h3>

        {children}

        <br />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;