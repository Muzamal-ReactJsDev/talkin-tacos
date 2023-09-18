import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./MostPopular.css";
import CardCarousel from "./CardCarousel";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../Navbar/SideBar";
const MostPopular = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div>
      <Container className="most-popular-container">
        <Row className="popular-items-main-row">
          <Col xs={8} className="popular-items-main-col">
            <h1>Most Popular</h1>
            <text className="popular-items-main">
              Try our most popular items
            </text>
          </Col>
          <Col xs={4} className="popular-items-button">
            <Button
              className="popular-items-button-style"
              onClick={() => {
                setIsSidebarOpen(true);
              }}
            >
              See More Items
            </Button>
          </Col>
        </Row>
      </Container>
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
      <CardCarousel />
    </div>
  );
};

export default MostPopular;
