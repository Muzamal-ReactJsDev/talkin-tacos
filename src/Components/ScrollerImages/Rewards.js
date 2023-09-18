import React from "react";
import "../Order-Directly/OrderDirectly.css";
import { Button, Col, Container, Row } from "react-bootstrap";
const Rewards = () => {
  return (
    <>
      <div className="order-directly-main-div" style={{ marginTop: "120px" }}>
        <div className="order-directly-back">
          <Container className="order-directly-main-containers">
            <Row>
              <Col>
                <h2>
                  Restaurant Banner Join our rewards program to earn <br />{" "}
                  points, get free items, and stay up to <br /> date with us.
                </h2>
                <div>
                  <Button
                    className="OrderDirectly-location "
                    style={{ width: "100%" }}
                  >
                    Join Talkin Tacos Rewards
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Rewards;
