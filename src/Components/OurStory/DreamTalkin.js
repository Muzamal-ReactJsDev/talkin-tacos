import React, { useEffect } from "react";
import Aos from "aos";
import "../ScrollerImages/Talkin.css";
import { Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import Dream from "../Images/Dream";
const Talkin = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container style={{ marginTop: "120px" }}>
      <Row>
        <Col md={6} className="image-slider-main-Tako-col-2">
          <div className="About-Talkin-Tacos-main-div">
            <h3 className="About-Talkin-Tacos-heading">
              Our dream started with a food truck
            </h3>
            <p>
              And then it became so much more as our South Florida community
              fell in love with our bomb tacos.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="main-div-slider-images-Tacos">
            <div>
              <div className="images-slider1-Tacos"></div>
              <img
                src={Dream}
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
