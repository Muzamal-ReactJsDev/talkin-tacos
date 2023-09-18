import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./ProductsBar.css";
function BasicExample() {
  return (
    <div className="productsBar-main-div">
      <Container>
        <Navbar expand="lg" className="mmnb">
          <Navbar.Brand className="" style={{ color: "white" }}>
            Search
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/top-pics">
                <ScrollLink
                  to="TopPIcsSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Top Pics
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/popular-items">
                <ScrollLink
                  className="productsBar-ScrollLink"
                  to="PopularItemsSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                >
                  Popular Items
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/tacos">
                <ScrollLink
                  to="TacosSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Tacos
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/entree">
                <ScrollLink
                  to="EntreeSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Entree
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/sides">
                <ScrollLink
                  to="sidesSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Sides
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link}>
                <ScrollLink
                  to="lightMenuSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Light Menu
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/desert">
                <ScrollLink
                  to="DesertSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Desert
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/homemade-drinks">
                <ScrollLink
                  to="HomemadeSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Homemade Drinks
                </ScrollLink>
              </Nav.Link>
              <Nav.Link as={Link} to="/beverages">
                <ScrollLink
                  to="BeveragesSection" // This should match the ID of the section you want to scroll to
                  smooth={true}
                  duration={50} // Duration of the scroll animation in milliseconds
                  className="productsBar-ScrollLink"
                >
                  Beverages
                </ScrollLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
}

export default BasicExample;
