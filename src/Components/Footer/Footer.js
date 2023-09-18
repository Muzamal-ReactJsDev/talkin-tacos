import React, { useState } from "react";
import "./Footer.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import logo from "../Images/Talkin Logo.webp";
import { LiaFacebook, LiaInstagram } from "react-icons/lia";
import { RxCross2 } from "react-icons/rx";
import SideBar from "../Navbar/SideBar";

const Footer = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="p-5" style={{ backgroundColor: "black" }}>
        <Container className="footer-main-container">
          <Row>
            <Col className="footer-col-1" sm={6}>
              <div>
                <img className="footer-logo" src={logo} alt="img" />
              </div>
            </Col>
            <Col className="footer-col-2" sm={6}>
              <Button className="footer-button" onClick={() => {
                      setIsSidebarOpen(true);
                    }}>Order Now</Button>
            </Col>
          </Row>
          <hr className="footer-hr-row" />
          <Row>
            <Col className="footer-col-3">
              <text>Social</text>
              <div className="mt-2">
                <LiaFacebook className="footer-icon" />
                <LiaInstagram className="footer-icon" />
              </div>
            </Col>
            <Col className="footer-col-4">
              <div className="mt-2">
                <text>Pages</text>

                <div>
                  <text>Home</text>{" "}
                </div>
              </div>
            </Col>
          </Row>
          <hr className="footer-hr-row" />
          <Row>
            <Col className="footer-col-5" sm={8}>
              <div>Term of use</div>
              <div className="footer-privacy-policy mx-3">Privacy Policy</div>
              <div>Accessibility Statement</div>
            </Col>
            <Col className="footer-col-6" sm={4}>
              <text>Made with CafeScale.com</text>
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
    </>
  );
};

export default Footer;
