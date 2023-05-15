import React from "react";
import Welcome from "../components/Welcome";
import Background from "./../components/Background";

const Home = () => {
  return (
    <div className="button-container">
      <Background />
      <Welcome />
    </div>
  );
};

export default Home;
