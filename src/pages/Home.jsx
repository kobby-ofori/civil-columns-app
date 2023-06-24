import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import build1 from "../images/build1.jpg";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container
        
        className="Home"
        id="home"
        style={{ textAlign: "center", color: "blue" }}
      >
        <Row>
          <Col></Col>
          <Col>
            <h1>Home</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolor, eum repudiandae voluptatibus mollitia nesciunt molestiae
              corporis nisi in, beatae molestias ratione doloremque culpa
              possimus temporibus ad nostrum soluta iste?
            </p>
          </Col>
          <Col>
            <img src={build1} alt="" fluid height="500px" className="img-div" />
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>Home</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolor, eum repudiandae voluptatibus mollitia nesciunt molestiae
              corporis nisi in, beatae molestias ratione doloremque culpa
              possimus temporibus ad nostrum soluta iste?
            </p>
          </Col>
          <Col>
            <img src={build1} alt="" fluid height="500px" className="img-div" />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
