import React from "react";
import { Link, Route } from "react-router-dom";
import "./style.css"

function Contact(props) {
  return (
   <div> 
    <div className="container">
        <div className="row">
          <div className="col-md-12" id="heading">
            <h1 id="contact-heading">Contact
            </h1>
            <hr />
          </div>
          <div className="col-md-6">
            {/* <form>
              <div className="form-group">
                <label for="exampleFormControlInput1">Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlInput1">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <br />
                <button className="btn btn-dark" type="submit">Submit</button>
              </div>
            </form> */}
          </div>
          <div className="col-md-6 contact-form">
            <p>
              Thank you for visiting my portfolio and I hope you enjoyed what you have seen so far. Please feel free to send me an email using the contact-form to the left. Additionally there is a link to my LinkedIn page where you can find additional information about myself and experience. 
            </p>
            <br />
            <p>Check out my work history and my professional profile on:</p>
            <button className="btn btn-dark" id="linked"><a href="https://www.linkedin.com/in/magnusappe/">LinkedIn Profile</a></button>
            <br />
            <br />
            <p>Check out my Github profile:</p>
            <button className="btn btn-dark" id="linked"><a href="https://github.com/Magnus-Jay">GitHub Profile</a></button>

          </div>
        </div>
      </div>
      </div>  
  );
}

export default Contact;
