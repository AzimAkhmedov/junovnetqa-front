import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { About, Help, Home } from "./pages";
import { Header } from "./components";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
