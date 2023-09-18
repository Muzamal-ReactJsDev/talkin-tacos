import React, { useEffect } from "react";
import Aos from "aos";
import "./Talkin.css";
import { Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import img3 from "../Images/Talkin 2.png";
const Talkin = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container style={{marginTop:"120px"}}>
      <Row>
        <Col md={6} className="image-slider-main-Tako-col-2">
          <div className="About-Talkin-Tacos-main-div">
            <h3 className="About-Talkin-Tacos-heading">About Talkin' Tacos™</h3>
            <p>
              Talkin' Tacos™ started as a food truck in the Miami community,
              aiming to provide the best Mexican food in South Florida. But as
              we grew a larger and larger following, the lines around our food
              truck became too hard to keep up with. We knew we needed to expand
              into a restaurant space to be able to serve our awesome customers
              more of our famous tacos and Mexican food every day.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="main-div-slider-images-Tacos">
            <div>
              <div className="images-slider1-Tacos"></div>
              <img
                src={img3}
                className="images-slider2-Tacos"
                data-aos="fade-down-right"
                alt="img2"
              />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Talkin;
