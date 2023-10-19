import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import OrderImg from "../../Images/Ordering";
import "./Ordering.css";
import { Link } from "react-router-dom";
import { PiHandWaving, PiCarLight } from "react-icons/pi";
const Ordering = ({selectedLocationAddress}) => {

  console.log("recieving",selectedLocationAddress)
  return (
    <Container className="Ordering-main-container">
      <Row>
        <Col xs={8} className="Order-col-1">
          <div className="Ordering-main-div">
            <h1 className="Ordering-Brickell-Header">
              Ordering from <div className="Ordering-Brickell">Brickell</div>
            </h1>
            <p>97 SW 8th St, Miami, FL 33130, USA</p>
            <div>{selectedLocationAddress}</div>
            <br />
            <ul className="Ordering-main-ul">
              <li>
                <Link className="">
                  <PiHandWaving className="Ordering-delivery-icons" />
                  <h6>Pickup</h6> 15 minutes
                </Link>
              </li>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              <li>
                <Link>
                  <PiCarLight className="Ordering-delivery-icons" />
                  <h6>Delivery</h6> 35 minutes
                </Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={4} className="Order-col-2">
          <img className="OrderImage" src={OrderImg} alt="" />
        </Col>
      </Row>
    </Container>
  );
};

export default Ordering;
