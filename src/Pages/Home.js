import React from "react";
import "./Home.css";
import Section_2 from "../components/Section_2";
import Section_3 from "../components/Section_3";

const Home = () => {
  return (
    <>
      <div className="main-heading">
        <h1>It is Better to Travel Well Than to Arrive</h1>
      </div>
      <Section_2/>
      <Section_3/>
    </>
  );
};

export default Home;
