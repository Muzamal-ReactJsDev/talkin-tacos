import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import img4 from "../Images/Cater";
import Aos from "aos";
import "./Cater.css";
import "./ScrollerImages.css";
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
                  src={img4}
                  className="images-slider2"
                  data-aos="fade-down-right"
                  alt="img2"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="image-slider-main-col-2">
            <div className="cater-truck-main-div">
              <h3 className="cater-truck-main-heading">We Cater!</h3>
              <p>
                Check out our catering menu at the top of the page. Let's us
                take care of your event or party!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cater;
