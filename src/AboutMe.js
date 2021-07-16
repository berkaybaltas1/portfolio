import React from "react";
import Navbar from "./Navbar";
import "../src/css/About.css";
import Section2 from "./Section2";
import Footer from "./Footer";
function AboutMe() {
  return (
    <section>
      <Navbar />
      <div className="about-container">
        <h1 className="about-heading">About me.</h1>
        <h3>I'm a full stack developer from New York City.</h3>
        <p>
          I enjoy taking complex problems and breaking them down into simple
          steps to find a solution. Programming is one of my main passions in
          life, and I love spending my days expanding my knowledge on it. I have
          5+ years of experience in programming with languages such as
          Javascript, Python, and Java. I have experience using the MERN stack
          (MongoDB, Express, React, Node.js). I am also familiar with AWS and
          SQL from previous projects. One of my greatest strengths is learning
          and adapting quickly to new technologies.
        </p>
      </div>
      <hr className="about-hr"></hr>
      <Section2 />
      <Footer />
    </section>
  );
}

export default AboutMe;
