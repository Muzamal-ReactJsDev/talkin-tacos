import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import "./ScrollerImages.css";
import img2 from "../Images/Talkin";
import { Col, Container, Row } from "react-bootstrap";
import Talkin from "./Talkin";
import Cater from "./Cater";
import MadeLove from "./MadeLove";
import FreshIngredient from "./FreshIngredient";
import Featured from "./Featured";
import Rewards from "./Rewards";
import LessTalkin from "./LessTalkin";
const ScrollerImages = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Container>
        <Row>
          <Col md={6} className="image-slider-main-col-1">
            <div className="main-div-slider-images">
              <div>
                <div className="images-slider1"></div>
                <img
                  src={img2}
                  className="images-slider2"
                  data-aos="fade-down-right"
                  alt="img2"
                />
              </div>
            </div>
          </Col>
          <Col md={6} className="image-slider-main-col-2">
            <div className="food-truck-main-div">
              <h3 className="food-truck-heading">Food Truck Now Available</h3>
              <p>
                Our Food Truck is now Available! For inquiries, please email:
                DPerez@TalkinTacos.net
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Talkin />
      </div>
      <br />
      <br />
      <br />
       <br />

      <br />
      <div>
        <Cater />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <MadeLove />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {" "}
        <FreshIngredient />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Rewards/>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <Featured />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <LessTalkin/>
      </div>
    </>
  );
};

export default ScrollerImages;
