import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShowAddAddress.css"; // Import your CSS file
import { FaHome } from "react-icons/fa";
function ShowAddAddress() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://cafescale.com/api/v1/customer/address/list",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAddresses(response.data);
        console.log(response, "List of Address Added");
        localStorage.setItem("Delivery_Address_Id", response.data[0].id);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container style={{ marginTop: "100px" }}>
      <h1 className="text-center mt-4" style={{ color: "white" }}>
        Add Address List
      </h1>
      <Row className="address-container">
        {addresses.map((addaddress) => (
          // <Col key={addaddress.id} lg={4} md={6} xs={12}>
          <Col key={addaddress.id} xs={12}>
            <div className="address-card">
              <div className="address-details">
                <span>
                  <FaHome />
                </span>
              </div>
              <div className="address-details">
                {/* <span className="address-label">Address:</span> */}
                <span className="address-value">{addaddress.address}</span>
              </div>
              <div className="address-details">
                {/* <span className="address-label">Address Type:</span> */}
                {/* <span className="address-value">{addaddress.address_type}</span> */}
                <Dropdown>
                  <Dropdown.Toggle
                    className="dropdown-split-style"
                    id={`dropdown-split-${addaddress.id}`}
                  />
                  <Dropdown.Menu
                  // show={selectedAddress === addaddress.id}
                  >
                    <Dropdown.Item
                    // onClick={() =>
                    //   handleDeleteAddress(addaddress.id)
                    // }
                    >
                      Delete
                    </Dropdown.Item>
                    <Dropdown.Item
                      variant="success"
                      // onClick={() =>
                      //   handleEditAddress(addaddress.id)
                      // }
                    >
                      Edit
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="text-center  ">
        <Button className="placeOrderbtn">
          <Link to="/Payment" className="placeOrder-button">
            Create Payment
          </Link>
        </Button>
      </div>
    </Container>
  );
}

export default ShowAddAddress;
