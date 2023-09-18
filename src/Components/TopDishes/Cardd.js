import React from "react";
import "./Cardd.css";
import pic1 from "../Images/pic1";
import pic2c from "../Images/pic2 Center";
import pic3 from "../Images/pic3";
import pic4 from "../Images/pic4";
import pic5 from "../Images/pic5";
import { Col, Container, Row } from "react-bootstrap";
const Cardd = () => {
  return (
    <>
      <Container className="" style={{marginTop:"50px"}}>
        <Row>
          <Col>
            <div className="grid-container">
              <div className="left-images-Cardd">
                <img className="Cardd-Images" src={pic1} alt="LeftImage1" />
                <img className="Cardd-Images" src={pic3} alt="LeftImage2" />
              </div>
              <div className="center-image-Cardd">
                <img className="Cardd-Images" src={pic2c} alt="CenterImage" />
              </div>
              <div className="right-images-Cardd">
                <img className="Cardd-Images" src={pic4} alt="RightImage1" />
                <img className="Cardd-Images" src={pic5} alt="RightImage2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Cardd;
