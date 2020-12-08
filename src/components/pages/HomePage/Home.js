import React from "react";
import "./style.css";
// import family from "../../../assets/family-bobs.jpeg"
import linkedin from "../../../assets/linkedin.jpeg";
import rialto from "../../../assets/rialto.jpeg";
import rialto1 from "../../../assets/rialto1.png";

function Home() {
  return (
    <div>
      <div className="container">
        <h1 id="home-heading">Magnus Appel</h1>
        <div className="row" id="row-one">
          <div className="col">
            <img
              src={rialto1}
              id="rialto"
              alt="rialto beach"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
