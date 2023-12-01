import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import DefaultPaymentCard from "./DefaultPaymentCard";
import { useNavigate } from "react-router-dom";

const PaymentCardList = () => {
  const [paymentCards, setPaymentCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not available. Please authenticate.");
      return;
    }

    axios
      .post(
        "https://cafescale.com/api/v1/customer/paymentmethod/getPaymentCards",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setPaymentCards(response.data);
        console.log(response,"response of list")
        localStorage.setItem("payment_id", response.data[0].payment_id);
        navigate("/AddAddress")
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error in the Payment Card List", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Container style={{ color: "white" }}>
        <Row>
          <Col>
            <div className="">
              {/* <br />
              <br />
              <br />
              <br />
              <br /> */}
              <h1>Payment Cards</h1>
              {paymentCards.length === 0 ? (
                <p>List is empty</p>
              ) : (
                <>
                  {loading ? <p>Loading...</p> : null}
                  <ul>
                    {paymentCards.map((card) => (
                      <li key={card.id}>
                        {/* Render the card details as needed */}
                        <span className="listfont">Id: </span> {card.id}
                        &nbsp;&nbsp;&nbsp;
                        <span className="listfont">User Id : </span>{" "}
                        {card.user_id}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Payment-Id: </span>{" "}
                        {card.payment_id}&nbsp;&nbsp;&nbsp;
                        <span className="listfont">Payment Type: </span>{" "}
                        {card.payment_type}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </Col>
        </Row>
      </Container>
      {/* <div>
        <DefaultPaymentCard />
      </div> */}
    </>
  );
};

export default PaymentCardList;
