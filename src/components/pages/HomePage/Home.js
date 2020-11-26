import React from "react";
import "./style.css"
// import family from "../../../assets/family-bobs.jpeg"
// import linkedin from "../../../assets/linkedin.jpeg"
// import rialto from "../../../assets/rialto.jpeg"
// import rialto1 from "../../../assets/rialto1.png"
import {Image, Video, Transformation, CloudinaryContext} from 'cloudinary-react';


function Home() {
  return (
   <div>
        <div className="container">
            <h1>Magnus Appel</h1>
        <div className="row" id="row-one">
            <div className="col">
            {/* <img src={rialto1} id="rialto" alt="rialto beach" className="img-fluid" /> */}
            <imgage src="https://res.cloudinary.com/dxnnw7qoy/image/upload/v1606342562/rialto1_wt8cmo.png" >
                <Transformation height="800" width="800" crop="fill" effect="sepia" radius="20" />
                <Transformation overlay="text:arial_60:Rialto Beach" gravity="north" y="20" />
            </imgage>
         </div>
        </div>
        </div>
</div>   
  );
}

export default Home;
