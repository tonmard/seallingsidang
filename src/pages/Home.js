import React from "react";
import Hero from "../components/Hero";
import Berita from "../components/Berita";
import Fitur from "../components/Fitur";
import Peringatan from "../components/Peringatan";

const Home = () => {
  return (
    <div className="animated">
      <Hero />
      <Berita />
      <Fitur />
    </div>
  );
};

export default Home;
