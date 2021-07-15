import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import Section2 from "./Section2";
import Cards from "./Cards";
import Footer from "./Footer";
function Home() {
  return (
    <div>
      <Navbar />
      <Section />
      <Cards />
      <Section2 />
      <Footer />
    </div>
  );
}

export default Home;
