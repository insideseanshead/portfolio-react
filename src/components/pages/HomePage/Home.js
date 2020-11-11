import React from "react";
import "./style.css"
import family from "../../../assets/family-bobs.png"

function Home() {
  return (
   <div>
      <body>
        <div className="container">
            <h1>Welcome!</h1>
        <div className="row" id="row-one">
            <div className="col">
            <p>Welcome to my first fully built webpage using bootstrap! I am new to coding and have not had any experience
                prior to attending this program. I am exctied to begin my journey and this first week has been quite intense
                so far!</p>
            <p>
                I have lived in Washington State for the last five years and absolutelty love it! Originally I hail from NY
                and have been enjoying the slower pace here, even if it just walking slower. Over the last five years as a
                hobby I have worked to hone my craft in photography and look forward to building a website that will help
                showcase some of my work!
            </p>
            <p>
                I have quite a large family at home that are rooting me on to have success in this program. This includes my
                wife, 4 children aged; 14,13,12, and 18 months! We also have one dog, three cats, and newly have become
                parents to three very sweet goats!
            </p>

        </div>
            <div className="col">
            <img src={family} id="family" alt="animated family" />
         </div>
        </div>
        </div>
    {/* <div className="footer">
        <p>&#169Magnus Appel</p>
    </div> */}
  </body> 
</div>   
  );
}

export default Home;
