import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
function ShowAddAddress() {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token in show_Add_Addrss", token);
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
        console.log(response.data);
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
    <>
      <Container style={{ color: "white" }}>
        <Row>
          <Col>
            <div className="">
              <br />
              <br />
              <br />
              <br />
              <br />
              <h1>Add Address List</h1>
              {addresses.length === 0 ? (
                <p>List is empty</p>
              ) : (
                <>
                  {loading ? <p>Loading...</p> : null}
                  <ul>
                    {addresses.map((addaddress) => (
                      <li key={addaddress.id}>
                        {/* Render the addaddress details as needed */}
                        <span className="listfont">Id: </span> {addaddress.id}
                        &nbsp;&nbsp;&nbsp;
                        <span className="listfont">User Id : </span>{" "}
                        {addaddress.user_id}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Address: </span>{" "}
                        {addaddress.address}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Address Type: </span>{" "}
                        {addaddress.address_type}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Latitude : </span>{" "}
                        {addaddress.latitude}
                        &nbsp;&nbsp;&nbsp;
                        <span className="listfont">Longitude :</span>{" "}
                        {addaddress.longitude}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="text-center">
              <Button>
                <Link
                  to="/PlaceOrder"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Place an Oder
                </Link>
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ShowAddAddress;
