import React, { useState } from "react";
import "./OrderDirectly.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import SideBar from "../Navbar/SideBar";
import { RxCross2 } from "react-icons/rx";
const OrderDirectly = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="order-directly-main-div">
        <div className="order-directly-back">
          <Container className="order-directly-main-containers">
            <Row>
              <Col>
                <h2>
                  Order directly from our website to <br /> save money in fees,
                  get faster <br /> service, earn free food via our <br />{" "}
                  rewards program, and support local <br /> business.
                </h2>
                <div>
                  <Button
                    className="OrderDirectly-location"
                    onClick={() => {
                      setIsSidebarOpen(true);
                    }}
                  >
                    Locations
                  </Button>
                  <Button
                    className="OrderDirectly-Order"
                    onClick={() => {
                      setIsSidebarOpen(true);
                    }}
                  >
                    Order Now
                  </Button>
                </div>
              </Col>
            </Row>
            <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
              <button
                className="close-sidebar"
                onClick={() => {
                  setIsSidebarOpen(false);
                }}
              >
                <RxCross2 style={{ color: "white" }} />
              </button>
              <SideBar />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default OrderDirectly;
