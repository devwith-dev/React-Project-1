import React from "react";
import "./Home.css";
import Section_2 from "../components/Section_2";
import { Section_4 } from "../components/Section_4";

const About = () => {
  return (
    <>
    <div className="about-heading">
      <h1>About Us</h1>
      <p>
        Far far away, behind the word mountains, far from the countries Vokalia
        and <br /> Consonantia, there live the blind texts.
      </p>
    </div>
    <Section_2/>
    <Section_4/>
    </>
  );
};

export default About;
