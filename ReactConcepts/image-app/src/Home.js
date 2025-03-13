import React from "react";
import sampleImage from "./assets/download.jpg";


const Home = ({ setPage }) => {
  return (
    <div className="container">
      <img src={sampleImage} alt="Sample" className="image" />

      <button className="btn" onClick={() => setPage("details")}>
        Read More...
      </button>
    </div>
  );
};

export default Home;
