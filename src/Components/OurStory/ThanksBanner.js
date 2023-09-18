import React from "react";
import "./ThanksBanner.css";
import { Col, Container, Row } from "react-bootstrap";
const ThanksBanner = () => {
  return (
    <>
      <div className="ThanskBanner-main-div">
        <div className="ThanskBanner-main-div-back">
          <Container className="ThanskBanner-main-container">
            <Row >
              <Col sm={6} className="ThanskBanner-col-1" >
                <h1 className="ThanskBanner-main-heading">Thank You</h1>
                <p className="ThanskBanner-main-paragraph">
                  Ordering takeout & delivery from our site saves you money and
                  supports local business. Get the best price, fastest service,
                  and free food via rewards points.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ThanksBanner;
