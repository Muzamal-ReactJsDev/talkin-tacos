import React, { useEffect } from "react";
import Aos from "aos";
import "./Talkin.css";
import "./LessTalkin.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import "aos/dist/aos.css";
import img5 from "../Images/love";
const LessTalkin = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Container style={{ marginTop: "120px" }}>
      <Row>
        <Col md={6} className="image-slider-main-Tako-col-2">
          <div className="About-Talkin-Tacos-main-div">
            <h3 className="About-Talkin-Tacos-heading">
              Less Talkin' More Tacos!
            </h3>
            <p>
              Starting your own restaurant from scratch is quite a challenging
              feat and the restaurant industry has one of the highest failure
              rates for doing so. With a Talkin’ Tacos franchise we have already
              laid the groundwork, have best of class technology and systems in
              place, a proven concept and track record of success, and all the
              support you will need from our team with many years of experience
              in the industry.
            </p>
            <div>
              <Button className="less_talkin_button">
                Learn More about Our Franchise Opportunities{" "}
              </Button>
            </div>
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

export default LessTalkin;
