import React from "react";
import "./style.css";
// import family from "../../../assets/family-bobs.jpeg"
import linkedin from "../../../assets/linkedin.jpeg";
import rialto from "../../../assets/rialto.jpeg";
import rialto1 from "../../../assets/rialto1.png";  
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image'

function Home() {
  return (
    <Container fluid className='container'>
      <h1 id="home-heading">Magnus Appel</h1>
      <Row>
      <Image id="rialto" src={rialto1} fluid rounded/>   
      </Row>    
    </Container>
  );
}

export default Home;
