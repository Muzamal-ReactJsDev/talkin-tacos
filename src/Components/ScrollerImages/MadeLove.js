import React, { useEffect } from "react";
import Aos from "aos";
import "./Talkin.css";
import { Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import img5 from "../Images/love";
const MadeLove = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container style={{ marginTop: "120px" }}>
      <Row>
        <Col md={6} className="image-slider-main-Tako-col-2">
          <div className="About-Talkin-Tacos-main-div">
            <h3 className="About-Talkin-Tacos-heading">Made With Love</h3>
            <p>
              Our secret ingredient is passion. Everyone on our team is
              passionate about making your time with us as great as it can be —
              from start to finish.
            </p>
          </div>
        </Col>
        <Col md={6}>
          <div className="main-div-slider-images-Tacos">
            <div>
              <div className="images-slider1-Tacos"></div>
              <img
                src={img5}
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

export default MadeLove;
