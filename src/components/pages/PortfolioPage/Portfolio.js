import React from "react";
import "./style.css"
import freshest from "../../../assets/freshest.png"
import dnd from "../../../assets/dnd.png"
import weather from "../../../assets/weather_dash.png"
import passgen from "../../../assets/pass_gen.png"

function Portfolio() {
  return (
     <div class="container">
        <div class="row" id="rowTwo">
            <div class="col-md-12" id="heading">
                <h1 id="port">Portfolio: GitHub Projects</h1>
            </div>
            <div class="col-md-4 .col-sm-6">
                <h5><a href="https://clubkemp.github.io/freshair/">Fresh Air Application</a></h5>
                <img src={freshest} id="pic-one" alt="comet" />
                <p>GitHub:<a href="https://github.com/clubkemp/freshair">Fresh Air Repository Link</a></p>
            </div>
            <div class="col-md-4">
              <h5><a href="https://stark-island-65376.herokuapp.com/">Fantasy Character Manager Application</a></h5>
                <img src={dnd} id="pic-two" alt="deployed app link" />
                <p>GitHub:<a href="https://github.com/artuis/dnd-action-calculator">Fantasy Character Builder</a></p>
            </div>
    </div>
    <div class="row" id="rowThree">
        <div class="col-md-4 .col-sm-6">
          <h5><a href="https://magnus-jay.github.io/weather-dashboard/">Weather Dashboard Application</a></h5>
            <img src={weather} id="pic-three"  alt="moon" />
            <p>GitHub:<a href="https://github.com/Magnus-Jay/weather-dashboard">Weather Dashboard</a></p>
        </div>
        <div class="col-md-4 .col-sm-6">
          <h5><a href="https://magnus-jay.github.io/password--gen/">Password Generator Application</a></h5>
            <img src={passgen} id="pic-four" alt="stars and trees" />
            <p>GitHub:<a href="https://github.com/Magnus-Jay/password--gen">Password Generator</a></p>
        </div>
    </div>
    </div>
  );
}

export default Portfolio;
