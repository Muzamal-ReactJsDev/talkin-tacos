// import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
// import "./ProductsBar.css";
// function BasicExample() {
//   return (
//     <div className="productsBar-main-div">
//       <Container className="main-container">
//         <Navbar expand="lg" className="mmnb">
//           {/* <Navbar.Brand className="" style={{ color: "white" }}>
//             Search
//           </Navbar.Brand> */}
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="">
//               {/* <Nav.Link as={Link} to="/top-pics">
//                 <ScrollLink
//                   to="TopPIcsSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Top Pics
//                 </ScrollLink>
//               </Nav.Link> */}
//               <Nav.Link as={Link} to="/popular-items">
//                 <ScrollLink
//                   className="productsBar-ScrollLink"
//                   to="PopularItemsSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                 >
//                   Popular Items
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/tacos">
//                 <ScrollLink
//                   to="TacosSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Tacos
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/entree">
//                 <ScrollLink
//                   to="EntreeSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Entree
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/sides">
//                 <ScrollLink
//                   to="sidesSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Sides
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link}>
//                 <ScrollLink
//                   to="lightMenuSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Light Menu
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/desert">
//                 <ScrollLink
//                   to="DesertSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Desert
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/homemade-drinks">
//                 <ScrollLink
//                   to="HomemadeSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Homemade Drinks
//                 </ScrollLink>
//               </Nav.Link>
//               <Nav.Link as={Link} to="/beverages">
//                 <ScrollLink
//                   to="BeveragesSection" // This should match the ID of the section you want to scroll to
//                   smooth={true}
//                   duration={50} // Duration of the scroll animation in milliseconds
//                   className="productsBar-ScrollLink"
//                 >
//                   Beverages
//                 </ScrollLink>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </Container>
//     </div>
//   );
// }

// export default BasicExample;

// Here i use the ScrollBar api...........

import React from "react";
import { useGetAllScrollarDataQuery } from "../../Service/Service";
import "./ProductsBar.css";
import { Container } from "react-bootstrap";
const ProductsBar = () => {
  const { data } = useGetAllScrollarDataQuery();
  console.log(data, "data of scroll bar");
  return (
    <>
      <div className="main-scroll-bar">
        <Container>
          <div className="productsBar-ScrollLink">
            {data?.map((datascroll) => {
              return (
                <>
                  <div key={datascroll.id} style={{ color: "white" }}>
                    {datascroll.name}
                  </div>
                </>
              );
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default ProductsBar;
