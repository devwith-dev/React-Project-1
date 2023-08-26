import React from "react";
import "./Home.css";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";
import { Section_4 } from "../components/Section_4";
import { Section_5 } from "../components/Section_5";

const Home = () => {
  return (
    <>
      <div className="main-heading">
        <h1>It is Better to Travel Well Than to Arrive</h1>
      </div>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
    </>
  );
};

export default Home;
