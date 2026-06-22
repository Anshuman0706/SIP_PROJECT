/**
 * Input Component
 *
 * Props:
 * placeholder
 * value
 * onChange
 */

type InputProps = {
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{
        padding: "10px",
        width: "250px",
        border: "1px solid gray",
        borderRadius: "6px",
      }}
    />
  );
}

export default Input;