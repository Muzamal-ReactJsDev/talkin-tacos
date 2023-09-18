import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Col, Container, Row } from "react-bootstrap";
import img6 from "../Images/Fresh";
import Aos from "aos";
import "./Cater.css";
import "./ScrollerImages.css";
const FreshIngredient = () => {
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
                  src={img6}
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
                Only Fresh Ingredients
              </h3>
              <p>
                We invest in quality ingredients to ensure our customers get the
                great taste we’re famous for. Because we believe that you
                deserve the best.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FreshIngredient;
