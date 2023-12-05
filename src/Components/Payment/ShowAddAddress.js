import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ShowAddAddress.css"; // Import your CSS file

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
    <Container style={{marginTop:"100px"}}>
      <h1 className="text-center mt-4" style={{color:"white"}}>Add Address List</h1>
      <Row className="address-container">
        {addresses.map((addaddress) => (
          <Col key={addaddress.id} lg={4} md={6} xs={12}>
            <div className="address-card">
              <div className="address-details">
                <span className="address-label">Id:</span>
                <span className="address-value">{addaddress.id}</span>
              </div>
              <div className="address-details">
                <span className="address-label">User Id:</span>
                <span className="address-value">{addaddress.user_id}</span>
              </div>
              <div className="address-details">
                <span className="address-label">Address:</span>
                <span className="address-value">{addaddress.address}</span>
              </div>
              <div className="address-details">
                <span className="address-label">Address Type:</span>
                <span className="address-value">{addaddress.address_type}</span>
              </div>
              {/* <div className="address-details">
                <span className="address-label">Latitude:</span>
                <span className="address-value">{addaddress.latitude}</span>
              </div>
              <div className="address-details">
                <span className="address-label">Longitude:</span>
                <span className="address-value">{addaddress.longitude}</span>
              </div> */}
            </div>
          </Col>
        ))}
      </Row>
      <div  className="text-center  " >
        <Button className="placeOrderbtn">
          <Link to="/PlaceOrder" className="placeOrder-button" >
            Place an Order
          </Link>
        </Button>
      </div>
    </Container>
  );
}

export default ShowAddAddress;
