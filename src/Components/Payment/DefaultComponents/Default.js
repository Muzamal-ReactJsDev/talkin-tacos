import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MapCoponents from "../MapCoponents";
import Default_AddressAdd from "./Default_AddressAdd";
import Default_PaymentAdd from "./Default_PaymentAdd";
import PaymentCardList from "../PaymentCardList";
import Default_PaymentList from "./Default_PaymentList";
import PlaceOrder from "../PlaceOrder";
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
            <Row>
              <Col xs={12}>
                {" "}
                <Default_PaymentList />
              </Col>
              <Col xs={12}>
                <PlaceOrder/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Default;
