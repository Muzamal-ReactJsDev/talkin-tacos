import React from "react";
import "./Search.css"; // Make sure to create this CSS file
import { Col, Container, Row } from "react-bootstrap";
import {LuNavigation} from "react-icons/lu"
const SearchBar = () => {
  return (
    <Container>
      <Row>
        <Col className="p-0">
          <div className="search-bar">
            <input className="search-bar-area" type="text" placeholder="Search..." />
            <i className="search-bar-icon"><LuNavigation/></i>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
