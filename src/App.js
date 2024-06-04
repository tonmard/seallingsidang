import React from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Berita from "./components/Berita";
import Fitur from "./components/Fitur";
import Peringatan from "./components/Peringatan";

function App() {
  return (
    <div className="scroll-smooth">
      <Navbar />
      <Hero />
      <Berita />
      <Peringatan />
      <Fitur />
      <Footer />
    </div>
  );
}

export default App;
