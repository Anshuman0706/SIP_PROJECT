import Hero from "../components/Hero";
import { Button, Input, Loader } from "../components/ui";

function Home() {
  return (
    <>
      <Hero />

      <div style={{ padding: "20px" }}>
        <h2>AI Product Description Generator</h2>

        <Input placeholder="Enter Product Name" />

        <br />
        <br />

        <Button text="Generate Description" />

        <br />
        <br />

        <Loader />

        <br />
        <br />

        <div>
          <h2>Card 1</h2>
          <p>Card Content</p>
        </div>

        <div>
          <h2>Card 2</h2>
          <p>Card Content</p>
        </div>
      </div>
    </>
  );
}

export default Home;