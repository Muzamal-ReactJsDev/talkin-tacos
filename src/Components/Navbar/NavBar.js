import { useState } from "react";
import "./Navbar.css";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../Images/NepalDos.jpeg";
import { Button, Col, Container, Row } from "react-bootstrap";
import SideBar from "./SideBar";
import { RxCross2 } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Cart from "../Cart/Cart";
import SignupForm from "../Auth/SignUp/SignUp";
import HumburgerMenu from "./HumbergerMenu";
import PhoneNumber from "../Auth/PhoneNumber/PhoneNumber";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [iscartebarOpen, setIsCartbarOpen] = useState(false);
  const [IsRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const navigate = useNavigate();
  const handleclosecart = () => {
    setIsCartbarOpen(false);
  };
  const handlecloseRegistration = () => {
    setIsRegistrationOpen(false);
  };

  // Check for the token in local storage
  const token = localStorage.getItem("token");

  // Function to handle logout
  const handleLogout = () => {
    // Perform logout actions here, such as removing the token from local storage
    localStorage.removeItem("token");
    navigate("/");
    // Additional logic if needed after logout...
  };

  const location = useLocation();
  const count = useSelector((state) => state.app.cart);
  // Determine if the current route is the menu page
  const isMenuPage =
    location.pathname === "/Products" || location.pathname === "/locations";

  return (
    <>
      <Container fluid className="navbar-container">
        <Row className="p-0 m-0">
          <Col className="p-0 m-0">
            <nav className="navigation">
              <Link to="/" className="brand-name">
                <img className="NepalDosLogo" src={logo} alt="logo" />
              </Link>
              <button
                className="hamburger"
                onClick={() => {
                  setIsNavExpanded(!isNavExpanded);
                }}
              >
                {/* icon from Heroicons.com */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="white"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                className={
                  isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }
              >
                <ul>
                  <li className={location.pathname === "/" ? "active" : ""}>
                    <Link to="/">Home</Link>
                  </li>
                  <li
                    className={
                      location.pathname === "/Products"
                        ? // ||
                          // location.pathname === "/locations"
                          "active"
                        : ""
                    }
                    onClick={() => {
                      setIsSidebarOpen(true);
                    }}
                  >
                    <Link>Menu</Link>
                  </li>
                  <li
                    onClick={() => {
                      setIsSidebarOpen(true);
                    }}
                  >
                    <Link>Locations</Link>
                  </li>
                  <li>
                    <Link to="/OurStory">Story</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-search">
                {/* Conditionally render the button text and path */}
                {isMenuPage ? (
                  <div className="Login-in-details">
                    {/* Check if token exists in local storage */}
                    {token ? (
                      // If token exists, display logout button
                      <button onClick={handleLogout} className="me-3 login-log">
                        <FaRegUserCircle
                          className="me-2"
                          style={{ fontSize: "20px" }}
                        />
                        Logout
                      </button>
                    ) : (
                      // If token doesn't exist, display login button
                      <Link
                        onClick={() => {
                          setIsRegistrationOpen(true);
                        }}
                        className="me-3 login-log"
                      >
                        <FaRegUserCircle
                          className="me-2"
                          style={{ fontSize: "20px" }}
                        />{" "}
                        Register
                      </Link>
                    )}
                    <Button
                      className="navbar-search-button w-100"
                      onClick={() => {
                        setIsCartbarOpen(true);
                      }}
                    >
                      Cart Items: {count.length}
                    </Button>
                  </div>
                ) : (
                  <div>
                    <Button
                      className="navbar-search-button w-100"
                      onClick={() => {
                        setIsSidebarOpen(true);
                      }}
                    >
                      Order Now
                    </Button>
                    <HumburgerMenu />{" "}
                    {/* Include the HumburgerMenu component here as well */}
                  </div>
                )}
              </div>
            </nav>
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
            <div className={iscartebarOpen ? "sidebar open" : "sidebar"}>
              <button
                className="close-sidebar"
                onClick={() => {
                  setIsCartbarOpen(false);
                }}
              >
                <RxCross2 style={{ color: "white" }} />
              </button>
              <Cart closeCart={handleclosecart} />
            </div>
            <div className={IsRegistrationOpen ? "sidebar open" : "sidebar"}>
              <button
                className="close-sidebar"
                onClick={() => {
                  setIsRegistrationOpen(false);
                }}
              >
                <RxCross2 style={{ color: "white" }} />
              </button>
              <SignupForm closeRegistration={handlecloseRegistration}
              OpenRegistration={()=>{
                setIsRegistrationOpen(true);
              }}/>
              {/* <PhoneNumber closeRegistration={handlecloseRegistration} /> */}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
