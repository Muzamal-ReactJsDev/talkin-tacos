import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import Founded from "../Images/Founded";
import Aos from "aos";
import "../ScrollerImages/Cater.css";
import "../ScrollerImages/ScrollerImages.css";
const Cater = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container style={{ marginTop: "120px" }}>
        <Row>
          <Col md={6} className="image-slider-main-col-1">
            <div className="main-div-slider-images">
              <div>
                <div className="images-slider1"></div>
                <img
                  src={Founded}
                  className="images-slider2"
                  data-aos="fade-down-right"
                  alt="img2"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="image-slider-main-col-2">
            <div className="cater-truck-main-div">
              <h3 className="cater-truck-main-heading">
                Founded by childhood best friends with a love for tacos
              </h3>
              <p>
                Talkin' Tacos is the brainchild of two South Florida
                entrepreneurs and childhood best friends, Mo and Omar. Our
                concept started out as a food truck during the height of the
                COVID pandemic in 2020. We wanted to bring our favorite taco
                recipes to our community in Miramar, and feel very lucky that
                our community loved them.
              </p>
              <p>
                As our popularity grew, the never-ending lines prompted our
                expansion into a local space in Miramar and a second restaurant
                later that year in Miami’s Brickell neighborhood.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cater;
