// import { useState } from "react";
// import "./Navbar.css";
// import logo from "../Images/Talkin Logo.webp";
// import { Col, Container, Row } from "react-bootstrap";
// import SideBar from "./SideBar";
// import { RxCross2 } from "react-icons/rx";
// import { Link } from "react-router-dom";
// export default function Navbar() {
//   const [isNavExpanded, setIsNavExpanded] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   return (
//     <>
//       <Container fluid className="navbar-container">
//         <Row className="p-0 m-0">
//           <Col className="p-0 m-0">
//             <nav className="navigation">
//               <a to="/" className="brand-name">
//                 <img src={logo} alt="logo" />
//               </a>
//               <button
//                 className="hamburger"
//                 onClick={() => {
//                   setIsNavExpanded(!isNavExpanded);
//                 }}
//               >
//                 {/* icon from Heroicons.com */}
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-5 w-5"
//                   viewBox="0 0 20 20"
//                   fill="white"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//               </button>
//               <div
//                 className={
//                   isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
//                 }
//               >
//                 <ul>
//                   <li>
//                     <Link to="/">Home</Link>
//                   </li>
//                   <li
//                     onClick={() => {
//                       setIsSidebarOpen(true);
//                     }}
//                   >
//                     <Link>Menu</Link>
//                   </li>
//                   <li
//                     onClick={() => {
//                       setIsSidebarOpen(true);
//                     }}
//                   >
//                     <Link>Locations</Link>
//                   </li>
//                   <li>
//                     <Link to="/contact">Our Story</Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="navbar-search">
//                 <button className="navbar-search-button">Order Now</button>
//               </div>
//             </nav>
//             <div className={isSidebarOpen ? "sidebar open" : "sidebar"}>
//               <button
//                 className="close-sidebar"
//                 onClick={() => {
//                   setIsSidebarOpen(false);
//                 }}
//               >
//                 <RxCross2 style={{ color: "white" }} />
//               </button>
//               <SideBar />
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// }

import { useState } from "react";
import "../../Navbar/Navbar.css";
import logo from "../../Images/Talkin Logo.webp";
import { Col, Container, Row } from "react-bootstrap";

import { RxCross2 } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";
import Cart from "../../Cart/Cart";
import { useSelector } from "react-redux";
import { PiBagLight } from "react-icons/pi";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const count = useSelector((state) => state.app.cart);
  return (
    <>
      <Container fluid className="navbar-container">
        <Row className="p-0 m-0">
          <Col className="p-0 m-0">
            <nav className="navigation">
              <Link to="/" className="brand-name">
                <img src={logo} alt="logo" />
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
                      location.pathname === "/Products" ||
                      location.pathname === "/locations"
                        ? "active"
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
                    <Link to="/contact">Our Story</Link>
                  </li>
                </ul>
              </div>
              <div className="navbar-search">
                <button
                  className="navbar-search-button w-100"
                  onClick={() => {
                    setIsSidebarOpen(true);
                  }}
                >
                  <PiBagLight style={{ fontSize: "25px" }} /> Cart Items{" "}
                  {count.length}
                </button>
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
              <Cart />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
