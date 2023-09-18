import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./TopDishes.css"
import Cardd from "./Cardd";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../Navbar/SideBar";
const TopDishes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Container className="top-dishes-main-container">
        <Row className="top-dishes-main-row">
          <Col className="text-center top-dishes-main-col " style={{}}>
            <h1 className="top-dishes-main-heading">Some of our top dishes</h1>
            <Button className="top-dishes-btn" onClick={() => {
                    setIsSidebarOpen(true);
                  }}>Order Now</Button>
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
      <Cardd/>
    </>
  );
};

export default TopDishes;
