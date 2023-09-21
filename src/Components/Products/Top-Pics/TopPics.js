import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./TopPics.css";
import { BiHeart } from "react-icons/bi";
const TopPics = () => {
  return (
    <div id="TopPIcsSection">
      <hr className="TopPics-hr" />
      <Container className="p-3">
        <Row className="Toppics-main-row">
          <Col sm={4} className="TopPics-col-1">
            <div className="TopPics-image-1">
              <div className="TopPics-main-div-1">
                <p>#1 Popular Items</p>
                <h4>Party Taco Platter</h4>
                <div>
                  <text>$ 125.00</text>
                  <text>
                    <BiHeart /> 10
                  </text>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4} className="TopPics-col-1">
            <div className="TopPics-image-2">
              <div className="TopPics-main-div-1">
                <p>#2 Popular Items</p>
                <h4>Party Taco Platter</h4>
                <div>
                  <text>$ 15.99</text>
                  <text>
                    <BiHeart /> 29
                  </text>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={4} className="TopPics-col-1">
            <div className="TopPics-image-3">
              <div className="TopPics-main-div-1">
                <p>#3 Popular Items</p>
                <h4>Party Taco Platter</h4>
                <div>
                  <text>$ 12.99</text>
                  <text>
                    <BiHeart /> 5
                  </text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <hr className="TopPics-hr" />
    </div>
  );
};

export default TopPics;
