import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaHome, FaCheck } from "react-icons/fa"; // Imported FaCheck icon
import "./Default_AddressAdd.css";

function Default_AddressAdd() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAddress, setSelectedAddress] = useState(null); // State to track selected address

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

  const handleLocationClick = (selectedAddress) => {
    setSelectedAddress(selectedAddress); // Set the selected address
    localStorage.setItem("Delivery_Address_Id", selectedAddress.id);
    console.log(selectedAddress, "Data getting on the click");
    localStorage.setItem("deliverytype", selectedAddress.address_type);
    localStorage.setItem("latitude_2", selectedAddress.latitude);
    localStorage.setItem("longitude_2", selectedAddress.longitude);
  };

  return (
    <Container>
      <h4 className="mt-3" style={{ color: "white" }}>
        Delivery Address
      </h4>
      <div className="default-main-row">
        {addresses.map((addaddress) => (
          <div
            key={addaddress.id}
            onClick={() => {
              handleLocationClick(addaddress);
            }}
            className={`default-main-div ${
              selectedAddress && selectedAddress.id === addaddress.id ? "selected" : ""
            }`}
          >
            <div className="default-home">
              <span className="default-home-icon">
                <FaHome />
              </span>
            </div>
            <div className="default-address">
              <div>{addaddress.address_type}</div>
              <div className="default-address-address">{addaddress.address}</div>
              {selectedAddress && selectedAddress.id === addaddress.id && (
                <span className="tick-icon">
                  <FaCheck />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default Default_AddressAdd;
