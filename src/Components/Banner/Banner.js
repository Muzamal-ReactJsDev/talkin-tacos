import React, { useEffect, useRef, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./Banner.css";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../Navbar/SideBar";
const Banner = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="banner-main-div">
      <div className="banner-back">
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col>
              <h1 className="banner-heading-main">
                Authentic Halal Mexican. <br /> Tacos, Burritos, & More.
              </h1>
              <p className="banner-para-heading">
                Best Mexican Restaurant in FL
              </p>
              <div className="banner-buttons-div">
                <Button className="banner-button-story">
                  <Link to="/OurStory" className="banner-buttons-links">
                    Our Story
                  </Link>{" "}
                </Button>
                <Button className="banner-button-order-now ms-3">
                  <Link
                    onClick={() => {
                      setIsSidebarOpen(true);
                    }}
                    className="banner-buttons-links"
                  >
                    Order Now
                  </Link>
                </Button>
              </div>
            </Col>

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
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Banner;
