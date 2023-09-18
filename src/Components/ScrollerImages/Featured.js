import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import img7 from "../Images/Featured";
import Aos from "aos";
import "./Cater.css";
import "./ScrollerImages.css";
const Featured = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container
        className="FreshIngredient-Container"
        style={{ marginTop: "120px" }}
      >
        <Row>
          <Col md={6} className="image-slider-main-col-1">
            <div className="main-div-slider-images">
              <div>
                <div className="images-slider1"></div>
                <img
                  src={img7}
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
                Featured on Randy Santel's Youtube
              </h3>
              <p>
                Check out our recent appearance on Randy Santel's channel, doing
                the 40x0 Mexican Birria Taco King Challenge:
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Featured;
