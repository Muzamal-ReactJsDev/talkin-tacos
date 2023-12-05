import React, { useState } from "react";
import "./HumburgerMenu.css";
import { Col, Container, Row } from "react-bootstrap";
import {
  MdDelete,
  MdOutlineNotificationsActive,
  MdPrivacyTip,
  MdShoppingCart,
} from "react-icons/md";

import { CgProfile } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";
import { FaHome, FaMapMarkedAlt, FaStore, FaWallet } from "react-icons/fa";
import { SiIterm2 } from "react-icons/si";
import { IoIosPeople } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
const HumburgerMenu = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(!show); // Toggle the value of 'show'
  const ProfileName = localStorage.getItem("f_name");
  const ProfileEmail = localStorage.getItem("Email");
  const ProfilePoint = localStorage.getItem("Point");
  function clearLocalStorage() {
    localStorage.clear();
    alert("You have been Logout");
    navigate("/");
  }
  return (
    <>
      <nav className={`navbar ${show ? "show-hamburger" : ""}`}>
        <Container>
          <div className="right-section">
            <div className="hamburger-menu" onClick={handleShow}>
              ☰
            </div>
          </div>

          {show && (
            <>
              <div className="hamburger-menu-content" onClick={handleShow}>
                <div className="hamburger-menu-content-login text-center">
                  <div className="hamburger-menu-content-login-inner-div">
                    <div>
                      <h6>{ProfileName}</h6>
                    </div>
                    <div>{ProfileEmail}</div>
                    {/* <div>Point: {ProfilePoint}</div> */}
                  </div>
                </div>
                <ul className="hamburger-menu-links">
                  <li>
                    <Link to="/" className="hamburger-menu-style">
                      <FaHome className="humburger-menu-icons" />
                    </Link>
                    Home
                  </li>
                  <li>
                    {" "}
                    <Link to="/Profile" className="hamburger-menu-style">
                      <CgProfile className="humburger-menu-icons" /> Profile
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Address" className="hamburger-menu-style">
                      <FaMapMarkedAlt className="humburger-menu-icons" />{" "}
                      Address
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/choosestore" className="hamburger-menu-style">
                      <FaStore className="humburger-menu-icons" /> Choose Store
                    </Link>
                  </li>
                  <li>
                    <Link to="/Inbox" className="hamburger-menu-style">
                      <MdOutlineNotificationsActive className="humburger-menu-icons" />{" "}
                      Inbox
                    </Link>
                  </li>
                  <li>
                    <Link to="/Wallet" className="hamburger-menu-style">
                      <FaWallet className="humburger-menu-icons" /> Wallet
                    </Link>
                  </li>
                  <li>
                    <Link to="/Support" className="hamburger-menu-style">
                      {" "}
                      <BiSupport className="humburger-menu-icons" /> Support &
                      Feedback
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="/Privacy" className="hamburger-menu-style">
                      <MdPrivacyTip className="humburger-menu-icons" /> Privacy
                      Policy
                    </Link>
                  </li>
                  <li>
                    <Link to="/Terms" className="hamburger-menu-style">
                      <SiIterm2 className="humburger-menu-icons" /> Terms &
                      Condition{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/About-Us" className="hamburger-menu-style">
                      <IoIosPeople className="humburger-menu-icons" /> About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/Delete" className="hamburger-menu-style">
                      <MdDelete className="humburger-menu-icons" />
                      Delete Account
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={clearLocalStorage}
                      className="hamburger-menu-style"
                    >
                      {" "}
                      <IoIosLogOut className="humburger-menu-icons" /> Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          )}
        </Container>
      </nav>
    </>
  );
};

export default HumburgerMenu;
