import React from "react";
import Hero from "../components/Hero";
import Berita from "../components/Berita";
import Fitur from "../components/Fitur";

const Home = () => {
  return (
    <div className="animated">
      <Hero />
      <Fitur />
      <Berita />
    </div>
  );
};

export default Home;
