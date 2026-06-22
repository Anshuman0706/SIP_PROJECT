/**
 * Loader Component
 *
 * Props:
 * size
 */

type LoaderProps = {
  size?: number;
};

function Loader({ size = 40 }: LoaderProps) {
  return (
    <div
      style={{
        width: size,
        height: size,
        border: "5px solid lightgray",
        borderTop: "5px solid blue",
        borderRadius: "50%",
        animation: "spin 1s linear infinite",
      }}
    />
  );
}

export default Loader;