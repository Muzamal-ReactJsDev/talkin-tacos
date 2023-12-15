import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegCreditCard } from "react-icons/fa";
import { useSelector } from "react-redux";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "./Default_payment.css";
import { Link } from "react-router-dom";
const Default_PaymentList = () => {
  const [defaultDataCard, setDefaultData] = useState(null);
  const { totalPrice } = useSelector((state) => state.app);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const payment_id = localStorage.getItem("payment_id");

    if (!token || !payment_id) {
      console.error("Token or Payment ID not available. Please authenticate.");
      return;
    }

    axios
      .post(
        "https://cafescale.com/api/v1/customer/paymentmethod/setDefaultPaymentCard",
        {
          payment_id: payment_id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response, "Recieving the Default Data");
        setDefaultData(response.data);
      })
      .catch((error) => {
        console.error("Error setting default card:", error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  return (
    <div>
      <Container>
        <div>
          <div className="main-default-heading">
          <h4 className="" style={{ color: "white" }}>
            Payment Method
          </h4>
          <Link to="/PaymentCardList" className="edit-default">Edit</Link>
          </div>
          {defaultDataCard ? (
            <div className="default-Payment">
              <div className="default-Payment-icons">
                <FaRegCreditCard />
              </div>
              <div>
                <div>{defaultDataCard.customer_account}</div>
                <div>****{defaultDataCard.card_no}</div>
              </div>
              <div>${totalPrice}</div>
              <div>
                <IoIosCheckmarkCircleOutline className="default-tick-icon" />
              </div>
            </div>
          ) : (
            <p style={{ color: "white" }}>List is empty</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Default_PaymentList;
