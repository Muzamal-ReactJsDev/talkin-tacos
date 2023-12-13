import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MapCoponents from "../MapCoponents";
import Default_AddressAdd from "./Default_AddressAdd";
import Default_PaymentAdd from "./Default_PaymentAdd"
const Default = () => {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col md={7}>
            <Row>
              <Col xs={12}>
                <MapCoponents />
              </Col>
              <Col xs={12}>
                <Default_AddressAdd />
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Default_PaymentAdd/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Default;
