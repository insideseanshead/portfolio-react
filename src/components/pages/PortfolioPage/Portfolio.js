import React from "react";
import "./style.css";
import freshest from "../../../assets/freshest.png";
import dnd from "../../../assets/dnd.png";
import weather from "../../../assets/weather_dash.png";
import passgen from "../../../assets/pass_gen.png";
import Note from "../../../assets/note-taker.png";
import Todo from "../../../assets/todo.png";

function Portfolio() {
  return (
    <div className="container">
      <div className="row" id="rowTwo">
        <div className="col-md-12 col-md-6" id="heading">
          <h1 id="port">GitHub Projects</h1>
        </div>
      </div>
      <div className="row" id="rowTwo">
        <div className="col-md-12 col-md-6" className="projectTwo">
          <img src={dnd} id="pic-two" alt="deployed app link" />
         <h5>
           <span>
            Fantasy Character Creator 
          <a href="https://stark-island-65376.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/artuis/dnd-action-calculator" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-github-square mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 >  
        </div>
      </div>
      <div className="row" id="rowThree">
        <div className=".col-md-12 col-md-6" className="projectOne">
          <img src={freshest} id="pic-one" alt="comet" />
          <h5>
           <span>
            Fresh Air - Hiking and Food Finder
          <a href="https://clubkemp.github.io/freshair/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/clubkemp/freshair" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-github-square mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 > 
        </div>
      </div>
      <div className="row" id="rowFour">
        <div className="col-md-12" className="projectThree">
          <img src={Note} id="pic-three" alt="deployed app link" />
          <h5>
           <span>
            Note Taking Application
          <a href="https://calm-wildwood-27402.herokuapp.com/" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-globe mag-icon" aria-hidden="true"></i>
          </a >
          <a href="https://github.com/Magnus-Jay/note-taker" target="_blank" rel="noopener noreferrer">
          <i class="fa fa-github-square mag-icon" aria-hidden="true"></i>
          </a >
          </span>
          </h5 > 
        </div>
      </div>
      {/* <div class="row" id="rowThree">
        <div class="col-md-4 .col-sm-6">
          <h5><a href="https://magnus-jay.github.io/weather-dashboard/">Weather Dashboard Application</a></h5>
            <img src={weather} id="pic-three"  alt="moon" />
            <p>GitHub:<a href="https://github.com/Magnus-Jay/weather-dashboard" className="port-link">Weather Dashboard Link</a></p>
        </div>
        <div class="col-md-4 .col-sm-6">
          <h5><a href="https://magnus-jay.github.io/password--gen/">Password Generator Application</a></h5>
            <img src={passgen} id="pic-four" alt="stars and trees" />
            <p>GitHub:<a href="https://github.com/Magnus-Jay/password--gen" className="port-link">Password Generator Link</a></p>
        </div>
        <div class="col-md-4 .col-sm-6">
          <h5><a href="https://magnus-jay.github.io/to-do-list/">To-do Application</a></h5>
            <img src={Todo} id="pic-six"  alt="moon" />
            <p>GitHub:<a href="https://github.com/Magnus-Jay/to-do-list" className="port-link">To-do-list Link</a></p>
        </div>  
    </div> */}
    </div>
  );
}

export default Portfolio;
