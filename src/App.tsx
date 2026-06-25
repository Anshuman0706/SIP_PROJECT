import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
        minHeight: "100vh",
      }}
    >
      <div style={{ padding: "10px", textAlign: "right" }}>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? " Light Mode" : " Dark Mode"}
        </button>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
