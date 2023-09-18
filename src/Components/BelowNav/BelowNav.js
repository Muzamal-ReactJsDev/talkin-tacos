import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./BelowNav.css";
const BelowNav = (props) => {
  return (
    <Container fluid>
      <Row>
        <Col className="p-0 m-0">
          {" "}
          <button className="belownav-button">{props.BelowNavDetails}
          {props.Menudata}</button>
        </Col>
      </Row>
    </Container>
  );
};

export default BelowNav;
